
<template>
  <div class="page film">
      <film-nav :change-type = "changeType" :type = "type"></film-nav>
      <film-box :type = "type"></film-box>
      <back-top 
        :flag = "isBackTopShow.value"
        v-scroll-hide = "isBackTopShow"
        scroll-hide-distance = "300"
       ></back-top>
  </div>
</template>
<script>
import FilmNav from './FilmNav'
import FilmBox from './FilmBox'
export default {
  name:'Film',
  data () {
    return {
      type: 'now-playing',//电影类型
      isBackTopShow:{value:false}
    }
  },
  methods: {
    changeType ( type ) {//更改电影类型的方法
      this.type = type
    }
  },
  components: {
    FilmNav,FilmBox
  }
}
</script>
<style lang="scss" scoped>
  .film {
        padding-left: 15px;
        padding-right: 15px;
        background-color: #f9f9f9;
        width: 100%;
       
        min-height: 100%;
  }
</style>


