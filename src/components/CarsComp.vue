<script setup></script>
<template>
  <!-- component -->
  <div class="bg-white">
    <div class="container mx-auto px-6 py-16 xl:w-[200%]">
      <div class="mx-auto sm:w-6/12 lg:w-5/12 xl:w-[200%]">
        <div>
          <h1 class="text-3xl">Carros na Garagem</h1>
          <p class="mt-2 text-gray-600">Selecione um Carro</p>
        </div>

        <div class="mt-4">
          <div class="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
            <div
              class="group relative flex cursor-pointer justify-between rounded-xl bg-gray-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-blue-500 before:opacity-0 before:transition before:duration-500 hover:before:opacity-50"
            >
              <div class="relative space-y-1 p-4">
                <h4 class="text-lg text-gray-900">Honda Civic</h4>
                <h4 class="text-lg text-gray-500">Carlos Cardozo</h4>
                <h4 class="text-lg text-gray-500">MIH8505</h4>
                <h4 class="text-lg text-gray-500">03/10/2023</h4>
                <h4 class="text-lg text-gray-500">16:00</h4>
                <br />
                <br />
                <div class="relative h-6 text-gray-800 text-sm">
                  <span class="transition duration-300 group-hover:invisible group-hover:opacity-0"
                    ><img class="h-10 object-cover" src="/public/excluir.png" alt="Logo" />
                  </span>
                  <a
                    class="flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0 text-blue-500"
                  >
                    <span
                      ><img class="h-10 object-cover" src="/public/excluir.png" alt="Logo"
                    /></span>
                  </a>
                </div>
              </div>
              <img
                class="absolute bottom-0 right-0 w-[15rem] transition duration-300 group-hover:scale-[1.1]"
                src="https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
