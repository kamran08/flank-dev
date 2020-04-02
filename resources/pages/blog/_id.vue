
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
                                    <li>

                                      <!-- 6666 comments -->



                                    </li>
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
                                 
                                  <slide v-for="(post,index) in posts" :key="index">
                                    <div class="flank-blog-slider-item">
                                      <div class="flank-slider-item-inner">
                                        <div class="flank-blog-slider-img">
                                          <img :src="post.img" alt="">
                                        </div>
                                        <div class="flank-blog-slider-details">
                                          <ul>
                                            <li>{{post.created_at}}</li>
                                            <li>
                                              <!-- <span class="disqus-comment-count" :data-disqus-url="`http://localhost:3000/blog/${post.id}`">First article</span> -->
                                                <!-- <a :href="`http://localhost:3000/blog/${post.id}`" :data-disqus-identifier="`http://localhost:3000/blog/${post.id}#disqus_thread`">First article</a> -->
                                            
                                            
                                            </li>
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
                            <div style="" id="disqus_thread" class="new-reply"></div>
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
                            <input type="text" placeholder="address@email.com" v-model="flankDaily.email">
                            <button @click="emailSubcription" v-if="!isLoad">Subscribe</button>
                             <button v-else disabled> Loading...</button>
                          </div>
                          <div class="rec-blog-sigunup">
                            <button @click="emailSubcription" v-if="!isLoad">Sign me up!</button>
                            <button v-else disabled> Loading...</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>


      
    
      
     <!-- <div style="padding: 14px 32px 0 309px;" id="dsq-count-scr"></div> -->
     <!-- <div style="padding: 14px 32px 0 309px;" id="disqus_thread" class="new-reply"></div> -->
     
    <script>
var disqus_thread = function () {
    this.page.url = window.location.href  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.pathname.substr(6); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://folank.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
    <script>
var dsq-count-scr = function () {
    this.page.url = window.location.href  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.pathname.substr(6); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = '//folank.disqus.com/count.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>

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
      url:'',
      identifier:'dsq-count-scr',
      local:'',
      isLoad:false,
      mobileScreen:false,
      leandingData:[],
      posts:[],
      singlePosts:[],
      id:'',
      flankDaily:{
        email:''
      }
    }
  },
  
  methods: {
    async getAllBlogPost(){
      const res = await this.callApi('get','/app/getAllBlogPosts')
      if(res.status==200){
          this.posts = res.data
      }
      
    },
    async getBlogPostsById(id){
      const res = await this.callApi('get',`/app/getBlogPostsById/${id}`)
      if(res.status==200){
        if(res.data.length<1){
          window.location = '/'
        }
        else{
          this.singlePosts = res.data
        }
      }
      
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
            this.e("check your network or email");
        }
    },
   

  },
  mounted(){
      if(window.innerWidth < 1199){
            this.mobileScreen = true
        }
         this.local = window.location.href
    
  },

  async created() {
      // this.local = window.location.href
      if(!this.$route.params.id){
        window.location = '/'
      }
      else{
        this.id = this.$route.params.id
        this.url = 'http://localhost:3000/blog/'+this.$route.params.id
        this.getBlogPostsById(this.id)



      }
      console.log()


      const res1 = await this.callApi("get", `/app/bannerImage`)
      if(res1.status==200){
          this.leandingData = res1.data
      }
      this.getAllBlogPost()
  },
  
};
</script>
