
<template>
  <div class="film-box"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    infinite-scroll-immediate-check = "false"
  >
   
     <film-item
        v-for = " film in films "
        :key = " film.id "
        :film = " film "
        :type = "type"
     ></film-item>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import FilmItem from './FilmItem'

export default {
  name:'FilmBox',
  props: ['type'],
  data () {
    return {
      films: [],
      page:1,
      count:7,
      loading:false,
      hasMore:true
    }
  },
  methods: {
    getFilms () {
      let toast = Toast({
        message: '正在加载...',
        position: 'center',
        iconClass: 'fa fa-cog fa-spin'
      });
      this.loading = true
      this.$http.get('/mz/v4/api/film/'+this.type,{
        params:{page:this.page,count:this.count}
      }).then (res => {
        console.log(res.data.data)
        this.films = this.films.concat(res.data.data.films)
        let { current, total } = res.data.data.page
        if(total - current <= 0) this.hasMore = false;
        this.loading = false
        toast.close()
      })
    },
    loadMore() {
      if(!this.hasMore){
        //没有更多数据了
        Toast({
          message: '没有更多数据了',
          position: 'bottom',
          duration: 2000
        });
        return false;
      }
      this.page++;
      this.getFilms()
    }
  },
  watch: {
    //当父组件传递进来的数据变化的时候，使用watch是可以监听到的
    type: {
      immediate: true,//获取的初始化的数据
      handler (val) {
        //切换了类别之后，重置数据
        this.page = 1;
        this.hasMore = true;
        this.loading = false;
        this.films = []
        this.getFilms()
      }
    }
  },
  components: {
    FilmItem
  }
}
</script>
<style lang="scss" scoped>
  
</style>


