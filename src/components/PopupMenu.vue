<template>
  <div
    id="itemContext"
    v-bind:style="position"
    v-outside-click="() => $emit('on-close')"
    class="popup-box vertical-menu"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["position"],
};
</script>

<style lang="scss" scoped>
.popup-box {
  position: absolute;
}
.vertical-menu {
  width: 200px;
}

.vertical-menu a {
  display: block;
  background: #f0f8ff;
  border-radius: 1px;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.2);
  color: #555585;
  padding: 12px;
  text-decoration: none;
}

.vertical-menu a:hover {
  background-color: #ccc;
}
</style>