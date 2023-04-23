import { Product, Cart } from '~/types';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products-store',
  state: () => ({
    loading: false,
    cart: [] as Cart[],
    products: [] as Product[] | null,
  }),
  getters: {
    totalPrice: (state) => {
      const total = state.cart.reduce((acc, product) => acc + product.price, 0);
      return formatCurrency(total);
    }
  },
  actions: {
    async setProducts() {
      if (this.products?.length) {
        return;
      }

      this.loading = true;
      const { data: products } = await useApi<Product[]>('/api/v1/product');
      this.loading = false;

      if (products.value) {
        this.products = products.value;
      }
    },
    setCart(cart: Cart[]) {
      this.cart = cart;
    },
    addToCart(product: Product) {
      const { stock, ...productInfo } = product;
      const productIndex = this.cart.findIndex(({ id }) => id === productInfo.id);
      const cartProduct = this.cart[productIndex];

      if (!cartProduct) {
        this.cart = [...this.cart, { ...productInfo, quantity: 1 }];
      }

      if (cartProduct.quantity < stock ) {
        this.cart[productIndex].quantity = cartProduct.quantity + 1;
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
