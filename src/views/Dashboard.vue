<template>
  <Loader v-if="loading" />
  <div v-else class="container">
    <VendingContainer />
    <Cart />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import VendingContainer from "@/components/board/VendingContainer";
import Cart from "@/components/cart/Cart";
import Loader from "@/components/Loader";

export default {
  components: {
    VendingContainer,
    Cart,
    Loader,
  },
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    ...mapActions(["loadVendingItems"]),
  },
  mounted() {
    this.loadVendingItems();
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