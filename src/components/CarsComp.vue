<template>
  <div class="bg-white">
    <div class="mx-auto container p-6">
      <div class="mt-4 mb-4">
        <label for="searchInput" class="sr-only">Pesquisar Carro Por Placa:</label>
        <input v-model="searchLicensePlate" type="text" id="searchInput" placeholder="Pesquisar Carro por Placa..."
          class="w-full p-2 border rounded search-input" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="car in filteredCars" :key="car.id" class="mb-4">
          <router-link :to="{ name: 'HoraView', params: { carId: car.id } }">
            <div class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90">
              <div class="overflow-hidden rounded-lg h-40">
                <img class="w-full h-full object-cover" :src="getCarImageUrl(car)" alt="Carro" />
              </div>
              <div class="relative space-y-1 p-4 flex flex-col">
                <div>
                  <h4 class="text-lg text-gray-900">{{ car.name }}</h4>
                  <p class="text-lg text-gray-500">{{ car.owner }}</p>
                  <p class="text-lg text-gray-500">{{ car.licensePlate }}</p>
                </div>
                <!-- Ícone de relógio usando SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  class="w-6 h-6 self-end">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6l3 3m6-9a9.003 9.003 0 0 1-9 9 9.003 9.003 0 0 1-9-9 9.003 9.003 0 0 1 9-9 9.003 9.003 0 0 1 9 9z">
                  </path>
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import carService from '@/services/cars.js'

const cars = ref([])
const searchLicensePlate = ref('')

const fetchCars = async () => {
  try {
    const allCars = await carService.getAllCars();
    cars.value = allCars;
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
  }
};

const getCarImageUrl = (car) => {
  return car.image && car.image.url ? car.image.url : 'URL_PADRAO_AQUI';
};

const filteredCars = computed(() => {
  const searchTerm = searchLicensePlate.value.toLowerCase();
  return cars.value.filter((car) => {
    const licensePlate = car.licensePlate.toLowerCase();
    return licensePlate.includes(searchTerm);
  });
});

onMounted(async () => {
  await fetchCars()
})
</script>

<style scoped>
/* Estilos Tailwind para a entrada de pesquisa */
.search-input {
  @apply w-full p-2 border rounded;
}
</style>
