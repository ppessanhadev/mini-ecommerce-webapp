export default defineNuxtRouteMiddleware(async () => {
  const state = useProductsStore();
  await state.fetchProducts();
});
