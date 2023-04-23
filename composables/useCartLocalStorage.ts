export const useCartLocalStorage = () => {
  if (process.server) return;

  const state = useProductsStore();

  onMounted(() => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      state.cart = JSON.parse(storageCart);
    }
    state.loading = false;
  });
};
