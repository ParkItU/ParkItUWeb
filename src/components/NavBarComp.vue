<script setup></script>
<template>
  <div
    class="flex flex-col items-center justify-center mt-32"
    x-cloak
    x-data="appData()"
    x-init="appInit()"
  >
    <div class="flex flex-col">
      <nav
        class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
      >
        <div class="flex items-center">
          <a href="/garages" class="cursor-pointer">
            <img
              class="h-12 object-cover font-sans"
              src="src/assets/images/estacionamento.png"
              alt="Logo"
            />
          </a>
        </div>
        <div class="flex items-center space-x-5">
          <a
            class="flex text-gray-600 cursor-pointer transition-colors duration-300"
            href="/previewform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Novo
          </a>
          <a
            class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold"
            href="/"
          >
            <svg
              class="fill-current h-5 w-5 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
              />
            </svg>
            Logout
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
