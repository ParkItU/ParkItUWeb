<template>
  <div>
    <!-- Barra de Pesquisa -->
    <div class="search-bar mx-auto max-w-md p-4 bg-white rounded shadow-md mt-4 mb-4">
      <label for="searchInput" class="sr-only">Pesquisar Carro Por Placa:</label>
      <input v-model="searchLicensePlate" type="text" id="searchInput" placeholder="Pesquisar Carro por Placa..."
        class="w-full p-2 border rounded" />
    </div>

    <div v-for="garageId in Object.keys(carsByGarage)" :key="garageId">
      <h2 class="text-2xl mt-4 mb-2">{{ garagesById[garageId].nameGarage }}</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="carId in filteredCarsByGarage(garageId)" :key="carId" class="mb-4">
          <div class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90">
            <div class="flex items-start space-x-4">
              <div>
                <div class="space-y-2">
                  <h4 class="text-lg text-gray-900">
                    {{ carsById[carId].carName }} - {{ carsById[carId].licensePlate }}
                  </h4>
                  <h4 class="text-lg text-gray-500">
                    {{ carsById[carId].carOwner }} - {{ carsById[carId].carOwnerPhone }}
                  </h4>
                  <h4 class="text-lg text-gray-500">{{ carsById[carId].date }}</h4>
                </div>
                <br />
                <router-link :to="'/hora/' + carId" class="mr-4 group">
                  <img class="h-6 w-6 object-cover transition-transform transform scale-100 group-hover:scale-150"
                    src="/public/hora.png" alt="Relógio" />
                </router-link>
              </div>
              <router-link :to="carsById[carId].image" target="_blank" class="ml-auto">
                <img class="object-cover h-32 w-32" :src="getOptimizedImage(carsById[carId].image)" alt="Veículo" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import carService from '@/services/cars.js'

const cars = ref([])
const carsByGarage = ref({})
const garagesById = ref({})
const searchLicensePlate = ref('');

const fetchCars = async () => {
  const data = await carService.getAllCars()
  cars.value = data
  data.forEach((car) => {
    if (!carsByGarage.value[car.garageId]) {
      carsByGarage.value[car.garageId] = []
    }
    carsByGarage.value[car.garageId].push(car.id)
    garagesById.value[car.garageId] = car.garage
    fetchCarIcon(car.carName).then((iconUrl) => {
      car.image = iconUrl
    })
  })
}

onMounted(fetchCars)

async function fetchCarIcon(carName) {
  try {
    const response = await fetch(`https://source.unsplash.com/100x100/?car,${carName}`)
    return response.url
  } catch (error) {
    console.error('Erro ao buscar ícone do carro:', error)
    return ''
  }
}

function getOptimizedImage(imageUrl) {
  if (localStorage && localStorage[imageUrl]) {
    return localStorage[imageUrl]
  }
  return imageUrl
}

function filteredCarsByGarage(garageId) {
  const filteredCars = carsByGarage.value[garageId].filter(carId => {
    const car = cars.value.find(c => c.id === carId);
    return car && car.licensePlate.includes(searchLicensePlate.value);
  });

  return filteredCars;
}
</script>

<style scoped>
/* Estilos Tailwind para centralizar a barra de pesquisa */
.search-bar {
  @apply mx-auto max-w-md p-4 bg-white rounded shadow-md;
}

/* Estilos Tailwind para a entrada de pesquisa */
.search-input {
  @apply w-full p-2 border rounded;
}
</style>
