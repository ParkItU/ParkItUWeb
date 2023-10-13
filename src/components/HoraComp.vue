<template>
  <!-- component -->
  <body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center mb-8">
          <img src=" /src/assets/images/SFestacionamentos.png" alt="Logo" class="w-30 h-20" />
        </div>
        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Valor / Hora - *Nome do carro
        </h1>
        <p class="text-sm text-gray-600 text-justify mt-8 mb-6">Entrada: *14:20</p>
        <label for="time" class="text-sm text-gray-600 text-justify mt-8 mb-6"> Saída: </label>
        <input
          type="time"
          name="time"
          id="time"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <p class="text-sm text-gray-600 text-justify mt-8 mb-6">Valor a pagar: *</p>

        <div class="flex justify-center space-x-4 my-4">
          <button
            href="/cars"
            class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3"
          >
            Voltar
          </button>
          <button
            href="#" class="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-md w-1/3"
          >
            Pagar
          </button>
        </div>

        <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 PARK ITU</p>
      </div>
    </div>
  </body>
</template>
