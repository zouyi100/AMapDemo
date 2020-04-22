<template>
  <div class="home">
    <div class="left-bar-block">
      <LeftSideBar/>
    </div>
    <div class="content-block">
      <MapContain/>
    </div>
  </div>
</template>

<script>
import MapContain from "../components/MapContain";
import LeftSideBar from "../components/LeftSideBar";

export default {
  name: "Home",
  components: {
    MapContain,
    LeftSideBar
  }
};
</script>

<style lang="scss">
.home {
  .left-bar-block {
    float: left;
    height: 100%;
    width: 300px;
  }
  .content-block {
    float: right;
    width: calc(100% - 300px);
    height: 100%;
  }
}
</style>
