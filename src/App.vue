<template>
  <div id="app">
    <!-- img src="./assets/logo.png" -->
    <div class="container">
      <div class="star">
        <span class="badge badge-light">Github</span>
        <a href="http://github.com/savokiss/vue-videojs-demo" target="_blank">
          <img src="https://img.shields.io/github/stars/savokiss/vue-videojs-demo.svg?style=social" alt="">
        </a>
      </div>
      <div class="routerWrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
