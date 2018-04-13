
<template>
  <div class="film-nav">
     <div v-for = "nav in navs"
      :key = "nav.id"
      @click= "changeType(nav.type)" 
      :class = "{active: type === nav.type}"
      class="nav-item">
        {{nav.title}}
     </div>
     
  </div>
</template>
<script>
export default {
  name:'FilmNav',
  props: ['type', 'changeType'],
  data () {
    return {
      navs: [
        {id: 1, type: 'now-playing', title: '正在热映'},
        {id: 2, type: 'coming-soon', title: '即将上映'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .film-nav {
        height: 46px;

        border-bottom: solid #fe6e00 1px;

        .nav-item {
              float: left;
              width: 50%;
              height: 100%;
              text-align: center;
              font-size: 16px;
              line-height: 46px;
              color: #6a6a6a;
              cursor: pointer;
        }

        .active {
          color: #fe6e00;
          border-bottom: solid;
        }
  }
</style>


