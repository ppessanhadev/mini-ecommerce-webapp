<script setup lang="ts">
  useHead({ title: 'ME | Produtos' });
  definePageMeta({ middleware: ['products'] });
  useCartLocalStorage();
  const state = useProductsStore();
</script>

<template>
  <Header />

  <Loading v-if="state.loading" />

  <main v-else class="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:place-items-center m-auto lg:w-[1024px] gap-2 mt-12">
    <ProductCard />
  </main>
</template>
