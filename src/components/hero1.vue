<template>
  <div class="bg-black ">
    <h1 
     class="text-5xl text-center text-yellow-400 md:text-9xl">
      The best brands
    </h1>
    <h1  
     class="text-3xl text-center text-yellow-400 md:text-5xl">
      have a look here
    </h1>
    <section 
     class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto ">
        <div class="flex flex-wrap -m-4">
          <div data-aos="zoom-out-up"
            class="w-full p-4 lg:w-1/4 md:w-1/2 "
            v-for="texts in text"
            :key="texts.id"
          >
            <a class="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                class="block object-cover object-center w-full h-full"
                :src="texts.img"
              />
            </a>
            <div class="mt-4">
              <h3 class="mb-1 text-xl tracking-widest text-yellow-400 title-font">
                {{ texts.name }}
              </h3>
              <h2 class="text-lg font-medium text-white title-font">
               {{texts.contru}}
              </h2>
              <p class="mt-1 text-yellow-400">{{texts.price}} $</p>
            </div>
           <a  class="relative inline-block px-4 py-2 font-medium group ">
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span class="relative text-black group-hover:text-white">Book now</span>
</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const text = ref([
      {
        name: "Calvin Klein",
        id: 1,
        img: "https://media.istockphoto.com/photos/cosmetic-bottle-perfume-in-stream-splash-water-mock-up-banner-glass-picture-id1321097498?b=1&k=20&m=1321097498&s=170667a&w=0&h=hekr0jBJaIPBRQde9OrJORS5nlOxYQSLVwOTl513XXU=",
        price:20,
        contru:'Japanese'
        
      },
      {
           name: "Victoria's Secret",
        id: 2,
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price:50,
         contru:'Korean'
      },
      {
           name: "Playboy.",
        id: 3,
        img: "https://images.unsplash.com/photo-1613521140785-e85e427f8002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:40,
         contru:'Turki'
      },
      {
           name: "fahad",
        id: 4,
        img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:30,
         contru:'Arabic'
      },
        {
           name: "SEPHORA",
        id: 5,
        img: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:40,
         contru:'Spanish'
      },
        {
           name: "Lady Million ",
        id: 6,
        img: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price:70,
         contru:'use'
      },
      {
           name: "Idôle by Lancôme",
        id: 7,
        img: "https://images.unsplash.com/photo-1616604783253-fa426f9f905f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:110   ,
         contru:'use'
      },
      {
           name: "Daisy by Marc Jacob",
        id: 8,
        img: "https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:56,
         contru:'Italian'
      },
    ]);
    return {
      text,
    };
  },
};
</script>

<style></style>
