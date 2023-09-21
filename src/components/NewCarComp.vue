<!-- component -->
<template>
  <!-- component -->
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form action="" method="">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="fName" class="mb-3 block text-base font-medium text-[#07074D]">
                Nome do Carro
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Digite aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="lName" class="mb-3 block text-base font-medium text-[#07074D]">
                Nome do Dono do Carro
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Digite Aqui"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">
            Placa do Carro
          </label>
          <input
            type="text"
            name="guest"
            id="guest"
            placeholder="XXXXYYYY"
            min="0"
            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="mb-5">
          <label class="mb-3 block text-base font-medium text-[#07074D]"> Adicionar Foto? </label>
          <div class="flex items-center space-x-6">
            <div class="flex items-center">
              <input type="radio" name="radio1" id="radioButton1" class="h-5 w-5" />
              <label for="radioButton1" class="pl-3 text-base font-medium text-[#07074D]">
                Sim
              </label>
            </div>
            <div class="flex items-center">
              <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" />
              <label for="radioButton2" class="pl-3 text-base font-medium text-[#07074D]">
                Não
              </label>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px] bg-white">
            <form class="py-6 px-9" action="" method="">
              <div class="mb-6 pt-4">
                <label class="mb-5 block text-xl font-semibold text-[#07074D]"> Upload File </label>

                <div class="mb-8">
                  <input type="file" name="file" id="file" class="sr-only" />
                  <label
                    for="file"
                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span class="mb-2 block text-base font-medium text-[#6B7280]"> Or </span>
                      <span
                        class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                      >
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <button
                  class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
