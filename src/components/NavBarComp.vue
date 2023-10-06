<script setup></script>
<template>
  <!-- component -->
  <!-- AlpineJS -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js" defer></script> -->

  <div
    class="flex flex-col items-center justify-center mt-32"
    x-cloak
    x-data="appData()"
    x-init="appInit()"
  >
    <div class="flex flex-col">
      <!-- Navbar -->
      <nav
        class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
      >
        <!-- Logo Container -->
        <div class="flex items-center">
          <!-- Logo -->
          <a href="/" class="cursor-pointer">
            <!-- <h3 class="text-2xl font-medium text-blue-500"> -->
              <img class="h-12 object-cover font-sans" src="src/assets/images/ParkItU.png" alt="Logo" />
            <!-- </h3> -->
          </a>
        </div>
        <!-- Icon Menu Section -->
        <div class="flex items-center space-x-5">
          <!-- Register -->
          <a
            class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
            href="/novoCarro"
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

          <!-- Login -->
          <a
            class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600"
            href="/login"
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

            Login
          </a>
        </div>
      </nav>
    </div>
  </div>
  <!-- <script>
    const appData = () => {
      return {
        percent: 0,

        appInit() {
          // source: https://codepen.io/A_kamel/pen/qBmmGKJ
          window.addEventListener('scroll', () => {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
              height = document.documentElement.scrollHeight - document.documentElement.clientHeight

            this.percent = Math.round((winScroll / height) * 100)
          })
        }
      }
    }
  </script> -->
</template>
