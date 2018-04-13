<template>
   <div class="banner swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide" v-for = " banner in banners " :key = " banner.id ">
               <img class="swiper-lazy" width="100%" :data-src="banner.imageUrl" alt="">
           </div>
       </div>
       <div class="swiper-pagination"></div>
   </div>
</template>
<script>
// 引入swiper相关，因为只有banner在用，所以把样式也引入到banner里了
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import Vue from 'vue'
export default {
   name:'AppBanner',
   data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
        //    https://m.maizuo.com
            // 请求的真正接口前面的/mz其实只是一个暗号
            this.$http.get('/mz/v4/api/billboard/home',{
                params:{
                    __t:Date.now()
                }
            }).then( res => {
                this.banners = res.data.data.billboards
                //在这一行，dom还没有呢
                // vue.nextTick里的回调函数，会等到此次数据变化引起的dom更新完成之后执行
                Vue.nextTick(() => {
                    //也就说，在这里，dom都已经循环渲染完成了
                    new Swiper('.banner',{
                        autoplay:true,
                        pagination: {
                            el: '.swiper-pagination'
                        },
                        lazy: true
                    })
                })
                

            } )
       }
   },
   created () {
       this.getBanners()
   },
//    updated () {
//        new Swiper('.banner',{
//            pagination: {
//                el: '.swiper-pagination'
//            }
//        })
//    }
}
</script>
<style lang="scss" scoped>

</style>


