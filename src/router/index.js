
import Vue from 'vue'

import VueRouter from 'vue-router'

//起码有一个作用是注册VueRouter里面自带的组件
Vue.use(VueRouter)

import Home from '../components/containers/Home/Home.vue'
import Film from '../components/containers/Film/Film.vue'
import NotFound from '../components/containers/NotFound/NotFound.vue'
import Detail from '../components/containers/Detail/Detail.vue'

import bus from '../modules/bus'

let router = new VueRouter({
    routes: [
        {
            path: '',redirect:'/home'
        },
        {
            path: '/home', name: 'home', component: Home
        },
        {
            path: '/film', name: 'film', component: Film
        },
        {
            path: '/detail/:id', name: 'detail', component: Detail, props: true
        },
        {
            path: '**', component: NotFound
        }
    ]
})


// router.beforeEach((to, from, next) => {
//     //在这里路由已经跳转了，所以要更改Header组件的isNavShow属性
//     //但是，我们在这里获取不到Header组件，所以不能直接改Header的数据
//     //在这里，其实，我们可以使用event bus
//    console.log('change')
//     bus.$emit('close-menu')
//    next()
// })

export default router