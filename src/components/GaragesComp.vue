<template>
  <div class="bg-white">
    <div class="mx-auto sm:w-6/12 lg:w-5/12 xl:w-[50%]">
      <div>
        <h1 class="text-3xl">Olá manoel.gomes@gmail.com</h1>
        <p class="mt-2 text-gray-600">Selecione uma Garagem:</p>
      </div>
      <div class="mt-6">
        <div v-for="garage in garages" :key="garage.id" class="mb-4">
          <div class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90">
            <div class="relative space-y-1 p-4">
              <h4 class="text-lg text-gray-900">{{ garage.nameGarage }}</h4>
              <h6 class="text-lg text-gray-500">{{ garage.adressGarage }}</h6>
              <div class="relative h-6 text-gray-800 text-sm">
                <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">Ver Carros</span>
                <router-link :to="{ name: 'cars', params: { garageId: garage.id } }"
                  class="flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0 text-blue-500">
                  <span>Ver Carros</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
            </div>
            <img class="absolute bottom-0 right-6 w-[8rem] transition duration-300 group-hover:scale-[1.4]"
              :src="getGarageImageUrl(garage.imageGarage)" alt="Garagem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import garageService from '@/services/garages.js'

const garages = ref([])

const getGarageImageUrl = (imageGarage) => {
  // Verifica se imageGarage existe e se file está presente antes de construir a URL
  if (imageGarage && imageGarage.file) {
    return `https://backendparkitu-pro.4.us-1.fl0.io${garage.imageGarage.file}`;
  } else {
    // Se a propriedade file não estiver presente ou imageGarage não existir, retorne uma URL padrão ou vazia, conforme necessário
    return 'URL_PADRAO_AQUI';
  }
}

onMounted(async () => {
  try {
    const data = await garageService.getAllGarages()
    garages.value = data
    console.log('Garages:', data)
  } catch (error) {
    console.error('Erro ao buscar garagens:', error)
  }
})
</script>