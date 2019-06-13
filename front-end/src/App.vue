<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <navbar></navbar> -->
    <!-- <myhome></myhome> -->
    <headbar></headbar>
    <router-view></router-view>
    
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'
import MyHome from './components/MyHome.vue'
import HeadBar from './components/HeadBar.vue'

export default {
  name: 'app',
  components: {
    // navbar: Navbar,
    myhome: MyHome,
    headbar: HeadBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
