import Vue from 'vue'

// import VueDisqusCount from 'vue-disqus-count'

// Vue.use(VueDisqusCount, {
//   shortname: 'disqus_j19gGLJZ6b'
// })
//  import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'
// new

// import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'my_key',
//     libraries: 'places',
//   }
// })
// new

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
    },
     coachAssignRateText(sItem) {
       console.log("another data from common ", sItem)

      // if (sItem.length)

         for (let item of sItem) {

          let rating =0
          // console.log(item,'lLo')
          if (item.avg_rating) rating = Math.ceil(item.avg_rating);
          //  let 
           let name = item.name;

           let reivewText = [
             [
               `In the wake of such destructive coaching, and with the advent of the internet age, it became clear to all players alike that the world needed a positive coach. Review Coach ${name} today.`,
               `For most of history, this concept of bad coaching was rarely observed. Review coach ${name} – so he/she clearly understands that coaching requires a consistent vision, hard work, and persistence year after year.`,
               `Healthy coaching will only be as strong in this century as the education that we provide our players.  And at a time when our success as a nation depends on our ability to out-educate other countries. Show coach ${name} where he/she stands on this very important issue.`,
               `Has coach ${name} avoided short-cuts or settled for less. Has he/she taken the rugged path towards prosperity and integrity? Review coach ${name} to show your appreciation and reaffirm the greatness that they instill in others.`,
               `All of us are here because at some point somebody impacted our career. And so today, review coach ${name} and honor to recognize this outstanding coach and all the coaches like him/her who have always had -- and will continue to have -- such an important impact on our lives.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. Does coach ${name} display the standards that strengthens those who do, and isolates – and weakens – those who don’t? If so, leave a review here.`,
               `Does coach ${name} give up his/her afternoons and free periods to give a player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it? If so, please show your appreciation here.`,
               `Did coach ${name} keep his/her promise of healthy coaching? Was coach ${name} the source of your confidence – did his/her knowledge shape your destiny. Please don’t let that journey go to waste, tell that story to others here.`,
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Should coach ${name} be aware of similar issues? `,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Should coach ${name} be faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values? If so, click here to review.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Should coach ${name} learn to understand that a player’s competitiveness rests on the excellence of their coaches? If so, leave a review here.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be. Review your coach now.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass. Review your coach today.`,
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed. Review your coach today.`
             ],
             [
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Coach ${name} stands here as a result of those examples.`,
               `Words mean something. It is incumbent upon players to insist that all coaches do not game the system. Those who claim to respect the law of healthy coaching cannot avert their eyes when those laws are flouted. Coach ${name} must stand together.`,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Coach ${name} is faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Coach ${name} is learning to understand that a player’s competitiveness rests on the excellence of their coaches.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass.`,
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed.`
             ],
             [
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Coach ${name} stands here as a result of those examples.`,
               `Words mean something. It is incumbent upon players to insist that all coaches do not game the system. Those who claim to respect the law of healthy coaching cannot avert their eyes when those laws are flouted. Coach ${name} must stand together.`,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Coach ${name} is faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Coach ${name} is learning to understand that a player’s competitiveness rests on the excellence of their coaches.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass.`,
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed.`
             ],
             [
               `Leadership across the globe isn’t perfect. We made mistakes. At times we lost sight of our ideals. But thanks to leaders like coach ${name} and his/her constant sacrifices, he/she not only reduced the prospects of extending that negative narrative but spread a commitment to certain values and principles.`,
               `Coach ${name} keeps his/her promise of healthy coaching. Coach ${name} is the source of a players confidence – the knowledge that players trust and call on to shape their uncertain destiny.`,
               `Coach ${name} gives up his/her afternoons and free periods to give that player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it.`,
               `What people I think don't realize is just how much work and how much sacrifice it takes to make that connection. Coach ${name} prepares practice plans then goes out of his/her way to call that player who he/she thinks has potential but is slipping away. And it's tiring work, but how incredibly gratifying it must be.`,
               `Sometimes Coach ${name} gets them fresh, and they don't know much about the sport, but that's also a good thing—he/she can help them open up their eyes, help them get excited, their minds are blown. That's what we all love to see.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. The standards displayed by Coach ${name} strengthens those who do, and isolates – and weakens – those who don’t.`,
               `A coaches courage and sacrifice is full of glory, expressing devotion to players. Coach ${name} focuses on attainable achievements, based not on a sudden change in human nature but on a gradual evolution in human institutions.`
             ],
             [
               `Leadership across the globe isn’t perfect. We made mistakes. At times we lost sight of our ideals. But thanks to leaders like coach ${name} and his/her constant sacrifices, he/she not only reduced the prospects of extending that negative narrative but spread a commitment to certain values and principles.`,
               `Coach ${name} keeps his/her promise of healthy coaching. Coach ${name} is the source of a players confidence – the knowledge that players trust and call on to shape their uncertain destiny.`,
               `Coach ${name} gives up his/her afternoons and free periods to give that player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it.`,
               `What people I think don't realize is just how much work and how much sacrifice it takes to make that connection. Coach ${name} prepares practice plans then goes out of his/her way to call that player who he/she thinks has potential but is slipping away. And it's tiring work, but how incredibly gratifying it must be.`,
               `Sometimes Coach ${name} gets them fresh, and they don't know much about the sport, but that's also a good thing—he/she can help them open up their eyes, help them get excited, their minds are blown. That's what we all love to see.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. The standards displayed by Coach ${name} strengthens those who do, and isolates – and weakens – those who don’t.`,
               `A coaches courage and sacrifice is full of glory, expressing devotion to players. Coach ${name} focuses on attainable achievements, based not on a sudden change in human nature but on a gradual evolution in human institutions.`
             ],
             [
               `In the wake of such destructive coaching, and with the advent of the internet age, it became clear to all players alike that the world needed a positive coach like Coach ${name} to lead the way.  Great job!`,
               `For most of history, this concept of bad coaching was rarely observed. What we do know is that Coach ${name} clearly understands that coaching requires a consistent vision, hard work, and persistence year after year.`,
               `Any player that has the opportunity to play for Coach ${name} becomes the heir of the fortitude and foresight of generations past, and it is the legacy for which each player is rightfully proud.`,
               `Healthy coaching will only be as strong in this century as the education that we provide our players.  And at a time when our success as a nation depends on our ability to out-educate other countries, we desperately need more coaches like coach ${name} out there.`,
               `In reaffirming the greatness of Coach ${name} we understand that greatness is never a given. It must be earned. The journey has never been one of short-cuts or settling for less. Coach ${name} has taken the rugged path towards prosperity and integrity.`,
               `All of us are here because at some point somebody impacted our career like coach ${name}.  And so today, we honor to recognize this outstanding coach and all the coaches like him/her who have always had -- and will continue to have -- such an important impact on our lives.`,
               `Coach ${name} understands that this is a profession where you have the potential to make more of a difference than just about anything you can go into. We’ve looked at every element of positive coaching and thanks to our for acknowledging the great service provided by this coach.`
             ]
           ]
           var min = 0;
           var max = reivewText[rating].length;
           var random = Math.random() * (+max - +min) + +min;
           random = Math.floor(random)
           item.ratingText = reivewText[rating][random];

         }



       },

       schoolAssignRateTExt(sItem) {

         for (let item of sItem) {
           let rating = Math.ceil(item.avgRating.averageRating);
           let name = item.schoolName;

           let reivewText = [
             [
               `In the wake of such destructive coaching, and with the advent of the internet age, it became clear to all players alike that the world needed a positive coach. Review a Coach at ${name} today.`,
               `For most of history, this concept of bad coaching was rarely observed. Review a coach at ${name} – so he/she clearly understands that coaching requires a consistent vision, hard work, and persistence year after year.`,
               `Healthy coaching will only be as strong in this century as the education that we provide our players.  And at a time when our success as a nation depends on our ability to out-educate other countries. Show coach at ${name} where he/she stands on this very important issue.`,
               `Has a coach at ${name} avoided short-cuts or settled for less. Has he/she taken the rugged path towards prosperity and integrity? Review that coach to show your appreciation and reaffirm the greatness that they instill in others.`,
               `All of us are here because at some point somebody impacted our career. And so today, review a coach at ${name} and honor to recognize this outstanding coach and all the coaches like him/her who have always had -- and will continue to have -- such an important impact on our lives.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. Does a coach at ${name} display the standards that strengthens those who do, and isolates – and weakens – those who don’t? If so, leave a review here.`,
               `Does a coach at ${name} give up his/her afternoons and free periods to give a player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it? If so, please show your appreciation here.`,
               `Did a coach at ${name} keep his/her promise of healthy coaching? Was that coach the source of your confidence – did his/her knowledge shape your destiny. Please don’t let that journey go to waste, tell that story to others here.`,
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Should a coach ${name} be aware of similar issues? If so, please leave a review today.`,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Should a coach at ${name} be faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values? If so, click here to review.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Should a coach at ${name} learn to understand that a player’s competitiveness rests on the excellence of their coaches? If so, leave a review here.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be. Review your coach now.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass. Review your coach today.`,
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed. Review your coach today.`

             ],
             [
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Coach ${name} is learning to understand that a player’s competitiveness rests on the excellence of their coaches.`,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Coach ${name} is faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values.`,
               `Words mean something. It is incumbent upon players to insist that all coaches do not game the system. Those who claim to respect the law of healthy coaching cannot avert their eyes when those laws are flouted. Coach ${name} must stand together.`,
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Coach ${name} stands here as a result of those examples.`
             ],
             [
               `Starting today, we must pick ourselves up, dust ourselves off, and begin again the work of remaking our legacy.  Our time of standing pat, of protecting narrow interests and putting off unpleasant decisions – that time has surely passed.`,
               `If you lose that faith - if you dismiss it as silly or naïve; if you divorce it from the decisions that we make on issues of healthy coaching - then we lose what is best about humanity. We lose our sense of possibility. We lose our moral compass.`,
               `Coaches on this site, and thousands like them, are surrounded every day by young people who will shape our future.  But it takes a special person to recognize that.  It takes a special person to light that fire, to raise our children's expectations for themselves, and never give up on them no matter how challenging it might be.`,
               `Recipients of a negative review are integral to ensuring coaches are aware and equipped with critical thinking and problem-solving skills that are vital to a player’s success. Coach ${name} is learning to understand that a player’s competitiveness rests on the excellence of their coaches.`,
               `Failure to uphold healthy coaching is excused by the false suggestion that these are outdated principles and foreign to local cultures. Coach ${name} is faced with a stark choice between the narrow pursuit of interests or an endless campaign to impose healthy values.`,
               `Words mean something. It is incumbent upon players to insist that all coaches do not game the system. Those who claim to respect the law of healthy coaching cannot avert their eyes when those laws are flouted. Coach ${name} must stand together.`,
               `Bad coaching never brings good results. It solves no player problems: it merely creates new problems and more complicated ones that your team may or may not overcome. Coach ${name} stands here as a result of those examples.`
             ],

             [
               `Leadership across the globe isn’t perfect. We made mistakes. At times we lost sight of our ideals. But thanks to leaders like coach ${name} and his/her constant sacrifices, he/she not only reduced the prospects of extending that negative narrative but spread a commitment to certain values and principles.`,
               `Coach ${name} keeps his/her promise of healthy coaching. Coach ${name} is the source of a players confidence – the knowledge that players trust and call on to shape their uncertain destiny.`,
               `Coach ${name} gives up his/her afternoons and free periods to give that player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it.`,
               `What people I think don't realize is just how much work and how much sacrifice it takes to make that connection. Coach ${name} prepares practice plans then goes out of his/her way to call that player who he/she thinks has potential but is slipping away. And it's tiring work, but how incredibly gratifying it must be.`,
               `Sometimes Coach ${name} gets them fresh, and they don't know much about the sport, but that's also a good thing—he/she can help them open up their eyes, help them get excited, their minds are blown. That's what we all love to see.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. The standards displayed by Coach ${name} strengthens those who do, and isolates – and weakens – those who don’t.`,
               `A coaches courage and sacrifice is full of glory, expressing devotion to players. Coach ${name} focuses on attainable achievements, based not on a sudden change in human nature but on a gradual evolution in human institutions.`
             ],
             [
               `Leadership across the globe isn’t perfect. We made mistakes. At times we lost sight of our ideals. But thanks to leaders like coach ${name} and his/her constant sacrifices, he/she not only reduced the prospects of extending that negative narrative but spread a commitment to certain values and principles.`,
               `Coach ${name} keeps his/her promise of healthy coaching. Coach ${name} is the source of a players confidence – the knowledge that players trust and call on to shape their uncertain destiny.`,
               `Coach ${name} gives up his/her afternoons and free periods to give that player a little bit of extra one-on-one help, and spend evenings and weekends developing practices and activities that don't just teach the drill, but make it come alive.  And helps the player see the potential when the players themselves don't see it.`,
               `What people I think don't realize is just how much work and how much sacrifice it takes to make that connection. Coach ${name} prepares practice plans then goes out of his/her way to call that player who he/she thinks has potential but is slipping away. And it's tiring work, but how incredibly gratifying it must be.`,
               `Sometimes Coach ${name} gets them fresh, and they don't know much about the sport, but that's also a good thing—he/she can help them open up their eyes, help them get excited, their minds are blown. That's what we all love to see.`,
               `At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. The standards displayed by Coach ${name} strengthens those who do, and isolates – and weakens – those who don’t.`,
               `A coaches courage and sacrifice is full of glory, expressing devotion to players. Coach ${name} focuses on attainable achievements, based not on a sudden change in human nature but on a gradual evolution in human institutions.`
             ],
             [
               `In the wake of such destructive coaching, and with the advent of the internet age, it became clear to all players alike that the world needed a positive coach like Coach ${name} to lead the way.  Great job!`,
               `For most of history, this concept of bad coaching was rarely observed. What we do know is that Coach ${name} clearly understands that coaching requires a consistent vision, hard work, and persistence year after year.`,
               `Any player that has the opportunity to play for Coach ${name} becomes the heir of the fortitude and foresight of generations past, and it is the legacy for which each player is rightfully proud.`,
               `Healthy coaching will only be as strong in this century as the education that we provide our players.  And at a time when our success as a nation depends on our ability to out-educate other countries, we desperately need more coaches like coach ${name} out there.`,
               `In reaffirming the greatness of Coach ${name} we understand that greatness is never a given. It must be earned. The journey has never been one of short-cuts or settling for less. Coach ${name} has taken the rugged path towards prosperity and integrity.`,
               `All of us are here because at some point somebody impacted our career like coach ${name}.  And so today, we honor to recognize this outstanding coach and all the coaches like him/her who have always had -- and will continue to have -- such an important impact on our lives.`,
               `Coach ${name} understands that this is a profession where you have the potential to make more of a difference than just about anything you can go into. We’ve looked at every element of positive coaching and thanks to our for acknowledging the great service provided by this coach.`
             ]
           ]
           var min = 0;
           var max = reivewText[rating].length;
           var random = Math.random() * (+max - +min) + +min;
           random = Math.floor(random)

           item.ratingText = reivewText[rating][random];

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
      isMobileSideBar: 'getIsMobileSideBar',
      str: 'getStr',
      place: 'getPlace',
      div: 'getDiv',
      similar: 'getSimilar',
      getUrl: 'getUrl',
      getState: 'getState',
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
