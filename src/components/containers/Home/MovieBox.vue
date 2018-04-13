<template>
  <div class="home-movie-box">
      <ul class="movie-list">
          <movie-item :type = 'type' :film = "film" v-for = "film in films" :key = "film.id"></movie-item>
      </ul>
      <div class="more-button" >更多 {{ type_title }} 电影</div>
  </div>
</template>
<script>
import MovieItem from './MovieBoxItem'
export default {
  name:'HomeMovieBox',
  props: ['type'],
  data () {
      return {
          films: [ ]
      }
  },
  computed: {
      type_title () {//新数据，用来显示在底部的按钮上
          switch (this.type) {
              case 'now-playing':return '正在热映';
              case 'coming-soon':return '即将上映';
          }
      }
  },
  methods: {
      getMovies () {//获取电影数据的方法
          this.$http.get('/mz/v4/api/film/'+this.type,{
              params:{
                  __t:Date.now(),
                  page:1,count:5
              }
          }).then( res => {
              this.films = res.data.data.films
          })
      }
  },
  created () {//在这里获取初始数据
      this.getMovies()
  },
  components: {
      MovieItem
  }
}
</script>
<style lang="scss" scoped>
.home-movie-box {
    padding-top: 18px;

    .more-button {
        width: 160px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
    }
}
</style>
