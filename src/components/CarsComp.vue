<template>
  <div>
    <!-- Barra de Pesquisa -->
    <div class="search-bar mx-auto max-w-md p-4 bg-white rounded shadow-md mt-4 mb-4">
      <label for="searchInput" class="sr-only">Pesquisar Carro Por Placa:</label>
      <input
        v-model="searchLicensePlate"
        type="text"
        id="searchInput"
        placeholder="Pesquisar Carro por Placa..."
        class="w-full p-2 border rounded"
      />
    </div>

    <h2 class="text-2xl mt-4 mb-2">{{ nameGarage }}</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="car in filteredCarsByGarage" :key="car.id" class="mb-4">
        <CarCard :car="car" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import CarCard from '@/components/CarCard.vue'
import carService from '@/services/cars.js'

const props = defineProps(['garageId', 'nameGarage'])

const cars = ref([])
const carsByGarage = ref({})
const garagesById = ref({})
const carsById = ref({})
const searchLicensePlate = ref('')

const fetchCars = async () => {
  try {
    const data = await carService.getAllCars()
    cars.value = data

    data.forEach((car) => {
      const garageId = car.garageId

      if (!carsByGarage.value[garageId]) {
        carsByGarage.value[garageId] = []
      }

      carsByGarage.value[garageId].push(car.id)
      garagesById.value[garageId] = car.garage

      fetchCarIcon(car.carName).then((iconUrl) => {
        car.image = iconUrl
      })

      fetchCarsInGarage(garageId)

      carsById.value[car.id] = {
        carName: car.carName,
        licensePlate: car.licensePlate,
        carOwner: car.carOwner,
        carOwnerPhone: car.carOwnerPhone,
        date: car.date,
        image: car.image
      }
    })
  } catch (error) {
    console.error('Erro ao buscar todos os carros:', error)
  }
}

onMounted(fetchCars)

const fetchCarsInGarage = async (garageId) => {
  try {
    const response = await fetch(
      `https://backendparkitu-pro.4.us-1.fl0.io/api/carsingarage/?idGarage=${garageId}`
    )
    const data = await response.json()

    carsByGarage.value[garageId] = data.map((item) => item.idCar)
  } catch (error) {
    console.error('Erro ao buscar carros na garagem:', error)
  }
}

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

function filteredCarsByGarage() {
  const filteredCars =
    carsByGarage.value[props.garageId]?.map((carId) => {
      return carsById.value[carId]
    }) || []

  if (searchLicensePlate.value) {
    return filteredCars.filter((car) => {
      return car.licensePlate.includes(searchLicensePlate.value)
    })
  }

  return filteredCars
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
