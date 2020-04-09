import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale })


import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

    //import moment from 'moment'
    // Vue.filter('myDate', function(value) {
    //     if (!value) return ''
    //     return value
    //     var offset = new Date().getTimezoneOffset();
    //     //console.log('offset', offset)
    //     let o = Math.abs(offset)
    //     var testDateUtc = moment.utc(value);
    //     var localDate = moment(testDateUtc).utcOffset(o);
    //     return moment(localDate).fromNow()
    //     // return localDate.format("YYYY-MM-DD hh:mm:ss")
    // });

Vue.mixin({
    methods: {
        i(msg,i='Hey!') {
            this.$Notice.info({
                title: i,
                desc:  msg
            });
        },
        s(msg,i='Great!') {
            this.$Notice.success({
                title: i,
                desc:  msg
            });
        },
        w(msg,i='Hi!') {
            this.$Notice.warning({
                title: i,
                desc:  msg
            });
        },
        e(msg,i='Oops!') {
            this.$Notice.error({
                title: i,
                desc:  msg,
               
            });
        },
        swr() {
            this.$Notice.error({
                title: 'Oops',
                desc: 'Something went wrong, please try again later'
            });
        },
    },
    created(){
        
    }
})