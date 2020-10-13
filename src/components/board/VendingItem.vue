<template>
  <div
    class="item"
    v-on:click="$emit('on-select')"
    @contextmenu="el => $emit('on-contextmenu', el)"
  >
    <h3>{{ item.name }}</h3>
    <img :src="item.imgUrl" />
    <h3>€{{ item.price.toFixed(2) }}</h3>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.item {
  margin: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.item > img {
  height: 205px;
  width: 121px;
}
</style>