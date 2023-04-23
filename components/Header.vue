<template>
  <header class="flex m-auto p-4 lg:w-[960px] justify-between items-center">
    <NuxtLink class="text-green-500 italic text-2xl" to="/">
      Mini<b class="text-blue-500">Ecommerce</b>
    </NuxtLink>

    <NuxtLink class="relative" to="/cart">
      <SVGCart class="h-8 w-8 fill-zinc-700" />

      <p class="absolute w-5 h-5 bg-gray-100 border-2 border-zinc-700 right-0 bottom-0 rounded-full text-center text-xs text-zinc-700 font-bold">
        2
      </p>
    </NuxtLink>
  </header>
</template>
