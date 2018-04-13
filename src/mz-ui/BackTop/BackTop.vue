<template>
    
    <div>
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div v-back-top v-if = "flag" class="back-top" :class= "[size]">
                <i class="fa fa-arrow-up"></i>
            </div>
        </transition>
        
    </div>
 
</template>
<script>



export default {
  name: 'BackTop',
  props: {
      size: {
          type:String,
          default: 'normal'
      },
      flag: Boolean
  }
}
</script>
<style lang="scss" scoped>

</style>


