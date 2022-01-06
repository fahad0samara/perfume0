<template>
  <div
    class="flex flex-col min-h-screen py-6 bg-black sm:py-12 mix-blend-multiply"
  >
    <!-- ROW 1 -->
    <div
      class="flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch"
    >
      <!-- LEFT -->
      <div class="w-5/6 px-4 py-12 text-center mt-42 sm:w-1/2 sm:max-w-3xl">
        <h1 class="font-mono font-bold text-yellow-50 text-8xl">perfume</h1>
        <h2 class="text-2xl text-yellow-200">
          Incense is a mixture of various incense sticks and many different
          types of oud are mixed and ground together to be produced in the form
          of an aromatic powder.
        </h2>
        <h1
          class="mt-8 text-5xl font-semibold tracking-tighter text-yellow-400 md:text-5xl"
        >
          <span class="text-yellow-400 text-7xl">The best perfume</span>
          collection.
        </h1>
        <div
          class="mx-auto mt-4 text-xl tracking-tight text-gray-900 md:max-w-xl"
        >
          <a
            class="inline-block leading-6 border-b-4 border-purple-500 border-dotted cursor-pointer"
          ></a>
        </div>
        <div class="flex justify-center mt-8">
          <a
            href="#_"
            class="relative py-3 font-bold text-black rounded-lg px-9 group"
          >
            <span
              class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-white ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span
              class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"
            ></span>
            <span class="relative">Order it now</span>
          </a>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="relative w-2/5 px-4 py-12">
        <img
          class="object-cover object-center rounded-full shadow-2xl ii"
          alt="hero"
          src="../assets/WHEAT_DIAM7.jpg"
        />
      </div>
    </div>

  
    <div
      class="flex space-x-1 overflow-hidden text-xs text-gray-300 scroller whitespace-nowrap ower"
    >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
      <a class="py-3 text-2xl font-bold text-black bg-yellow-400 rounded px-7"
        >The best perfume collection.</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ii {
  box-shadow: rgba(235, 219, 4, 0.781) 0px 22px 70px 4px;
}
.scroller {
  animation: 30s scroll alternate infinite;
}

.scroller:first-child {
  animation-duration: 35s;
}

.scroller:nth-child(2) {
  animation-duration: 40s;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
