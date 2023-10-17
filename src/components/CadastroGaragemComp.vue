<script scoped>
import { ref, reactive } from 'vue'
import carService from '@/services/cars.js'

const coverUrl = ref('')
const file = ref(null)

const currentCar = reactive({
  carName: '',
  carOwner: '',
  licensePlate: '',
  dateTime: ''
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentCar.cover_attachment_key = image.attachment_key
  await carService.saveCar(currentCar)
  Object.assign(currentCar, {
    carName: '',
    carOwner: '',
    licensePlate: '',
    dateTime: '',
    cover_attachment_key: ''
  })
  showForm.value = false
}

// export default {
//   data() {
//     return {
//       addPhoto: 'nao',
//       downloadURL: null
//     }
//   },
//   methods: {
//     openFileInput() {
//       this.$refs.fileInput.click()
//     },
//     handleFileChange(event) {
//       const file = event.target.files[0]
//       if (file) {
//         // Use o URL.createObjectURL para criar uma URL temporária para o arquivo
//         const fileURL = URL.createObjectURL(file)
//         this.downloadURL = fileURL
//       }
//     }
//   }
// }
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="mx-auto w-full max-w-[550px]">
      <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Cadastro de Garagens
      </h1>
      <br />
      <form action="" method="">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="name" class="mb-3 flex text-base font-medium text-[#07074D]">
                Nome da Garagem
              </label>
              <input
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
          <a
          href="/garages"
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Adicionar
        </a>
        </div>
      </form>
    </div>
  </div>
</template>
