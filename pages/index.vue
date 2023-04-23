<script setup lang="ts">
  useHead({ title: 'ME | Produtos' });
  const state = useProductsStore();
  await state.setProducts();

  watch(() => state.cart, () => {
    const cart = JSON.stringify(state.cart);
    localStorage.setItem('cart', cart);
  }, { deep: true });

  onMounted(() => {
    const cart = localStorage.getItem('cart');

    if (cart) {
      state.cart = JSON.parse(cart);
    }
    state.loading = false;
  });
</script>

<template>
  <Header />

  <Loading v-if="state.loading" />

  <main v-else class="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:place-items-center m-auto lg:w-[1024px] gap-2 mt-12">
    <ProductCard v-for="product in state.products" :key="product.id" :product="product" />
  </main>
</template>
