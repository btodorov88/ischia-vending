<template>
  <div
    class="item"
    v-on:click="$emit('on-select')"
    @contextmenu.stop="(el) => $emit('on-contextmenu', el)"
  >
    <h3 class="name">{{ item.name }}</h3>
    <span class="price">€{{ item.price.toFixed(2) }}</span>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.item {
  height: 100px;
  width: 150px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  color: rgb(31, 45, 61);
}

.price {
  font-size: 20px;
  color: green;
}
</style>