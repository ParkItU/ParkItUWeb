<template>
  <!-- component -->
  <div>
    <div class="flex h-screen">
      <div
        class="bg-cover lg:w-1/2"
        style="
          background-image: url(https://media.istockphoto.com/id/636444558/pt/foto/vazio-estacionamento-lotes-vista-a%C3%A9rea.jpg?s=612x612&w=0&k=20&c=zhhTe_I5mf_kXAeoB-yKHH_JNQKmBttbRNDRbzbHg2c=);
        "
      >
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white">
              A procura por vagas aumentou! E Você quer melhorar o gerenciamento da sua garagem?
            </h2>

            <p class="max-w-xl mt-3 text-gray-300 font-bold">Junte-se a nós! Contrate a ParkItU.</p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 text-center">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Login</h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">Faça login para acessar sua conta</p>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label for="email" class="flex mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Insira seu e-mail</label
                >
                <input
                  type="email"
                  name="email"
                  placeholder="exemplo@exemplo.com"
                  class="flex w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200"
                    >Insira sua senha</label
                  >
                </div>

                <input
                  type="password"
                  name="password"
                  placeholder="*******"
                  class="flex w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <router-link
                  to="/garages"
                  onclick=""
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Logar
              </router-link>
              </div>
            </form>

            <p class="mt-6 text-sm text-center text-gray-400">
              Não tem uma conta ainda?
              <router-link
                to="/cadastro"
                class="text-blue-500 focus:outline-none focus:underline hover:underline"
                >Cadastre-se</router-link
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
