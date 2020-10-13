<template>
  <!-- The Modal -->
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" v-on:click="$emit('on-close')">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  max-width: 500px;
}

/* The Close Button */
.close {
  align-self: flex-end;
  margin: 10px 23px;
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>