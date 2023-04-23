<script setup lang="ts">
  import { Product } from '~/types/Product';

  useHead({ title: 'ME | Produtos' });

  const { data: products } = await useApi<Product[]>('/api/v1/product');
</script>

<template>
  <Header />

  <main class="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 md:place-items-center m-auto lg:w-[1024px] gap-4 mt-12">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </main>
</template>
