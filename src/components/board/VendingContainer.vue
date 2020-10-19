<template>
  <div class="root" @contextmenu.stop="(e) => onContext(e)">
    <div class="items-container">
      <VendingItem
        v-for="item in vendingItems"
        :key="item.id"
        :item="item"
        @on-select="addCartItem(item)"
        @on-contextmenu="(e) => onContext(e, item)"
      />
      <GenericModal v-if="editItem" @on-close="editItem = null">
        <FormVendingItem
          :initialItem="editItem"
          @on-save="
            (item) => {
              saveVendingItem(item);
              editItem = null;
            }
          "
      /></GenericModal>

      <CustomItem @on-select="customItemModal = true" />
      <GenericModal v-if="customItemModal" @on-close="customItemModal = false">
        <CustomItemModal @on-save="addCustomItem"
      /></GenericModal>

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
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapState, mapMutations, mapActions } from "vuex";
import VendingItem from "@/components/board/VendingItem";
import CustomItem from "@/components/board/CustomVendingItem";
import GenericModal from "@/components/board/GenericModal";
import FormVendingItem from "@/components/board/modal/FormVendingItem";
import CustomItemModal from "@/components/board/modal/CustomItem";
import ItemMenu from "./menu/ItemMenu";
import ItemContainerMenu from "./menu/ItemContainerMenu";

export default {
  components: {
    VendingItem,
    GenericModal,
    FormVendingItem,
    ItemMenu,
    ItemContainerMenu,
    CustomItem,
    CustomItemModal,
  },
  data: function () {
    return {
      editItem: null,
      contextItem: null,
      customItemModal: false,
    };
  },
  computed: {
    ...mapState(["vendingItems"]),
  },
  methods: {
    ...mapMutations(["addCartItem"]),
    ...mapActions(["saveVendingItem", "deleteVendingItem"]),
    addCustomItem(value) {
      this.addCartItem({
        id: uuidv4(),
        name: "Custom item",
        price: value,
      });
      this.customItemModal = false;
    },
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
.root {
  flex: 1;
  min-height: 100vh;
}
.items-container {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}
</style>