<template>
  <div class="container">
    <VendingContainer />
    <Cart />
  </div>
</template>

<script>
import VendingContainer from "@/components/board/VendingContainer";
import Cart from "@/components/cart/Cart";

export default {
  components: {
    VendingContainer,
    Cart,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>