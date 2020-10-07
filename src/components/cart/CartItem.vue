<template>
  <div class="item">
    <button class="buttons" v-on:click="removeCartItem(item.vendingItem.id)">
      <i class="fas fa-times"></i>
    </button>

    <span class="description">{{ item.vendingItem.name }}</span>

    <div class="quantity">
      <button
        class="plus-btn"
        type="button"
        name="button"
        v-on:click="decrementCartItem(item.vendingItem.id)"
      >
        <i class="fas fa-minus"></i>
      </button>
      <input type="text" name="name" :value="item.quantity" />
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
    ...mapMutations([
      "removeCartItem",
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

.item:nth-child(3) {
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}

.buttons {
  margin-right: 30px
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.quantity {
  padding-top: 20px;
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
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}
</style>