<template>
  <div class="items-container">
    <VendingItem
      v-for="item in vendingItems"
      :key="item.id"
      :item="item"
      @on-select="addCartItem(item)"
      @on-contextmenu="(e) => onContext(e, item)"
    />
    <VendingItemModal v-if="editItem" @on-close="editItem = null">
      <FormVendingItem
        :initialItem="editItem"
        @on-save="
          (item) => {
            saveVendingItem(item);
            editItem = null;
          }
        "
    /></VendingItemModal>
    <PopupMenu
      v-if="contextItem"
      :position="contextItem.position"
      @on-close="contextItem = null"
      @on-edit="
        () => {
          editItem = contextItem.item;
          contextItem = null;
        }
      "
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import VendingItem from "@/components/board/VendingItem";
import VendingItemModal from "@/components/board/GenericModal";
import FormVendingItem from "@/components/board/FormVendingItem";
import PopupMenu from "@/components/PopupMenu";

export default {
  components: {
    VendingItem,
    VendingItemModal,
    FormVendingItem,
    PopupMenu,
  },
  data: function () {
    return {
      editItem: null,
      contextItem: null,
    };
  },
  computed: {
    ...mapState(["vendingItems"]),
  },
  methods: {
    ...mapMutations(["addCartItem"]),
    ...mapActions(["saveVendingItem"]),
    onContext(e, item) {
      e.preventDefault();
      this.contextItem = {
        item,
        position: { left: e.pageX + "px", top: e.pageY + "px" },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.items-container {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
}
</style>