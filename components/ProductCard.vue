<script setup lang="ts">
  import { Product } from '~/types';

  const props = defineProps<{ product: Product }>();
  const state = useProductsStore();

  const maxQuantity = computed(() => {
    return state.cart.some((c) => c.id === props.product.id && c.quantity >= props.product.stock);
  });
</script>

<template>
  <article class="flex flex-col m-2 w-fit w-[19rem] lg:h-96 lg:w-56 bg-stone-200 rounded shadow-md hover:shadow-xl">
    <figure>
      <img
        class="w-80 lg:w-full h-80 lg:h-48 rounded-t"
        :src="product.image"
        onerror="javascript:this.src='/no-image.png'"
      >
    </figure>

    <dl class="flex flex-col flex-1 p-3">
      <dt class="text-md text-zinc-900">
        {{ product.name }}
      </dt>
      <dd class="text-xl font-bold text-zinc-800">
        {{ formatCurrency(product.price) }}
      </dd>
      <dd class="text-xs text-zinc-900">
        Qtd disponível: {{ product.stock }}
      </dd>
    </dl>

    <button
      class="p-3 m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md disabled:bg-blue-300 disabled:hover:bg-blue-300"
      :disabled="maxQuantity"
      @click="() => state.addToCart(product)"
    >
      Adicionar ao carrinho
    </button>
  </article>
</template>
