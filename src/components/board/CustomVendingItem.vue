<template>
  <div
    class="item"
    v-on:click="$emit('on-select')"
  >
    <h3>Custom</h3>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.item {
  color: rgb(31, 45, 61);
  background-color: honeydew;
  height: 100px;
  width: 150px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>