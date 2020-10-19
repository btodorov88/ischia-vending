<template>
  <form class="container">
    <label for="name">First Name</label>
    <input type="text" id="name" placeholder="Item name" v-model="item.name"/>

    <label for="price">Price</label>
    <input type="number" step="0.01" id="price" v-model.number="item.price"/>

    <input type="submit" value="Save" v-on:click.prevent="$emit('on-save', item)"/>
  </form>
</template>

<script>
export default {
  props: ["initialItem"],
  data: function () {
    return {
      item: { ...this.initialItem },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0px 20px 30px 20px;
}
input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>