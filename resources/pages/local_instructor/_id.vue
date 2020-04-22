<template>
    <div class="pt-120">
        <div class="flank-page-header new-inst-header-1">
            <div class="flank-page-top">
                <div class="container">
                    <div class="flank-full">
                        <div class="flank-item-1">
                            <figure>
                                <img src="/image/fl_lg.png" alt="">
                            </figure>
                            <div class="flank-header-cap">
                                <h1 style="font-size: 25px; font-weight: 800; color: #000;"><span style="font-weight: 400;">Coach</span><br> {{legendData.name}}</h1>
                                <ul>
                                    <!-- <li><img src="/image/d.png" alt="">Team name here</li> --> 
                                    <li>&bull;</li>
                                    <li>{{legendData.sport}}</li>
                                </ul>
                                <div class="flank-head-btn" @click="$router.push(`/addreview/${legendData.id}`)">
                                    <button>Review</button>
                                </div>
                            </div>
                            <div class="flank-item-left-list up-flank-item-left-list">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Program type:</td>
                                            <td>{{legendData.division}}</td>
                                        </tr>
                                        <tr>
                                            <td>City/state:</td>
                                            <td>{{legendData.city}}, {{legendData.state}}</td>
                                        </tr>
                                        <tr>
                                            <td>Profile views:</td>
                                            <td>{{legendData.views}}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td v-if="todayHour.today ==1 && todayHour.open == true ">
                                                <span class="green"></span>Active
                                            </td>
                                            <td v-else>
                                                Offline
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Streak:</td> 
                                            <td>W5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="flank-item-2 flank-item-2-inner new-s-flank-item-2-inner">
                                
                                <div class="flank-item-right-list" style="flex: 0 0 90%; width: 90%;"> 
                                    <div class="linear-border">
                                        <p>2019-20 season stats</p>
                                    </div>
                                    <div class="right-list-inner">
                                        <div class="right-list-inner-item">
                                            <h4>Rating</h4> 
                                            <div class="review-star">
                                                <ul>
                                                    <li :class="(legendData.avg_rating> 0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 1)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 2)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 3)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 4)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="right-list-inner-item" v-if="allTableData.healthSore">
                                            <h4>Health score</h4>
                                            <div class="ti">
                                                <p>{{allTableData.healthSore.toFixed(2)}}</p>
                                            </div>
                                        </div>
                                        <!-- <div class="right-list-inner-item">
                                            <h4>Heali</h4>
                                            <div class="ti">
                                                <p>0.0</p>
                                            </div>
                                        </div>
                                        <div class="right-list-inner-item">
                                            <h4>Harmi</h4>
                                            <div class="ti">
                                                <p>0.0</p>
                                            </div>
                                        </div> -->
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
                            <!-- <li><a href="#">Bio</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="flank-page-header new-inst-header-2"> 
            <div class="flank-page-top">
                <div class="container no-padding">
                    <div class="flank-full">
                        <div class="flank-item-1 mob-flank-item-1">
                            <figure>
                            
                                <img src="/image/fl_lg.png" alt="">
                            </figure>
                            <div class="flank-header-cap flank-header-cap-mob">
                                <h1 style="font-size: 25px; font-weight: 800; color: #000;"><span style="font-weight: 400;">Coach</span><br> {{legendData.name}}</h1>
                                <ul>
                                    <!-- <li><img src="/image/d.png" alt="">Team name here</li> --> 
                                    <li>&bull;</li>
                                    <li>{{legendData.sport}}</li>
                                </ul>
                                <div class="flank-item-left-list flank-item-left-list-mob">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Program type:</td>
                                                <td>{{legendData.division}}</td>
                                            </tr>
                                            <tr>
                                                <td>City/state:</td>
                                                <td>{{legendData.city}}, {{legendData.state}}</td>
                                            </tr>
                                            <tr>
                                                <td>Profile views:</td>
                                                <td>{{legendData.views}}</td>
                                            </tr>
                                            <tr>
                                                <td>Status:</td>
                                                <td v-if="todayHour.today ==1 && todayHour.open == true ">
                                                    <span class="green"></span>Active
                                                </td>
                                                <td v-else>
                                                    Offline
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Streak:</td> 
                                                <td>W5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="flank-head-btn mt-10"  @click="$router.push(`/scoach_review/${legendData.id}`)"> 
                                    <button>Review</button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flank-item-2">
                            <div class="flank-item-2-inner">
                                
                                <div class="flank-item-right-list">
                                    <div class="linear-border">
                                        <p>2019-20 season stats</p>
                                    </div>
                                    <div class="right-list-inner">
                                        <div class="right-list-inner-item">
                                            <h4>Rating</h4> 
                                            <div class="review-star">
                                                <ul>
                                                    <li :class="(legendData.avg_rating> 0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 1)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 2)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 3)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(legendData.avg_rating> 4)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="right-list-inner-item" v-if="allTableData.healthSore">
                                            <h4>Health score</h4>
                                            <div class="ti">
                                                <p>{{allTableData.healthSore.toFixed(2)}}</p>
                                            </div>
                                        </div>
                                        <!-- <div class="right-list-inner-item">
                                            <h4>Heali</h4>
                                            <div class="ti">
                                                <p>0.0</p>
                                            </div>
                                        </div>
                                        <div class="right-list-inner-item">
                                            <h4>Harmi</h4>
                                            <div class="ti">
                                                <p>0.0</p>
                                            </div>
                                        </div> -->
                                    </div>
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
                            <!-- <li><a href="#">Bio</a></li> -->
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
                <div class="inner-banner pranto-inner-banner">
                    <figure>
                        <img src="/image/long-form-example.png" alt="">
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
                                <div class="latest-img-div" @mouseover="isImageMenu = true"  @mouseleave="isImageMenu = false">
                                    <div class="latest-img-title">
                                        <h3>Latest images</h3>
                                    </div>
                                    <div class="latest-img-slider">
                                        <div class="latest-img-slider-carousel" v-if="uploadList.length>0" >
                                            <div class="latest-img-slider-item" >
                                                <figure>
                                                    <!-- <img :src="'https://dashboard.goflank.com'+uploadList[this.img_index].url" alt=""> -->
                                                    <img :src="uploadList[img_index].url" alt="">
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="latest-img-slider-carousel" v-else >
                                            <div class="latest-img-slider-item">
                                                <figure>
                                                    <img src="/uploads/default.png" alt="">
                                                </figure>
                                            </div>
                                        </div>
                                        <div v-if="isImageMenu && uploadList.length>0" >
                                            <div class="latest-img-slider-pagi" >
                                                <div class="slider-pagi-prev slider-pagi" @click="prevImage"  >
                                                    <img src="/image/sectic1.png" alt="">
                                                </div>
                                                <div class="slider-pagi-next slider-pagi" @click="nextImage" >
                                                    <img src="/image/sectic2.png" alt="">
                                                </div>
                                            </div>
                                            <div class="latest-img-slider-full" @click="galleryModalOn(img_index)">
                                                <img src="/image/full-secren.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="latest-img-footer">
                                        <div class="latest-img-foot-in">
                                            <img src="/image/flank.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="latest-dashboard-div" v-if="isLoggedIn && authInfo.id == user_id " >
                                    <button class="_1btn"><a href="https://dashboard.goflank.com">Go to Dashboard</a></button>
                                </div>
                            </div>
                        </div>
                        <div class="new-inner-item-2">
                            <div :class="(!isSmallScreen)? 'col-md-6 col-sm-6' : 'col-md-8 col-sm-8'" >
                                <div class="inner-item-book pranto-inner-item-book">
                                    <div class="inner-item-book-txt">
                                        <img src="/image/book.png" alt="">
                                        <p>Sure, this coach looks <span>great!</span></p>
                                    </div>
                                    <div class="inner-item-book-btn" @click="contactMOdal = true">
                                        <button>Contact Now</button>
                                    </div>
                                </div>
                                <div class="inner-item-table-sec">
                                    <div class="inner-item-table-title">
                                        <h4>Stats</h4>
                                    </div>
                                    <div class="inner-item-table-flex">
                                        <div class="inner-item-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th class="th-nor">Stats</th>
                                                        <th>HS</th>
                                                        <th>PC</th>
                                                        <th>PR</th>
                                                        <th>NR</th>
                                                        <th>PCT</th>
                                                        <th>HEALI</th> 
                                                        <th>STRK</th>
                                                        <th>L10</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-if="allTableData.healthSore">
                                                        <td class="th-nor">Regular season</td>
                                                        <td>{{allTableData.healthSore.toFixed(2)}}</td>
                                                        <td>{{allTableData.ps}}</td>
                                                        <td>{{allTableData.metrice.PositiveReview}}</td>
                                                        <td>{{allTableData.metrice.NegativeReview}}</td>
                                                        <td>{{allTableData.PCT}}%</td>
                                                        <td>{{allTableData.metrice.avgHealthIndex}}</td>
                                                        <td>{{allTableData.streak}}</td>
                                                        <td>{{ allTableData.last10.PositiveReview + "-" + allTableData.last10.NegativeReview }}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td class="th-nor">Overall</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>0.0</td>
                                                        <td>00%</td>
                                                        <td>00%</td>
                                                        <td>+01</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="inner-item-table-img">
                                            <figure>
                                                <img src="/image/larger-quality.png" alt="">
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                               <div class="inner-item-review-sec" v-if="topReviews.length>0">
                                    <div class="left-linear-border">

                                    </div>
                                    <div class="inner-item-review-title">
                                        <h4>Review Highlights</h4>
                                    </div>
                                    <div class="inner-item-reco-details">
                                        <div v-if="topReviews.length>0">
                                            <div class="inner-item-rev-item" v-for="(item,index) in topReviews" :key="index" >
                                                <figure>
                                                    <img src="/images/act.png" alt="">
                                                </figure>
                                                <div class="rev-item-caption">
                                                    <p class="readmore">"{{item.content}}"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                             <div class="inner-item-rev-item" >
                                                <figure>
                                                    <img src="/images/act.png" alt="">
                                                </figure>
                                                <div class="rev-item-caption">
                                                    <p class="readmore">"No Recent Reviews"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="new-divider"></div>
                                   <div class="inner-item-review-sec" v-if="legendData.topAtrribute">
                                    <div class="inner-item-known-title">
                                        <h4>Known For</h4>
                                    </div>
                                    <div class="inner-item-known-details pranto-inner-item-known-details"  >
                                        <div class="inner-item-known-item" v-for="(item,index) in legendData.topAtrribute" :key="index" >
                                            <figure>
                                                <img :src="item.info.image" alt="">
                                            </figure>
                                            <div class="known-item-caption">
                                                <p>{{item.info.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-att">
                                        <p><a href="#">26 more attributes</a></p>
                                    </div>
                                </div>
                                


                                 <div class="new-divider"></div>
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
                                     <div class="new-flank-form" v-if="legendData.question && !isMoreQuestion"  >
                                            <p style="font-family: CeraPro;font-size: 14px;color: #000;margin-top: 7px;font-weight: 600;">Question:</p>
                                            <div class="new-qu" style="padding-left: 0; border: 0; padding-bottom: 10px">
                                                
                                                <div class="new-qu-text">
                                                    <p>{{legendData.question.content}}</p>
                                                </div>
                                                <!-- <div class="new-qu-img">
                                                    <img src="/images/nf.png" alt="">
                                                </div> -->
                                            </div>
                                            <div class="new-flank-coach-rev" v-if="legendData.question.user">
                                                <div class="coach-rev-con">
                                                    <figure>
                                                        <img :src="legendData.question.user.img" alt="">
                                                    </figure>
                                                    <div class="coach-rev-text-content">
                                                        <h4>{{legendData.question.user | trimSecondLater}}</h4>
                                                        <h5>{{legendData.question.user.address}}</h5>
                                                        <ul class="fixed-list">
                                                            <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                            <li><img src="/images/mstar.png" alt=""><span>{{legendData.question.user.__meta__.totalreviewbyuser}} reviews</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div class="inner-one-item-help-area2"  >
                                                    <h6 v-if="legendData.question.answers" class="help-ans"><span>1</span> answer</h6>
                                                    <h6 v-else-if="legendData.question.answers==null" class="help-ans"><span>No</span> answer</h6>
                                                    <div v-if="legendData.question.answers">
                                                        
                                                        <p class="help-text">{{legendData.question.answers.content}}</p>
                                                    </div>
                                                
                                                <div class="inner-one-item-help-btn">
                                                    <p class="view-question-btn"><nuxt-link :to="{name: 'question_details-id', params: {  id:legendData.question.id } }" >View questions details</nuxt-link></p>
                                                    <div class="helpful-btn-full" v-if="legendData.question.answers!=null">
                                                        <ul>
                                                            <li><a @click="storeAnswerLike(legendData.question,1,0)" class="helpful"><i class="fas fa-long-arrow-alt-up"></i><span>{{legendData.question.answers ? legendData.question.answers.helpful : ''}}</span> helpful</a></li>
                                                            <li><a @click="storeAnswerLike(legendData.question,0,1)" class="most-helpful"><i class="fas fa-long-arrow-alt-down"></i><span>{{legendData.question.answers ? legendData.question.answers.not_helpful : ''}}</span> Not helpful</a></li>
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="new-flank-form" v-else-if="questionList.length>0 && isMoreQuestion" v-for="(item,index) in questionList " :key="index">
                                            <p style="font-family: CeraPro;font-size: 14px;color: #000;margin-top: 7px;font-weight: 600;">Question:</p>
                                            <div class="new-qu">
                                                
                                                <div class="new-qu-text">
                                                    <p>{{item.content}}</p>
                                                </div>
                                            </div>
                                            <div class="new-flank-coach-rev" v-if="item.user">
                                                <div class="coach-rev-con">
                                                    <figure>
                                                        <img :src="item.user.img" alt="">
                                                    </figure>
                                                    <div class="coach-rev-text-content">
                                                        <h4>{{item.user | trimSecondLater}}</h4>
                                                        <h5>{{item.user.address}}</h5>
                                                        <ul class="fixed-list">
                                                            <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                            <li><img src="/images/mstar.png" alt=""><span>{{item.user.__meta__.totalreviewbyuser}} reviews</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div class="inner-one-item-help-area2"  >
                                                    <h6 class="help-ans" v-if="item.__meta__.answers_count>0">{{item.__meta__.answers_count}} {{(item.__meta__.answers_count>1)? 'Answers' : 'Answer' }}</h6>
                                                    <h6 class="help-ans" v-else-if="item.__meta__.answers_count==0">No Answer</h6>
                                                    <div v-if="item.answers">
                                                        
                                                        <p class="help-text">{{item.answers.content}}</p>
                                                    </div>
                                                
                                                <div class="inner-one-item-help-btn">
                                                    <p class="view-question-btn"><nuxt-link :to="{name: 'question_details-id', params: {  id:item.id } }" >View questions details</nuxt-link></p>
                                                    <div class="helpful-btn-full" v-if="item.__meta__.answers_count!=0">
                                                        <ul>
                                                            <li><a @click="storeAnswerLike(item,1,0)" class="helpful"><i class="fas fa-long-arrow-alt-up"></i> <span>{{item.answers ? item.answers.helpful : ''}}</span> helpful</a></li>
                                                            <li><a @click="storeAnswerLike(item,0,1)" class="most-helpful"><i class="fas fa-long-arrow-alt-down"></i> <span>{{item.answers ? item.answers.not_helpful :''}}</span>Not helpful</a></li>
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                         <div class="show-more-ac">
                                            <p v-if="!isMoreQuestion"><a @click="isMoreQuestion= !isMoreQuestion"><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                            <p  v-else-if="isMoreQuestion"><a @click="isMoreQuestion= !isMoreQuestion"><span><i class="fas fa-chevron-up"></i></span>Show less activity</a></p>
                                        </div>
                               
                                </div>
                                <div class="inner-item-reco-sec">
                                    <div class="inner-item-reco-title">
                                        <h4>Recommended Reviews <span>for Coach {{legendData.name}}</span></h4>
                                    </div>
                                    <div class="inner-item-top-con">
                                        <figure>
                                            <img src="/images/sticker-3.png" alt="">
                                        </figure>
                                        <div class="top-con-cap">
                                            <p><span>Your trust is our top concern,</span> so coaches can't pay to alter or remove there reviews.</p>
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
                                            <div class="new-flank-sort mob-new-flank-sort">
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
                                            <div class="coach-rev-push">
                                                <ul class="coa-rev">
                                                   <li @mouseover="changeDataHover(1)"    @click="reviewPageWith(1)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 0)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li  @mouseover="changeDataHover(2)"  @click="reviewPageWith(2)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 1)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li  @mouseover="changeDataHover(3)"  @click="reviewPageWith(3)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 2)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li @mouseover="changeDataHover(4)"   @click="reviewPageWith(4)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 3)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li @mouseover="changeDataHover(5)"   @click="reviewPageWith(5)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 4)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                </ul>
                                                <div class="start-link">
                                                    <p>Start your review of <span>{{legendData.name}}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="new-divider"></div>
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
                                                            <p><a>Embed Review</a></p>
                                                        </li>
                                                        <li @click="messageModal = true"> 
                                                            <img src="/images/mstar.png" alt="">
                                                            <p><a>Send message</a></p>
                                                        </li>
                                                        <!-- <li>
                                                            <img src="/images/mstar.png" alt="">
                                                            <p><a>Follow valerie C.</a></p>
                                                        </li> -->
                                                    </ul>
                                                </div> 
                                            </div>
                                            <div class="review-item-right">
                                                <div class="review-item-right-rat pranto-review-item-right-rat">
                                                    <ul>
                                                        <li  :class="(item.rating>0)? '' : 'star-half'"><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>1)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>2)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>3)? '' : 'star-half'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(item.rating>4)? '' : 'star-half'"  ><span><i class="fas fa-star"></i></span></li>
                                                    </ul>
                                                    <div class="review-date">
                                                        <!-- <p>5/8/2019 <span>5:25:36</span></p> -->
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
                                    <!-- <div class="flank-given-review-item">
                                        <div class="linear-border"></div>
                                        <div class="review-item-inner">
                                            <div class="review-item-left">
                                                <div class="review-item-left-fig">
                                                    <figure>
                                                        <img src="/images/act.png" alt="">
                                                    </figure>
                                                    <div class="review-item-left-fig-c">
                                                        <h4>Valerie C.</h4>
                                                        <h5>Los Angeles, CA</h5>
                                                        <ul class="left-fig-link">
                                                            <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                            <li><img src="assets/images/mstar.png" alt=""><span>7 reviews</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="review-figure-exper">
                                                    <ul>
                                                        <li>
                                                            <img src="/images/mstar.png" alt="">
                                                            <p>Share review</p>
                                                        </li>
                                                        <li>
                                                            <img src="/images/mstar.png" alt="">
                                                            <p>Embeded Review</p>
                                                        </li>
                                                        <li>
                                                            <img src="/images/mstar.png" alt="">
                                                            <p>Send message</p>
                                                        </li>
                                                        <li>
                                                            <img src="/images/mstar.png" alt="">
                                                            <p>Follow valerie C.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="review-item-right">
                                                <div class="review-item-right-rat">
                                                    <ul>
                                                        <li><span><i class="fas fa-star"></i></span></li>
                                                        <li><span><i class="fas fa-star"></i></span></li>
                                                        <li><span><i class="fas fa-star"></i></span></li>
                                                        <li><span><i class="fas fa-star"></i></span></li>
                                                        <li><span><i class="fas fa-star"></i></span></li>
                                                    </ul>
                                                    <div class="review-date">
                                                        <p>7/24/2019</p>
                                                    </div>
                                                </div>
                                                <div class="flank-check">
                                                    <ul>
                                                        <li><img src="/images/chckin.png" alt=""></li>
                                                        <li><span>1</span>check-in</li>
                                                    </ul>
                                                </div>
                                                <div class="review-item-right-details">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                </div>
                                                <div class="review-gallary">
                                                    <figure>
                                                        <img src="/images/1000s.jpg" alt="">
                                                        <figcaption><p>Very simple menu</p></figcaption>
                                                    </figure>
                                                </div>
                                                <div class="review-btn-sec">
                                                    <p>Was this review ...?</p>
                                                    <div class="review-btn">
                                                        <ul>
                                                            <li><img src="/images/ic1.png" alt=""><span>Official</span></li>
                                                            <li><img src="/images/ic2.png" alt=""><span>Bravery Bagde</span></li>
                                                            <li><img src="/images/ic3.png" alt=""><span>Distinguished</span></li>
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
                                    </div> -->
                                    
                                </div>
                            </div>
                        </div>
                        <div class="new-inner-item-1">
                            <div  :class="(!isSmallScreen)? 'col-md-3 col-sm-3' : 'col-md-4 col-sm-4'">
                                 <div class="latest-img-div" v-if="isSmallScreen" @mouseover="isImageMenu = true"  @mouseleave="isImageMenu = false">
                                    <div class="latest-img-title">
                                        <h3>Latest images</h3>
                                    </div>
                                    <div class="latest-img-slider">
                                        <div class="latest-img-slider-carousel" v-if="uploadList.length>0" >
                                            <div class="latest-img-slider-item" >
                                                <figure>
                                                  <img :src="uploadList[this.img_index].url" alt="">
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="latest-img-slider-carousel" v-else >
                                            <div class="latest-img-slider-item">
                                                <figure>
                                                    <img src="/uploads/default.png" alt="">
                                                </figure>
                                            </div>
                                        </div>
                                        <div v-if="isImageMenu && uploadList.length>0" >
                                            <div class="latest-img-slider-pagi" >
                                                <div class="slider-pagi-prev slider-pagi" @click="prevImage"  >
                                                    <img src="/image/sectic1.png" alt="">
                                                </div>
                                                <div class="slider-pagi-next slider-pagi" @click="nextImage" >
                                                    <img src="/image/sectic2.png" alt="">
                                                </div>
                                            </div>
                                            <div class="latest-img-slider-full" @click="galleryModalOn(img_index)">
                                                <img src="/image/full-secren.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="latest-img-footer">
                                        <div class="latest-img-foot-in">
                                            <img src="/image/flank.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="latest-dashboard-div" v-if="isLoggedIn && authInfo.id == user_id && isSmallScreen " >
                                    <button class="_1btn"><a href="https://dashboard.goflank.com">Go to Dashboard</a></button>
                                </div>
                                <div class="switch-link-cal">
                                    <div class="switch-link-cal-inner">
                                        <div class="switch-link-stop">
                                            <div class="switch-link-cont-img">
                                                <img src="/image/ho.png" alt="">
                                            </div>
                                            <div class="switch-link-cont-txt">
                                                <div class="cont-txt" v-if="todayHour.today == 1 " >
                                                    <p>{{todayHour.day.time}}</p>
                                                </div>
                                                <div class="cont-op" v-if="todayHour.today ==1 && todayHour.open == true ">
                                                    <p>Open now</p>
                                                </div>
                                                 <div class="link-table-cl"  v-if="todayHour.today == 0 ">
                                                    <p>Close</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="switch-link-timer">
                                            <div class="switch-link-cont-img">
                                                <img src="/image/tikbadge.png" alt="">
                                            </div>
                                            <div class="switch-link-timer-txt">
                                                <p>1 Current Deal: First Lesson 50% off</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="switch-link-hour">
                                        <div class="link-hour-title">
                                            <p>Hours</p>
                                        </div>
                                        <div class="link-hour-title-table">
                                            <div class="link-table-item"  >
                                                <div class="link-table-day">
                                                    <p>Mon</p>
                                                </div>
                                                <div class="link-table-hour" v-if=" showBusinessHour[0].active">
                                                    <p><span>{{showBusinessHour[0].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true && todayHour.day.day == 'Monday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Tue</p>
                                                </div>
                                                 <div class="link-table-hour" v-if=" showBusinessHour[1].active">
                                                    <p><span>{{showBusinessHour[1].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true  && todayHour.day.day == 'Tuesday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Wed</p>
                                                </div>
                                                <div class="link-table-hour" v-if=" showBusinessHour[2].active">
                                                    <p><span>{{showBusinessHour[2].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true && todayHour.day.day == 'Wednesday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Thu</p>
                                                </div>
                                                 <div class="link-table-hour" v-if=" showBusinessHour[3].active">
                                                    <p><span>{{showBusinessHour[3].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true && todayHour.day.day == 'Thursday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Fri</p>
                                                </div>
                                                 <div class="link-table-hour" v-if=" showBusinessHour[4].active">
                                                    <p><span>{{showBusinessHour[4].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true  && todayHour.day.day == 'Friday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Sat</p>
                                                </div>
                                                 <div class="link-table-hour" v-if=" showBusinessHour[5].active">
                                                    <p><span>{{showBusinessHour[5].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true  && todayHour.day.day == 'Saturday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                            <div class="link-table-item">
                                                <div class="link-table-day">
                                                    <p>Sun</p>
                                                </div>
                                                 <div class="link-table-hour" v-if=" showBusinessHour[6].active">
                                                    <p><span>{{showBusinessHour[6].time}}</span></p>
                                                </div>
                                                <div class="link-table-cl" v-else >
                                                    <p>Close</p>
                                                </div>
                                                <div class="link-table-op" v-if="todayHour.today ==1 && todayHour.open == true && todayHour.day.day == 'Sunday'" >
                                                    <p>Open now</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="switch-coach-right">
                                    <div class="switch-coach-right-title">
                                        <h3>From the Coach</h3>
                                    </div>
                                    <div class="switch-coach-right-content">
                                        <div class="switch-coach-content-para">
                                            <p>{{legendData.about}}</p>
                                        </div>
                                        <div class="switch-coach-content-link">
                                            <!-- <p><a href="">Learn more about Coach John Doe</a></p> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="switch-coach-right">
                                    <div class="switch-coach-right-title">
                                        <h3>More Business Info</h3>
                                    </div>
                                    <div class="switch-coach-right-content">
                                        <div class="switch-coach-payment">
                                            <ul v-if="LegendBussniessInfo.length>0">
                                                <li v-for="(item,index) in LegendBussniessInfo" :key="index" >{{item.info}} <span>{{item.isAvailable}}</span></li>
                                                <!-- <li>Gender neutral <span>Yes</span></li>
                                                <li>Group sessions <span>Yes</span></li>
                                                <li>Brings supplies <span>Yes</span></li> -->
                                            </ul>
                                            <div v-else>
                                                <p>No business info </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="switch-link-content">
                                    <div class="switch-link-title">
                                        <h4 style="margin-bottom: 15px;">Latest videos</h4>
                                    </div>
                                      <div class="flank-video" v-if="playingVideo">
                                            
                                           <p v-html="playingVideo"></p>
                                           <!-- {{ coachVideo[isPlayingItemId].body }} -->
                                            <!-- <iframe src="https://www.youtube.com/embed/Vz738aqEI5w" width="640" height="268" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
                                        </div>

                                    <div class="playing-list">
                                        <ul>
                                          <li v-for="(item,index) in coachVideo" :key="index">
                                                    <div class="playing-btn">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-info" @click="openVideo(item.body,index)" style="cursor:pointer;">
                                                        <p>{{item.title}}</p>
                                                        <ul>
                                                            <li v-if="index==isPlayingItemId">Now playing <span>•</span></li>
                                                            <li><p>{{item.video_length}}</p></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            <!-- <li>
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
                                            </li> -->
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
        <Modal title="Image Gallery" v-model="galleryModal">
            <div class="row">
                <div class="modal-image-carousel">
                        <figure>
                            <!-- <img v-if="uploadList[galleryIndex]" :src="'https://dashboard.goflank.com'+uploadList[galleryIndex].url" style="width: 100%"> -->
                            <img v-if="uploadList[galleryIndex]" :src="uploadList[galleryIndex].url" style="width: 100%">
                        </figure>
                </div>
                
                
            </div>
            
        </Modal>
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
                        <!-- <div class="signcont-left">
                           
                            <form v-on:submit.prevent>
                                <div class="group-item">
                                    <label >Email</label>
                                    <input type="email" v-model="formData.email">
                                </div>
                                <div class="group-item">
                                    <label >Password</label>
                                    <nuxt-link  class="group-item-right red-alert group-item-forgot-pass"  to='/authentication/resetpassword' >Fogot password?</nuxt-link>
                                    <input type="password" v-model="formData.password">
                                </div>
                            </form>
                            <p class="mar_b20">By continuing, you agree to Conditions Flank's of Use and Privacy Notice</p>
                            <h5 class="mar_b30"><input type="checkbox" name="vehicle1" value="Bike"> Keep me sign in. <a href="#" class="sign-in">Details</a></h5>
                            
                            <div class="group-item">
                                    <input type="submit" @click="onSubmit" value="Sign-In">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            
        </Modal>
        <Modal title="Flank Scheduler" v-model="contactMOdal">
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="signcont-left">
                           
                            <form v-on:submit.prevent>
                                <div class="group-item flex_item">
                                    <label >Full Name</label>
                                    <input type="email" v-model="contact.name">
                                </div>
                                <div class="group-item flex_item">
                                    <label >Phone Number</label>
                                    <input type="email" v-model="contact.contact">
                                </div>
                                <div class="group-item flex_item">
                                    <label >Select Date</label>
                                    <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" @on-change="selectContactDate" ></DatePicker>
                                </div>
                                <!-- <div class="group-item">
                                    <label >Password</label>
                                    <nuxt-link  class="group-item-right red-alert group-item-forgot-pass"  to='/authentication/resetpassword' >Fogot password?</nuxt-link>
                                    <input type="password" v-model="formData.password">
                                </div> -->
                            </form>
                            
                            <div class="group-item"> 
                                    <input type="submit" @click="scheduleSubmit" value="Book Now">
                            </div>
                        </div>
                    </div>
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
                                    <input type="email" v-model="message.subject">
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
                                <li><button class="fb-btn"  :data-href="location" ><span><i class="fab fa-facebook-square"></i></span> <a style="color:#ffff;"  :href="'https://www.facebook.com/sharer/sharer.php?u='+location" target="_blank" >Share on facebook</a> </button></li>
                                <li><button class="tw-btn"><span><i class="fab fa-twitter-square"></i></span><a  style="color:#ffff;" :href="`https://twitter.com/share?ref_src=${location}`" target="_blank" rel="noopener noreferrer">Share on twitter</a></button></li>
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
                            <textarea name="" id=""  rows="5" v-model="shareForm.note"></textarea>
                        </div>
                        <div class="modal-btn" >
                            <button @click="submitShare">Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            isLoad:false,
            isEdit:false,
            isSmallScreen:false,
            messageModal:false,
            isShareModal:false,
            embeddedModal:false,
            value2: 0,
            formData:{
                name:'',
                address:'',
                phone:''
            },
            img_index:0,
            user_id:0,
             location:{},
             shareForm:{
               name:'',
               email:'',
               to:'',
               note:'',
           },
            addImageModal:false,
            defaultList: [],
            LegendBussniessInfo: [],
            imgName: '/uploads/default.png',
            askModal:false,
            galleryModal:false,
            answerModal:false,
             loginModal:false,
             contactMOdal:false,
            askData:{
                content:'',
            },
             sort:'',
             reviewSearch:'',
            tempAIndex:'',
            allTableData: {},
            businessHour:[

                {  day : 'Monday',
                    time:[],
                    active:false,

                },
                {  day : 'Tuesday',
                    time:[],
                    active:false,

                },
                {  day : 'Wednesday',
                    time:[],
                    active:false,

                },
                {  day : 'Thursday',
                    time:[],
                    active:false,

                },
                {  day : 'Friday',
                    time:[],
                    active:false,

                },
                {  day : 'Saturday',
                    time:[],
                    active:false,

                },
                {  day : 'Sunday',
                    time:[],
                    active:false,

                },
                
            ],
            isVideo:{
                modal :false,
                header:'',
                link:''
            },
            showBusinessHour:[

                {  day : 'Monday',
                    time:'',
                    active:false,

                },
                {  day : 'Tuesday',
                    time:'',
                    active:false,

                },
                {  day : 'Wednesday',
                    time:'',
                    active:false,

                },
                {  day : 'Thursday',
                    time:'',
                    active:false,

                },
                {  day : 'Friday',
                    time:'',
                    active:false,

                },
                {  day : 'Saturday',
                    time:'',
                    active:false,

                },
                {  day : 'Sunday',
                    time:'',
                    active:false,

                },
                
            ],
            atrrtributepoint:'',
            reviews:[],
            uploadList:[],
            topReviews:[],
            questionList:[],
            hours:[],
            galleryIndex:0,
            todayHour:{},
            rpagination:{},
            totalQuestion:0,
            reviewSearch:'',
            reviewStar:0,
            isLoading:true,
            isImageMenu:false,
            drating:{
                class:'',
                index: 0
            },
            contact:{
                name:'',
                contact: '',
                date: '',
                user_id:'',
                legend_id:'',
            },
            message:{
                email:'',
                subject: '',
                message: '',
            },
            embeded_id:16,
            embededText:'',
            isMoreQuestion:false,
            coachVideo:[],
            isPlayingItemId:-1,
            playingVideo:'',
            
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
       async messageSubmit(){
           if(!this.message.email || this.message.email=='' || this.message.email.trim()==''){
                    return this.e("Email field can not be empty !")
            }
             if(!this.message.subject || this.message.subject=='' || this.message.subject.trim()==''){
                  return  this.e("Subject field can not be empty !")
            }
             if(!this.message.message || this.message.message=='' || this.message.message.trim()==''){
                  return  this.e("Message field can not be empty !")
            }
            this.isLoad = true
            const res = await this.callApi('post', '/app/sendreviewMessage', this.message)
            if(res.status==200 || res.status==204){
                this.s("Message has been  sent  Successfull !")
                 this.message={
                email:'',
                subject: '',
                message: '',
            }
            this.message = message
            this.messageModal = false
            this.isLoad = false
            }
            else if(res.status==401){
                this.isLoad = false
               return this.e("Given Email is Invalid")
            }
            else{
                this.e("Check Your Network Or Given Data is Invalid")
                this.isLoad = false
            }
        },
         openVideomobile(link){ 
             this.isVideo.link = `<div class="inner-video-iframe">${link}</div>`
            this.isVideo.modal= true
        },
        openVideo(link,index){ 
            this.isPlayingItemId = index
            this.playingVideo = link
        },
        // openVideo(no){ 
        //     if(no == 1){
        //         this.isVideo.link = `<div class="inner-video-iframe">
        //                                                     <iframe width="560" height="315" src="https://www.youtube.com/embed/Vz738aqEI5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                                                     </div> `
        //         this.isVideo.header = `Out of control Coache's abusive behaviour caught on tape.`
        //     }
        //     else if(no == 2){
        //         this.isVideo.link = `<div class="inner-video-iframe">
        //                                                     <iframe src="https://www.youtube.com/embed/rdVEag98q6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                                                     </div> `
        //         this.isVideo.header = `Players accuse GCU women's soccer coach of verbal, mental, physial abuse.`
        //     }
        //     else if(no == 3){
        //         this.isVideo.link = `<div class="inner-video-iframe">
        //                                                     <iframe src="https://www.youtube.com/embed/AzcPG9sRDMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                                                     </div> `
        //         this.isVideo.header = `Rutgers coach fired for abuse of players.`
        //     }
        //     else if(no == 4){
        //         this.isVideo.link = `<div class="inner-video-iframe">
        //                                                     <iframe src="https://www.youtube.com/embed/LdK2d4CGzrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                                                     </div> `
        //         this.isVideo.header = `The abuse of child atheletes by their coaches.`
        //     }
        //     this.isVideo.modal= true
        // },
        closeVideo(){
            this.isVideo.modal = false
            this.isVideo.link = ''
            this.isVideo.header = ''
        },
        reviewPageWith(num){
            setTimeout(()=>{ this.$router.push(`/addreview/${this.legendData.id}?star=${num}`) }, 1000)
            
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
        changeDataHoverLeave(){
            this.onHover = false
            
        },
        async SearchReviewResult(){
           
            const res = await this.callApi('get', `reviews/${this.$route.params.id}?str=${this.reviewSearch}&type=legend&sort=${this.sort}`)
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }

        },
        reviewPageWith(num){
            this.reviewStar = num
            setTimeout(()=>{ this.$router.push(`/addreview/${this.legendData.id}?star=${this.reviewStar}`) }, 1000)
            
        },
        async SearchReviewResult(){
           
            const res = await this.callApi('get', `reviews/${this.$route.params.id}?str=${this.reviewSearch}`)
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }

        },
        async pageniateReview(index){
             console.log(this.rpagination)
            if(this.rpagination.page+index <=0 || this.rpagination.page+index > this.rpagination.lastPage){
                this.i("No more pages left!")
                return
            }
            this.rpagination.page = this.rpagination.page+index
           
            const res = await this.callApi('get', `reviews/${this.$route.params.id}?page=${this.rpagination.page}&str=${this.reviewSearch}`)
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }
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
        galleryModalOn(index){
            if(this.uploadList[index]){
                 this.galleryIndex = index
                this.galleryModal = true
            }
        },
        async deleteImage(){
            if(!confirm("Are you sure to delete this Image")){
                return;
            }

            let ob = {
                id: this.uploadList[this.galleryIndex].id
            }
            const res = await this.callApi('delete','/app/deleteImage',ob)
            if(res.status==200){
                this.uploadList.splice(this.galleryIndex,1)
                this.i("image has been deleted!")
            }
            else if (res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }


        },
        prevImage(){
          
            if(this.img_index>0){
                this.img_index--;
                  console.log('prevImage')
            }
        },
        nextImage(){
            
            if(this.img_index<this.uploadList.length-1){
                this.img_index++;
                console.log('nextImage')

            }
        },
        prevModalImage(){
            if(this.galleryIndex>0){
                this.galleryIndex--;
            }
        },
        nextModalImage(){
            if(this.galleryIndex+1<this.uploadList.length){
                this.galleryIndex++;
            }
        },
        async  storePulse(flag){
           
            let pulseData = {
                legend_id:this.legendData.id,
                
            }
            if(flag == 1) pulseData.good = 1
            else pulseData.bad = 1
            const res = await this.callApi('post','pulses',pulseData)
            if(res.status == 200){
                if(flag==1) {
                    this.healthPulse.GoodCount +=1
                    this.s('you up-voted this user! ')
                }
                else {
                     this.healthPulse.BadCount +=1
                     this.i('you down-voted this user!')
                }
            }
            else if(res.status==401){
                this.i(res.data.message)
            }
            else{
                this.swr();
            }
        },
        openImageModal(){
            if(this.uploadList.length>0) this.imgName = this.uploadList[(this.uploadList.length-1)].url

            this.addImageModal=true
        },
        async answerModalOpen(item,index){
            this.answerData.question_id = item.id
            this.tempAIndex = index
            this.answerModal = true

        },
        async askQuestion(){
            if(this.askData.content == ''){
                this.i('You question field is empty!')
                return
            }
            if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.$router.push('/login');
                return
            }
            this.askData.legend_id = this.legendData.id
            const res = await this.callApi('post','/questions',this.askData)
            if(res.status===200){
                this.s("Your question has been posted successfully!")
                this.questionList.unshift(res.data)
                this.totalQuestion++
                this.askModal = false
            }
            else{
                this.swr();
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
            const res = await this.callApi('post','/stoteReviewImo',imoData)
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
        
        async editOn(){

            this.formData.name = this.legendData.name
            this.formData.address = this.legendData.address
            this.formData.phone = this.legendData.phone

            for(let i in this.showBusinessHour){
                if(this.showBusinessHour[i].active == true){
                    let tp = this.showBusinessHour[i].time.split('-')
                    this.businessHour[i].time[0] = tp[0]
                    this.businessHour[i].time[1] = tp[1]
                    this.businessHour[i].active = true
                }
            }
            this.isEdit = true
        },
        async legendUpdate(){
            if(this.formData.name == ''|| this.formData.address =='' || this.formData.phone == ''){
                this.i("All fields must be filled !")
                console.log('All fields must be filled !')
                return;
            }
            let hourData = []
            for(let i of this.businessHour ){
                if(i.active == true){
                    if(i.time[0] == ''){
                        this.i("Please select time for "+i.day)
                        return;
                    }
                    let ob = {
                        legend_id: this.legendData.id,
                        day: i.day,
                        time: i.time[0] + '-' + i.time[1]
                    }
                    hourData.push(ob)
                }
                
            }
            
            this.formData.businessHour = hourData
            const res = await this.callApi('put',`/legends/${this.legendData.id}`,this.formData)
            if(res.status===200){
                this.s("Change have been made Successfully!")
                this.legendData.name = this.formData.name
                this.legendData.address = this.formData.address
                this.legendData.phone = this.formData.phone
                
                for(let i in this.businessHour ){
                    if(this.businessHour[i].active == true){
                        this.showBusinessHour[i].active = true
                        this.showBusinessHour[i].time =this.businessHour[i].time[0] + '-' + this.businessHour[i].time[1]
                    }
                    else{
                        this.showBusinessHour[i].active = false
                    }
                }
                this.isEdit=false
            }
            else{
                this.swr();
            }
        },
        async uploadsPhotos(){
            if(this.uploadList.length<1){
                this.i("you didn't select any photos")
                return
            }

            const res = await this.callApi('post','/uploadLegendPhotos',{uploadList: this.uploadList})
            if(res.status===200){
                this.s("Images have been uploaded successfully!")
                this.addImageModal = false
            }
            else{
                this.swr();
            }
        },
        handleView (item) {
                this.imgName = item;
        },
        handleRemove (index) {
            this.uploadList.splice(index, 1);
        },
        handleSuccess (res, file) {
            console.log(res)
            let ob = {
                url:res.file
            }
            this.imgName = res.file
            this.uploadList.push(ob)
            // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        // handleBeforeUpload () {
        //     const check = this.uploadList.length < 3;
        //     if (!check) {
        //         this.$Notice.warning({
        //             title: 'Up to 3 pictures can be uploaded.'
        //         });
        //     }
        //     return check;
        // },
        getImoName(name,index){
           return 
           
        },
        async scheduleSubmit(){
            if(this.contact.name == '') return this.i("Name is Empty!")
            if(this.contact.contact == '') return this.i("Name is Empty!")
            if(this.contact.date == '') return this.i("Name is Empty!")
            this.contact.user_id = this.legendData.user_id
            this.contact.legend_id = this.legendData.id
            const res = await this.callApi('post','/app/legendschedule',this.contact)
            if(res.status == 200){
                this.s("Thank You!")
                let contact ={
                    name:'',
                    contact: '',
                    date: '',
                    user_id:'',
                    legend_id:'',
                }
                this.contact = contact
                this.contactMOdal = false
            }
        },
         async storeAnswerLike(item,helpful,not_helpful){
            console.log(item)
             if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            let str = 'helpful';
            if(helpful==1) str = 'helpful'
            if(not_helpful==1) str = 'not helpful'
            let ob = {
                answer_id:item.answers.id,
                helpful:helpful,
                not_helpful:not_helpful
            }
            const res = await this.callApi("post","/app/storeAnswerLike",ob)
            if(res.status == 200){
                item.answers = res.data
                this.s('you mark this question as '+str)
            }
            else this.swr()
        }
         
    },
    filters:{
        totalPercent(item){
            if(item.totalPoints<=0){
                return '0%'
            }
            return parseInt((item.totalPoints*100)/(item.points*item.totalvotes))+"%"
        }
    },
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/legends/${params.id}`)
          let question = data.legend.question[0] 
          data.legend.question = question
            return{
                legendData : data.legend,
                title : data.legend.name,
                userData : data.user,
                averageRating : data.averageRating,
                healthPulse : data.healthPulse,
                AttributeInfo : data.AttributeInfo,
                totalReview : data.legend.__meta__.totalReview_count
                
            }
		}catch (error) {
            console.log(error)
            return redirect('/')
		}
    },
    mounted(){
         if(window.innerWidth < 1460){
            this.isSmallScreen = true
        }
    },
   async created(){
         this.location = window.location.href
        if(this.isLoggedIn) this.user_id = this.authInfo.id
        
        const [res1, res2, res3, res4,res5,res6,res7,res8] = await Promise.all([
            this.callApi('get', `/app/atrributeConteptData/${this.$route.params.id}`),  
            this.callApi('get', `/app/getAdditionlegendInfo/${this.$route.params.id}`),
            this.callApi('get', `/app/getTodayBussinessHour/${this.$route.params.id}`),
            this.callApi('get', `reviews/${this.$route.params.id}`), 
            this.callApi('get', `/app/getCoachTopReviews/${this.$route.params.id}?type=legend`),
            this.callApi('get', `/app/legendbussinessinfo/${this.$route.params.id}`),
             this.callApi('get', `/questions/${this.$route.params.id}?type=legend&limit=3`), 
             this.callApi('get', `/app/allCoachVideo`)
        ])
        if(res8.status==200  && res1.status===200 && res2.status===200 && res3.status === 200 && res4.status === 200 && res5.status === 200 && res6.status == 200){
            this.atrrtributepoint = res1.data
            this.reviews = res4.data.data
            this.rpagination = res4.data
            delete this.rpagination.data
            this.uploadList = res2.data.legendData.legendimages
            // this.questionList = res2.data.legendData.questions
             this.coachVideo = res8.data
             if(res8.data.length>0){
                this.playingVideo=  this.coachVideo[0].body
                this.isPlayingItemId=0
            
            }
            this.questionList = res7.data.data
            this.todayHour = res3.data
            this.hours = res2.data.legendData.hours
            this.totalQuestion = res2.data.legendData.__meta__.totalQuestion
            delete res2.data.legendData;
             this.allTableData = res2.data
            this.topReviews = res5.data
            this.LegendBussniessInfo = res6.data
            this.isLoading = false
            
        } else{
            this.swr()
            this.isLoading = false 
        }
         if(this.hours.length>0){
            for(let d of this.hours){
                for(let sd of this.showBusinessHour){
                    if(d.day == sd.day){
                        sd.active = true
                        sd.time = d.time
                        break
                    }
                }
            }
        }

          
       
    }
}
</script>

<style scoped>
.profile_picU{
    width: 40px;
    
}
.imo_back{
    background: #62b4dc;
}
.demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    .noReview[data-v-2c068581] {
        text-align: center;
        padding: 10px;
    }
    .ivu-modal-wrap {
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
}

.ivu-modal-content {
  background: transparent !important;
  box-shadow: none !important;
}

.ivu-modal-header {
  display: none;
}

.ivu-modal-footer {
  display: none;
}

.ivu-modal {
  position: initial !important;
  top: 0 !important;
}

.ivu-modal-content {
  position: initial !important;
}

.ivu-modal-close {
    right: 10% !important;
    top: 10% !important;
}

/* .ivu-modal-close i {
  color: #fff !important;
  font-size: 50px !important;
} */

.modal-image-carousel {
    width: 65%;
    margin: auto;
    padding-bottom: 40px;
}

.ivu-modal {
  width: 100% !important;
}
._primary:hover{
    opacity: .8;
}
._primary {
    color: #fff;
    background: #d32323;
    border: 1px solid #d32323;
    background-image: none;
    background-repeat: no-repeat;
    transition: all .6s;
    margin: 0 0 25px;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    line-height: 1.28571em;
    padding: 8px 19px 9px;
    border-radius: 3px;
}
</style>
