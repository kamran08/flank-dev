<template>
  <div>
      

        <div class="new-banner-section">
            <div class="container-fluid">
                <div class="inner-banner">
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
                        <div class="new-inner-item-1">
                            <div class="col-md-3 col-sm-3">
                                <div class="quick-link-content">
                                    <h4>Quick links</h4>
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
                                                    <p>Professional sports</p>
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
                                                    <p>Local instructors</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a @click="$router.push(`/coach_search?pageOption=product`)">
                                                <figure>
                                                    <img src="/image/ProductsServices.gif" alt="">
                                                </figure>
                                                <div class="quick-link-caption">
                                                    <p>Products & service</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-content" v-if="!isLoggedIn" >
                                    <h4>Review your coach</h4>
                                    <ul>
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
                                    <ul class="activity-list">

                                        <li class="activity-list-inner" v-for="(item,index) in recentReview " :key="index">
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
                                                         <h3>{{item.coach.name}}</h3>
                                                        <h4>{{item.school.city}}</h4>
                                                    </div>
                                                    <div v-if="item.review_type == 'product'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                         <h3>{{item.product.name}}</h3>
                                                        <h4>{{item.product.address}}</h4>
                                                    </div>
                                                    <div v-if="item.review_type == 'legend'"  @click="directToCoachWall(item)" style="cursor: pointer;">
                                                         <h3>{{item.legend.name}}</h3>
                                                        <h4>{{item.legend.address}}</h4>
                                                    </div>
                                                   

                                                    <p>{{item.content}}</p>
                                                    <h5>By {{item.reviwer.firstName}} {{item.reviwer.lastName}}</h5>
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
                                    <div class="recent-title">
                                        <h2>Recent Activity</h2>
                                    </div>
                                </div>
                                <div class="spotlight-content">
                                    <h4>The Deals Keep going</h4>
                                    <div class="spotlight-img">
                                        <figure>
                                            <img src="/images/Spotlight.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="spotlight-foot-img">
                                        <figure>
                                            <img src="/images/flank.png" alt="">
                                        </figure>
                                    </div>
                                    <p><a href="#">Learn more</a></p>
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
                                                            <li><a @click="pageOptionDropChange('school')">School Name</a></li>
                                                            <li><a @click="pageOptionDropChange('coach')">Coach Name</a></li>
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
                                    <div class="inner-rated-iconic">
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
                                    </div>
                                </div>
                                <div class="coach-scandal">
                                    <div class="coach-scandal-title">
                                        <figure>
                                            <img src="/images/st.png" alt="">
                                        </figure>
                                        <div class="scandal-head">
                                            <h2>Coach scandal</h2>
                                        </div>
                                    </div>
                                    <div class="inner-scandal">
                                        <figure>
                                            <img src="/images/soccer.png" alt="">
                                        </figure>
                                        <div class="scandal-caption">
                                            <figure>
                                                <img src="/images/round.png" alt="">
                                            </figure>
                                            <div class="blg-inner-cap">
                                                <p>Come for the tour. But leave your review behind</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="inner-scandal-video">
                                        <div class="row">
                                            <div class="col-md-3 col-sm-6">
                                                <div class="inner-scandal-video-item">
                                                    <figure>
                                                        <img src="/image/Thumbnailone.png" alt="">
                                                        <div class="play-caption">
                                                            <span><i class="fas fa-play"></i></span>
                                                        </div>
                                                        <div class="video-duration">
                                                            <p class="duration"><span>2:17</span></p>
                                                        </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p>Out of control Coache's abusive behaviour caught on tape.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/images/flank.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="inner-scandal-video-item">
                                                    <figure>
                                                        <img src="/image/Thumbnaitwo.png" alt="">
                                                        <div class="play-caption">
                                                            <span><i class="fas fa-play"></i></span>
                                                        </div>
                                                        <div class="video-duration">
                                                            <p class="duration"><span>2:17</span></p>
                                                        </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p>Out of control Coache's abusive behaviour caught on tape.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/images/flank.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="inner-scandal-video-item">
                                                    <figure>
                                                        <img src="/image/Thumbnailthree.png" alt="">
                                                        <div class="play-caption">
                                                            <span><i class="fas fa-play"></i></span>
                                                        </div>
                                                        <div class="video-duration">
                                                            <p class="duration"><span>2:17</span></p>
                                                        </div>
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
                                                    <figure>
                                                        <img src="/image/Thumbnailfour.png" alt="">
                                                        <div class="play-caption">
                                                            <span><i class="fas fa-play"></i></span>
                                                        </div>
                                                        <div class="video-duration">
                                                            <p class="duration"><span>2:17</span></p>
                                                        </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p>Out of control Coache's abusive behaviour caught on tape.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/images/flank.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part" v-if="review_of_day.info && loading == false">
                                    <div class="drop-title">
                                        <h2>Review of the Day</h2>
                                    </div>
                                    <div class="review-sect">
                                        <div class="linear-border"></div>
                                        <div class="review-sect-header">
                                            <figure>
                                                <img src="/images/review-1.png" alt="">
                                            </figure>
                                            <div class="review-header-title">
                                                <h3 @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)"> By {{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</h3>
                                                <ul>
                                                    <li><span class="rev-ti-im"><img src="/images/mw.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                    <li><span class="rev-ti-ic"><i class="fas fa-star"></i></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                </ul>
                                                <h4 class="wr-re">Wrote a review for: <span @click="goToProfilePage()">{{review_of_day.bestReview.reviewforInfo.name}}</span></h4>
                                            </div>
                                        </div>
                                        <div class="review-border">
                                            <div class="review-border-left">
                                                <img src="/images/sticker-3.png" alt="">
                                            </div>
                                            <div class="review-border-right">
                                                <img src="/images/r.png" alt="">
                                            </div>
                                        </div>
                                        <div class="review-star">
                                            <ul>
                                                <li><span><i class="fas fa-star"></i></span></li>
                                                <li><span><i class="fas fa-star"></i></span></li>
                                                <li><span><i class="fas fa-star"></i></span></li>
                                                <li><span><i class="fas fa-star"></i></span></li>
                                                <li><span><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <div class="review-time">
                                                <p>7/02/2019</p>
                                            </div>
                                        </div>
                                        <div class="revt-details">
                                            <p>
                                               {{review_of_day.bestReview.content}}<a >Continous reading</a>
                                            </p>
                                        </div>
                                        <div class="recent-title">
                                            <div class="drop-bottom-icon">
                                                <ul>
                                                    <li><img src="/images/ic1.png" alt=""></li>
                                                    <li><img src="/images/ic2.png" alt=""></li>
                                                    <li><img src="/images/ic3.png" alt=""></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part">
                                    <div class="drop-title">
                                        <h2>Recent drops</h2>
                                    </div>
                                    <div class="drop-content">
                                        <div class="row">
                                            <div class="drop-item"  v-for="(item,index) in recentReview " :key="index">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img :src="item.reviwer.img"  alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>{{item.reviwer.firstName}} {{item.reviwer.lastName}}</h3>
                                                            <p>Wrote a review</p>
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
                                                                <h4 v-if="item.review_type == 'school'">Coach {{item.coach.name}}</h4>
                                                                <h4 v-if="item.review_type == 'product'">{{item.product.name}}</h4>
                                                                <h4 v-if="item.review_type == 'legend'">Instruction {{item.legend.name}}</h4>
                                                            </div>
                                                            <div class="review-star">
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
                                                                <a >Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="drop-item">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img src="/images/dr-2.png" alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>Bob g.</h3>
                                                            <p>Wrote a review</p>
                                                        </div>
                                                    </div>
                                                    <div class="drop-inner">
                                                        <div class="drop-inner-figure">
                                                            <figure>
                                                                <img src="/images/cmnt2.png" alt="">
                                                            </figure>
                                                        </div>
                                                        <div class="drop-inner-cap">
                                                            <div class="drop-inner-coach">
                                                                <h4>Coach vinny velasquez</h4>
                                                            </div>
                                                            <div class="review-star">
                                                                <ul>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="drop-inner-coach-txt">
                                                                <p>Anybody who misses the Golden opportunity to work with Vinny is missing out. He's new to Westlake Village and he had me run through a specific set of lorem ipsum dolor sit amet</p>
                                                                <a href="#">Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-item">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img src="/images/dr-3.png" alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>Bob g.</h3>
                                                            <p>Wrote a review</p>
                                                        </div>
                                                    </div>
                                                    <div class="drop-inner">
                                                        <div class="drop-inner-figure">
                                                            <figure>
                                                                <img src="/images/cmnt3.png" alt="">
                                                            </figure>
                                                        </div>
                                                        <div class="drop-inner-cap">
                                                            <div class="drop-inner-coach">
                                                                <h4>Coach vinny velasquez</h4>
                                                            </div>
                                                            <div class="review-star">
                                                                <ul>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="drop-inner-coach-txt">
                                                                <p>Anybody who misses the Golden opportunity to work with Vinny is missing out. He's new to Westlake Village and he had me run through a specific set of lorem ipsum dolor sit amet</p>
                                                                <a href="#">Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-item">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img src="/images/dr-3.png" alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>Bob g.</h3>
                                                            <p>Wrote a review</p>
                                                        </div>
                                                    </div>
                                                    <div class="drop-inner">
                                                        <div class="drop-inner-figure">
                                                            <figure>
                                                                <img src="/images/cmnt3.png" alt="">
                                                            </figure>
                                                        </div>
                                                        <div class="drop-inner-cap">
                                                            <div class="drop-inner-coach">
                                                                <h4>Coach vinny velasquez</h4>
                                                            </div>
                                                            <div class="review-star">
                                                                <ul>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="drop-inner-coach-txt">
                                                                <p>Anybody who misses the Golden opportunity to work with Vinny is missing out. He's new to Westlake Village and he had me run through a specific set of lorem ipsum dolor sit amet</p>
                                                                <a href="#">Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-item">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img src="/images/dr-3.png" alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>Bob g.</h3>
                                                            <p>Wrote a review</p>
                                                        </div>
                                                    </div>
                                                    <div class="drop-inner">
                                                        <div class="drop-inner-figure">
                                                            <figure>
                                                                <img src="/images/cmnt3.png" alt="">
                                                            </figure>
                                                        </div>
                                                        <div class="drop-inner-cap">
                                                            <div class="drop-inner-coach">
                                                                <h4>Coach vinny velasquez</h4>
                                                            </div>
                                                            <div class="review-star">
                                                                <ul>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="drop-inner-coach-txt">
                                                                <p>Anybody who misses the Golden opportunity to work with Vinny is missing out. He's new to Westlake Village and he had me run through a specific set of lorem ipsum dolor sit amet</p>
                                                                <a href="#">Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-item">
                                                <div class="drop-item-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="drop-item-title">
                                                        <figure>
                                                            <img src="/images/dr-3.png" alt="">
                                                        </figure>
                                                        <div class="drop-title-caption">
                                                            <h3>Bob g.</h3>
                                                            <p>Wrote a review</p>
                                                        </div>
                                                    </div>
                                                    <div class="drop-inner">
                                                        <div class="drop-inner-figure">
                                                            <figure>
                                                                <img src="/images/cmnt3.png" alt="">
                                                            </figure>
                                                        </div>
                                                        <div class="drop-inner-cap">
                                                            <div class="drop-inner-coach">
                                                                <h4>Coach vinny velasquez</h4>
                                                            </div>
                                                            <div class="review-star">
                                                                <ul>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                    <li class="star-half"><span><i class="fas fa-star"></i></span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="drop-inner-coach-txt">
                                                                <p>Anybody who misses the Golden opportunity to work with Vinny is missing out. He's new to Westlake Village and he had me run through a specific set of lorem ipsum dolor sit amet</p>
                                                                <a href="#">Continous reading</a>
                                                            </div>
                                                        </div>
                                                        <div class="drop-bottom-icon">
                                                            <ul>
                                                                <li><img src="/images/ic1.png" alt=""></li>
                                                                <li><img src="/images/ic2.png" alt=""></li>
                                                                <li><img src="/images/ic3.png" alt=""></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part">
                                    <div class="drop-title">
                                        <h2>Recent Activity</h2>
                                    </div>
                                    <div class="activity-sec">
                                        <div class="row">
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/HighSchoolCoaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                        <p>High school coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/College-Coaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                        <p>College coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/Travel-Coaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                        <p>Travel coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/Local-Coaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?pageOption=legend`)">
                                                        <p>Local instructors</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/Best-Coaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <p>Best rated coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/Worst-Coaches.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?sort=Worst`)">
                                                        <p>Worst rated coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/Most-Connected.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <p>Healthiest coaches</p>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="activity-item">
                                                <div class="activity-inner">
                                                    <div class="linear-border"></div>
                                                    <div class="activity-inner-fig">
                                                        <figure>
                                                            <img src="/image/ProductsServices.gif" alt="">
                                                        </figure>
                                                    </div>
                                                    <!-- <div class="activity-inner-caption" @click="$router.push(`/coach_search?pageOption=product`)">
                                                        <p>Products & services</p>
                                                    </div> -->
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
                        <div class="new-inner-item-1">
                            <div class="col-md-3 col-sm-3">
                                <div class="headline-link-content">
                                    <h4>Top headlines</h4>
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
                                                Example Test of Headline - Example 1
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flank-banner">
                                    <figure>
                                        <img src="/images/flank-banner.png" alt="">
                                    </figure>
                                </div>
                                <div class="scandal-analytics">
                                    <div class="scandal-analytics-title">
                                        <h4>FLANK Analytics</h4>
                                    </div>
                                    <div class="scandal-ana-banner">
                                        <figure>
                                            <img src="/images/banner-2.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="scandal-list">
                                        <ul>
                                            <li>
                                                <a href="#">Health Score Index (HSI)</a>
                                            </li>
                                            <li>
                                                <a href="#">Strength of Team Index (STI)</a>
                                            </li>
                                            <li>
                                                <a href="#">Program Chemistry Index (PCI)</a>
                                            </li>
                                            <li>
                                                <a href="#">Coach Corruption Index (CCI)</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="scandal-extra-link">
                                        <ul>
                                            <li>
                                                <a href="#">Terms of Service</a>
                                            </li>
                                            <li>
                                                <a href="#">Continent Guidelines</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Free Speech Act</a>
                                            </li>
                                            <li>
                                                <a href="#">Add Choice</a>
                                            </li>
                                            <li>
                                                <a href="#">Advertise on Flank</a>
                                            </li>
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
                                        <h2>Get the best of FLANK sent to your inbox</h2>
                                        <p>The FLANK Daily delivers the most important team predictions for your team.</p>
                                        <form action="#">
                                            <div class="fla-form-full">
                                                <input type="text" placeholder="Email Address">
                                            </div>
                                            <div class="fla-form-button">
                                                <button>Sign me up!</button>
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

        

        <footer class="new-footer">
            <div class="new-footer-top"></div>
        </footer>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
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
      schoolList: [],
      schoolCoachList: [],
      productList: [],
      sData: {
        school_id: 0
      },
      iamIndex: false,
      city:'All citys',
      allCity:[],
      isDropOption:false,
    tabindex:0
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
    handleFocus(){
      // console.log('handleFocus')
      // this.show_user_option=false
      this.tabindex = -1
    },
    handleFocusOut(){
      // console.log('handleFocusOut')
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
       console.log(item)
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
      if (this.review_of_day.info.model == "legend") {
        this.$router.push(
          `/profile/${this.review_of_day.bestReview.reviewFor}`
        );
      } else if (this.review_of_day.info.model == "coach") {
        this.$router.push(`/school/${this.review_of_day.bestReview.school_id}`);
      } else if (this.review_of_day.info.model == "product") {
        this.$router.push(
          `/product/${this.review_of_day.bestReview.product_id}`
        );
      }
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
    }
  },
  async created() {

    if(this.$route.query.login == 'success') this.i("Login Successful !")
    const [res1, res2,res4, res3] = await Promise.all([
      this.callApi("get", `/app/getSchoolcoaches`),
      this.callApi("get", `/app/reviewOfTheDay`),
      this.callApi("get", `/app/recentCitys`),
      this.callApi("get", `/app/getRecentReview`)
    ]);
    if (res1.status === 200 && res2.status == 200) {
      this.schoolCoaches = res1.data;
      this.review_of_day = res2.data;
      this.recentReview = res3.data;
      this.allCity = res4.data;
      // this.review_of_day.bestReview = res2.data.bestReview
      this.loading = false;
    } else {
      this.swr();
      this.loading = false;
    }
  }
};
</script>
