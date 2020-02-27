<template>
  <div>
    <div id="fb-root"></div>
   <navber v-if="header == 1"/>
   <navber2 v-else/>
    <nuxt />
    <myFooter/>
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
  watch: { 
      '$route.name': function(newVal, oldVal) { // watch it
        this.$store.commit('setIsMobileSideBar', false )
        if(newVal == 'scoach_review-id' || newVal == "addreview-id"){
          this.header = 2
        }
        else{
          this.header = 1
        }

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

