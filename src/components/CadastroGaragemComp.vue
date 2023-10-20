<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-full max-w-[550px]">
      <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Cadastro de Garagens
      </h1>
      <br />
      <form @submit.prevent="save">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="name" class="mb-3 flex text-base font-medium text-[#07074D]">
                Nome da Garagem
              </label>
              <input
                v-model="currentGarage.nameGarage"
                type="text"
                name="name"
                id="name"
                placeholder="Digite aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="endereco" class="mb-3 flex text-base font-medium text-[#07074D]">
                Endereço
              </label>
              <input
                v-model="currentGarage.addressGarage"
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Digite Aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label class="mb-3 flex text-base font-medium text-[#07074D]"> Adicionar Foto? </label>
          <div class="flex items-center space-x-6">
            <div class="flex items-center">
              <input
                type="radio"
                name="radio1"
                id="radioButton1"
                class="h-5 w-5"
                v-model="addPhoto"
                value="sim"
              />
              <label for="radioButton1" class="pl-3 text-base font-medium text-[#07074D]">
                Sim
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                name="radio1"
                id="radioButton2"
                class="h-5 w-5"
                v-model="addPhoto"
                value="nao"
              />
              <label for="radioButton2" class="pl-3 text-base font-medium text-[#07074D]">
                Não
              </label>
            </div>
          </div>
        </div>

        <div v-if="addPhoto === 'sim'">
          <!-- Seção de Upload de Fotos -->
          <div class="mb-6 pt-4">
            <label class="mb-5 flex text-xl font-semibold text-[#07074D]"> Upload File </label>

            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" @change="handleFileChange" />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span
                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                  >
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <img v-if="downloadURL" :src="downloadURL" alt="Uploaded Image" class="max-h-48 my-3" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import axios from 'axios'

const currentGarage = reactive({
  nameGarage: '',
  addressGarage: ''
})

const addPhoto = ref('nao')
const downloadURL = ref(null)

async function save() {
  try {
    // Envie os dados da garagem para a API
    const response = await axios.post(
      'https://backendparkitu-dev.fl0.io/api/garages/',
      currentGarage
    )
    console.log('Garagem cadastrada com sucesso:', response.data)

    // Limpe os campos do formulário
    Object.assign(currentGarage, {
      nameGarage: '',
      addressGarage: ''
    })

    // Redirecione para a rota /garagens
    this.$router.push('/garages')
  } catch (error) {
    console.error('Erro ao cadastrar a garagem:', error)
  }
}

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    // Use o URL.createObjectURL para criar uma URL temporária para o arquivo
    downloadURL.value = URL.createObjectURL(file)
  }
}

export default {
  data() {
    return {
      currentGarage,
      addPhoto,
      downloadURL
    }
  },
  methods: {
    save,
    handleFileChange
  }
}
</script>
