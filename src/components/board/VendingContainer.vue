<template>
  <div class="items-container" @contextmenu.stop="(e) => onContext(e)">
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
    <ItemMenu
      v-if="contextItem && contextItem.item"
      :position="contextItem.position"
      @on-close="contextItem = null"
      @on-edit="
        () => {
          editItem = contextItem.item;
          contextItem = null;
        }
      "
      @on-delete="
        () => {
          deleteVendingItem(contextItem.item);
          contextItem = null;
        }
      "
    />
    <ItemContainerMenu
      v-else-if="contextItem"
      :position="contextItem.position"
      @on-close="contextItem = null"
      @on-add="
        () => {
          editItem = {};
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
import ItemMenu from "./menu/ItemMenu";
import ItemContainerMenu from "./menu/ItemContainerMenu";

export default {
  components: {
    VendingItem,
    VendingItemModal,
    FormVendingItem,
    ItemMenu,
    ItemContainerMenu,
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
    ...mapActions(["saveVendingItem", "deleteVendingItem"]),
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
  align-items: flex-start;
  min-height: 100vh;
}
</style>