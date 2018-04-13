
<template>
  <router-link tag = "div" :to = "{ name: 'detail', params: {id:film.id }, query: {title:film.name} }" class="film-item">
      <div class="img-box left">
        <img v-lazy="film.poster.origin" alt="">
      </div>
      <div class="right">
        <div class="rage" v-if = "type === 'now-playing'">{{film.grade}}</div>
        <h3 class="title">{{film.name}}</h3>
        <p class="desc">{{film.intro}}</p>
        <p class="info" v-if = "type === 'now-playing'">
          <span class="number">{{film.cinemaCount}}</span>家影院上映   
          <span class="number">{{film.watchCount}}</span>人观看   
        </p>
        <p class="time" v-else>
          <span >{{film.premiereAt | time}}</span>上映   {{film.premiereAt | day}}
        </p>
      </div>
  </router-link>
</template>
<script>
export default {
  name:'FilmItem',
  props: ['film', 'type']
}
</script>
<style lang="scss" scoped>
  .film-item {
       padding: 20px 0px;
           border-bottom: dashed 1px #c9c9c9;
       display: flex;
       align-items: center;

       .left {
         flex-grow: 0;flex-shrink: 0;
         width: 0.6rem;
         img{
           width: 100%;
         }
       }

       .right{
         flex-grow: 1;flex-shrink: 1;
         padding-left: 15px;
         position: relative;
         overflow: hidden;
         .title {
               font-size: 16px;
              line-height: 32px;
              color: #000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
         }
         .desc,.info,.time{
                  
                  height: 24px;
                line-height: 24px;
                color: #8e8e8e;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 80%;
                display: inline-block;
         }

         .number {
           color: #8aa2bf;
         }
         .rage{
           position: absolute;
           font-size: 16px;
          line-height: 32px;
          color: #fc7103;
          right: 30px;
         }
         .time{
            color: #ffb375;
         }
       }
  }
</style>


