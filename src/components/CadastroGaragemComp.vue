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
              <input v-model="currentGarage.name" type="text" name="name" id="name" placeholder="Digite aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="endereco" class="mb-3 flex text-base font-medium text-[#07074D]">
                Endereço
              </label>
              <input v-model="currentGarage.address" type="text" name="endereco" id="endereco" placeholder="Digite Aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
          </div>
        </div>

        <!-- Novo campo para upload de imagem -->
        <div class="mb-5">
          <label for="image" class="mb-3 flex text-base font-medium text-[#07074D]">
            Imagem da Garagem
          </label>
          <input type="file" accept="image/*" @change="handleImageUpload" id="image" />
        </div>

        <div>
          <button type="submit" :disabled="isSubmitting"
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Adicionar
          </button>
        </div>
      </form>

      <!-- Feedback Visual -->
      <div v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</div>
      <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
  data() {
    return {
      currentGarage: {
        name: '',
        address: '',
        // Adicione uma propriedade para a imagem
        image: null,
      },
      isSubmitting: false,
    };
  },
  methods: {
    async save() {
      try {
        if (this.isSubmitting) {
          return;
        }

        this.isSubmitting = true;

        // Use FormData para enviar a imagem
        const formData = new FormData();
        formData.append('file', this.currentGarage.image);

        // Envie a imagem para a rota de upload de imagem
        const imageResponse = await axios.post('https://parkitu.1.us-1.fl0.io/api/media/images/', formData);
        const imageUrl = imageResponse.data.url;

        // Adicione a URL da imagem ao objeto de garagem
        this.currentGarage.image = imageUrl;

        // Envie os dados da garagem para a rota de criação de garagem
        const garageResponse = await axios.post('https://parkitu.1.us-1.fl0.io/api/garages/', this.currentGarage);

        console.log('Garagem cadastrada com sucesso:', garageResponse.data);

        this.currentGarage = {
          name: '',
          address: '',
          image: null, // Limpe a imagem após o envio
        };

        this.$router.push('/garages');
      } catch (error) {
        console.error('Erro ao cadastrar a garagem:', error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>