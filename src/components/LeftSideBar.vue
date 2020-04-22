<template>
  <div class="left-bar">
    <button @click="jumpTo">Jump To Shanghai</button>
  </div>
</template>

<script>
export default {
  computed: {
    map() {
      return this.$store.state.map;
    }
  },
  mounted() {},
  methods: {
    jumpTo() {
      console.log(this.map);
    }
  }
};
</script>
