<template>
  <div id="app" @click = "action">
    <app-header></app-header>
    <keep-alive include="Home">
        <router-view></router-view> 
    </keep-alive>
    

  </div>
</template>

<script>

import Home from './components/containers/Home/Home' 
import AppHeader from './components/commons/Header/Header'
// module.exports = {
export default {
  name: 'App',
  components: {
    Home,AppHeader
  },
  methods: {
    action (e) {
      // alert(1)
      // console.log(e.target.getAttribute('data-action'))
    }
  }
}
</script>

<style>

</style>
