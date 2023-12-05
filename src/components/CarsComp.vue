<template>
  <div>
    <div class="search-bar mx-auto max-w-md p-4 bg-white rounded shadow-md mt-4 mb-4">
      <label for="searchInput" class="sr-only">Pesquisar Carro Por Placa:</label>
      <input v-model="searchLicensePlate" type="text" id="searchInput" placeholder="Pesquisar Carro por Placa..."
        class="w-full p-2 border rounded search-input" />
    </div>
    <h2 class="text-2xl mt-4 mb-2">{{ nameGarage }}</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="carId in filteredCars" :key="carId" class="mb-4">
        <!-- Update to use filteredCars -->
        <div class="group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:opacity-90">
          <div class="flex items-start space-x-4">
            <div>
              <div class="space-y-2">
                <h4 class="text-lg text-gray-900">{{ getCarInfo(carId, 'name') }}</h4>
                <p class="text-gray-500">{{ getCarInfo(carId, 'owner') }}</p>
                <p class="text-gray-500">{{ getCarInfo(carId, 'licensePlate') }}</p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue' // Remove ref from here as it's part of the script setup
import carService from '@/services/cars.js'
import carInGarageService from '@/services/carsingarage.js'

const props = defineProps(['garageId', 'nameGarage'])

const cars = ref([])
const carsByGarage = ref([])
const searchLicensePlate = ref('')

const fetchCars = async () => {
  try {
    const allCars = await carService.getAllCars()
    cars.value = allCars

    const carsInGarage = await carInGarageService.getCarsInGarage(props.garageId)
    const carIds = carsInGarage.map((car) => car.idCar).flat()
    carsByGarage.value[props.garageId] = carIds

    return Promise.resolve() // Resolve a Promise quando os dados estiverem prontos
  } catch (error) {
    console.error('Erro ao buscar carros:', error)
    return Promise.reject(error) // Rejeita a Promise se houver um erro
  }
}

const getCarInfo = (carId, infoType) => {
  if (cars.value && cars.value.length > 0) {
    const car = cars.value.find((car) => car.id.toString() === carId.toString())
    switch (infoType) {
      case 'name':
        return car ? car.carName : ''
      case 'owner':
        return car ? car.carOwner : ''
      case 'licensePlate':
        return car ? car.licensePlate : ''
      default:
        return ''
    }
  }
  return ''
}

const filteredCars = computed(() => {
  const carsInGarage = carsByGarage.value[props.garageId]
  if (carsInGarage) {
    const searchTerm = searchLicensePlate.value.toLowerCase()
    return carsInGarage.filter((carId) => {
      const licensePlate = getCarInfo(carId, 'licensePlate').toLowerCase()
      return licensePlate.includes(searchTerm)
    })
  }
  return []
})

onMounted(async () => {
  try {
    await fetchCars()
  } catch (error) {
    console.error('Error fetching cars:', error)
  }
})
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
