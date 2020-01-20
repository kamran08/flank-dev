
<template>

     <div class="pt-120">

        <div class="flank-page-header" v-if="legendData.schoolName">  
            <div class="flank-page-top">
                <div class="container">
                    <div class="flank-full">
                        <div class="flank-item-1">
                            <figure>
                               
                                <img src="/image/fl_lg.png" alt="">
                            </figure>
                            <div class="flank-header-cap">
                                <h1><br><span>{{legendData.schoolName}}</span></h1>
                                <ul>
                                    <li><img  :src="legendData.logo" alt="">{{legendData.sport}}</li>
                                </ul>
                                <div class="flank-head-btn"><button>Review</button></div>
                               
                            </div>
                        </div>
                        <div class="flank-item-2">
                            <div class="flank-item-2-inner">
                                <div class="flank-item-left-list">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>School Name type:</td>
                                                <td>{{legendData.division}}</td>
                                            </tr>
                                            <tr>
                                                <td>City/state:</td>
                                                <td>{{legendData.city}} {{legendData.state}}</td>
                                            </tr>
                                            <tr>
                                                <td>Profile views:</td>
                                                <td>123 views</td>
                                            </tr>
                                            <tr>
                                                <td>Status:</td>
                                                <td><span class="green"></span>Active</td>
                                            </tr>
                                            <!-- <tr>
                                                <td>Streak:</td>
                                                <td>W5</td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flank-page-bottom">
                <div class="container">
                    <div class="flank-page-bottom-nav">
                        <ul>
                            <li class="active"><a href="#">Overview</a></li>
                            
                        </ul>
                        <!-- <div class="flank-page-bottom-btn">
                            <button><img src="/images/fl-new-btn.gif" alt=""> Write a Review</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="new-banner-section new-banner-section-1">
            <div class="container-fluid">
                <div class="inner-banner inner-banner-2">
                    <figure>
                        <img src="/images/long-form-example.png" alt="">
                    </figure>
                </div>
            </div>
        </div>

        <div class="new-section-content">
            <div class="container">
                <div class="new-content-inner">
                    <div class="row">
                        <div class="new-inner-item-1">
                            <div class="col-md-3 col-sm-3" v-if="!isSmallScreen">
                                <div class="switch-link-content" >
                                    <div class="switch-link-title">  
                                        <h4>Coach Selection</h4>
                                    </div>
                                    <div class="switch-new-coach no-border">
                                        <div class="switch-new-coach-item">
                                            <figure>
                                                <img src="/images/new-man.gif" alt="">
                                            </figure>
                                            <div class="new-coach-item-text">
                                                <h3>Not here? Tell us what we're missing.</h3>
                                                <p>If the coach you are looking for isn't here, add it.</p>
                                            </div>
                                        </div>
                                        <div class="coach-btn no-border  no-pad-btm" @click="addNew.modal = true"><button>Add a Coach</button></div>
                                        
                                    </div>
                                    <div class="border-top"></div>
                                    <!-- <img src="/images/male.png" alt=""> -->
                                    <!-- <div class="switch-coach-sec">
                                        <div class="switch-coach active" v-for="(item,index) in similarCoaches" :key="index">
                                            <figure>
                                                <img src="/images/male.png" alt=""> 
                                            </figure>
                                            <div class="switch-coach-caption"  >
                                                <p><a :href="`/school_coach/${item.id}`" >{{item.name}}</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="switch-link-foot">
                                        <p>Full staff</p>
                                    </div> -->
                                </div>
                                <div class="switch-link-content" >
                                    <div class="switch-link-title">  
                                        <h4>Switch coach</h4>
                                    </div>
                                    <div class="switch-link-btn">
                                        <ul>
                                            <!-- <li><button>Coach name1</button></li> -->
                                            <li><button>Best rated coach</button></li>
                                        </ul>
                                    </div>
                                    <div class="switch-coach-sec">
                                        <div class="switch-coach active" v-for="(item,index) in similarCoaches" :key="index">
                                            <figure>
                                                <img src="/images/new-man.gif" alt="">
                                            </figure>
                                            <div class="switch-coach-caption" style="padding-top: 0;" >
                                                <p><a :href="`/school_coach/${item.id}`" style="padding-top: 0; color: #000 !important; font-weight: 600;">{{item.name}}</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="switch-link-foot">
                                        <p><a href="#">Full staff</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="new-inner-item-2">
                            <div :class="(!isSmallScreen)? 'col-md-6 col-sm-6' : 'col-md-8 col-sm-8'">
                                <!-- new flank -->
                                <div class="inner-item-review-sec mt-20">
                                    <div class="left-linear-border">

                                    </div>
                                    <div class="inner-item-review-title">
                                        <h4>Review Highlights</h4>
                                    </div>
                                    <div class="inner-item-reco-details">
                                        <div class="inner-item-rev-item" v-for="(item,index) in topReviews" :key="index" >
                                            <figure>
                                                <img src="/images/act.png" alt="">
                                            </figure>
                                            <div class="rev-item-caption">
                                                <p class="readmore">"{{item.content}}"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="inner-item-reco-sec inner-item-reco-sec-one">
                                    <div class="inner-item-reco-title">
                                        <h4>Ask The Community</h4>
                                    </div>
                                    <div class="inner-item-top-con inner-one-item-top-con">
                                        <figure>
                                            <img src="/images/sticker-3.png" alt="">
                                        </figure>
                                        <div class="top-con-cap one-top-cont-cap">
                                            <p>Don't see your question? <span style="cursor:pointer;" @click="$router.push(`/coachquestionlist/${legendData.id}`)">Ask your verified audience! </span> </p>
                                            <!-- <a >(Click Here)</a> -->
                                        </div>
                                    </div>
                                    <div class="new-flank-form" v-if="legendData.question" >
                                        <p style="font-family: CeraPro;font-size: 14px;color: #000;margin-top: 7px;">Question:</p>
                                        <div class="new-qu">
                                            
                                            <div class="new-qu-text">
                                                <p>Does this coach have college connections? If so, to what schools?</p>
                                            </div>
                                            <!-- <div class="new-qu-img">
                                                <img src="/images/nf.png" alt="">
                                            </div> -->
                                        </div>
                                        <!-- <div class="inner-one-item-cont">
                                            <div class="new-flank-search inner-item-one-cont-left">
                                                <h4>Question:</h4>
                                                <p style="font-size: 15px;font-family: CeraPro;">{{legendData.question.content}}</p>
                                            </div>
                                            
                                        </div> -->
                                        <div class="new-flank-coach-rev">
                                            <div class="coach-rev-con">
                                                <figure>
                                                    <img src="/images/ms.jpg" alt="">
                                                </figure>
                                                <div class="coach-rev-text-content">
                                                    <h4>Nazmul Chowdhury</h4>
                                                    <h5>Sylhet, Bangladesh</h5>
                                                    <ul class="fixed-list">
                                                        <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                        <li><img src="/images/mstar.png" alt=""><span>3 reviews</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                         
                                            <div class="inner-one-item-help-area2"  >
                                                <h6 class="help-ans"><span>1</span> answer</h6>
                                                <div v-if="legendData.question.answers">
                                                     
                                                    <p class="help-text">{{legendData.question.answers.content}}</p>
                                                </div>
                                              
                                               <div class="inner-one-item-help-btn">
                                                   <p class="view-question-btn"><nuxt-link :to="{name: 'question_details-id', params: {  id:legendData.question.id } }" >View questions details</nuxt-link></p>
                                                   <div class="helpful-btn-full">
                                                       <ul>
                                                           <li><a href="#" class="helpful"><i class="fas fa-long-arrow-alt-up"></i>helpful</a></li>
                                                           <li><a href="#" class="most-helpful"><i class="fas fa-long-arrow-alt-down"></i>most helpful</a></li>
                                                       </ul>
                                                   </div>
                                                   
                                               </div>
                                            </div>
                                        </div>
                                        <div class="show-more-ac">
                                            <p><a href=""><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                        </div>
                                    </div>
                                </div>
                                 
                                <div class="inner-item-reco-sec">
                                    <div class="inner-item-reco-title">
                                        <h4>Recommended Reviews <span>for {{legendData.schoolName}}'s Coaches</span></h4>
                                    </div>
                                    <div class="inner-item-top-con">
                                        <figure>
                                            <img src="/images/sticker-3.png" alt="">
                                        </figure>
                                        <div class="top-con-cap">
                                            <p><span>Your trust is our top concern,</span> so coaches can't pay to alter or remove there reviews. <a href="#">Learn more</a></p>
                                        </div>
                                    </div>
                                    <div class="new-flank-form">
                                        <div class="new-flank-sort-sec">
                                            <div class="new-flank-search">
                                                <form v-on:submit.prevent>
                                                    <div class="search-new-box">
                                                        <input type="text" placeholder="Search within the reviews" v-model="reviewSearch" >
                                                        <button type="submit"  @click="SearchReviewResult" ><span><i class="fas fa-search"></i></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="new-flank-sort">
                                                <div class="new-flank-select">
                                                    <h4>Sort by</h4>
                                                    <select v-model="sort" @change="SearchReviewResult">
                                                        <option value="" disabled selected>Flank Sort</option>
                                                        <option value="desc">Top Rated</option>
                                                        <option value="asc">Worst Rated</option>
                                                    </select>
                                                </div>
                                                <div class="new-flank-img">
                                                    <figure>
                                                        <img src="/images/nf.png" alt="">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new-flank-coach-rev">
                                            <div class="coach-rev-fixed">
                                                <figure>
                                                    <img src="/images/fixed-img.png" alt="">
                                                </figure>
                                                <div class="coach-rev-fixed-content">
                                                    <h4></h4>
                                                    <h5></h5>
                                                    <ul class="fixed-list">
                                                        <li><img src="/images/mw.png" alt=""><span></span></li>
                                                        <li><img src="/images/mstar.png" alt=""><span></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="new-flank-given-review">
                                    <div class="flank-given-review-item" v-for="(item,index) in reviews" :key="index" >
                                        <div class="linear-border"></div>
                                        <div class="review-item-inner">
                                            <div class="review-item-left">
                                                <div class="review-item-left-fig">
                                                    <figure>
                                                        <img :src="item.reviwer.img" alt="">
                                                    </figure>
                                                    <div class="review-item-left-fig-c">
                                                        <h4>{{item.reviwer.firstName}} {{item.reviwer.lastName}}</h4>
                                                        <h5>{{item.reviwer.address}}</h5>
                                                        <ul class="left-fig-link">
                                                            <!-- <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li> -->
                                                            <li><img src="/images/mstar.png" alt=""><span>{{item.reviwer.__meta__.totalreviewbyuser}} reviews</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="review-figure-exper">
                                                    <ul>
                                                        <li @click="isShareModalOn">
                                                            <img src="/images/mstar.png" alt=""> 
                                                            <p><a>Share review</a></p>
                                                        </li>
                                                        <li @click="embeddedModalOn(item)">
                                                            <img src="/images/mstar.png" alt="">
                                                            <p><a>Embeded Review</a></p>
                                                        </li>
                                                        <li @click="messageModal = true"> 
                                                            <img src="/images/mstar.png" alt="">
                                                            <p><a>Send message</a></p>
                                                        </li>
                                                       
                                                    </ul>
                                                </div> 
                                            </div>
                                            <div class="review-item-right">
                                                <div class="review-item-right-rat">
                                                    <ul>
                                                        <li  :class="(item.rating>0)? 'review-star-5' : 'star_half_1'"><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>1)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>2)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>3)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>4)? 'review-star-5' : 'star_half_1'"  ><span><i class="fas fa-star"></i></span></li>
                                                    </ul>
                                                    <div class="review-date">
                                                       
                                                        <p>{{item.created_at}}</p>
                                                    </div>
                                                </div>
                                                <div class="review-item-right-details">
                                                    <p>{{item.content}}</p>
                                                </div>
                                               
                                                
                                                <!-- <div class="review-gallary">
                                                    <figure>
                                                        <img src="/images/1000s.jpg" alt="">
                                                        <figcaption><p>Very simple menu</p></figcaption>
                                                    </figure>
                                                </div> -->
                                                <div class="review-btn-sec">
                                                    <p>Was this review ...?</p>
                                                    <div class="review-btn">
                                                        <ul>
                                                            <li @click="reviewImo('cool',index,item)"  :class="(item.imosall.cool >= 1)? '' : ''" ><img src="/images/ic1.png" alt=""><span>Official</span> &nbsp;&nbsp;{{item.official}}</li>
                                                            <li  @click="reviewImo('funny',index,item)" :class="(item.imosall.funny >= 1)? '' : ''" ><img src="/images/ic2.png" alt=""><span>Bravery Bagde</span> &nbsp;&nbsp;{{item.bravery}}</li>
                                                            <li @click="reviewImo('useful',index,item)" :class="(item.imosall.useful >= 1)? '' : ''" ><img src="/images/ic3.png" alt=""><span>Distinguished</span> &nbsp;&nbsp;{{item.distinguished}}</li>
                                                        </ul>
                                                        
                                                        <div class="review-btn-img">
                                                             
                                                            <figure>
                                                                <img src="/images/nf.png" alt="">
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="new-inner-item-1">
                            <div  :class="(!isSmallScreen)? 'col-md-3 col-sm-3' : 'col-md-4 col-sm-4'">
                                 <div  v-if="isSmallScreen">
                                    <div class="switch-link-content" >
                                        <div class="switch-link-title">  
                                            <h4>Coach Selection</h4>
                                        </div>
                                        <div class="switch-new-coach no-border">
                                            <div class="switch-new-coach-item">
                                                <figure>
                                                    <img src="/images/new-man.gif" alt="">
                                                </figure>
                                                <div class="new-coach-item-text">
                                                    <h3>Not here? Tell us what we're missing.</h3>
                                                    <p>If the coach you are looking for isn't here, add it.</p>
                                                </div>
                                            </div>
                                            <div class="coach-btn no-border  no-pad-btm" @click="addNew.modal = true"><button>Add a Coach</button></div>
                                            
                                        </div>
                                        <div class="border-top"></div>
                                        <!-- <img src="/images/male.png" alt=""> -->
                                        <!-- <div class="switch-coach-sec">
                                            <div class="switch-coach active" v-for="(item,index) in similarCoaches" :key="index">
                                                <figure>
                                                    <img src="/images/male.png" alt=""> 
                                                </figure>
                                                <div class="switch-coach-caption"  >
                                                    <p><a :href="`/school_coach/${item.id}`" >{{item.name}}</a></p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="switch-link-foot">
                                            <p>Full staff</p>
                                        </div> -->
                                    </div>
                                    <div class="switch-link-content" >
                                        <div class="switch-link-title">  
                                            <h4>Switch coach</h4>
                                        </div>
                                        <div class="switch-link-btn">
                                            <ul>
                                                <!-- <li><button>Coach name1</button></li> -->
                                                <li><button>Best rated coach</button></li>
                                            </ul>
                                        </div>
                                        <div class="switch-coach-sec">
                                            <div class="switch-coach active" v-for="(item,index) in similarCoaches" :key="index">
                                                <figure>
                                                    <img src="/images/new-man.gif" alt="">
                                                </figure>
                                                <div class="switch-coach-caption" style="padding-top: 0;" >
                                                    <p><a :href="`/school_coach/${item.id}`" style="padding-top: 0; color: #000 !important; font-weight: 600;">{{item.name}}</a></p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="switch-link-foot">
                                            <p><a href="#">Full staff</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="switch-link-content"></div>

                                <div class="switch-link-content">
                                    <div class="switch-link-title">
                                        <h4>Latest videos</h4>
                                    </div>
                                    <div class="flank-video">
                                        <iframe src="https://www.youtube.com/embed/Vz738aqEI5w" width="640" height="268" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                    </div>

                                    <div class="playing-list">
                                        <ul>
                                            <li>
                                                <div class="playing-btn">
                                                    <span><i class="fas fa-play"></i></span>
                                                </div>
                                                <div class="video-info" @click="openVideo(1)" style="cursor:pointer;">
                                                    <p>Out of control coaches' Abusive Behaviour Often Under Reported</p>
                                                    <ul>
                                                        <li>Now playing <span>•</span></li>
                                                        <li><p>2:18</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="playing-btn">
                                                    <span><i class="fas fa-play"></i></span>
                                                </div>
                                                <div class="video-info" @click="openVideo(2)" style="cursor:pointer;">
                                                    <p>Players accuse GCU women's soccer coach of verbal, mental, physial abuse.</p>
                                                    <ul>
                                                        <li><p>4:27</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="playing-btn" >
                                                    <span><i class="fas fa-play"></i></span>
                                                </div>
                                                <div class="video-info" @click="openVideo(3)" style="cursor:pointer;">
                                                    <p>Rutgers coach fired for abuse of players.</p>
                                                    <ul>
                                                        <li><p>1:38</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="playing-btn" >
                                                    <span><i class="fas fa-play"></i></span>
                                                </div>
                                                <div class="video-info" @click="openVideo(4)" style="cursor:pointer;">
                                                    <p>The abuse of child atheletes by their coaches.</p>
                                                    <ul>
                                                        <li><p>3:55</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="video-foot-img">
                                        <figure>
                                            <img src="/images/flank.png" alt="">
                                        </figure>
                                    </div>
                                </div>
                                <div class="flank-banner-two">
                                    <figure>
                                        <img src="/images/worstbanner.png" alt=""> 
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <Modal  v-model="loginModal">
            <div class="">
                <div class="row">
                    <div class="col-md-12">

                        <div class="signcont-left" style="border: 0;">
                            <h3 class="create-account">Sign-In</h3>
                            <form v-on:submit.prevent>
                                <div class="group-item">
                                    <label >Email</label>
                                    <input type="email" v-model="formData.email">
                                </div>
                                <div class="group-item">
                                    <label >Password</label>
                                    <nuxt-link  class="group-item-right red-alert group-item-forgot-pass"  to='/authentication/resetpassword' >Forgot your password?</nuxt-link>
                                    <input type="password" v-model="formData.password">
                                </div>
                                <div class="group-item">
                                    <input type="submit" @click="onSubmit" value="Sign-In" class="g-btn">
                                </div>
                            </form>
                            <p class="mar_b20" style="font-weight: 400;font-family: CeraPro;line-height: 19px;font-size: 14px;">By continuing, you agree to Flank's <nuxt-link to="/guidlines">Conditions of Use</nuxt-link> and <nuxt-link to="/policy">Privacy Notice</nuxt-link>.</p>
                            <h5 class="mar_b30 new-input-check-box"><input type="checkbox" name="vehicle1" value="Bike" id="new-ch"> <label for="new-ch">Keep me Signed in.</label> <a href="#" class="sign-in" style="color: #e51837 !important; font-family: CeraPro;">Details</a></h5>
                            <p class="new-flank">
                                <span class="new-flank-cont">
                                    New to Flank?
                                </span>               
                            </p>
                                <nuxt-link   to='/signup' > <button class="create-btn">Create your Flank account</button></nuxt-link>
                            
                        </div>
                    </div>
                </div>
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
        <div class="authentication-full-modal" v-if="isShareModal">
            <div class="full-modal-box">
                <div class="modal-top">
                    <div class="modal-title">
                        <h2>share review</h2>
                    </div>
                    <div class="modal-close" @click="isShareModal = false">
                        <span><i class="fas fa-times"></i></span>
                    </div>
                </div>
                <div class="modal-details">
                    <div class="modal-details-top">
                        <div class="modal-details-social">
                            <ul>
                                <li>
                                    <button class="fb-btn" :data-href="location"><span><i class="fab fa-facebook-square"></i></span> <a style="color:#ffff;" :href="'https://www.facebook.com/sharer/sharer.php?u='+location" target="_blank">Share on facebook</a> </button>
                                </li>
                                <li>
                                    <button class="tw-btn"><span><i class="fab fa-twitter-square"></i></span><a style="color:#ffff;" :href="`https://twitter.com/share?ref_src=${location}`" target="_blank" rel="noopener noreferrer">Share on twitter</a></button>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-input-value">
                            <label for=""><span><i class="fas fa-upload"></i></span></label>
                            <input type="text" v-model="location">
                        </div>
                    </div>
                </div>
                <div class="modal-divider">
                    <p>or</p>
                </div>
                <div class="modal-form">
                    <form action="">
                        <div class="modal-form-item">
                            <label for="">your name</label>
                            <input type="text" v-model="shareForm.name">
                        </div>
                        <div class="modal-form-item">
                            <label for="">your email</label>
                            <input type="text" v-model="shareForm.email">
                        </div>
                        <div class="modal-form-item">
                            <label for="">to <small>Email address</small></label>
                            <input type="text" v-model="shareForm.to">
                        </div>
                        <div class="modal-form-item">
                            <label for="">Add a note</label>
                            <textarea name="" id="" rows="5" v-model="shareForm.note"></textarea>
                        </div>
                        <div class="modal-btn">
                            <button @click="submitShare">Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Modal width="850px" v-model="addNew.modal" :closable='false'>
            <div class="sss">
                <div class="">
                    <div class="bulid-section build-section-1" v-if="addNew.step == 1">
                        <div class="build-section-title">
                            <h3>Build together</h3>
                            <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false">
                                <img src="/images/Step-1.png" alt="">
                            </div>
                        </div>
                        <div class="build-section-inner">
                            <div class="build-section-inner-top">
                                <div class="build-left">
                                    <div class="build-item-box active">
                                        <div class="build-item-box-active">
                                            <span>1</span>
                                        </div>
                                        <p>Add School/Coach</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>2</span>
                                        </div>
                                        <p>Registration</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>3</span>
                                        </div>
                                        <p>Submit Review</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>4</span>
                                        </div>
                                        <p>Confirmation</p>
                                    </div>
                                </div>
                                <div class="build-right">
                                    <div class="build-right-title">
                                        <h3>What are you working on?</h3>
                                        <p>* We’ll guide you step-by-step to add the school/coach you need.</p>
                                    </div>
                                    <div class="build-right-form">
                                        <p>(Avg. Time of Completion - 2 minutes)</p>
                                        <div class="build-right-form-inner">
                                            <form action="#">
                                                <div class="build-input">
                                                    <label for="">School name <span class="required">*</span></label>
                                                    <input disabled type="text" v-model="step1Form.schoolName">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">Coach name <span class="required">*</span></label>
                                                    <input type="text" v-model="step1Form.name">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">City <span class="required">*</span></label>
                                                    <input disabled type="text" v-model="step1Form.city">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">Division <span class="required">*</span></label>
                                                     <input disabled type="text" v-model="step1Form.division">
                                                    
                                                </div>
                                                <div class="build-input">
                                                    <label for="">State <span class="required">*</span></label>
                                                    <input disabled type="text" v-model="step1Form.state">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">Sport </label>
                                                    <input disabled type="text" v-model="step1Form.sport">
                                                    
                                                </div>
                                            </form>
                                            <div class="build-redirect">
                                                <p>Information submitted on this site is subject to the <a href="#">Privacy Policy.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bulid-section build-section-2" v-if="addNew.step == 2">
                        <div class="build-section-title">
                            <h3>Build together</h3>
                            <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false">
                                <img src="/images/Step-1.png" alt="">
                            </div>
                        </div>
                        <div class="build-section-inner">
                            <div class="build-section-inner-top">
                                <div class="build-left">
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <!-- <span>1</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Add School/Coach</p>
                                    </div>
                                    <div class="build-item-box active">
                                        <div class="build-item-box-active">
                                            <span>2</span>
                                        </div>
                                        <p>Registration/Login</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>3</span>
                                        </div>
                                        <p>Submit Review</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>4</span>
                                        </div>
                                        <p>Confirmation</p>
                                    </div>
                                </div>
                                <div class="build-right">
                                    <div class="build-right-title">
                                        <h3>What are you working on?</h3>
                                        <p>* We’ll guide you step-by-step to add the school/coach you need.</p>
                                    </div>
                                    <div class="build-right-form">
                                        <p>(Avg. Time of Completion - 2 minutes)</p>
                                        <div class="build-right-form-inner" v-if="addNew.isReg ">
                                            <form action="#">
                                                <div class="build-input">
                                                    <label for="">Your First name <span class="required">*</span></label>
                                                    <input type="text" v-model="step2Form.firstName">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">Your Last name <span class="required">*</span></label>
                                                    <input type="text" v-model="step2Form.lastName">
                                                </div>
                                                <div class="build-input full_input">
                                                    <label for="">Email <span class="required">*</span></label>
                                                    <input type="email" v-model="step2Form.email">
                                                </div>
                                                
                                                <div class="build-input">
                                                    <label for="">Password <span class="required">*</span></label>
                                                    <input type="password" v-model="step2Form.password">
                                                </div>
                                                <div class="build-input">
                                                    <label for="">Confirm password <span class="required">*</span></label>
                                                    <input type="password" v-model="step2Form.password_confirmation">
                                                </div>
                                                
                                            </form>
                                            <div class="build-redirect">
                                                <p>Already have an account Please <a @click="addNew.isReg = false"> Login .</a></p>
                                            </div>
                                        </div>
                                        <div class="build-right-form-inner" v-else>
                                            <form action="#">

                                                <div class="build-input full_input">
                                                    <label for="">Email <span class="required">*</span></label>
                                                    <input type="email" v-model="formData.email">
                                                </div>

                                                <div class="build-input full_input">
                                                    <label for="">Password <span class="required">*</span></label>
                                                    <input type="password" v-model="formData.password">
                                                </div>
                                            </form>
                                            <div class="build-redirect">
                                                <p>Don't have any account. Please <a @click="addNew.isReg = true">Register</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bulid-section build-section-2" v-if="addNew.step == 3">
                        <div class="build-section-title">
                            <h3>Build together</h3>
                            <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false">
                                <img src="/images/Step-1.png" alt="">
                            </div>
                        </div>
                        <div class="build-section-inner">
                            <div class="build-section-inner-top">
                                <div class="build-left">
                                    <div class="build-item-box active">
                                        <div class="build-box-round">
                                            <!-- <span>1</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Your work</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <!-- <span>1</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Registration/Login</p>
                                    </div>
                                    <div class="build-item-box active">
                                        <div class="build-item-box-active">
                                            <span>3</span>
                                        </div>
                                        <p>Submit Review</p>
                                    </div>
                                    <div class="build-item-box">
                                        <div class="build-box-round">
                                            <span>4</span>
                                        </div>
                                        <p>Confirmation</p>
                                    </div>
                                </div>
                                <div class="build-right">
                                    <div class="build-right-title">
                                        <h3>What are you working on?</h3>
                                        <p>* We’ll guide you step-by-step to add the school/coach you need.</p>
                                    </div>
                                    <div class="build-right-form">
                                        <p>(Avg. Time of Completion - 2 minutes)</p>
                                        <div class="build-right-form-inner build-right-form-non">
                                            <form action="#">
                                                <div class="build-review">
                                                    <div v-if="onHover">
                                                        <ul>
                                                            <li @mouseover="changeDataHover(1)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(1)" :class="(drating.index > 0)? drating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(2)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(2)" :class="(drating.index > 1)? drating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(3)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(3)" :class="(drating.index > 2)? drating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(4)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(4)" :class="(drating.index > 3)? drating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(5)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(5)" :class="(drating.index > 4)? drating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p>Select your rating</p>
                                                    </div>
                                                    <div v-else>
                                                        <ul>
                                                            <li @mouseover="changeDataHover(1)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(1)" :class="(oldrating.index > 0)? oldrating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(2)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(2)" :class="(oldrating.index > 1)? oldrating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(3)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(3)" :class="(oldrating.index > 2)? oldrating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(4)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(4)" :class="(oldrating.index > 3)? oldrating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                            <li @mouseover="changeDataHover(5)" @mouseleave="changeDataHoverLeave" @click="changeOldRatingV2(5)" :class="(oldrating.index > 4)? oldrating.class: ''"><span><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p>Select your rating</p>
                                                    </div>

                                                </div>
                                                <div class="build-textarea">
                                                    <textarea v-model="step3Form.content" name="" id="" rows="10" placeholder="Your review helps others learn about good and bad coaches.

                                                            You have been lied to. 
                                                            Your values don't count.
                                                            They don't take you seriously.                                                                                                                                                                                                                                                                     
                                                            You owe this to yourself"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bulid-section build-section-2" v-if="addNew.step == 4">
                        <div class="build-section-title">
                            <h3>Build together</h3>
                            <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false">
                                <img src="/images/Step-1.png" alt="">
                            </div>
                        </div>
                        <div class="build-section-inner">
                            <div class="build-section-inner-top">
                                <div class="build-left">
                                    <div class="build-item-box ">
                                        <div class="build-box-round">
                                            <!-- <span>1</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Add School/Coach</p>
                                    </div>
                                    <div class="build-item-box ">
                                        <div class="build-box-round">
                                            <!-- <span>2</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Registration/Login</p>
                                    </div>
                                    <div class="build-item-box ">
                                        <div class="build-box-round">
                                            <!-- <span>2</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Submit Review</p>
                                    </div>
                                    <div class="build-item-box active">
                                        <div class="build-item-box-active">
                                            <!-- <span>3</span> -->
                                            <img src="/images/conf.png" alt="">
                                        </div>
                                        <p>Confirmation</p>
                                    </div>
                                </div>
                                <div class="build-right">
                                    <div class="build-right-title">
                                        <h3>What are you working on?</h3>
                                        <p>* We’ll guide you step-by-step to add the school/coach you need.</p>
                                    </div>
                                    <div class="build-right-form">
                                        <div class="build-right-form-inner build-right-form-non">
                                            <div class="build-confirmation-text">
                                                <h3>Great! Way to Flank! <br> Your review has been submitted</h3>
                                                <p>Please allow us 24-48 hours to pull your information into one place, and see your low risk insight instantly benefit the player communities where you play(ed).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="_footer_noCoach">
                <div v-if="addNew.step == 1" class="mFooter">
                    <p class="mCancel" @click="addNew.modal=false">Cancel</p>

                    <Button class="mNext" @click="addNewItem">Next</Button>
                </div>
                <div v-if="addNew.step == 2" class="mFooter">
                    <p class="mCancel" @click="addNew.modal=false">Cancel</p>
                    <Button class="mBack" @click="addNew.modal=false">Back</Button>

                    <Button v-if="addNew.isReg" class="mNext" @click="register">Next</Button>
                    <Button v-else class="mNext" @click="login">Next</Button>
                </div>

                <div v-if="addNew.step == 3" class="mFooter">
                    <p class="mCancel" @click="addNew.modal=false">Cancel</p>

                    <Button class="mNext" @click="reviewSubmit">Submit</Button>
                </div>

                <div v-if="addNew.step == 4" class="mFooter">

                    <Button class="mNext" @click="addNew.modal=false">Continue Browsing</Button>
                </div>

            </div>
        </Modal>
        <Modal v-model="embeddedModal" width="900px"> 
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="signcont-left" style="background: #ddd;">
                            <h3 style="color:red; margin-bottom:13px;">Embed This Review</h3>
                            <form v-on:submit.prevent>
                                
                                <div class="group-item flex_item" style="margin-bottom:15px">
                                    <label >Embedding Code</label>
                                     <textarea id=""  rows="5" value ="yes" v-html="embededText" >
                                        
                                     </textarea>
                                </div>
                                <!-- <div class="group-item">
                                    <label >Password</label>
                                    <nuxt-link  class="group-item-right red-alert group-item-forgot-pass"  to='/authentication/resetpassword' >Fogot password?</nuxt-link>
                                    <input type="password" v-model="formData.password">
                                </div> -->
                                <button class="_primary" @click="copyToClipBoard"><span>Copy Code</span></button>
                            </form>
                            <h4>Preview</h4>
                            <div>
                                    <link href="https://widget.goflank.com/flank-review/css/app.css" rel=stylesheet>
                                    <forehand-rank :lid="embeded_id"></forehand-rank>
                                    <script src="https://widget.goflank.com/flank-review/js/app.js"></script>
                                                            </div>
                            <!-- <div class="group-item">
                                    <input type="submit" @click="scheduleSubmit" value="Contact For Schedule">
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            
        </Modal>
        <Modal title="Send Message" v-model="messageModal">
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="signcont-left">
                           
                            <form v-on:submit.prevent>
                                <div class="group-item flex_item">
                                    <label >Your Email</label>
                                    <input type="email" v-model="message.email">
                                </div>
                                <div class="group-item flex_item">
                                    <label >Subject</label>
                                    <input type="email" v-model="message.submit">
                                </div>
                                <div class="group-item flex_item">
                                    <label >Message</label>
                                    <textarea id="" v-model="message.message" rows="5"></textarea>
                                </div>
                                
                            </form>
                            
                            <div class="group-item">
                                    <input type="submit" @click="messageSubmit" value="Send Message">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Modal>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
    data(){
        return{
            onHover: false,
             isSmallScreen:false,
            drating:{
                class:'',
                text:'Select your rating',
                index: 0
            },
            oldrating:{
                class:'',
                text:'',
                index:0,
            },
            addNew:{
                step:1,
                modal:false,
                onHover:false,
                isReg: true
            },
            step1Form:{
                schoolName:'',
                city:'',
                division:'',
                state:'',
                sport:'',
                name:'',

            },
             step2Form:{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                
                password_confirmation :'',
                birthday:'',
                packType:''
            },
            step3Form:{
                reviewFor:'',
                school_id:'',
                content:"",
                review_type:'school',
                rating:'',
            },
            location:{},
            shareForm:{
                name:'',
                email:'',
                to:'',
                note:'',
            },
            newCoach:{},
            isShareModal:false,
            loginModal:false,
            formData:{
                email:'',
                password:'',
                remember: false,
            },
            isVideo:{
                modal :false,
                header:'',
                link:''
            },
            imgName: '/uploads/default.png',
            reviews:[],
            rpagination:{},
            reviewSearch:'',
            isLoading:true,
            page:1,
            sort:'',
            topReviews: [],
            messageModal:false,
            isShareModal:false,
            embeddedModal:false,
            message:{
                email:'',
                submit: '',
                message: '',
            },
            embeded_id:16,
            embededText:'',
       
        }
    },
    head () {
    return {
      title: this.title,
    }
  },
    methods:{
        copyToClipBoard(){
           this.$clipboard(this.embededText);
            this.$Message.info('code copied');
        },
        embeddedModalOn(item){
            
            this.embeded_id = item.id
            this.embededText = `<link href="https://widget.goflank.com/flank-review/css/app.css" rel=stylesheet><forehand-rank lid="${this.embeded_id}"><\/forehand-rank><script src="https://widget.goflank.com/flank-review/js/app.js"><\/script>`
            this.embeddedModal = true
        },
         selectContactDate(date){
            
            this.contact.date = date
        },
         isShareModalOn(){
            
            this.isShareModal = true
        },
        submitShare(){
            this.s("Share Successfull !")
            let  shareForm ={
                name:'',
                email:'',
                to:'',
                note:'',
            }
            this.shareForm = shareForm
            this.isShareModal = false
        },
        messageSubmit(){
            this.s("Message has been  sent  Successfull !")
            let  message ={
                email:'',
                submit: '',
                message: '',
            }
            this.message = message
            this.messageModal = false
        },
        async reviewSubmit(){
            
            if(this.step3Form.content == ''){
                this.i("You must write something in the review box!")
                return
            }
            if(this.drating.index == 0 ){
                this.i('Please rate this coach !')
                return;
            }
            this.step3Form.rating = this.oldrating.index
            if(this.newCoach.name){
                this.step3Form.reviewFor =this.newCoach.id
                this.step3Form.school_id = this.newCoach.school_id
               
            }
            else {
                 this.addNew.modal = false
               
                return this.swr()
            }
          
            
           // this.reviewData.uploadList = this.uploadList
          //  this.reviewData.AttributeInfo = this.AttributeInfo

            const res = await this.callApi('post','/app/storeSchoolCoachReview',this.step3Form)
            if(res.status===200){
                this.s('Review posted successfully!')
                this.addNew.step = 4
            }
            else{
                this.swr();
            }
           
            
        },
        async login(){
            if(this.formData.email == '') return this.i("email is empty")
            if(this.formData.password == '') return this.i("Password is empty")
            const res = await this.callApi('post','authentication/login',this.formData) 
            if(res.status===200){
                this.s("Login Successfully !")
                this.$store.dispatch('setAuthInfo',res.data)

               
                 
                 this.addNew.step = 3
                  
                
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr();
            }
        },
        changeDataHoverLeave(){
            this.onHover = false
            
        },
        async register(){

             if(this.step2Form.firstName == '') return this.i("Frist name is empty!")
            if(this.step2Form.lastName == '') return this.i("Last name is empty!")
            if(this.step2Form.email == '') return this.i("Email  is empty!")
            if(this.step2Form.password == '') return this.i("Password  is empty!")
             if(this.step2Form.password_confirmation  !==  this.step2Form.password) return this.i("Password Doesn't match !")
                
            this.step2Form.packType = 1
            const res = await this.callApi('post','/users',this.step2Form)
            if(res.status==200){
                this.s('Registration Completed !')
                this.$store.dispatch('setAuthInfo',res.data)
                this.addNew.step = 3
                 
            }
            else if(res.status === 400){
                for(let d of res.data){
            
                    this.e(d.message)
                }
            }
            else{
                console.log(res)
                this.swr()
            }
        },
        async  addNewItem(){
            if(this.step1Form.schoolName == '') return this.i("All Fields are required!")
            if(this.step1Form.city == '') return this.i("All Fields are required!")
            if(this.step1Form.division == '') return this.i("All Fields are required!")
            if(this.step1Form.name == '') return this.i("All Fields are required!")
            if(this.step1Form.sport == '') return this.i("All Fields are required!")
            if(this.step1Form.state == '') return this.i("All Fields are required!")
            this.step1Form.id = this.legendData.id
            const res = await this.callApi('post','/schools',this.step1Form)

            if(res.status == 200){
                this.newCoach = res.data
                this.similarCoaches.push(res.data)
                this.i("New Coach Created !")
                if(this.isLoggedIn) this.addNew.step = 3
                else this.addNew.step = 2
            }
            else{
                this.swr()
                this.addNew.modal = false
            }
            
        },
        changeOldRatingV2(index){
             this.oldrating.index = index
            if(index == 1){
                this.oldrating.class = 'review-star-1'
                this.oldrating.text = 'Eek! Methinks not.'

            }
            else if(index == 2){
                this.oldrating.class = 'review-star-2'
                this.oldrating.text = "Meh. I've experienced better."
            }
            else if(index == 3){
                this.oldrating.class = 'review-star-3'
                this.oldrating.text = 'A-OK.'
            }
            else if(index == 4){
                this.oldrating.class = 'review-star-4'
                this.oldrating.text = "Yay! I'm a fan"
            }
            else if(index == 5){
                this.oldrating.class = 'review-star-5'
                this.oldrating.text = "Woohoo! As good as it gets!"
            }

            

        },
        changeDataHover(index){
            this.drating.index = index
            this.onHover = true
            if(index == 1){
                this.drating.class = 'review-star-1'
                this.drating.text = 'Eek! Methinks not.'

            }
            else if(index == 2){
                this.drating.class = 'review-star-2'
                this.drating.text = "Meh. I've experienced better."
            }
            else if(index == 3){
                this.drating.class = 'review-star-3'
                this.drating.text = 'A-OK.'
            }
            else if(index == 4){
                this.drating.class = 'review-star-4'
                this.drating.text = "Yay! I'm a fan"
            }
            else if(index == 5){
                this.drating.class = 'review-star-5'
                this.drating.text = "Woohoo! As good as it gets!"
            }
           
        },
        isShareModalOn(){
            console.log("HI")
            this.isShareModal = true
        },
        submitShare(){
            this.s("Share Successfull !")
            let  shareForm ={
                name:'',
                email:'',
                to:'',
                note:'',
            }
            this.shareForm = shareForm
            this.isShareModal = false
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
        closeVideo(){
            this.isVideo.modal = false
            this.isVideo.link = ''
            this.isVideo.header = ''
        },
        async onSubmit(){
            if(this.formData.email == '') return this.i("email is empty")
            if(this.formData.password == '') return this.i("Password is empty")
            const res = await this.callApi('post','authentication/login',this.formData) 
            if(res.status===200){
                this.s("Login Successfully !")
                this.$store.dispatch('setAuthInfo',res.data)

               
                 
                  this.loginModal =false
                  
                
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr();
            }
        },
        async SearchReviewResult(){
           
            const res = await this.callApi('get', `reviews/${this.$route.params.id}?str=${this.reviewSearch}&type=school&sort=${this.sort}`)
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }

        },
        async reviewImo(imo,index,imoItem){
             if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            let imoData = {
                review_id:this.reviews[index].id,
            }
            imoData[imo] = (imoItem.imosall[imo] >= 1)? -1: 1
            imoData.key = imo
            const res = await this.callApi('post','/stoteCoachReviewImo',imoData)
            if(res.status===200){
               
                if(imo=='cool'){
                    imoItem.official += imoData[imo]
                    this.s("you marked this review as Official  ")
                }
                else if(imo=='funny'){
                    imoItem.bravery += imoData[imo]
                     this.s("you marked this review as Bravery Bagde  ")
                }
                else if(imo=='useful'){
                    imoItem.distinguished += imoData[imo]
                     this.s("you marked this review as Distinguished  ")
                }
                  imoItem.imosall[imo] = imoData[imo]
            }
            else{
                this.swr();
            }

        },
         
    },
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/schools/${params.id}`)
          
            return{
                legendData : data.School,
                title : data.School.schoolName,
                similarCoaches : data.School.coaches,
                totalReview : data.School.__meta__.allreview_count,
                averageRating : (data.School.avgRating)? data.School.avgRating.averageRating : 0 , 
                
            }
		}catch (error) {
            console.log(error)
            return redirect('/')
		}
    },
    mounted(){
        this.step1Form.schoolName = this.legendData.schoolName
        this.step1Form.city = this.legendData.city
        this.step1Form.division = this.legendData.division
        this.step1Form.state = this.legendData.state
        this.step1Form.sport = this.legendData.sport
         if(window.innerWidth < 1460){
            this.isSmallScreen = true
        }
    },
   async created(){
       this.location = window.location.href
      
        const [  res4,res5] = await Promise.all([
            this.callApi('get', `/app/SchoolCoachReview/${this.$route.params.id}`),
            this.callApi('get', `/app/getSchoolTopReviews/${this.$route.params.id}`),
        ])
        if(  res4.status === 200 && res5.status == 200){
            
            this.reviews = res4.data.data

            this.topReviews = res5.data
            this.rpagination = res4.data
            this.isLoading = false
        } else{
            this.swr()
            this.isLoading = false
        }
    }
}
</script>

<style>
/* .readmore {
  white-space: nowrap; 
    width: 441px;
  overflow: hidden;
  text-overflow: ellipsis; 
  
} */
.star_half_1{
    background: #c7b3b3 !important;
}


</style>







       






