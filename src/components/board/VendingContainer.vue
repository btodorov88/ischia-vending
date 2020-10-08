<template>
  <div class="items-container">
    <VendingItem v-for="item in vendingItems" :key="item.id" :item="item" @on-select="addCartItem(item)" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import VendingItem from "@/components/board/VendingItem";

export default {
  components: {
    VendingItem,
  },
  computed: {
    ...mapState(["vendingItems"]),
  },
  methods: {
    ...mapMutations([
      "addCartItem",
    ]),
    ...mapActions([
      "loadVendingItems",
    ]),
  },
  mounted() {
    this.loadVendingItems()
  }
};
</script>

<style lang="scss" scoped>
.items-container {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
}
</style>