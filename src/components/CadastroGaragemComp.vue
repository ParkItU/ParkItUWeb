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
                v-model="currentGarage.adressGarage"
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Digite Aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
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
  adressGarage: ''
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

export default {
  data() {
    return {
      currentGarage,
      addPhoto,
      downloadURL
    }
  },
  methods: {
    save
  }
}
</script>
