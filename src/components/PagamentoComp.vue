<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-md p-20 bg-white rounded-lg shadow-lg">
      <div class="text-center mb-1">
        <img src="/src/assets/images/SFestacionamentos.png" alt="Logo" class="" />
      </div>
      <h1 class="text-center text-3xl font-extrabold text-gray-900 mb-1">Total a pagar:</h1>
      <p class="text-center text-2xl font-extrabold text-green-600 mb-1">
        R$ {{ valorAPagar.toFixed(2) }}
      </p>
      <!-- Exibe o valor atualizado -->
      <div class="flex items-center justify-center">
        <img src="/src/assets/images/sepe.png" alt="Logo" class="w-30 h-30" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import carService from '@/services/cars.js'

import HoraComp from '@/components/HoraComp.vue' // Importe o componente de TelaHoras

const valorAPagar = ref(0) // Inicialize com o valor padrão, pode ser 0

onMounted(async () => {
  // Chame a função da tela de horas para obter o valor
  valorAPagar.value = HoraComp.calcularValorAPagar()
})
</script>
