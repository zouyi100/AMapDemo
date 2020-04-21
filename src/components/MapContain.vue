<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    const map = new AMap.Map('map');
    console.log(map);
  }
};
</script>

<style lang="scss">
#map {
  height: 100%;
  width: 100%;
}
</style>
