<template>
  <div id="app">
    <div class="app-header">
      <div class="bosch-tab"></div>
      <div class="shell-bar">
        <div class="logo">
          <img src="./assets/bosch_logo2.svg" alt="./assets/bosch_logo2.svg">
        </div>
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="app-body"/>
  </div>
</template>

<style lang="scss">
body {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0 !important;
}

.app-header {
  .bosch-tab {
    height: 16px;
    background-image: url("./assets/bosch_header_tab.png");
  }
  .shell-bar {
    background-color: #354a5f;
    padding: 0 48px;
    height: 44px;
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 35px;
      }
    }
  }
}

.app-body {
  height: calc(100vh - 60px);
}
</style>
