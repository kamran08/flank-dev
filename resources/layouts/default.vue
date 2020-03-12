<template >
  <div oncontextmenu="return false;">
    <div>

    <div id="fb-root"></div>
   <navber />
    <nuxt />
    <myFooter/>
  </div>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import navber2 from '~/components/navber2.vue'
import navber from '~/components/navber.vue'

export default {
  components: {
    navber,
    navber2,
    MyFooter
  },
  data(){
    return{
      header:1
    }
  },

  created(){
    if(this.$route.name == 'scoach_review-id' || this.$route.name == "addreview-id"){
          this.header = 2
        }
        else{
          this.header = 1
        }
  }
}
</script>

