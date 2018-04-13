<template>
  <div class="page">
      <div class="not-found">
          <img src="/static/images/not_found.jpg" alt="">
          <p >这个页面，神秘失踪了…</p>
          <p >不如<router-link to = "/home">返回卖座电影首页</router-link>吧</p>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    
    .not-found {
        padding: 48px 0px; 
        display: flex;
        flex-flow: column;
        align-items: center;
        img {
            width: 2.31rem;
        }
    }
    .not-found p{
        font-size: 16px;
        color: #666;
        line-height: 24px;
        margin: 0 0 8px;
        text-align: center;
        a{
            padding: 0 0.2em;
            color: #cb885e;
            text-decoration: underline;
        }
    }
</style>

