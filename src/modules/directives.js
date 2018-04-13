

import Vue from 'vue'

//专门存放handler
var handlers = {
    'scroll-hide': (el, binding, e) => {
        console.log('开始滚动啦')
        let distance = el.getAttribute('scroll-hide-distance')
        if(document.documentElement.scrollTop > distance){
            //在这里我们想要更改数据
            binding.value.value = true
        }else{
            binding.value.value = false
        }
    }
}

Vue.directive('scroll-hide',{
    bind (el,binding) {
        window.addEventListener('scroll',handlers[binding.name].bind(this,el,binding))
    },
    unbind (el,binding) {
        //记住，在组件销毁的时候，这个会执行，把添加的事件监听再去掉
        window.removeEventListener('scroll',handlers[binding.name])
    }
})

//回到顶部的指令，不管是谁，只要加上这个指令，就可以点击回到顶部
Vue.directive('back-top',{
    bind (el, binding) {
        el.onclick = function () {
            document.documentElement.scrollTop = 0
        }
    },
    unbind (el) {
        el.onclick = null;
    }
})