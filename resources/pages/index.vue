
<template>
    <div class="pt-120">
        <div  v-if="mobileScreen==false">
            <div class="new-banner-section" >
                <div class="container" style="">
                    <div class="inner-banner new-fl-inner-banner">
                        <figure>
                            <img src="/images/new-top.png" alt=""> 
                        </figure>
                    </div>
                </div>
            </div>
            
            <div class="new-section-content">
                <div class="container">
                    <div class="new-content-inner">
                        <div class="row">
                            <div class="new-inner-item-1"  >
                                <div class="col-md-3 col-sm-3">
                                    <div class="quick-link-content">
                                        <h4 class="pad-border cera-bold font-18 weight-400">QUICK LINKS</h4>
                                        <ul>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                    <figure>
                                                        <img src="/image/High-School-Coaches.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption" >
                                                        <p>High school coaches</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                    <figure>
                                                        <img src="/image/College-Coaches.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <p>College coaches</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                    <figure>
                                                        <img src="/image/Most-Connected.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <!-- <p>Professional sports</p> -->
                                                        <p>Healthiest coaches</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                    <figure>
                                                        <img src="/image/Travel-Coaches.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <p>Travel team coaches</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=legend`)">
                                                    <figure>
                                                        <img src="/image/Local-Coaches.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <p>Local instructors <span class="red">(Coming soon)</span></p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push(`/coach_search?pageOption=product`)">
                                                    <figure>
                                                        <img src="/image/ProductsServices.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <!-- <p>Products & service</p> -->
                                                        <p>Products & services <span class="red">(Coming soon)</span></p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review-content " v-if="!isLoggedIn" >
                                        <h4 class="pad-border">Review Your Coach</h4>
                                        <ul class="no-border">
                                            <li>
                                                <button @click="$router.push('/signup')" >Sign up</button> 
                                            </li>
                                            <li>
                                                <button @click="$router.push('/login')" >Log in</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="recent-activity-part">
                                        <div class="linear-border"></div>
                                        <!-- <div class="drop-title no-border">
                                            <h2 class="pad-border cera-bold font-24 weight-400">Recent activity</h2>
                                        </div> -->
                                        <ul class="activity-list activity-list-new">
                                            <li class="activity-list-inner" v-for="(item,index) in recentReview " :key="index" v-if="index<3" >
                                                <div class="recent-activity-part-inner">
                                                    <div class="activ-thumb" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                        <figure>
                                                            <img v-if="item.review_type == 'school'"  :src="(item.school.logo != null)? item.school.logo : '/images/defult_coach.png'"  alt="">
                                                            <img v-if="item.review_type == 'product'" :src="(item.product.img)? item.product.img : '/images/defult_coach.png'" alt="">
                                                            <img   v-if="item.review_type == 'legend'"  :src="(item.legend.img)? item.legend.img : '/images/defult_coach.png'"   alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="activ-det">
                                                        <div v-if="item.review_type == 'school'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                            <h3 v-if="item.coach" class="cera-bold font-18 weight-600" style="margin-bottom: 10px;">{{item.coach.name}}</h3>
                                                            <!-- <h4>{{item.school.city}}</h4> -->
                                                        </div>
                                                        <!-- <div v-if="item.review_type == 'product'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                            <h3>{{item.product.name}}</h3>
                                                            <h4>{{item.product.address}}</h4>
                                                        </div>
                                                        <div v-if="item.review_type == 'legend'"  @click="directToCoachWall(item)" style="cursor: pointer;">
                                                            <h3>{{item.legend.name}}</h3>
                                                            <h4>{{item.legend.address}}</h4>
                                                        </div> -->
                                                        <p class="cera-regular font-18">{{item.content}}</p>
                                                        <h5 class="itl  cera-light-italic font-18" style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)">
                                                        <!-- <img src="/images/title-logo.png" alt=""> -->
                                                         <span>by</span> {{item.reviwer.firstName}} {{item.reviwer.lastName}}
                                                         </h5>
                                                    </div>
                                                </div>
                                            </li>
                                            <!-- <li class="activity-list-inner">
                                                <div class="recent-activity-part-inner">
                                                    <div class="activ-thumb">
                                                        <figure>
                                                            <img src="/images/act.png" alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="activ-det">
                                                        <ul>
                                                            <li>
                                                                <h3>Coach mike berger</h3>
                                                                <h4>Austin, TX</h4>
                                                                <p>Sometimes I get to the little community of Austin. Be lorem ipsum dolor sit amet,</p>
                                                                <h5>By. Randy B.</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li class="activity-list-inner">
                                                <div class="recent-activity-part-inner">
                                                    <div class="activ-thumb">
                                                        <figure>
                                                            <img src="/images/act.png" alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="activ-det">
                                                        <ul>
                                                            <li>
                                                                <h3>Coach mike berger</h3>
                                                                <h4>Austin, TX</h4>
                                                                <p>Sometimes I get to the little community of Austin. Be lorem ipsum dolor sit amet,</p>
                                                                <h5>By. Randy B.</h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                </li> -->
                                        </ul>
                                        <div class="recent-title no-border new-recent-title">
                                            <h2 class="cera-medium font-18 weight-400">Recent Activity</h2>
                                        </div>
                                    </div>
                                    <div class="spotlight-content ">
                                        <div class="spotlight-content-title">
                                            <h4 class="cera-bold font-18 weight-400">The Deals Keep going</h4>
                                        </div>
                                        <div class="spotlight-img">
                                            <figure>
                                                <img src="/images/Spotlight.png" alt="">
                                            </figure>
                                        </div>
                                        <div class="spotlight-foot-img">
                                            <p><a href="#">Learn More</a></p>
                                            <figure>
                                                <img src="/images/flank.png" alt="">
                                            </figure>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="new-inner-item-2">
                                <div class="col-md-6 col-sm-6">
                                    <div class="inner-item-blog-sect">
                                        <div class="inner-item-blg">
                                            <figure>
                                                <img src="/images/header_0.jpg" alt="">
                                            </figure>
                                            <div class="inner-item-form"  >
                                                <form v-on:submit.prevent>
                                                    <div class="form-inner" @focusout="handleFocusOut" @focus="handleFocus"  :tabindex="tabindex">
                                                        <div class="form-inner-dropdown" @click="isDropOption = (isDropOption)? false : true"      >
                                                            <div class="form-inner-drop-tit">
                                                                <label>{{(pageOption)? pageOption: 'Find'}}</label>
                                                                <span><i class="fas fa-caret-down"></i></span>
                                                            </div>
                                                        </div>
                                                        <!-- <label>Find</label> -->
                                                        <input type="text"  v-model="searchTxt" v-on:keyup.enter="goToCoachSearch"  > 
                                                        <button @click="goToCoachSearch"><img src="/images/form-search.png" alt=""></button>
                                                        <div class="form-main-dropdown" v-if="isDropOption" >
                                                            <ul>
                                                                <li><a @click="pageOptionDropChange('coach')">Coach Name</a></li>
                                                                <li><a @click="pageOptionDropChange('school')">School Name</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- <div class="blg-caption">
                                                <figure>
                                                    <img src="/images/flank.png" alt="">
                                                </figure>
                                                </div> -->
                                        </div>
                                        <!-- <div class="inner-rated-iconic">
                                            <div class="rated-iconic-item">
                                                <figure><img src="/images/lg.png" alt=""></figure>
                                                <div class="iconic-coaches-caption">
                                                    <p>Best rated coaches</p>
                                                </div>
                                            </div>
                                            <div class="rated-iconic-item">
                                                <figure><img src="/images/lg1.png" alt=""></figure>
                                                <div class="iconic-coaches-caption">
                                                    <p>Worst rated coaches</p>
                                                </div>
                                            </div>
                                            <div class="rated-iconic-item">
                                                <figure><img src="/images/lg2.png" alt=""></figure>
                                                <div class="iconic-coaches-caption">
                                                    <p>Most connected</p>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <!-- <div class="vertising-opportunity-sec mobile-signup-sec">
                                        <div class="review-sect">
                                            <div class="drop-title new-font">
                                                <h2 class=" pad-border">Sign In For The Best Experience</h2>
                                            </div>
                                            <div class="new-auth-bx">
                                                <div class="new-auth-bx-in">
                                                    <a href="#">
                                                        <button>Sign in</button>
                                                    </a>
                                                    <p><a href="">Create an Account</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="coach-scandal-sec">
                                        <div class="coach-scandal">
                                            <div class="coach-scandal-title" style="border-width: 2px;">
                                                <figure>
                                                    <img src="/images/st.png" alt="">
                                                </figure>
                                                <div class="scandal-head">
                                                    <h2 class="cera-medium font-24 weight-400" >Coach scandal</h2>
                                                </div>
                                            </div>
                                            <div class="inner-scandal">
                                                <figure>
                                                    <img src="/images/soccer.png" alt="">
                                                </figure>
                                                <div class="scandal-caption">
                                                    <!-- <figure>
                                                        <img src="/images/round.png" alt="">
                                                    </figure> -->
                                                    <div class="blg-inner-cap new-blg-inner-cap">
                                                        <p class="">Come for the tour. But leave your review behind</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="inner-scandal-video no-border new-fl-hooper" v-if="videos.length>0" style="padding-top: 0;">
                                            <!-- <div class="logo-title">
                                                <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span>LATEST ON FLANK</span></h2>
                                            </div> -->
                                            <div class="row ">
                                                <hooper :itemsToShow="3" :infiniteScroll="true"  class="new-pr-hooler-parent" >
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                            
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
                                                </hooper>
                                                
                                                <!-- <div class="col-md-3 col-sm-6">
                                                    <div class="inner-scandal-video-item">
                                                     
                                                        <figure @click="openVideo(2)">
                                                            <img src="/newFile/2.png" alt="">
                                                          
                                                        </figure>
                                                        <div class="scandal-video-caption">
                                                            <p>Rutgers coach fired for abuse of players.</p>
                                                        </div>
                                                        <div class="video-logo">
                                                            <img src="/images/flank.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="inner-scandal-video-item">
                                                      
                                                        <figure @click="openVideo(4)">
                                                            <img src="/newFile/4.png" alt="">
                                                       
                                                        </figure>
                                                        <div class="scandal-video-caption">
                                                            <p>The abuse of child atheletes by their coaches. </p>
                                                        </div>
                                                        <div class="video-logo">
                                                            <img src="/images/flank.png" alt="">
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <!-- <div class="col-md-3 col-sm-6">
                                                    <div class="inner-scandal-video-item">
                                                        <figure @click="openVideo(3)">
                                                            <img src="/newFile/3.png" alt="">
                                                        </figure>
                                                        <div class="scandal-video-caption">
                                                            <p>Players accuse GCU women's soccer coach of verbal, mental, physical abuse.</p>
                                                        </div>
                                                        <div class="video-logo">
                                                            <img src="/images/flank.png" alt="">
                                                        </div>
                                                    </div>
                                                </div> -->
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="new-latest-flank" v-if="videos.length>0">
                                        <div class="inner-scandal-video">
                                            <div class="logo-title">
                                                <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span>LATEST ON FLANK</span></h2>
                                            </div>
                                            <div class="row plus-row">
                                                <hooper :itemsToShow="3" :infiniteScroll="true" >
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                            
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                                </hooper>
                                                
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="review-sect-part" v-if="review_of_day.bestReview && loading == false">
                                        <div class="review-sect">
                                            <div class="linear-border"></div>
                                            <div class="drop-title new-font">
                                                <h2 class=" pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Review of the Day</h2>
                                            </div>
                                            <div class="review-sect-header">
                                                <figure style="cursor:pointer;" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">
                                                    <img :src="review_of_day.bestReview.reviwer.img" alt="">
                                                    <!-- <img src="/images/ms.jpg" alt=""> -->
                                                </figure>
                                                <div class="review-header-title new-font">
                                                    <div class="review-title-left">
                                                        <h3 style="cursor:pointer; font-size: 20px;" class="cera-medium weight-400 font-24" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">{{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</h3>
                                                        <ul>
                                                            <li><span class="rev-ti-im"><img src="/images/mgroup.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                            <li><span class="rev-ti-im"><img src="/images/mgroup1.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                        </ul>
                                                        <h4 class="wr-re" style="" v-if="review_of_day.bestReview.review_type == 'school' ">Review For:  <span @click="directToCoachWall(review_of_day.bestReview)" v-if="review_of_day.bestReview.coach" style="font-size: 20px;">Coach {{review_of_day.bestReview.coach.name}}</span></h4>
                                                        <h4 class="wr-re" style="cursor:pointer;" v-if="review_of_day.bestReview.review_type == 'legend' ">Wrote a review for: Coach <span @click="directToCoachWall(review_of_day.bestReview)">{{review_of_day.bestReview.legend.name}}</span></h4>
                                                    </div>
                                                    <div class="review-champ">
                                                        <img src="/images/cham.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="review-border">
                                                <div class="review-border-left">
                                                    <img src="/images/sticker-3.png" alt="">
                                                </div>
                                                <div class="review-border-right">
                                                    <img src="/images/r.png" alt="">
                                                </div>
                                            </div> -->
                                            <div class="review-star">
                                                <ul>
                                                    <li :class="(review_of_day.bestReview.rating> 0)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 1)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 2)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 3)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 4)? '' : 'star-half' "><span  ><i class="fas fa-star"></i></span></li>
                                                </ul>
                                                <div class="review-time">
                                                    <!-- <p>{{review_of_day.bestReview.created_at}}</p> -->
                                                    <p>7/02/2019</p>
                                                </div>
                                            </div>
                                            <div class="revt-details new-font">
                                                <p style="font-size: 15px;">
                                                    <!-- {{review_of_day.bestReview.content}} -->
                                                    I was incredibly skeptical of Vespertine. And why wouldn't you be? Jordan Kahn is the
                                                    Elon Musk of the fine dining world, and it's the equivalent of paying a lot of money
                                                    for something that Musk thought up - it could very well be brilliant, because he's
                                                    clearly off on his own planet with everything he's doing,or it could be a disaster and
                                                    you wont know until you give it a go... <a href="#" style="color: #018ee7  !important;font-weight: 400;">Continue reading</a>
    
                                                </p>
                                            </div>
                                            <div class="recent-title">
                                                <div class="drop-bottom-icon" style="margin: 0;">
                                                    <ul>
                                                        <li><img src="/images/ic1.png" alt=""><span>{{review_of_day.bestReview.official}}</span></li>
                                                        <li><img src="/images/ic2.png" alt=""><span>{{review_of_day.bestReview.bravery}}</span></li>
                                                        <li><img src="/images/ic3.png" alt=""><span>{{review_of_day.bestReview.distinguished}}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <!-- <div class="vertising-opportunity-sec new-vertising-opportunity-sec">
                                        <div class="review-sect">
                                            <div class="drop-title new-font mb-10">
                                                <h2 class="">ADVERTISING OPPORTUNITIES</h2>
                                            </div>
                                            <div class="vertising-bg">
                                                <div class="vertising-title">
                                                    <h3>Advertising Opportunities for Any Local Instructor</h3>
                                                    <p>Flank is a website that connects people with great local instructors and sports related products.</p>
                                                    <a href="" class="">
                                                        <button> Coming soon </button>
                                                    </a>
                                                </div>
                                                <div class="vertising-image">
                                                    <img src="/images/1.png" alt="">
                                                </div>
                                            </div>
                                            <div class="vertising-text">
                                                <p>Coming soon</p>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="review-sect-part">
                                        <div class="review-sect">
                                            <div class="drop-title no-border">
                                                <h2 class="pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Recent drops</h2>
                                            </div>
                                            <div class="drop-content mt-10">
                                                <div class="row plus-row">
                                                     <hooper :itemsToShow="3" :infiniteScroll="true" >
                                                        <slide v-for="(item,index) in recentReview " :key="index" v-if="index<5">
                                                            <div class="drop-item"  >
                                                                <div class="drop-item-inner">
                                                                    <div class="linear-border"></div>
                                                                    <div class="drop-item-title">
                                                                        <figure>
                                                                            <!-- <img :src="item.reviwer.img"  alt=""> -->
                                                                            <img src="/images/ms.jpg" alt="">
                                                                        </figure>
                                                                        <div class="drop-title-caption">
                                                                            <h3 style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                            <p>Wrote a Review</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="drop-inner">
                                                                        <div class="drop-inner-figure">
                                                                            <figure>
                                                                                <img src="/images/cmnt1.png" alt="">
                                                                            </figure>
                                                                        </div>
                                                                        <div class="drop-inner-cap">
                                                                            <div class="drop-inner-coach">
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                            </div>
                                                                            <div class="review-star small-review-star">
                                                                                <ul>
                                                                                    <li  :class="(item.rating>0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>1)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>2)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>3)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>4)? '' : 'star-half'"  ><span><i class="fas fa-star"></i></span></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="drop-inner-coach-txt">
                                                                                <p>{{item.content}}</p>
                                                                                <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                            </div>
                                                                        </div>
                                                                        <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                            <ul>
                                                                                <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                                <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                                <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </slide>
                                                        
                                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                    </hooper>
                                                </div>
                                                <div class="row plus-row" v-if="showMoreActivity>5">
                                                     <hooper :itemsToShow="3" :infiniteScroll="true" >
                                                        <slide v-for="(item,index) in recentReview " :key="index" v-if="index>5">
                                                            <div class="drop-item"  >
                                                                <div class="drop-item-inner">
                                                                    <div class="linear-border"></div>
                                                                    <div class="drop-item-title">
                                                                        <figure>
                                                                            <!-- <img :src="item.reviwer.img"  alt=""> -->
                                                                            <img src="/images/ms.jpg" alt="">
                                                                        </figure>
                                                                        <div class="drop-title-caption">
                                                                            <h3 style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                            <p>Wrote a Review</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="drop-inner">
                                                                        <div class="drop-inner-figure">
                                                                            <figure>
                                                                                <img src="/images/cmnt1.png" alt="">
                                                                            </figure>
                                                                        </div>
                                                                        <div class="drop-inner-cap">
                                                                            <div class="drop-inner-coach">
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                            </div>
                                                                            <div class="review-star small-review-star">
                                                                                <ul>
                                                                                    <li  :class="(item.rating>0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>1)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>2)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>3)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                    <li :class="(item.rating>4)? '' : 'star-half'"  ><span><i class="fas fa-star"></i></span></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="drop-inner-coach-txt">
                                                                                <p>{{item.content}}</p>
                                                                                <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                            </div>
                                                                        </div>
                                                                        <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                            <ul>
                                                                                <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                                <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                                <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </slide>
                                                        
                                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                    </hooper>
                                                </div>
                                                <div class="row">
                                                    <div class="drop-item" style="margin-top: 10px">
                                                        <div class="drop-item-inner">
                                                            <div class="linear-border"></div>
                                                            <div class="drop-item-title" style="padding: 10px 10px 10px 25px">
                                                                <figure><img src="/images/ms.jpg" alt=""></figure>
                                                                <div class="drop-title-caption">
                                                                    <h3 style="cursor: pointer;">Nazmul C.</h3>
                                                                    <p>Wrote a Review</p>
                                                                </div>
                                                            </div>
                                                            <div class="drop-inner">
                                                                <div class="drop-inner-figure drop-inner-figure-big">
                                                                    <figure><img src="/images/cmnt1.png" alt=""></figure>
                                                                </div>
                                                                <div class="drop-inner-cap">
                                                                    <div class="drop-inner-coach">
                                                                        <!---->
                                                                        <h4 style="cursor: pointer;">Coach Nazmul</h4></div>
                                                                    <div class="review-star small-review-star">
                                                                        <ul>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="drop-inner-coach-txt">
                                                                        <p>aaaaaa</p> <a>Continue reading</a></div>
                                                                </div>
                                                                <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                    <ul>
                                                                        <li><img src="/images/ic1.png" alt=""><span>0</span></li>
                                                                        <li><img src="/images/ic2.png" alt=""><span>0</span></li>
                                                                        <li><img src="/images/ic3.png" alt=""><span>0</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-more" v-if="showMoreActivity == 5">
                                                <p><a @click="showMoreActivity = 10" ><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                            </div>
                                            <div class="drop-more" v-else>
                                                <p><a @click="showMoreActivity = 5" ><span><i class="fas fa-chevron-up"></i></span>Show less activity </a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-sect-part">
                                        <div class="review-sect">
                                            <div class="drop-title tup no-border">
                                                <h2 class="pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Browse coaches by category</h2>
                                            </div>
                                            <div class="activity-sec mt-10">
                                                <div class="row plus-row no-margin">
                                                    <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/high-school.png" alt="">
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/college-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/travel-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=legend`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/local-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/best-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=Worst`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/worst-coach.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/healtiest-coach.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?pageOption=product`)">
                                                        <div class="activity-inner">
                                                            <!-- <div class="linear-border"></div> -->
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/products-service.png" alt="">
                                                                </figure>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <!-- <div class="inner-item-form">
                                        <form action="#">
                                            <div class="form-inner">
                                                <label>Find</label>
                                                <input type="text" placeholder="School Name, Coach Name">
                                                <button><img src="/images/form-search.png" alt=""></button>
                                            </div>
                                        </form>
                                        </div> -->
                                    <!-- <div class="inner-rated-iconic">
                                        <div class="rated-iconic-item">
                                            <figure><img src="/images/lg.png" alt=""></figure>
                                            <div class="iconic-coaches-caption">
                                                <p>Best rated coaches</p>
                                            </div>
                                        </div>
                                        <div class="rated-iconic-item">
                                            <figure><img src="/images/lg1.png" alt=""></figure>
                                            <div class="iconic-coaches-caption">
                                                <p>Worst rated coaches</p>
                                            </div>
                                        </div>
                                        <div class="rated-iconic-item">
                                            <figure><img src="/images/lg2.png" alt=""></figure>
                                            <div class="iconic-coaches-caption">
                                                <p>Most connected</p>
                                            </div>
                                        </div>
                                        </div> -->
                                </div>
                            </div>
                            <div class="new-inner-item-1"  >
                                <div class="col-md-3 col-sm-3" v-if="topHeadlines.length>0">
                                    <div class="headline-link-content">
                                        <h4 class="pad-border">Top headlines</h4>
                                        <ul>
                                            <li v-for="(item,index) in topHeadlines" :key="index">
                                                <a href="#">
                                                {{item.title}}
                                                </a>
                                            </li>
                                            <!--<li>
                                                <a href="#">
                                                Example Test of Headline - Example 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                Example Test of Headline - Example 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                Example Test of Headline - Example 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                Example Test of Headline - Example 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                Example Test of Headline - Example 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <img src="/images/flan.png" alt="">
                                                Example Test of Headline
                                                </a>
                                            </li> -->
                                            <li>
                                                <a href="#">
                                                <img src="/images/flan.png" alt="">
                                                Example Text of Headline
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flank-banner ">
                                        <figure>
                                            <img src="/images/flank-banner.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="scandal-analytics ">
                                        <div class="scandal-analytics-title">
                                            <h4 class="pad-border">FLANK Analytics</h4>
                                        </div>
                                        <div class="scandal-ana-banner">
                                            <figure>
                                                <img src="/images/banner-2.png" alt="">
                                            </figure>
                                        </div>
                                        <div class="scandal-list">
                                            <ul>
                                                <li>
                                                    <a @click="openToolTip(1)">Health Score Index (HSI)</a>
                                                </li>
                                                <li>
                                                    <a @click="openToolTip(2)
                                                        ">Strength of Team Index (STI)</a>
                                                </li>
                                                <li>
                                                    <a @click="openToolTip(3)">Program Chemistry Index (PCI)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="scandal-extra-link">
                                            <ul>
                                                <li>
                                                    <nuxt-link to="/tos">Terms of Service</nuxt-link>
                                                    <!-- <a href="#">Terms of Service</a> -->
                                                </li>
                                                <li>
                                                    <!-- <a href="#">Content Guidelines</a> -->
                                                    <nuxt-link to="/guidlines">Content Guidelines</nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/policy">Privacy Policy</nuxt-link>
                                                    <!-- <a href="#">Privacy Policy</a> -->
                                                </li>
                                                <!-- <li>
                                                    <a href="#">Free Speech Act</a>
                                                </li>
                                                <li>
                                                    <a href="#">Add Choice</a>
                                                </li>
                                                <li>
                                                    <a href="#">Advertise on Flank</a>
                                                </li> -->
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="flank-daily-sec">
                                        <div class="flank-daily-img">
                                            <figure>
                                                <img src="/images/flank-daily.png" alt="">
                                            </figure>
                                        </div>
                                        <div class="flank-daily-content">
                                            <div style="padding: 0 30px;">
                                                <h2>Get the best of FLANK sent to your inbox</h2>
                                                <p>The FLANK Daily delivers the most important team predictions for your team.</p>
                                            </div>
                                            <form v-on:submit.prevent>
                                                <div class="fla-form-full">
                                                    <input type="text" placeholder="Email Address" v-model="flankDaily.email" >
                                                </div>
                                                <div class="fla-form-button">
                                                    <button @click="emailSubcription"> Sign me up!</button>
                                                </div>
                                            </form>
                                            <div class="priv">
                                                <p><a href="#">Privacy policy</a></p>
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
        <div v-else-if="mobileScreen==true">
            <div class="new-banner-section" >
                <div class="container no-padding">
                    <div class="inner-banner new-fl-inner-banner">
                        <figure>
                            <img src="/images/new-top.png" alt=""> 
                        </figure>
                    </div>
                </div>
            </div>
            <div :class="(this.isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action">
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Account</h4>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                    <figure>
                                        <img src="/image/High-School-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption" >
                                        <p>High school coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                    <figure>
                                        <img src="/image/College-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>College coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                    <figure>
                                        <img src="/image/Most-Connected.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <!-- <p>Professional sports</p> -->
                                        <p>Healthiest coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                    <figure>
                                        <img src="/image/Travel-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Travel team coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=legend`)">
                                    <figure>
                                        <img src="/image/Local-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Local instructors <span class="red">(Coming soon)</span></p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=product`)">
                                    <figure>
                                        <img src="/image/ProductsServices.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <!-- <p>Products & service</p> -->
                                        <p>Products & services <span class="red">(Coming soon)</span></p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Help & settings</h4>
                        <ul>
                            <li v-if="isLoggedIn"><nuxt-link :to="`flanker/${authInfo.id}`"><div class="quick-link-caption"><p>Your account</p></div></nuxt-link></li>
                            <li else><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Your account</p></div></nuxt-link></li>
                            <li else><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Sign in</p></div></nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>About</h4>
                        <ul>
                            <li><nuxt-link to="/about"><div class="quick-link-caption"><p>About flank</p></div></nuxt-link></li>
                            <li><nuxt-link to="/guidlines"><div class="quick-link-caption"><p>Content Guidelines</p></div></nuxt-link></li>
                            <li><nuxt-link to="/tos"><div class="quick-link-caption"><p>Tearms of service</p></div></nuxt-link></li>
                            <li><nuxt-link to="/policy"><div class="quick-link-caption"><p>Privacy policy</p></div></nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="new-section-content no-padding">
                <div class="container no-padding">
                    <div class="new-content-inner">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="mob-new-slider">
                                    <div class="mob-slider-box">
                                        <hooper :settings="hooperSettings" >
                                            <slide>
                                                <figure>
                                                    <img src="/images/mob-header-slider.png" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/greatestyears.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/6Coaches.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/StandardFlankerBanner.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <hooper-pagination slot="hooper-addons"></hooper-pagination>
                                        </hooper>
                                    </div>
                                </div>
                                <div class="vertising-opportunity-sec mobile-signup-sec new-box-shadow">
                                    <div class="review-sect" style="box-shadow: none;">
                                        <div class="drop-title new-font mb-10">
                                            <h2 class="">Sign In For The Best Experience</h2>
                                        </div>
                                        <div class="new-auth-bx">
                                            <div class="new-auth-bx-in">
                                                <nuxt-link to="/login">
                                                    <button>Sign in</button>
                                                </nuxt-link>
                                                <p><nuxt-link to="/signup">Create an Account</nuxt-link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="headline-link-content new-headline-link-content new-box-shadow new-mt-10">
                                    <h4 class="pad-border" style="text-transform: uppercase; font-size: 24px;">Top headlines</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <img src="/images/flan.png" alt="">
                                            Example Test of Headline
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="coach-scandal-sec new-box-shadow new-mt-10" style="padding: 0;">
                                    <div class="coach-scandal" style="padding: 25px 30px;">
                                        <div class="coach-scandal-title" style="border-width: 2px;">
                                            <figure>
                                                <img src="/images/st.png" alt="">
                                            </figure>
                                            <div class="scandal-head">
                                                <h2 class="cera-bold font-24 weight-400" >Coach scandal</h2>
                                            </div>
                                        </div>
                                        <div class="inner-scandal">
                                            <figure>
                                                <img src="/images/soccer.png" alt="">
                                            </figure>
                                            <div class="scandal-caption">
                                                <!-- <figure>
                                                    <img src="/images/round.png" alt="">
                                                </figure> -->
                                                <div class="blg-inner-cap">
                                                    <p class="cera-black font-18 weight-400">Come for the tour. But leave your review behind</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner-scandal-video" v-if="videos.length>0" style="padding: 0;">
                                        <div class="logo-title" style="padding: 15px 30px; margin-bottom: 5px;">
                                            <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span>LATEST ON FLANKs</span></h2>
                                        </div>
                                        <div class="row plus-row" style="padding-bottom: 15px;">
                                            <hooper :itemsToShow="3" :infiniteScroll="false">
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                            
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                                </hooper>
                                            
                                           
                                            
                                            <!-- <div class="col-md-3 col-sm-6">
                                                <div class="inner-scandal-video-item">
                                                    <figure @click="openVideo(3)">
                                                        <img src="/newFile/3.png" alt="">
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p>Players accuse GCU women's soccer coach of verbal, mental, physical abuse.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/images/flank.png" alt="">
                                                    </div>
                                                </div>
                                            </div> -->
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="recent-activity-part  new-box-shadow new-mt-10">
                                    <!-- <div class="linear-border"></div> -->
                                    <div class="drop-title no-border">
                                        <h2 class="pad-border cera-bold font-24 weight-400" style="border-width: 2px !important;">Recent activity</h2>
                                    </div>
                                    <ul class="activity-list mob-new-activity-list">
                                        <li class="activity-list-inner" v-for="(item,index) in recentReview " :key="index" v-if="index<3" >
                                            <div class="recent-activity-part-inner">
                                                <div class="activ-thumb new-activ-thumb" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                    <figure>
                                                        <img v-if="item.review_type == 'school'"  :src="(item.school.logo != null)? item.school.logo : '/images/defult_coach.png'"  alt="">
                                                        <img v-if="item.review_type == 'product'" :src="(item.product.img)? item.product.img : '/images/defult_coach.png'" alt="">
                                                        <img   v-if="item.review_type == 'legend'"  :src="(item.legend.img)? item.legend.img : '/images/defult_coach.png'"   alt="">
                                                    </figure>
                                                </div>
                                                <div class="activ-det new-activ-det">
                                                    <div v-if="item.review_type == 'school'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                        <h3 v-if="item.coach" class="cera-bold font-18 weight-400" style="margin-bottom: 10px;">{{item.coach.name}}</h3>
                                                        <!-- <h4>{{item.school.city}}</h4> -->
                                                    </div>
                                                    <!-- <div v-if="item.review_type == 'product'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                        <h3>{{item.product.name}}</h3>
                                                        <h4>{{item.product.address}}</h4>
                                                    </div>
                                                    <div v-if="item.review_type == 'legend'"  @click="directToCoachWall(item)" style="cursor: pointer;">
                                                        <h3>{{item.legend.name}}</h3>
                                                        <h4>{{item.legend.address}}</h4>
                                                    </div> -->
                                                    <p class="cera-medium font-18">{{item.content}}</p>
                                                    <h5 class="itl receiver-na cera-light-italic" style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"><img src="/images/title-logo.png" alt=""> <span>by</span> {{item.reviwer.firstName}} {{item.reviwer.lastName}}</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- <li class="activity-list-inner">
                                            <div class="recent-activity-part-inner">
                                                <div class="activ-thumb">
                                                    <figure>
                                                        <img src="/images/act.png" alt="">
                                                    </figure>
                                                </div>
                                                <div class="activ-det">
                                                    <ul>
                                                        <li>
                                                            <h3>Coach mike berger</h3>
                                                            <h4>Austin, TX</h4>
                                                            <p>Sometimes I get to the little community of Austin. Be lorem ipsum dolor sit amet,</p>
                                                            <h5>By. Randy B.</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </li>
                                            <li class="activity-list-inner">
                                            <div class="recent-activity-part-inner">
                                                <div class="activ-thumb">
                                                    <figure>
                                                        <img src="/images/act.png" alt="">
                                                    </figure>
                                                </div>
                                                <div class="activ-det">
                                                    <ul>
                                                        <li>
                                                            <h3>Coach mike berger</h3>
                                                            <h4>Austin, TX</h4>
                                                            <p>Sometimes I get to the little community of Austin. Be lorem ipsum dolor sit amet,</p>
                                                            <h5>By. Randy B.</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </li> -->
                                    </ul>
                                    <!-- <div class="recent-title">
                                        <h2>Recent Activity</h2>
                                    </div> -->
                                </div>
                                
                                <div class="new-latest-flank  new-box-shadow new-mt-10" style="padding: 0;" v-if="videos.length>0">
                                    <div class="inner-scandal-video no-border" style="padding: 0;">
                                        <div class="logo-title" style="padding: 15px 30px; margin-bottom: 5px;">
                                            <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span class="cera-black">LATEST ON FLANK</span></h2>
                                        </div>
                                        <div class="row plus-row" style="padding-bottom: 15px;">
                                            <hooper :itemsToShow="3"  >
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                            
                                                                </figure>
                                                                <div class="new-mob-latest-details">
                                                                    <div class="new-mob-latest-details-inner">
                                                                        <h3>Coach name</h3>
                                                                        <h4>School name</h4>
                                                                    </div>
                                                                </div>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                                </hooper>
                                            
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part" v-if="review_of_day.bestReview && loading == false">
                                    <div class="review-sect">
                                        <div class="linear-border"></div>
                                        <div class="drop-title new-font">
                                            <h2 class=" pad-border cera-bold weight-400 font-24" style="border-width: 2px !important;">Review of the Day</h2>
                                        </div>
                                        <div class="review-sect-header">
                                            <figure style="cursor:pointer;" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">
                                                <img :src="review_of_day.bestReview.reviwer.img" alt="">
                                                <!-- <img src="/images/ms.jpg" alt=""> -->
                                            </figure>
                                            <div class="review-header-title new-font">
                                                <div class="review-title-left">
                                                    <h3 style="cursor:pointer; font-size: 20px;" class="cera-medium weight-400 font-24" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">{{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</h3>
                                                    <ul>
                                                        <li><span class="rev-ti-im"><img src="/images/mgroup.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                        <li><span class="rev-ti-im"><img src="/images/mgroup1.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                    </ul>
                                                    <h4 class="wr-re" style="" v-if="review_of_day.bestReview.review_type == 'school' ">Review For:  <span @click="directToCoachWall(review_of_day.bestReview)" v-if="review_of_day.bestReview.coach" style="font-size: 20px;">Coach {{review_of_day.bestReview.coach.name}}</span></h4>
                                                    <h4 class="wr-re" style="cursor:pointer;" v-if="review_of_day.bestReview.review_type == 'legend' ">Wrote a review for: Coach <span @click="directToCoachWall(review_of_day.bestReview)">{{review_of_day.bestReview.legend.name}}</span></h4>
                                                </div>
                                                <div class="review-champ">
                                                    <img src="/images/cham.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="review-border">
                                            <div class="review-border-left">
                                                <img src="/images/sticker-3.png" alt="">
                                            </div>
                                            <div class="review-border-right">
                                                <img src="/images/r.png" alt="">
                                            </div>
                                        </div> -->
                                        <div class="review-star">
                                            <ul>
                                                <li :class="(review_of_day.bestReview.rating> 0)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 1)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 2)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 3)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 4)? '' : 'star-half' "><span  ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <div class="review-time">
                                                <!-- <p>{{review_of_day.bestReview.created_at}}</p> -->
                                                <p>7/02/2019</p>
                                            </div>
                                        </div>
                                        <div class="revt-details new-font">
                                            <p style="font-size: 15px;">
                                                <!-- {{review_of_day.bestReview.content}} -->
                                                I was incredibly skeptical of Vespertine. And why wouldn't you be? Jordan Kahn is the
                                                Elon Musk of the fine dining world, and it's the equivalent of paying a lot of money
                                                for something that Musk thought up - it could very well be brilliant, because he's
                                                clearly off on his own planet with everything he's doing,or it could be a disaster and
                                                you wont know until you give it a go... <a href="#" style="color: #018ee7  !important;font-weight: 400;">Continue reading</a>

                                            </p>
                                        </div>
                                        <div class="recent-title">
                                            <div class="drop-bottom-icon">
                                                <ul>
                                                    <li><img src="/images/ic1.png" alt=""><span>{{review_of_day.bestReview.official}}</span></li>
                                                    <li><img src="/images/ic2.png" alt=""><span>{{review_of_day.bestReview.bravery}}</span></li>
                                                    <li><img src="/images/ic3.png" alt=""><span>{{review_of_day.bestReview.distinguished}}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="vertising-opportunity-sec new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="drop-title new-font mb-10">
                                            <h2 class="">ADVERTISING OPPORTUNITIES</h2>
                                        </div>
                                        <div class="vertising-bg">
                                            <!-- <div class="vertising-title">
                                                <h3 class="cera-medium font-18 weight-900">Advertising Opportunities for Local Instructor</h3>
                                                <p class="cera-regular weight-400">Flank is a website that connects people with great local instructors and sports related products.</p>
                                                <a href="" class="">
                                                    <button class="cera-regular"> Coming soon </button>
                                                </a>
                                            </div>
                                            <div class="vertising-image">
                                                <img src="/images/1.png" alt="">
                                            </div> -->
                                            <img src="/images/local-ins2.png" >
                                        </div>
                                        <div class="vertising-text">
                                            <p>Coming soon</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="drop-title no-border">
                                            <h2 class="pad-border cera-bold weight-400 font-24" style="border-width: 2px !important;">Recent drops New</h2>
                                        </div>
                                        <div class="drop-content mt-10">
                                            <div class="row plus-row">
                                                 <hooper :itemsToShow="3"  >
                                                    <slide v-for="(item,index) in recentReview " :key="index" v-if="index<showMoreActivity" class="new-mob-drop-item">
                                                        <div class="drop-item"  >
                                                            <div class="drop-item-inner">
                                                                <div class="linear-border"></div>
                                                                <div class="drop-item-title new-drop-item-title">
                                                                    <figure>
                                                                        <!-- <img :src="item.reviwer.img"  alt=""> -->
                                                                        <img src="/images/ms.jpg" alt="">
                                                                    </figure>
                                                                    <div class="drop-title-caption">
                                                                        <h3 style="cursor:pointer;" class="font-18"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                        <p class="font-12">Wrote a Review</p>
                                                                    </div>
                                                                </div>
                                                                <div class="drop-inner">
                                                                    <div class="drop-inner-figure">
                                                                        <figure>
                                                                            <img src="/images/cmnt1.png" alt="">
                                                                        </figure>
                                                                    </div>
                                                                    <div class="drop-inner-cap">
                                                                        <div class="drop-inner-coach">
                                                                            <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                            <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                        </div>
                                                                        <div class="review-star small-review-star">
                                                                            <ul>
                                                                                <li  :class="(item.rating>0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                                                <li :class="(item.rating>1)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                <li :class="(item.rating>2)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                <li :class="(item.rating>3)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                                                <li :class="(item.rating>4)? '' : 'star-half'"  ><span><i class="fas fa-star"></i></span></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="drop-inner-coach-txt">
                                                                            <p>{{item.content}}</p>
                                                                            <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                        </div>
                                                                    </div>
                                                                    <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                        <ul>
                                                                            <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                            <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                            <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                </hooper>
                                               
                                            </div>
                                            
                                            <div class="row plus-row">
                                                <div class="drop-item" style="margin-top: 15px">
                                                    <div class="drop-item-inner">
                                                        <div class="linear-border"></div>
                                                        <div class="drop-item-title" style="padding: 10px 10px 10px 25px">
                                                            <figure><img src="/images/ms.jpg" alt=""></figure>
                                                            <div class="drop-title-caption">
                                                                <h3 style="cursor: pointer;">Nazmul C.</h3>
                                                                <p class="font-12">Wrote a Review</p>
                                                            </div>
                                                        </div>
                                                        <div class="drop-inner">
                                                            <div class="drop-inner-figure drop-inner-figure-big">
                                                                <figure><img src="/images/cmnt1.png" alt=""></figure>
                                                            </div>
                                                            <div class="drop-inner-cap">
                                                                <div class="drop-inner-coach">
                                                                    <!---->
                                                                    <h4 style="cursor: pointer;" class="font-16">Coach Nazmul</h4></div>
                                                                <div class="review-star small-review-star">
                                                                    <ul>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="drop-inner-coach-txt">
                                                                    <p class="font-14">aaaaaa</p> <a>Continue reading</a></div>
                                                            </div>
                                                            <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                <ul>
                                                                    <li><img src="/images/ic1.png" alt=""><span>0</span></li>
                                                                    <li><img src="/images/ic2.png" alt=""><span>0</span></li>
                                                                    <li><img src="/images/ic3.png" alt=""><span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="drop-more" v-if="showMoreActivity == 5">
                                            <p><a @click="showMoreActivity = 10" class="font-18"><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                        </div>
                                        <div class="drop-more" v-else>
                                            <p><a @click="showMoreActivity = 3"  class="font-18"><span><i class="fas fa-chevron-up"></i></span>Show less activity </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="drop-title tup no-border">
                                            <h2 class="pad-border cera-bold font-24 weight-400" style="border-width: 2px !important;">Browse coaches by category</h2>
                                        </div>
                                        <div class="activity-sec mt-10">
                                            <div class="row plus-row">
                                                <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/high-school.png" alt="">
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/college-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/travel-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=legend`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/local-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/best-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=Worst`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/worst-coach.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/healtiest-coach.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?pageOption=product`)">
                                                    <div class="activity-inner">
                                                        <!-- <div class="linear-border"></div> -->
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/products-service.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flank-daily-sec">
                                    <div class="flank-daily-img">
                                        <figure>
                                            <img src="/images/flank-daily.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="flank-daily-content">
                                        <h2>Get the best of FLANK sent to your inbox</h2>
                                        <p class="font-12">The FLANK Daily delivers the most important team predictions for your team.</p>
                                        <form v-on:submit.prevent>
                                            <div class="fla-form-full">
                                                <input type="text" placeholder="Email Address" v-model="flankDaily.email" >
                                            </div>
                                            <div class="fla-form-button">
                                                <button @click="emailSubcription" class="cera-medium"> Sign me up!</button>
                                            </div>
                                        </form>
                                        <div class="priv">
                                            <p><a href="#" class="cera-medium">Privacy policy</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <Modal title="Details" v-model="toolTipModal" >
            <div class="tooltip-box" >
                <p v-html="toolTipText" ></p>
            </div>
        </Modal>
        <Modal  v-model="isVideo.modal" :mask-closable='true'  :footer-hide='true' >
            <div slot="header">
                <h3 v-html="isVideo.header"></h3>
            </div>
            <div slot="close">
                <span style="font-size: 20px;color: #a8a8a8dd;" @click="closeVideo" ><i class="fas fa-times"></i></span>
            </div>
            <div  >
                <p v-html="isVideo.link" ></p>
            </div>
        </Modal>
    </div>
</template>
<script>
import { Hooper, Slide ,Pagination as HooperPagination ,Navigation as HooperNavigation} from 'hooper';

export default {
    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
    },
  data() {
    return {
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
            // centerMode: true
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
        const res = await this.callApi('post','/app/emailSubscription', this.flankDaily)
        if(res.status == 200){
            this.s("You have Subscribed to Flank Daily !")
            this.flankDaily.email = ''
        }
        else{
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

    if(this.$route.query.login == 'success') this.i("Login Successful !")
    const [ res2, res3,res4,res5] = await Promise.all([
    //  this.callApi("get", `/app/getSchoolcoaches`),
      this.callApi("get", `/app/reviewOfTheDay`),
     // this.callApi("get", `/app/recentCitys`),
      this.callApi("get", `/app/getRecentReview`),
      this.callApi("get", `/app/topHeadline`),
      this.callApi("get", `/app/videos`),
    ]);
    if (res3.status === 200 && res2.status == 200 && res4.status == 200 && res5.status == 200) { 
    //  this.schoolCoaches = res1.data;
      this.review_of_day = res2.data;
      this.recentReview = res3.data;
      this.topHeadlines = res4.data;
      this.videos = res5.data;
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
