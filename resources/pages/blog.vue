
<template>
    <div class="pt-120">
        <div class="new-banner-section blog-mobile-banner-full" >
            <div class="container" style="">
                <div class="inner-banner new-fl-inner-banner">
                    <figure v-if="leandingData.length>0">
                      <img :src="leandingData[0].url" alt="">
                  </figure>
                </div>
            </div>
        </div>
        <div class="new-blog-section">
            <div class="container">
                <div class="row">
                    <div class="new-blog-item new-blog-item-1">
                        <div class="new-blog-post">
                            <h1>The Beginner Bodyweight Workout: Try this 20 Minute Routine At Home or Anywhere!</h1>
                            <div class="blog-holder">
                                <ul>
                                    <li><img src="/images/sticker-3.png" alt=""> By Steve Kamb</li>
                                    <li>Last updated: March 17, 2020</li>
                                    <li><span>1337 comments</span></li>
                                </ul>
                            </div>
                            <div class="blog-lg-img">
                              <figure>
                                <img src="/images/blog1.jpg" alt="">
                              </figure>
                              <div class="blog-caption">
                                <p class="blog-cap-bold">So you want to lose weight and get in shape, but you don’t want to leave your house?</p>
                              </div>
                            </div>
                            <div class="blog-post-det">
                              <p class="blog-cap-bold">So you want to lose weight and get in shape, but you don’t want to leave your house?</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                              <p class="blog-cap-bold">Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span> sed do eiusmod tempor incididunt</p>
                              <div class="blog-post-in-img">
                                <figure>
                                  <img src="/images/blog2.jpg" alt="">
                                </figure>
                              </div>
                              <p class="blog-cap-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              <ul class="blog-det-list">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                              </ul>
                              <p class="blog-cap-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              <div class="blog-lg-img">
                                <figure>
                                  <img src="/images/blog3.jpg" alt="">
                                </figure>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> <br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                              <p class="blog-cap-bold">- Lorem Ipsum</p>
                            </div>
                            <div class="interest-box">
                              <h3>Are you interested?</h3>
                              <ul>
                                <li><button>Love it!</button></li>
                                <li><button>It's ok!</button></li>
                              </ul>
                            </div>
                            <div class="flank-blog-slider">
                              <div class="flank-blog-slider-header">
                                <h2>Also <span>on flank</span></h2>
                              </div>
                              <div class="flank-blog-slider-inner">
                                <hooper :progress="true" >
                                  <slide>
                                    <div class="flank-blog-slider-item">
                                      <div class="flank-slider-item-inner">
                                        <div class="flank-blog-slider-img">
                                          <img src="/images/recslider1.jpg" alt="">
                                        </div>
                                        <div class="flank-blog-slider-details">
                                          <ul>
                                            <li>a year ago</li>
                                            <li>56 comments</li>
                                          </ul>
                                          <h2>Why can't i lose weight (What no one else lorem ipsum dolor sit ammet)</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </slide>
                                  <slide>
                                    <div class="flank-blog-slider-item">
                                      <div class="flank-slider-item-inner">
                                        <div class="flank-blog-slider-img">
                                          <img src="/images/recslider3.jpg" alt="">
                                        </div>
                                        <div class="flank-blog-slider-details">
                                          <ul>
                                            <li>a year ago</li>
                                            <li>56 comments</li>
                                          </ul>
                                          <h2>What is functional fitness? lorem ipsum dolor sit ammet</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </slide>
                                  <slide>
                                    <div class="flank-blog-slider-item">
                                      <div class="flank-slider-item-inner">
                                        <div class="flank-blog-slider-img">
                                          <img src="/images/recslider2.jpg" alt="">
                                        </div>
                                        <div class="flank-blog-slider-details">
                                          <ul>
                                            <li>a year ago</li>
                                            <li>56 comments</li>
                                          </ul>
                                          <h2>Why can't i lose weight (What no one else lorem ipsum dolor sit ammet)</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </slide>

                                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                </hooper>
                                <!-- <div class="flank-blog-slider-item">
                                  <div class="flank-slider-item-inner">
                                    <div class="flank-blog-slider-img">
                                      <img src="/images/348s.jpg" alt="">
                                    </div>
                                    <div class="flank-blog-slider-details">
                                      <ul>
                                        <li>a year ago</li>
                                        <li>56 comments</li>
                                      </ul>
                                      <h2>Why can't i loose weight (What no one else lorem ipsum dolor sit ammet)</h2>
                                    </div>
                                  </div>
                                </div>
                                <div class="flank-blog-slider-item">
                                  <div class="flank-slider-item-inner">
                                    <div class="flank-blog-slider-img">
                                      <img src="/images/348s.jpg" alt="">
                                    </div>
                                    <div class="flank-blog-slider-details">
                                      <ul>
                                        <li>a year ago</li>
                                        <li>56 comments</li>
                                      </ul>
                                      <h2>What is functional fitness? lorem ipsum dolor sit ammet</h2>
                                    </div>
                                  </div>
                                </div> -->
                              </div>
                            </div>
                        </div>
                        <div class="blog-comment-section">
                          <div class="blog-comment-header">
                            <h3><span>999</span> Comments</h3>
                            <!-- <p><span>1</span> <a href="#">Login</a></p> -->
                          </div>
                          <div class="blog-comment-count">
                            <div class="cmnt-count-item cmnt-count-reco">
                              <i class="far fa-heart"></i> Recommended <span>55</span>
                            </div>
                            <div class="cmnt-count-item cmnt-count-soc">
                              <ul>
                                <li class="new-twi"><a href="#"><i class="fab fa-twitter"></i> Tweet</a></li>
                                <li class="new-fb"><a href="#"><i class="fab fa-facebook-f"></i> Share</a></li>

                                <!-- add instagram if needs -->
                                <!-- <li class="new-ins"><a href="#"><i class="fab fa-instagram"></i> Share</a></li> -->
                              </ul>
                            </div>
                            <div class="cmnt-count-item cmnt-count-sort">
                              <label>Sort by <img src="/images/down-arrow.png" alt=""></label>
                              <!-- jokon nicher list theke kunota select kora hobe thkn ei p tag e "show" class ta add hobe -->
                              <p>A to z</p>

                              <!-- eta hide thakbe. jkn label e click kora hobe thkn etate "show" class ta add hobe -->
                              <ul class="sort-by-res">
                                <li>A to z</li>
                              </ul>
                            </div>
                          </div>
                          <div class="blog-comment-post blog-comment-post-cur">
                            <div class="blog-cmnt-item blog-cmnt-thumb">
                              <div class="blog-cmnt-thumb-inner">
                                <img src="/images/reply1.jpg" alt="">
                              </div>
                            </div>
                            <div class="blog-cmnt-item blog-cmnt-details blog-cmnt-textarea">
                              <div class="blog-cmnt-det-inner">
                                <textarea rows="5"></textarea>
                                <div class="blog-cmnt-btn">
                                  <button>Post blog</button>
                                </div>
                              </div>
                              <div class="blog-cmnt-auth">
                                <p>Log in with</p>
                                <ul>
                                  <li class="new-fb"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                  <li class="new-twi"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <!-- jdi inner reply thake taile sideline class add hobe -->
                          <div class="blog-comment-post blog-comment-post-all">
                            <div class="blog-cmnt-item blog-cmnt-thumb">
                              <div class="blog-cmnt-thumb-inner">
                                <img src="/images/reply2.jpg" alt="">
                              </div>
                            </div>
                            <div class="blog-cmnt-item blog-cmnt-details">
                              <div class="blog-cmnt-det-inner">
                                <div class="blog-cmnt-user-name">
                                  <h3><a href="#">User Name</a></h3>
                                  <p>11 days ago</p>
                                </div>
                                <div class="blog-cmnt-user-text">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                </div>
                                <div class="blog-cmnt-user-link">
                                  <ul>
                                    <li>10 replies</li>
                                    <li>10 shares</li>
                                  </ul>
                                  <div class="blog-user-reply-sec">
                                    <div class="blog-user-reply-auto">
                                      <div class="blog-user-auto-img">
                                        <div class="blog-user-auto-img-inner">
                                          <img src="/images/reply1.jpg" alt="">
                                        </div>
                                      </div>
                                      <div class="blog-user-auto-details">
                                        <div class="blog-cmnt-auto-inner">
                                          <div class="blog-cmnt-user-name">
                                            <h3><a href="#">User Name</a></h3>
                                            <p>11 days ago</p>
                                          </div>
                                          <div class="blog-cmnt-user-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                          </div>
                                          <div class="blog-cmnt-user-link">
                                            <ul>
                                              <li>10 replies</li>
                                            </ul>
                                          </div>
                                          <div class="blog-user-reply-box">
                                            <ul>
                                              <li>Reply</li>
                                            </ul>
                                            <div class="blog-reply-box-field">
                                              <div class="blog-rep-thumb">
                                                <figure>
                                                  <img src="/images/reply1.jpg" alt="">
                                                </figure>
                                              </div>
                                              <div class="blog-rep-textarea">
                                                <div class="blog-rep-textarea-inner">
                                                  <textarea rows="3"></textarea>
                                                    <div class="blog-cmnt-btn">
                                                      <button>Reply</button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- show class add hobe ekane jokon kew reply e click korbe. jodi inner reply thake taile sideline class add hobe -->
                                  <div class="blog-user-reply-sec">
                                    <div class="blog-user-reply-auto">
                                      <div class="blog-user-auto-img">
                                        <div class="blog-user-auto-img-inner">
                                          <img src="/images/reply1.jpg" alt="">
                                        </div>
                                      </div>
                                      <div class="blog-user-auto-details">
                                        <div class="blog-cmnt-auto-inner">
                                          <div class="blog-cmnt-user-name">
                                            <h3><a href="#">User Name</a></h3>
                                            <p>11 days ago</p>
                                          </div>
                                          <div class="blog-cmnt-user-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                          </div>
                                          <div class="blog-cmnt-user-link">
                                            <ul>
                                              <li>10 replies</li>
                                            </ul>
                                          </div>
                                          <div class="blog-user-reply-box">
                                            <ul>
                                              <li>Reply</li>
                                            </ul>

                                            <!-- show class add hobe jkn kew reply e click korbe -->
                                            <div class="blog-reply-box-field">
                                              <div class="blog-rep-thumb">
                                                <figure>
                                                  <img src="/images/reply1.jpg" alt="">
                                                </figure>
                                              </div>
                                              <div class="blog-rep-textarea">
                                                <div class="blog-rep-textarea-inner">
                                                  <textarea rows="3"></textarea>
                                                    <div class="blog-cmnt-btn">
                                                      <button>Reply</button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="blog-user-reply-auto">
                                      <div class="blog-user-auto-img">
                                        <div class="blog-user-auto-img-inner">
                                          <img src="/images/reply1.jpg" alt="">
                                        </div>
                                      </div>
                                      <div class="blog-user-auto-details">
                                        <div class="blog-cmnt-auto-inner">
                                          <div class="blog-cmnt-user-name">
                                            <h3><a href="#">User Name</a></h3>
                                            <p>11 days ago</p>
                                          </div>
                                          <div class="blog-cmnt-user-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                          </div>
                                          <div class="blog-cmnt-user-link">
                                            <ul>
                                              <li>10 replies</li>
                                            </ul>
                                          </div>
                                          <div class="blog-user-reply-box">
                                            <ul>
                                              <li>Reply</li>
                                            </ul>

                                            <!-- show class add hobe jkn kew reply e click korbe -->
                                            <div class="blog-reply-box-field">
                                              <div class="blog-rep-thumb">
                                                <figure>
                                                  <img src="/images/reply1.jpg" alt="">
                                                </figure>
                                              </div>
                                              <div class="blog-rep-textarea">
                                                <div class="blog-rep-textarea-inner">
                                                  <textarea rows="3"></textarea>
                                                    <div class="blog-cmnt-btn">
                                                      <button>Reply</button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="blog-user-reply-box">
                                  <ul>
                                    <li>Reply</li>
                                    <li>Share</li>
                                  </ul>
                                  <div class="blog-reply-box-field">
                                    <div class="blog-rep-thumb">
                                      <figure>
                                        <img src="/images/reply1.jpg" alt="">
                                      </figure>
                                    </div>
                                    <div class="blog-rep-textarea">
                                      <div class="blog-rep-textarea-inner">
                                        <textarea rows="3"></textarea>
                                          <div class="blog-cmnt-btn">
                                            <button>Reply</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <!-- jdi inner reply duita theke beshi hoy thkn eta show hobe. naile hide hobe. abar jkn ei button e click kora hobe thkn button er bithore leka thakbe Close comments -->
                                <!-- <div class="blog-all-cmnt">
                                  <button>Load more comments</button>
                                </div> -->
                              </div>
                            </div>
                          </div>

                          <!-- jkn ekane click hobe thkn more reply deka jabe ar thkn button er vithre leka thakbe je Close comments. -->
                          <div class="blog-all-cmnt ">
                            <button>Load more comments</button>
                          </div>
                        </div>
                    </div>
                    <div class="new-blog-item new-blog-item-2">
                      <div class="all-rec-blog">
                        <div class="row">
                          <div class="all-rec-blog-item">
                            <div class="rec-blog-item-inner">
                              <div class="rec-blog-img">
                                <img src="/images/recblog1.jpg" alt="">
                              </div>
                              <div class="rec-blog-details">
                                <h3><a href="#">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing Vestibulum nec neque enim. Aliquam quis est quis neque porta feugiat at id lacus. </p>
                              </div>
                            </div>
                          </div>
                          <div class="all-rec-blog-item">
                            <div class="rec-blog-item-inner">
                              <div class="rec-blog-img">
                                <img src="/images/recblog1.jpg" alt="">
                              </div>
                              <div class="rec-blog-details">
                                <h3><a href="#">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing Vestibulum nec neque enim. Aliquam quis est quis neque porta feugiat at id lacus. </p>
                              </div>
                            </div>
                          </div>
                          <div class="all-rec-blog-item">
                            <div class="rec-blog-item-inner">
                              <div class="rec-blog-img">
                                <img src="/images/recblog1.jpg" alt="">
                              </div>
                              <div class="rec-blog-details">
                                <h3><a href="#">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing Vestibulum nec neque enim. Aliquam quis est quis neque porta feugiat at id lacus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="rec-blog-daily-flank">
                        <div class="rec-blog-daily-header">
                          <h3>YOUR <span>DAILY FLANK</span></h3>
                        </div>
                        <div class="rec-blog-daily-details">
                          <p>The Flank Daily email helps you start your day with everything you need to know: coach buzz, entertainment and a dash of fun. Subscribe here.</p>
                          <div class="rec-blog-sub">
                            <input type="text" placeholder="address@email.com">
                            <button>Subscribe</button>
                          </div>
                          <div class="rec-blog-sigunup">
                            <button>Sign me up!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';

export default {
    components: {
      Hooper,
      Slide,
      HooperNavigation,
    },
  data() {
    return {
        highRatedCoach:[],
        isLoad:false,
        mobileScreen:false,
      showMoreActivity: 3,
      name: "",
      searchTxt: "",
      
      addressTxt: "",
      openSearchDrop: false,
      schoolCoaches: [],
      recentReview: [],
      review_of_day: {},
      loading: true,
      packType: 0,
      legend_id: 0,
      reviewModal: false,
      rData: {
        for: 0,
        key: "",
        school: ""
      },
     
      coachList: [],
      topHeadlines: [],
      videos: [],
      schoolList: [],
      schoolCoachList: [],
      productList: [],
      sData: {
        school_id: 0
      },
      leandingData:[],
      iamIndex: false,
      toolTipModal: false,
      toolTipText: '',
      isVideo:{
          modal :false,
          header:'',
          link:''
      },
      city:'All citys',
      allCity:[],
      isDropOption:false,
        tabindex:0,
        flankDaily:{
            email:''
        },
        hooperSettings: {
             infiniteScroll: true,
        },
        latesthooperSettings: {
            infiniteScroll: true,
            // centerMode: true,
            // itemsToShow:3,
            
        }
    };
  },
  
  async asyncData({ app, store, redirect, params }) {
    try {
      let { data } = await app.$axios.get(`/legends`);

      return {
        legendList: data
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
  methods: {
    openToolTip(no){
        if(no == 1){
            this.toolTipText = `Your coach’s health score collects historical data based on values from 0-100%. The closer to 100%, the healthier environment it is for you to play in. Each coach is also rated 
                                            on a list of attributes to generate their overall health score. This score is our Flank standard and each coach is calculated the same across the country. Each score is point based, either +3.3 or -3.3 influenced by either positive attributes or demerit points based on the numbers of violations and severity of each. Every violation per inspection is assigned a score value as following:

                                           <p> +3.3 point per positive attribute </p>
                                           <p> -3.3 point per negative attribute </p>
                                            `
        }
        else if(no == 2){
            this.toolTipText = `PCI attempts to quantify the un-quantifiable: the overall sentiment of every sports program. 
            Using “active player” reviews, selection regulated via the actual coach review screen, each player has the capability (with immunity) to affect the overall chemistry of their respective program based on their coach review. To calculate this, we take a 120-day view of a program’s operation and the summation of active player reviews to quantify the impact on your programs morale as regulated by your coach. To ensure the percentages are fair based on reporting standards, players outside of program jurisdiction as validated via sign-up are not included. `
        }
        else if(no == 3){
            this.toolTipText = `After analyzing the previous four weeks of player reviews, we’ve identified two things that have predictive value. The metric that is associated most closely with the committee’s selections is “Strength of team index” which simply demonstrates how durable your team is, given the amount of reviews submitted. Along with the Program Chemistry Index (CPI) and overall Health Score, we can estimate a team’s chance at success. This can be done at any time during the season, even before the season the starts. `
        }
       
        this.toolTipModal= true
    },
    openVideo(no){
        if(no == 1){
            this.isVideo.link = `<div class="inner-video-iframe">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vz738aqEI5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </div> `
            this.isVideo.header = `Out of control Coache's abusive behaviour caught on tape.`
        }
        else if(no == 2){
              this.isVideo.link = `<div class="inner-video-iframe">
                                                        <iframe src="https://www.youtube.com/embed/rdVEag98q6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </div> `
            this.isVideo.header = `Players accuse GCU women's soccer coach of verbal, mental, physial abuse.`
        }
        else if(no == 3){
              this.isVideo.link = `<div class="inner-video-iframe">
                                                        <iframe src="https://www.youtube.com/embed/AzcPG9sRDMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </div> `
            this.isVideo.header = `Rutgers coach fired for abuse of players.`
        }
        else if(no == 4){
              this.isVideo.link = `<div class="inner-video-iframe">
                                                        <iframe src="https://www.youtube.com/embed/LdK2d4CGzrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        </div> `
            this.isVideo.header = `The abuse of child atheletes by their coaches.`
        }
        this.isVideo.modal= true
    },
    openDynamicVideo(item){
        this.isVideo.link = `<div class="inner-video-iframe">${item.body}</div> `
        this.isVideo.modal= true
    },
    closeVideo(){
        this.isVideo.modal = false
        this.isVideo.link = ''
        this.isVideo.header = ''
    },
    async  emailSubcription(){

        if(this.flankDaily.email == '') return this.i("Please enter Email Frist !")
        this.isLoad = true
        const res = await this.callApi('post','/app/emailSubscription', this.flankDaily)
        if(res.status == 200 || res.status ==204){
            this.s("You have Subscribed to Flank Daily !")
            this.flankDaily.email = ''
            this.isLoad = false
        }
        else if(res.status == 401){
            this.isLoad = false
            return this.e('Email is invalid')
        }
        else{
            this.isLoad = false
            this.swr();
        }
    },
    handleFocus(){
      
      this.tabindex = -1
    },
    handleFocusOut(){
      
      this.isDropOption=false
      // this.tabindex = 0
    },
    pageOptionDropChange(item){ 
         this.$store.commit('setPageOption', item )
        this.isDropOption = false
       
    },
    goToCoachSearch(){
        this.$store.commit('setStr', this.searchTxt )
        this.$router.push(`/coach_search?str=${this.str}&pageOption=${this.pageOption}`)
    },
    directToCoachWall(item){
       // return this.i();
       
        if(item.review_type == 'school') this.$router.push(`/school_coach/${item.coach.id}`)
        else if(item.review_type == 'product') this.$router.push(`/product/${item.product.id}`)
        else if(item.review_type == 'legend') this.$router.push(`/profile/${item.legend.id}`)
    },
    closeModal() {
       this.rData.for=0
        this.rData.key=''
        this.rData.school=''
        this.coachList=[]
        this.schoolList=[]
        this.schoolCoachList=[]
        this.productList=[]
        this.sData.school_id = 0

      this.reviewModal = false;
    },
    async CreateNewCoach() {
      if (this.sData.school == "") {
        this.i("Please Write a Coach Name");
        return;
      }
      if (this.isLoggedIn == false) {
        this.i("Please login first !");
        this.$router.push("/login");
        return;
      }
      let tempCoach = {
        school_id: this.sData.school_id,
        name: this.sData.school
      };
      const res = await this.callApi(
        "post",
        "/app/storeSchoolCoache",
        tempCoach
      );
      if (res.status == 200) {
        this.s("Coach created successfully!");
      } else {
        this.swr();
      }
    },
    manageSchoolData(item) {
      this.rData.school = item.name + " | " + item.sport;
      this.sData.school_id = item.id;
      this.schoolList = [];
    },
    async SearchByKeySchoolCoach() {
      const res = await this.callApi(
        "get",
        `/app/SearchByKeySchoolCoach?key=${this.rData.key}&school_id=${
          this.sData.school_id
        }`
      );
      if (res.status === 200) {
        this.schoolCoachList = res.data;
      } else {
        this.swr();
      }
    },
    async SearchByKeyCoach() {
      const res = await this.callApi(
        "get",
        `/app/SearchByKeyCoach?key=${this.rData.key}`
      );
      if (res.status === 200) {
        this.coachList = res.data;
      } else {
        this.swr();
      }
    },
    async SearchByKeyProduct() {
      const res = await this.callApi(
        "get",
        `/app/SearchByKeyProduct?key=${this.rData.key}`
      );
      if (res.status === 200) {
        this.productList = res.data;
      } else {
        this.swr();
      }
    },
    async SearchByKeySchool() {
      const res = await this.callApi(
        "get",
        `/app/SearchByKeySchool?key=${this.rData.school}`
      );
      if (res.status === 200) {
        this.schoolList = res.data;
      } else {
        this.swr();
      }
    },
    async goToLegendWall(item) {
      this.reviewModal = false;
      this.$router.push(`/addreview/${item.id}`);
    },
    async goToProductWall(item) {
      this.reviewModal = false;
      this.$router.push(`/product_review/${item.id}`);
    },
    async goToCoachWall(item) {
      this.reviewModal = false;
      this.$router.push(`/scoach_review/${item.id}`);
    },
    async SearchData() {},
    goToProfilePage() {
      if (this.review_of_day.bestReview.review_type == "legend") {
        this.$router.push(
          `/local_instructor/${this.review_of_day.bestReview.reviewFor}`
        );
      } else if (this.review_of_day.bestReview.review_type == "school") {
        this.$router.push(`/school_coach/${this.review_of_day.bestReview.school_id}`);
      } 
    //   else if (this.review_of_day.bestReview.review_type == "product") {
    //     this.$router.push(
    //       `/product/${this.review_of_day.bestReview.product_id}`
    //     );
    //   }
    },
    async getCity(item) {
      this.city = item
      if(item == 'All citys'){
        item=''
      }
      const res  = await this.callApi('get',`/app/getSchoolcoaches?city=${item}`)
      if(res.status === 200){
        this.schoolCoaches = res.data
      }
      else{
        this.swr()
      }
    },
  },
  mounted(){
      if(window.innerWidth < 1199){
            this.mobileScreen = true
        }
  },

  async created() {
      const res1 = await this.callApi("get", `/app/bannerImage`)
      if(res1.status==200){
          this.leandingData = res1.data
      }

    if(this.$route.query.login == 'success') this.i("Login Successful !")
    const [res2, res3,res4,res5,res6] = await Promise.all([
    //  this.callApi("get", `/app/getSchoolcoaches`),
      
      this.callApi("get", `/app/reviewOfTheDay`),
     // this.callApi("get", `/app/recentCitys`),
      this.callApi("get", `/app/getRecentReview`),
      this.callApi("get", `/app/topHeadline`),
      this.callApi("get", `/app/videos`),
      this.callApi("get", `/app/getSchoolCoachByhighRated`),
   
    ]);
    if (res3.status === 200 && res2.status == 200 && res4.status == 200 && res5.status == 200 && res6.status == 200) { 
    //  this.schoolCoaches = res1.data;
      this.review_of_day = res2.data;
      this.recentReview = res3.data;
      this.topHeadlines = res4.data;
      this.videos = res5.data;
      this.highRatedCoach = res6.data;
      
     
     // this.allCity = res4.data;
      // this.review_of_day.bestReview = res2.data.bestReview
      this.loading = false;
    } else {
      this.swr();
      this.loading = false;
    }
  },
  
};
</script>
