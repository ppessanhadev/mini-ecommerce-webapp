export default defineNuxtRouteMiddleware(() => {
  if (process.server) return;

  const state = useProductsStore();

  watch(() => state.cart, () => {
    const cart = JSON.stringify(state.cart);
    localStorage.setItem('cart', cart);
  }, { deep: true });
});
