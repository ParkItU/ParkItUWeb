<script setup></script>
<template>
  <!-- component -->
  <div class="bg-white">
    <div class=" ">
      <div class="mx-auto sm:w-6/12 lg:w-5/12 xl:w-[200%]">
        <div>
          <h1 class="text-3xl">Olá *usuario</h1>
          <p class="mt-2 text-gray-600">Selecione uma Garagem</p>
        </div>

        <div class="mt-4">
          <div class="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
            <div
              class="group relative flex cursor-pointer justify-between rounded-xl bg-gray-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-blue-500 before:opacity-0 before:transition before:duration-500 hover:before:opacity-50"
            >
              <div class="relative space-y-1 p-4">
                <h4 class="text-l text-gray-900">*SF Park Estacionamento</h4>
                <h6 class="text-lg text-gray-500">*Avenida Brasil</h6>
                <!-- LABEL COM O MÉTODO GET -->
                <div class="relative h-6 text-gray-800 text-sm">
                  <span class="transition duration-300 group-hover:invisible group-hover:opacity-0"
                    >Ver Carros
                  </span>
                  <a
                    href="/cars"
                    class="flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0 text-blue-500"
                  >
                    <span>Ver Carros</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                class="absolute bottom-0 right-6 w-[8rem] transition duration-300 group-hover:scale-[1.4]"
                src="/src/assets/images/SFestacionamentos.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</template>
