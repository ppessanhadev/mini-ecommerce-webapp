<script setup lang="ts">
  useHead({ title: 'ME | Produtos' });
  const state = useProductsStore();
  await state.setProducts();
</script>

<template>
  <Header />

  <section v-if="state.loading" class="fixed flex justify-center items-center w-full h-screen">
    <Loading class="w-16 h-16 text-zinc-700" />
  </section>

  <main v-else class="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:place-items-center m-auto lg:w-[1024px] gap-2 mt-12">
    <ProductCard v-for="product in state.products" :key="product.id" :product="product" />
  </main>
</template>
