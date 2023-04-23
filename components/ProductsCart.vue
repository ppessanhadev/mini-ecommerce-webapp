<script setup lang="ts">
  const state = useProductsStore();

  async function handleCheckout() {
    await navigateTo('/');
    state.cart = [];
  }
</script>

<template>
  <h1 class="text-xl font-medium text-zinc-700 bg-zinc-100 border-x border-t rounded-t border-zinc-300 w-full p-2 px-4">
    Carrinho
  </h1>

  <table v-if="state.cart.length" class="bg-zinc-100 border-t border border-zinc-300 text-zinc-700 w-full p-4 table-auto">
    <tbody
      v-for="product in state.cart"
      :key="product.id"
    >
      <tr class="border-t">
        <td class="w-36">
          <figure class="flex justify-center my-2">
            <img
              :src="product.image"
              class="w-24 h-24 rounded-full border-2 object-center"
              onerror="javascript:this.src = '/no-image.png'"
            >
          </figure>
        </td>

        <td>
          <h4>{{ product.name }}</h4>
          <h2 class="text-xl font-bold">
            {{ formatCurrency(product.price) }}
          </h2>
        </td>

        <td class="w-28">
          <div class="flex flex-strech justify-center items-center">
            <button
              :disabled="product.quantity <= 1"
              class="bg-zinc-200 px-1 border border-zinc-400 disabled:opacity-30"
              @click="() => state.updatesProductQuantity(product, 'decrement')"
            >
              -
            </button>
            <span class="px-2 border-y">{{ product.quantity }}</span>
            <button
              :disabled="product.quantity >= product.stock"
              class="bg-zinc-200 px-1 border border-zinc-400 disabled:opacity-30"
              @click="() => state.updatesProductQuantity(product)"
            >
              +
            </button>
          </div>
        </td>

        <td class="w-24">
          <b>{{ state.totalProductPrice(product) }}</b>
        </td>

        <td class="w-16">
          <div class="flex justify-center">
            <button @click="() => state.deleteFromCart(product.id)">
              <SVGTrash class="fill-red-400 h-8 w-8" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>

    <tfoot>
      <tr class="border-t">
        <td colspan="2" class="p-6 pl-8 text-lg">
          <button class="text-white font-medium bg-green-500 hover:bg-green-600 rounded p-2 px-4" @click="handleCheckout">
            Finalizar pedido
          </button>
        </td>
        <td colspan="3" class="text-right pr-8">
          Total <b class="text-2xl font">{{ state.totalPrice }}</b>
        </td>
      </tr>
    </tfoot>
  </table>

  <section v-else class="bg-zinc-100 border-t border border-zinc-300 text-zinc-700 w-full p-4 table-auto">
    <h1 class="text-center p-2 font-medium text-2xl">
      Sem produtos no carrinho :/
    </h1>

    <NuxtLink to="/" class="block text-center text-blue-500 pb-2">
      Ver lista de produtos
    </NuxtLink>
  </section>
</template>
