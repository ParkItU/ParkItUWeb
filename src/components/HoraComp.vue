<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src="/src/assets/images/SFestacionamentos.png" alt="Logo" class="w-30 h-20" />
      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
        <span class="font-extrabold text-lg text-gray-900">
          R$5,00 / Hora - {{ car?.name || 'Carro não encontrado' }} do
          {{ car?.owner || 'Proprietário não encontrado' }}
        </span>
      </h1>
      <label for="entryTime" class="text-sm text-gray-600 text-justify mt-8 mb-6">
        Entrada :
      </label>
      <input type="time" name="entryTime" v-model="entryTime"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <label for="exitTime" class="text-sm text-gray-600 text-justify mt-8 mb-6"> Saída: </label>
      <input type="time" name="exitTime" v-model="exitTime"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <p class="font-extrabold text-sm text-gray-600 text-justify mt-8 mb-6">
        Valor a pagar: R$ {{ calculateParkingFee }},00
        <!-- Valor a pagar: R$10,00 -->
      </p>
      <div class="flex justify-center space-x-4 my-4">
        <router-link to="/cars" class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3">
          Voltar
        </router-link>
        <router-link to="/pagamento"
          class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3">
          Pagar
        </router-link>
      </div>

      <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 PARK ITU</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios' // Import the Axios library
import carService from '@/services/cars.js'

const car = ref(null)
const entryTime = ref('00:00')
const exitTime = ref('00:00')
const parkingRate = 5

const route = useRoute()
const carId = ref(route.params.carId)

onMounted(async () => {
  try {
    // Fetch car data using Axios
    const response = await axios.get(`https://parkitu.1.us-1.fl0.io/api/cars/${carId.value}`)
    car.value = response.data
  } catch (error) {
    console.error('Erro ao carregar informações do carro:', error)
  }
})

const calculateParkingFee = computed(() => {
  const entryHour = parseInt(entryTime.value.split(':')[0])
  const entryMinute = parseInt(entryTime.value.split(':')[1])
  const exitHour = parseInt(exitTime.value.split(':')[0])
  const exitMinute = parseInt(exitTime.value.split(':')[1])

  const totalTimeInMinutes = exitHour * 60 + exitMinute - (entryHour * 60 + entryMinute)
  const parkingFee = (totalTimeInMinutes / 60) * parkingRate

  return parkingFee
})

const valorAPagar = computed(() => calculateParkingFee.value)
</script>
