<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src="/src/assets/images/SFestacionamentos.png" alt="Logo" class="w-30 h-20" />
      </div>
      <h1
        v-for="car in cars"
        :key="car.id"
        class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6"
      >
        <span class="font-extrabold text-lg text-gray-900"> R$5,00 / Hora - {{ car.carName }} </span>
      </h1>
      <label for="entryTime" class="text-sm text-gray-600 text-justify mt-8 mb-6">
        Entrada :
      </label>
      <input
        type="time"
        name="entryTime"
        v-model="entryTime"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
      <label for="exitTime" class="text-sm text-gray-600 text-justify mt-8 mb-6"> Saída: </label>
      <input
        type="time"
        name="exitTime"
        v-model="exitTime"
        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
      <p class="font-extrabold text-sm text-gray-600 text-justify mt-8 mb-6">
        Valor a pagar: R$ {{ calculateParkingFee() }}
      </p>

      <div class="flex justify-center space-x-4 my-4">
        <a
          href="/cars"
          class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3"
        >
          Voltar
        </a>
        <a
          href="/pagamento"
          class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3"
        >
          Pagar
        </a>
      </div>

      <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 PARK ITU</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import carService from '@/services/cars.js'

const cars = ref([])
const entryTime = ref('00:00') // Hora de entrada padrão
const exitTime = ref('00:00') // Hora de saída padrão
const parkingRate = 5 // Taxa de estacionamento por hora

onMounted(async () => {
  const data = await carService.getAllCars()
  cars.value = data
})

const calculateParkingFee = () => {
  const entryHour = parseInt(entryTime.value.split(':')[0])
  const entryMinute = parseInt(entryTime.value.split(':')[1])
  const exitHour = parseInt(exitTime.value.split(':')[0])
  const exitMinute = parseInt(exitTime.value.split(':')[1])

  const totalTimeInMinutes = exitHour * 60 + exitMinute - (entryHour * 60 + entryMinute)
  const totalHours = totalTimeInMinutes / 60
  const parkingFee = totalHours * parkingRate

  return parkingFee
}
</script>
