<template>
  <div>
    <h1 class="text-3xl text-center mb-4">Carros na Garagem:</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="car in cars" :key="car.id" class="mb-4">
        <div
          class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90"
        >
          <div class="flex items-start space-x-4">
            <div>
              <div class="space-y-2">
                <h4 class="text-lg text-gray-900">{{ car.carName }} - {{ car.licensePlate }}</h4>
                <h4 class="text-lg text-gray-500">{{ car.carOwner }} - {{ car.carOwnerPhone }}</h4>
                <h4 class="text-lg text-gray-500">{{ car.date }}</h4>
              </div>
              <br />
              <a :href="'/hora/' + car.id" class="mr-4 group">
                <img
                  class="h-6 w-6 object-cover transition-transform transform scale-100 group-hover:scale-150"
                  src="/public/hora.png"
                  alt="Relógio"
                />
              </a>
            </div>
            <a :href="car.image" target="_blank" class="ml-auto">
              <img
                class="object-cover h-32 w-32"
                :src="getOptimizedImage(car.image)"
                alt="Veículo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router' // Importe o useRouter

import carService from '@/services/cars.js'

const cars = ref([])
const carsById = ref({})

onMounted(async () => {
  const data = await carService.getAllCars()
  cars.value = data
  data.forEach((car) => {
    carsById.value[car.id] = car
    fetchCarIcon(car.carName).then((iconUrl) => {
      car.image = iconUrl
    })
  })
})

const getCarById = (id) => {
  return carsById.value[id] || null
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

// Função para otimizar o carregamento de imagens
function getOptimizedImage(imageUrl) {
  // Verifique se a imagem já foi carregada e armazene-a em cache
  if (localStorage && localStorage[imageUrl]) {
    return localStorage[imageUrl]
  }

  // Se não estiver em cache, retorne a URL original
  return imageUrl
}

const redirectToHoraPage = (carId) => {
  const router = useRouter()
  router.push(`/hora/${carId}`)
}
</script>
