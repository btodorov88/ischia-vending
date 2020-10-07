<template>
  <div class="item">
    <div class="buttons">
      <i class="fas fa-times"></i>
    </div>

    <div class="description">
      <span>{{item.vendingItem.name}}</span>
    </div>

    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <i class="fas fa-minus"></i>
      </button>
      <input type="text" name="name" :value="item.quantity" />
      <button class="minus-btn" type="button" name="button">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="total-price">{{item.vendingItem.price * item.quantity}}</div>
  </div>
</template>

<script>
export default {props: ['item', 'add']};
</script>

<style lang="scss" scoped>
.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}

.item:nth-child(3) {
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}

.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn {
  display: inline-block;
  cursor: pointer;
  width: 18px;
  height: 17px;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484d;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
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

button[class*="btn"] {
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