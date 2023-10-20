<template>
  <!-- component -->
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <footer class="relative pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-2xl fonat-semibold text-blueGray-700">Gerenciou? ParkItU-tou!</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Curtiu a nossa plataforma? Saiba mais da nossa organização
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <a href="https://github.com/ParkItU" class="fab fa-github"></a>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="flex uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Links Úteis</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold flex pb-2 text-sm"
                    href="/ajuda"
                    >Ajuda</a
                  >
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold flex pb-2 text-sm"
                    href="/sobre"
                    >Sobre Nós</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2023</span>
            <!-- <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by -->
            <a
              href=""
              class=""
            >
              ParkItU</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
