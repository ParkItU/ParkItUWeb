<template>
  <!-- component -->
  <section class="bg-white dark:bg-gray-900 ">
    <div class="container px-6 py-10 mx-auto">
      <h1
        class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white"
      >
        ParkItU
      </h1>

      <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        Com o crescimento e procura por vagas para os veículos de nossa região, tivemos a ideia de desenvolver um sisrtema de gerenciamento e desenvolvimento digital para estacionamentos de veículos. Assim, atualmente, conseguiremos fazer com que os donos de garagens concentrem seus esforços na melhora da sua gestão. Para isso, apresentamos, um sistema de controle de que permita monitorar a entrada e saída de veículos dos estabelecimentos.
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
        <div
          class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
        >
          <img
            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            src="https://media.licdn.com/dms/image/D4E03AQF26JbUp3obYw/profile-displayphoto-shrink_100_100/0/1693940901113?e=1701302400&v=beta&t=tus6HavkvxozGT5nd4nC8UDfWmULzdq4q3SovjJq6VU"
            alt=""
          />

          <h1
            class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            Eduardo Barbaro
          </h1>

          <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            desenvolvedor backend
          </p>

          <div class="flex mt-3 -mx-2">

            <router-link
              to="https://github.com/dudubarbaro"
              class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>

        <div
          class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
        >
          <img
            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            src="https://media.licdn.com/dms/image/D4E03AQHYfpqPB2sohw/profile-displayphoto-shrink_200_200/0/1693941150592?e=1701907200&v=beta&t=OacuAy5X6W2iFSuhdX2WbQPJz44ouKoXI5CQPNrP9Sg"
            alt=""
          />

          <h1
            class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            Brunno Duarte 
          </h1>

          <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            desenvolvedor frontend
          </p>

          <div class="flex mt-3 -mx-2">
            

            <router-link
              to="https://github.com/brunnodc"
              class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>

        <div
          class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
        >
          <img
            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            src="https://pbs.twimg.com/profile_images/1181725242777051137/bU50vxap_400x400.jpg"
            alt=""
          />

          <h1
            class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            Marco André 
          </h1>

          <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            Professor
          </p>

          <div class="flex mt-3 -mx-2">
            

            <router-link
              to="https://github.com/marrcandre"
              class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github" 
            >
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>

        <div
          class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
        >
          <img
            class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFRvMh1fdqT0iybWQ4mT_Cun6NfFp7u8mt45lAgHkNWLNx2kEjEyt-UEc8q0VYpZJhG8&usqp=CAU"
            alt=""
          />

          <h1
            class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            Eduardo da Silva
          </h1>

          <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            Professor
          </p>

          <div class="flex mt-3 -mx-2">
            

            <router-link
              to="https://github.com/eduardo-da-silva"
              class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
        </div>
      </div>
  </section>
</template>