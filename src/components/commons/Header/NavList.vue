<template>
    <div class="nav-list animated">
       
        <nav class="nav">
            <ul >
                <li v-for = " nav in navs " :key = " nav.id ">
                    <router-link @click.native = "closeMenu" active-class="active" :to = "nav.to">
                        <span>{{ nav.title }}</span>

                        <i class="fa fa-angle-right"></i>
                    </router-link>
                </li>

                <li>
                    <a href= '#/home'>回到首页</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name:'NavList',
    props:['closeMenu'],
    data () {
        return {
            navs: [
                {id: 1, title: '首页', to: {name: 'home'}},
                {id: 2, title: '影片', to: {name: 'film'}},
                {id: 3, title: '影院', to: {name: 'cinema'}},
                {id: 4, title: '我的', to: {name: 'mine'}}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-list {
    position: absolute;
    z-index: 9;
    width: 2.65rem;
    height: 100vh;
    padding-top: 50px;

    .nav{
            border-top: 1px solid #222;
            box-shadow: 0 1px 1px #363636 inset;
            background: #282828;
            position: absolute;
            display: block;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: all ease 0.4s;
            -webkit-transition: all ease 0.4s;

            li{
                height: 50px;

                a{
                    padding: 0px 16px;
                    border-bottom: 1px dotted #333;
                    display: flex;justify-content: space-between;
                    align-items: center;
                    font-size: 14px;color: #9a9a9a;
                }

                a.active {
                    color: #fff
                }
            }
    }
}
</style>

