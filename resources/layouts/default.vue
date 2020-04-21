<template >
<client-only>

  <!-- <div oncontextmenu="return false;"> -->
    <div >
  <!-- <script data-ad-client="ca-pub-5005018703171891" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
    <div id="fb-root"></div>
   
   <navber />
   <mobileSideBar v-if="loc" />
    <nuxt />
    <myFooter/>
  </div>
  </client-only>
  <!-- </div> -->
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import navber2 from '~/components/navber2.vue'
import navber from '~/components/navber.vue'
import mobileSideBar from '~/components/mobileSideBar.vue'

export default {
  components: {
    navber,
    navber2,
    MyFooter,
    mobileSideBar,
  },
  data(){
    return{
      header:1,
    }
  },

  created(){
    this.loc = this.$route.path
    console.log('test',this.loc)
    if(this.$route.name == 'scoach_review-id' || this.$route.name == "addreview-id"){
          this.header = 2
        }
        else{
          this.header = 1
        }
  },
     watch: { 
      '$route.name': function(newVal, oldVal) { 
          console.log(newVal)
        // watch it
        this.$store.commit('setIsMobileSideBar', false )
        if(newVal == 'index'){
          this.loc = false
        }
        else{
          this.loc = true
        }

      }
    },
}
</script>

