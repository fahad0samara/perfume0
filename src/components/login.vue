<template>
  <div class="h-screen mt-0">
    <div class="max-w-md mx-auto mt-32 bg-black shadow-xl rounded-xl">

      <div class="py-4 text-3xl font-extrabold text-center text-green-600">
        log in with
      </div>
      <div class="flex justify-center mb-10">
       
        
<a href="#_" class="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
    <span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="currentColor"></path></svg>
    </span>
    <span class="pl-4 pr-5 py-2.5">GitHub</span>
</a>
        <a href="#_" class="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
    <span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="currentColor"></path></svg>
    </span>
    <span class="pl-4 pr-5 py-2.5">Facebook</span>
</a>


      </div>
      <div class="pt-8 pb-16">
        <div class="mb-6 text-xl text-center text-green-500">
          Or log in with Email & Password
        </div>
        <div class="w-4/5 mx-auto">
        <form @submit.prevent="sing ">
         
          <div class="flex items-center mb-4 bg-white shadow-md rounded-2xl">
            <span class="px-3">
              <svg
                class="w-6 h-6 text-green-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="flex items-center mb-4 bg-white shadow-md rounded-2xl">
            <span class="px-3">
              <svg
                class="w-6 h-6 text-green-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
              v-model="Password"
            />
          </div>
          <div class="mb-4">
            <input type="checkbox" name="remember" class="mr-1" />
            <label for="remember" class="text-xl font-black text-green-500"
              >Remember me</label
            >
          </div>
          <button
            class="relative px-5 py-3 mx-24 text-xl font-medium text-black group"
          >
            <span
              class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-purple-700 group-hover:skew-x-12"
            ></span>
            <span
              class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-white group-hover:bg-purple-500 group-hover:-skew-x-12"
            ></span>

            <span
              class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"
            ></span>
            <span
              class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"
            ></span>
            <span class="relative">log in</span>
          </button>
          </form>
          
          <div class="mt-6">
                <span class="text-xl text-gray-100">You dont have an account?</span>
<router-link
          to="/"
          class="ml-3 text-xl font-semibold text-green-500"
          >sing in here</router-link>
          </div>
        </div>
            <div v-if="error" class="w-full text-white bg-red-500">
        <div class="container flex items-center justify-between px-6 py-4 mx-auto">
            <div class="flex">
                <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
                </svg>

                <p class="mx-3">{{ error}}</p>
            </div>

            <button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import axios from 'axios'
import { useRouter } from 'vue-router';


export default {
    
    setup() {
        const router=useRouter()
 const error=ref()
        const email=ref()
        const Password=ref()
        const sing =async () => {
         const user= await axios.get(`http://localhost:3000/posts?email=${email.value}&Password=${Password.value}`)
         if(user.status==200 && user.data.length >0){
             console.log(user.data);
             localStorage.setItem('user',JSON.stringify(user.data))
             router.push('/home')
         }else{
             error.value='user not found try to sing in'
          setTimeout(() => {
              error.value=''
          }, 3000);
         }
        }
        return{
           
       
            email,
            Password,
            sing,
            error
        }
    }
};
</script>

<style></style>
