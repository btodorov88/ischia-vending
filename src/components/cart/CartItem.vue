<template>
  <div class="item">
    <button class="buttons" v-on:click="removeCartItem(item.vendingItem.id)">
      <i class="fas fa-times"></i>
    </button>

    <span class="description">{{ item.vendingItem.name }}</span>

    <span class="price">€{{item.vendingItem.price.toFixed(2)}}</span>

    <div class="quantity">
      <button
        class="plus-btn"
        type="button"
        name="button"
        v-on:click="decrementCartItem(item.vendingItem.id)"
      >
        <i class="fas fa-minus"></i>
      </button>
      <input
        type="number"
        onClick="this.select();"
        :value="item.quantity"
        @keyup="onChange"
      />
      <button
        class="minus-btn"
        type="button"
        name="button"
        v-on:click="incrementCartItem(item.vendingItem.id)"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="total-price">
      €{{ (item.vendingItem.price * item.quantity).toFixed(2) }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item", "add"],
  methods: {
    onChange(event) {
      const value = parseInt(event.target.value)
      this.setCartItemQuantity({id: this.item.vendingItem.id, quantity: value})
    },
    ...mapMutations([
      "removeCartItem",
      "setCartItemQuantity",
      "incrementCartItem",
      "decrementCartItem",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding: 20px 30px;
  height: 90px;
  display: flex;
  align-items: center;
}

.item:nth-child(n+3){
  border-top: 1px solid #e1e8ee;
}

.buttons {
  margin-right: 30px;
}

.description {
  margin-right: 40px;
  min-width: 110px;
}

.price {
  width: 83px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

.quantity {
  margin-right: 60px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

button {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}

button:focus,
input:focus {
  outline: 0;
}

.total-price {
  width: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>