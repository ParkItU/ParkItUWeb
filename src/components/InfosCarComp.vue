<script setup></script>
<template>
  <!-- component -->
  <div class="min-h-screen">
    <div class="bg-gray-100 flex flex-col">
      <div class="relative m-3 flex flex-wrap mx-auto justify-center">
        <div class="min-w-[340px]flex flex-col group">
          <div
            class="h-48 md:h-56 lg:h-[20rem] w-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative"
          >
            <img
              src="https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png"
              class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
              alt=""
            />
            <div
              class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"
            ></div>
          </div>
          <a
            class="block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
          >
            Honda Civic</a
          >
          <p class="mb-4 font-light text-sm md:text-sm text-center text-gray-400">Carlos Cardozo</p>
          <p class="mb-4 font-light text-sm md:text-sm text-center text-gray-400">MIH8505</p>
          <p class="mb-4 font-light text-sm md:text-sm text-center text-gray-400">21/08/2023</p>
          <p class="mb-4 font-light text-sm md:text-sm text-center text-gray-400">16:00</p>
          <div class="flex justify-center gap-x-3">
            <a
              href="/cars"
              class="px-5 py-2 border border-primary text-primary hover:bg-primary transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
            >
              Excluir</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
