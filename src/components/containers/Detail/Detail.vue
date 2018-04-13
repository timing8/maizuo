
<template>
  <div class="page detail">
    <div v-if = "film.cover">
        <img  width="100%" :src="film.cover.origin" alt="">

        <!-- <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number> -->

        {{num}}
    </div>     
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: ['id'],
  data () {
    return {
      film:{},
      num:0
    }
  },
  methods: {
    getFilm () {
      this.$http.get('/mz/v4/api/film/'+this.id,{
        params:{__t:Date.now()}
      }).then(res => {
        console.log(res)
        this.film = res.data.data.film
      })
    }
  },
  created () {
    this.getFilm()
  }
}
</script>
<style lang="scss" scoped>

</style>


