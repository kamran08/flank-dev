
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
      mobileScreen:false,
      leandingData:[],
    }
  },
  

  methods: {
   

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
  },
  
};
</script>
