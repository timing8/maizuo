
<template>
  <header class="header">
    <nav>
        <h1 class="title-box">
            <div data-action = "navbtn" @click = " isNavShow = !isNavShow " class="nav-btn">
                <i class="fa fa-navicon"></i>
            </div>
            <div class="title">
                {{title}}
            </div>
        </h1>
        <div class="nav-right">
            <a class="city">北京</a>
            <a class="user">
                <i class="fa fa-user-o"></i>
            </a>
        </div>
    </nav>

    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
        <div @click = 'isNavShow = false' v-if = "isNavShow" class="mask animated"></div>
    </transition>
    
    <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft"> 
        <nav-list :close-menu = "closeMenu" v-if = "isNavShow"></nav-list>
    </transition>
  </header>
</template>

<script>
import bus from '../../../modules/bus'
import router from '../../../router'
import NavList from './NavList'
export default {
  name:'AppHeader',
  data () {
      return {
          isNavShow: false,
          title: '卖座电影'
      }
  },
  methods: {
      closeMenu () {//关闭 导航
          this.isNavShow = false
      }
  },
  components: {
      NavList
  },
  mounted () {
      //给小天使绑定事件
      bus.$on('close-menu',() => {
          this.isNavShow = false
      })
      //在这里也可以给router添加全局路由钩子，当触发的时候会更改header的数据
    router.beforeEach((to, from, next) => {
        //切换路由的时候关闭导航
        this.isNavShow = false
        //切换的时候切换头部的title
        let title = ''
        console.log(to)
        switch (to.name) {
            case 'film': title = '电影列表';break; 
            case 'detail': title = to.query.title;break;
            default: title = '卖座电影';break; 
        }
        this.title = title
        next()
    })
      
  }
}
</script>
<style lang="scss" scoped>

    .header {
        background: #282828;
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        width: auto;
        height: 50px;
        line-height: 50px;
        // overflow: hidden;

        .animated {
            animation-duration: 0.75s;
        }

        nav {
            overflow: hidden;
            position: relative;
            z-index: 1000;
        }

        .mask {
            z-index: 8;
            top: 50px;
        }

        .title-box{
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            text-align: left;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
            width: auto;
            height: 50px;
            margin: 0 auto;
            float: left;

            .nav-btn {
                float: left;
                width: 48px;
                text-align: center;
                border-right: 1px solid #222;
                box-shadow: 1px 0 1px #363636;
                color: #999;
            }

            .title {
                padding: 0 1em;
                float: left;
                font-size: 14px;
                color: #efefef;
                text-overflow: ellipsis;
                white-space: nowrap;
                displdday: inline-block;
                overflow: hidden;
            }
            
        }

        .nav-right{
            float: right;
            color: #999;
            .city {
                float: left;
                font-size: 14px;
                padding: 0 6px;
                color: #999;
            }
            .user {
                float: left;
                font-size: 16px;
                width: 48px;
                text-align: center;
                color: #999;
            }
        }
    }

</style>

