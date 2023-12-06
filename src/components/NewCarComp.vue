<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-full max-w-[550px]">
      <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Cadastro de Carros
      </h1>
      <br />
      <form @submit.prevent="save">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="fName" class="mb-3 flex text-base font-medium text-[#07074D]">
                Nome do Carro
              </label>
              <input v-model="currentCar.name" type="text" name="fName" id="fName" placeholder="Digite aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="lName" class="mb-3 flex text-base font-medium text-[#07074D]">
                Nome do Dono do Carro
              </label>
              <input v-model="currentCar.owner" type="text" name="lName" id="lName" placeholder="Digite Aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="guest" class="mb-3 flex text-base font-medium text-[#07074D]">
            Placa do Carro
          </label>
          <input v-model="currentCar.licensePlate" type="text" name="guest" id="guest" placeholder="XXXXYYYY" min="0"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>

        <div class="mb-5">
          <label for="ownerPhone" class="mb-3 flex text-base font-medium text-[#07074D]">
            Número de Telefone
          </label>
          <input v-model="currentCar.ownerPhone" type="text" name="ownerPhone" id="ownerPhone" placeholder="999999999"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="date" class="mb-3 flex text-base font-medium text-[#07074D]">
                Data
              </label>
              <input v-model="currentCar.date" type="date" name="date" id="date"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="garage" class="mb-3 flex text-base font-medium text-[#07074D]">
                Escolha a Garagem
              </label>
              <select v-model="currentCar.garage" name="garage" id="garage"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option v-for="garage in garages" :key="garage.id" :value="garage.id">
                  {{ garage.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" :class="{ 'cursor-not-allowed opacity-50': isLoading }"
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            :disabled="isLoading">
            <span v-if="isLoading">Adicionando...</span>
            <span v-else>Adicionar</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import garageService from '@/services/garages.js'

const isLoading = ref(false)
const router = useRouter()

const currentCar = reactive({
  name: '',
  owner: '',
  licensePlate: '',
  date: '',
  ownerPhone: '',
  garage: null
})

const garages = ref([])

onMounted(async () => {
  try {
    isLoading.value = true
    const data = await garageService.getAllGarages()
    garages.value = data
  } catch (error) {
    console.error('Error fetching garages:', error)
  } finally {
    isLoading.value = false
  }
})

async function save() {
  try {
    isLoading.value = true;

    // Enviar dados do carro para a API
    const response = await axios.post('https://parkitu.1.us-1.fl0.io/api/cars/', currentCar);
    console.log('Carro cadastrado com sucesso:', response.data);

    // Associar o carro à garagem
    const carId = response.data.id; // Utilizar o ID do carro 

    // Limpar campos do formulário
    Object.assign(currentCar, {
      name: '',
      owner: '',
      licensePlate: '',
      date: '',
      ownerPhone: '',
      garage: null
    });

    // Redirecionar para a rota /cars
    router.push('/cars');
  } catch (error) {
    console.error('Erro ao cadastrar o carro:', error);
  } finally {
    isLoading.value = false;
  }
}

</script>
