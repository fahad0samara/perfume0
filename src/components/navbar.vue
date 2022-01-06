<template>
  <nav class="m-0 bg-black">
    <div class="px-6 mx-auto py-9">
      <div class="bg-transparent md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <div class="flex text-xl font-semibold text-yellow-400">
            <a
              class="text-2xl font-bold transition-colors duration-200 transform utext-yellow-400 ppercase dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
              >black
            </a>
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><rect x="16" y="4" width="16" height="10" rx="3" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="6" y="20" width="36" height="24" rx="12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M6 33c3.042-3.867 12-3 18-1s14 5 18 0" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></path></g></svg></span>
             <span class="font-mono "> perfume</span>
            
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden" @click="showopen">
            <button
              type="button"
              class="text-yellow-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-1 md:flex md:items-center md:justify-between"
          :class="{ hidden: !open }"
        >
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <router-link
              to="/"
              class="px-2 py-1 mx-2 mt-2 text-xl font-medium text-yellow-400 uppercase transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Products</router-link
            >
            <router-link
              to="/about"
              class="px-2 py-1 mx-2 mt-2 text-xl font-medium text-yellow-400 uppercase transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Offers</router-link
            >
            <router-link
              to="/about"
              class="px-2 py-1 mx-2 mt-2 text-xl font-medium text-yellow-400 uppercase transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Brands</router-link
            >
          </div>

          <div class="flex items-center mt-4 space-x-4 md:mt-0">
            <button
              class="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                class="w-10 h-10 text-yellow-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              
            </button>

            <button
              @click="logout"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-yellow-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 hover:bg-black"
            >
              <span
                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"
              ></span>
              <span
                class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span
                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
              >
              </span>
              <span
                class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
                >log out</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const open = ref(false);
    const showopen = () => {
      open.value = !open.value;
    };
    return {
      open,
      showopen,
    };
  },
};
</script>
