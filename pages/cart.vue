<script setup lang="ts">
  useCartLocalStorage();
  useHead({ title: 'ME | Carrinho de compras' });
  const state = useProductsStore();
</script>

<template>
  <Header />

  <Loading v-if="state.loading" />

  <main v-else class="m-auto md:w-[860px] mt-12">
    <ProductsCart />
  </main>
</template>
