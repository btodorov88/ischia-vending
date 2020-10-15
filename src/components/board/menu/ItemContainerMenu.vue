<template>
  <PopupMenu v-bind="$props" v-on="$listeners">
    <a @click.stop="$emit('on-add')">Add New</a>
  </PopupMenu>
</template>

<script>
import PopupMenu from "@/components/PopupMenu";

export default {
  components: {
    PopupMenu,
  },
  props: ["position"],
};
</script>

<style>
</style>