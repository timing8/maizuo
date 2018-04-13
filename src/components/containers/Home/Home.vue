
<template>
  <div class="home page">
    <app-banner></app-banner>

    <movie-box type = 'now-playing'></movie-box>

    <movie-box type = 'coming-soon'></movie-box>

  </div>
</template>

<script>
import AppBanner from './Banner'
import MovieBox from './MovieBox'
export default {
  name:'Home',
  components: {
    AppBanner,MovieBox
  },
  mounted () {
    console.log('回到首页了')
  },
  activated () {
    console.log('回到首页了!!!')
  }, 
  deactivated () {
    console.log('要从首页出去了!!!')
  }, 
}
</script>
<style lang="scss" >
  .home {
    background:#EBEBEB;
    overflow: scroll;
  }
</style>

