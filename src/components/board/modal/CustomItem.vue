<template>
  <div class="container">
    <div class="input">{{ value }}</div>
    <button v-for="index in 9" :key="index" class="btn" @click="append(index)">
      {{ index }}
    </button>
    <button class="btn" @click="append('.')">.</button>
    <button class="btn" @click="append('0')">0</button>
    <button class="btn" @click="value = '0'">Clear</button>

    <button class="btn btn_ok" @click="onOk">Ok</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "0",
    };
  },
  methods: {
    onOk() {
      this.$emit("on-save", parseInt(this.value));
    },
    append(val) {
      let current = this.value;
      if (val === "." && current.includes(val)) return;
      if (val === "0" && current === "0") return;
      current += val;

      if (!current.startsWith("0.")) {
        current = current.replace(/^0+/, "");
      }

      this.value = current;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.input {
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 10px 10px;
  font-size: 45px;
  text-align: right;
}

.btn {
  margin: 2px;
  padding: 20px;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
}

.btn_ok {
  grid-column-start: 1;
  grid-column-end: 4;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>