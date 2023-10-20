<template>
  <div>
    <h1 class="text-3xl text-center mb-4">Carros na Garagem:</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="car in cars" :key="car.id">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex items-start space-x-4">
            <!-- Ícone de relógio com link para a página de hora -->
            <div>
              <div class="space-y-2">
                <h4 class="text-lg text-gray-900">{{ car.carName }} - {{ car.licensePlate }}</h4>
                <h4 class="text-lg text-gray-500">{{ car.carOwner }} - {{ car.carOwnerPhone }}</h4>
                <h4 class="text-lg text-gray-500">{{ car.date }}</h4>
              </div>
              <br />
              <a :href="`/hora/${car.id}`" class="mr-4">
                <img class="h-6 w-6 object-cover" src="/public/hora.png" alt="Relógio" />
              </a>
            </div>
            <!-- Imagem do veículo na extrema direita -->
            <a :href="car.image" target="_blank" class="ml-auto">
              <img class="object-cover h-32 w-32" :src="car.image" alt="Veículo" />
            </a>
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
const carsById = ref({})

onMounted(async () => {
  const data = await carService.getAllCars()
  cars.value = data
  data.forEach((car) => {
    carsById.value[car.id] = car
    // Use uma API de ícones ou URL válida para obter ícones de carros
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
    // Use uma API de ícones para buscar um ícone relacionado ao nome do carro
    // Neste exemplo, estamos usando o Unsplash
    const response = await fetch(`https://source.unsplash.com/100x100/?car,${carName}`)
    return response.url
  } catch (error) {
    console.error('Erro ao buscar ícone do carro:', error)
    return ''
  }
}
</script>
