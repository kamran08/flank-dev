import Vue from 'vue'
//  import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'

// Vue.use(Chartkick.use(Chart))
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)
import {mapGetters} from 'vuex'
// import { Hooper, Slide } from 'hooper';
Vue.mixin({
  methods: {
    async callApi (method, url, dataObj) {
      try {
        let data = await this.$axios({
          method: method,
          url: url,
          data: dataObj
        })
        return data
      } catch (e) {
        return e.response
      }
    }
  },
  computed: {
    ...mapGetters({
      authInfo: 'getAuthInfo',
      isLoggedIn: 'getIsLoggedIn',
      searchData: 'getSearchData',
      pagination: 'getPagination',
      pageOption: 'getPageOptino',
      str: 'getStr',
      place: 'getPlace',
      div: 'getDiv',
      similar: 'getSimilar'
    })
  },
  filters:{
    trimSecondLater(item){
      let newName = item.firstName
       if(item.lastName)  newName = item.firstName+' '+item.lastName.substring(0, 1)+'.'
        
        return newName
    },
    onlyDate(item){
       
        var today = new Date(item);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
},
})
