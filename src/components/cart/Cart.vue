<template>
  <div class="shopping-cart">
    <!-- Title -->
    <div class="title">
      <span>Cart</span><button v-on:click="clearCart" class="btn-clear">Clear</button>
    </div>
    <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    <div class="total">
      <span>Total: {{ total }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CartItem from "@/components/cart/CartItem";
export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState(["cartItems"]),
    total() {
      return this.cartItems.reduce(
        (total, item) => total + item.quantity * item.vendingItem.price,
        0
      );
    },
  },
  methods: {
    ...mapMutations(["clearCart"]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  margin: 20px;

  display: flex;
  flex-direction: column;
}

.title {
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: 400;
}

.btn-clear {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>