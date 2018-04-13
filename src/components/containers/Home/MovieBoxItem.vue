<template>
  <router-link tag = "li" :to = "{ name: 'detail', params: {id:film.id }, query: {title:film.name} }" class="movie-box-item">
        <img width="100%" :src="film.cover.origin" alt="">
        <div class="info">
            <div class="left">
                <h5>{{film.name}}</h5>
                <p v-if = "type === 'now-playing'">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</p>
            </div>
            <div class="right">
                <span v-if = "type === 'now-playing'" class="rage">{{film.grade}}</span>
                <span v-else class="time">
                    {{film.premiereAt | time}}上映
                </span>
            </div>
        </div>
  </router-link>
</template>
<script>
export default {
  name:'MovieBoxItem',
  props: ['film', 'type']
}
</script>
<style lang="scss" scoped>
.movie-box-item {
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;

    .info {
        padding: 12px;

        display: flex;
        justify-content: space-between;align-items:center;

        h5{
            font-size: 12px;color: #333;
        }
        p{
            font-size: 8px;color: #9a9a9a;
        }
        .rage {
            color: #f78360;
            font-size: 18px;
        }
        .time{
            color: #f78360;
        }
    }
}
</style>
