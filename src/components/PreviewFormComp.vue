<template>
    <!-- component -->
<section class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <article>
        <h2 class=" p-5 text-4xl text-center font-extrabold text-gray-900" >Escolha seu Modelo de Formulário:</h2>
        <section class="mt-6 flex gap-6">
            <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                style="background-image: url(' /src/assets/images/garagempre.png');">
                <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity transition duration-300 ease-in-out"></div>
                <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 class="text-center">
                        <router-link class="text-white text-7xl font-bold text-center" to="/cadastrogaragem">
                            <span class="absolute inset-0"></span>
                            Cadastro de garagens
                        </router-link>
                    </h3>
                </div>
            </article>
            
            <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                style="background-image: url(' /src/assets/images/carros.png');">
                <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 class="text-center">
                        <router-link class="text-white text-7xl font-bold text-center" to="/cadastrocarro">
                            <span class="absolute inset-0"></span>
                            Cadastro de carros
                        </router-link>
                    </h3>
                </div>
            </article>
        </section>
    </article>
</section>
  </template>