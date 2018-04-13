

import Vue from 'vue'

// 转换事件的过滤器

Vue.filter('time', value => {
    let date = new Date(value)
    return (date.getMonth()+1)+'月'+date.getDate()+'日'
})


Vue.filter('day', value => {
    let date = new Date(value)
    let result = ''
    switch (date.getDay()) {
        case 0: result = '日';break;
        case 1: result = '一';break;
        case 2: result = '二';break;
        case 3: result = '三';break;
        case 4: result = '四';break;
        case 5: result = '五';break;
        case 6: result = '六';break;
    }
    return  '星期' + result
})