<template>
  <PopupMenu v-bind="$props" v-on="$listeners">
    <a @click.stop="$emit('on-edit')">Edit</a>
    <a @click.stop="$emit('on-delete')">Delete</a>
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