<template>
  <div>
    <h1 class="text-3xl text-center mb-4">Carros nas Garagens:</h1>
    <div v-for="garageId in Object.keys(carsByGarage)" :key="garageId">
      <h2 class="text-2xl mt-4 mb-2">{{ garagesById[garageId].nameGarage }}</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="carId in carsByGarage[garageId]" :key="carId" class="mb-4">
          <div
            class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90"
          >
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
                  <img
                    class="h-6 w-6 object-cover transition-transform transform scale-100 group-hover:scale-150"
                    src="/public/hora.png"
                    alt="Relógio"
                  />
                </router-link>
              </div>
              <router-link :to="carsById[carId].image" target="_blank" class="ml-auto">
                <img
                  class="object-cover h-32 w-32"
                  :src="getOptimizedImage(carsById[carId].image)"
                  alt="Veículo"
                />
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

// Removido o getById, pois não estava sendo utilizado.

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
</script>
