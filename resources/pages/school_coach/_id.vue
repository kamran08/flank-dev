
<template>

     <div class="pt-120">

       <div v-if="!mobileScreen">
            <div class="flank-page-header">  
                <div class="flank-page-top">
                    <div class="container">
                        <div class="flank-full">
                            <div class="flank-item-1">
                                <figure>
                                
                                    <img src="/image/fl_lg.png" alt="">
                                </figure>
                                <div class="flank-header-cap">
                                    <h1>Coach <br><span>{{legendData.name}}</span></h1>
                                    <ul>
                                        <!-- <li><img  :src="legendData.school.logo" alt="">{{legendData.school.schoolName}}</li> -->
                                        <li><img  src="/images/sticker-3.png" alt="">{{legendData.school.schoolName}}</li>
                                        <li>&bull;</li>
                                        <li>{{legendData.school.sport}}</li>
                                    </ul>
                                    <div class="flank-head-btn"  @click="$router.push(`/scoach_review/${legendData.id}`)"> 
                                        <button>Review</button>
                                    </div>
                                </div>
                                <div class="flank-item-left-list">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Program type:</td>
                                                <td>{{legendData.school.schoolName}}</td>
                                            </tr>
                                            <tr>
                                                <td>City/state:</td>
                                                <td>{{legendData.school.city}} {{legendData.school.state}}</td>
                                            </tr>
                                            <tr>
                                                <td>Profile views:</td>
                                                <td>123 views</td>
                                            </tr>
                                            <tr>
                                                <td>Status:</td>
                                                <td><span class="green"></span>Active</td>
                                            </tr>
                                            <tr>
                                                <td>Streak:</td>
                                                <td>W5</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                                <h4>RTG</h4>
                                                <div class="review-star">
                                                    <ul>
                                                        <li  :class="(averageRating>0)? 'review-star-5' : 'star_half_1'"><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>1)? 'review-star-5' :  'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>2)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>3)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>4)? 'review-star-5' : 'star_half_1'"  ><span><i class="fas fa-star"></i></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Hs</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSore) ? allTableData.healthSore.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Heali</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSoreIndex.healthyIndex) ? allTableData.healthSoreIndex.healthyIndex.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Harmi</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSoreIndex.harmfulIndex) ? allTableData.healthSoreIndex.harmfulIndex.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
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
                        <div class="row flex-row">
                            
                            <div class="col-md-3 col-sm-3" >
                                <div class="new-inner-item-1">
                                    <div class="switch-link-content">
                                        <div class="switch-link-title">  
                                            <h4 class="mb-6">Coach Selection</h4>
                                        </div>
                                        <div class="switch-new-coach">
                                            <div class="switch-new-coach-item">
                                                <figure>
                                                    <img src="/images/new-man.gif" alt="">
                                                </figure>
                                                <div class="new-coach-item-text">
                                                    <h3>Not here? Tell us what <br>we're missing.</h3>
                                                    <p>If the coach you are <br>looking for isn't here, add it.</p>
                                                </div>
                                            </div>
                                            <div class="coach-btn" @click="addNew.modal = true"><button>Add a Coach</button></div>
                                        </div>
                                    </div>
                                    <div class="switch-link-content">
                                        <div class="switch-link-title">  
                                            <h4 class="mb-6">Switch coach</h4>
                                        </div>
                                        <div class="switch-link-btn">
                                                <ul>
                                                    <!-- <li><button>{{legendData.name}}</button></li> -->
                                                    <li><input type="text"  v-model="searchCoach" placeholder="Search Coach"></li>
                                                    <li @click="showBestRated = !showBestRated" ><button :class="showBestRated? 'best_rated_background': ''">Best rated coach</button></li>
                                                </ul>
                                            </div>
                                            <div class="switch-coach-sec">
                                                <div class="switch-coach active" v-for="(item,index) in searchedSimilarCoach" :key="index" >
                                                    <figure :href="`/school_coach/${item.id}`" > 
                                                        <img src="/images/new-man.gif" alt="">
                                                    </figure>
                                                    <div class="switch-coach-caption" style="padding-top: 0;" >
                                                        <p><a :href="`/school_coach/${item.id}`"  style="padding-top: 0; color: #000 !important; font-weight: 600;">{{item.name}}</a></p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="switch-link-foot">
                                            <p><a href="#">Full staff</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  class="col-md-6 col-sm-6 col-xs-12" >
                                <div class="new-inner-item-2">
                                    <div class="inner-item-table-sec">
                                        <div class="inner-item-table-title">
                                            <h4>Stats</h4>
                                        </div>
                                        <div class="inner-item-table">
                                            <table> 
                                                <thead>
                                                    <tr>
                                                        <th class="th-nor cera-bold weight-600" >Stats</th>
                                                        <th>HS <p>Health Score</p></th>
                                                        <th>PC <p>Program chemistry</p></th>
                                                        <th>PR <p>Positive review</p></th>
                                                        <th>NR <p>Negative review</p></th>
                                                        <th>PCT <p>Winning percentage</p></th>
                                                        <th>HEALI <p>Healthy index</p></th>
                                                        <th>HARMI <p>Harmful index</p></th>
                                                        <th>DIFF <p>Differential</p></th>
                                                        <th>STRK <p>Streak</p></th>
                                                        <th>L10 <p>Last 10</p></th>
                                                        <th>PCI <p>Program Chemistry Index</p></th>
                                                        <th>STI <p>Strength of Team Index</p></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-if="allTableData.metrice">
                                                        <td class="th-nor" style="text-transform: capitalize;">Regular season</td>
                                                        <td>{{ allTableData.healthSore.toFixed(2) }}</td>
                                                        <td>{{ allTableData.ps }}</td>
                                                        <td>{{ (allTableData.metrice.PositiveReview) ? allTableData.metrice.PositiveReview : 0 }}</td>
                                                        <td>{{ (allTableData.metrice.NegativeReview) ? allTableData.metrice.NegativeReview : 0 }}</td>
                                                        <td>{{ allTableData.PCT }}</td>
                                                        <td>{{ (allTableData.healthSoreIndex.healthyIndex) ? allTableData.healthSoreIndex.healthyIndex.toFixed(2) : 0}}</td>
                                                        <td>{{ (allTableData.healthSoreIndex.harmfulIndex) ? allTableData.healthSoreIndex.harmfulIndex.toFixed(2) : 0 }}</td>
                                                        <td>{{ ( allTableData.metrice ) ? allTableData.metrice.PositiveReview - allTableData.metrice.NegativeReview : ''}}</td>
                                                        <td>{{ allTableData.streak }}</td>
                                                        <td>{{ allTableData.last10.PositiveReview + "-" + allTableData.last10.NegativeReview }}</td>
                                                        <td>{{ allTableData.ps }}</td>
                                                        <td>{{ allTableData.STI.toFixed(2) }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="th-nor" style="text-transform: capitalize;">Overall</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>00</td>
                                                        <td>0.0</td>
                                                        <td>+01</td>
                                                        <td>00</td>
                                                        <td>01</td>
                                                        <td>01</td>
                                                        <td>1.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <!-- new flank -->
                                    <div class="inner-item-review-sec" v-if="topReviews.length>0">
                                        <div class="left-linear-border">

                                        </div>
                                        <div class="inner-item-review-title">
                                            <h4>Review Highlights</h4>
                                        </div>
                                        <div class="inner-item-reco-details">
                                            <div class="inner-item-rev-item" v-for="(item,index) in topReviews" :key="index" >
                                                <figure style="border: 1px solid #a60202; border-radius: 10px" v-if="item.reviwer && item.reviwer.img">
                                                    <img :src="item.reviwer.img" alt="">
                                                </figure>
                                                <figure v-else>
                                                    <!-- <img src="/images/act.png" alt=""> -->
                                                    <img src="/images/sticker-3.png" alt="">
                                                </figure>
                                                <div class="rev-item-caption">
                                                    <p class="readmore">"{{item.content}}"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner-item-review-sec" v-if="legendData.topAtrribute.length">
                                        <div class="inner-item-known-title">
                                            <h4>Known For</h4>
                                        </div>
                                        <div class="inner-item-known-details" v-if="legendData.topAtrribute" >
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
                                            <!-- <p><a href="">26 More Attributes</a></p> -->
                                        </div>
                                    </div> 
                                    <div class="inner-item-reco-sec inner-item-reco-sec-one">
                                        <div class="inner-item-reco-title">
                                            <h4 style="text-transform: none;">Ask the Community</h4>
                                        </div>
                                        
                                        <div class="inner-item-top-con inner-one-item-top-con" style="padding: 5px 20px; margin-top: 5px;">
                                            <figure>
                                                <img src="/images/sticker-3.png" alt="">
                                            </figure>
                                            <div class="top-con-cap one-top-cont-cap">
                                                <p>Don't see your question? <span style="cursor:pointer; color: #2380bb; font-family: ceraProMedium;padding-left: 20px;" @click="$router.push(`/coachquestionlist/${legendData.id}`)">Ask your verified audience! (Click here) </span> </p>
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
                                    <!-- <GChart
                                        type="LineChart"
                                        :data="chartData"
                                        :options="chartOptions"
                                        class="full"
                                        /> -->
                                    <div class="inner-item-reco-sec">
                                        <div class="inner-item-reco-title">
                                            <h4 class="cera-bold" style="text-transform: none;">Recommended Reviews <span class="cera-regular weight-400" style="padding-left: 3px;">for Coach {{legendData.name}}</span></h4>
                                        </div>
                                        <div class="inner-item-top-con" style="padding: 5px 20px;">
                                            <figure>
                                                <img src="/images/sticker-3.png" alt="">
                                            </figure>
                                            <div class="top-con-cap">
                                                <p style="font-family: ceraProRegular;font-weight: 400;"><span>Your trust is our top concern,</span> so coaches can't pay to alter or remove there reviews.</p>
                                            </div>
                                        </div>
                                        <div class="new-flank-form">
                                            <div class="new-flank-sort-sec">
                                                <div class="new-flank-search">
                                                    <form v-on:submit.prevent>
                                                        <div class="search-new-box new-fl-search-new-box">
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
                                                            <!-- <h5>{{item.reviwer.address}}</h5> -->
                                                            <ul class="left-fig-link">
                                                                <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                                <li><img src="/images/mstar.png" alt=""><span>{{item.reviwer.__meta__.totalreviewbyuser}} reviews</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="review-figure-exper">
                                                        <ul>
                                                            <!-- <li @click="isShareModalOn(item.reviwer)">
                                                                <img src="/images/new-mstar.png" alt=""> 
                                                                <p><a>Share review</a></p>
                                                            </li> -->
                                                            <li @click="embeddedModalOn(item)">
                                                                <img src="/images/new-mstar1.png" alt="">
                                                                <p><a>Embed Review</a></p>
                                                            </li>
                                                            <li @click="messageModal = true"> 
                                                                <img src="/images/new-mstar2.png" alt="">
                                                                <p><a>Send message</a></p>
                                                            </li>
                                                            <!-- <li v-if="authInfo && item.reviwer_id==authInfo.id" style="pointer-events: none;opacity: 0.6;">
                                                                <img src="/images/new-mstar3.png" alt="">
                                                                <p ><a>Follow valerie C.</a></p>
                                                            </li>
                                                            <li v-else-if="item.hasfollow.length==0"  @click="followMethod(item)">
                                                                <img src="/images/new-mstar3.png" alt="">
                                                                <p ><a>Follow valerie C.</a></p>
                                                                {{item.__meta__.follow_count}}
                                                            </li>
                                                            <li v-else @click="unfollowMethod(item)">
                                                                <img src="/images/new-mstar3.png" alt="">
                                                                <p ><a>UnFollow valerie C.</a></p>
                                                                {{item.__meta__.follow_count}}
                                                            </li> -->
                                                            
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
                                                            <!-- <p>5/8/2019 <span>5:25:36</span></p> -->
                                                            <!-- <p>{{item.created_at}}</p> -->
                                                            <!-- <p>07/24/2019</p> -->
                                                            <p>{{item.created_at}}</p>
                                                        </div>
                                                        <div class="review-checkin" v-if="item.is_active">
                                                            <Tooltip content="We're always working to improve the authenticity of the reviews posted on Flank. When you see 'Verified' it means we've confirmed a user via (.edu, .org or.gov) profiles or reviews submitted by 'Active Player' profiles.">
                                                            <p><span><i class="far fa-check-circle"></i></span> Verified</p>
                                                            </Tooltip>
                                                            
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
                                                                <li @click="reviewImo('cool',index,item)"  :class="(item.imosall.cool >= 1)? 'active_imo' : ''" ><img src="/images/ic1.png" alt=""><span>Official</span> &nbsp;&nbsp;{{item.official}}</li>
                                                                <li  @click="reviewImo('funny',index,item)" :class="(item.imosall.funny >= 1)? 'active_imo' : ''" ><img src="/images/ic2.png" alt=""><span>Bravery Badge</span> &nbsp;&nbsp;{{item.bravery}}</li>
                                                                <li @click="reviewImo('useful',index,item)" :class="(item.imosall.useful >= 1)? 'active_imo' : ''" ><img src="/images/ic3.png" alt=""><span>Distinguished</span> &nbsp;&nbsp;{{item.distinguished}}</li>
                                                            </ul>
                                                            <!-- <template v-if="item.imos" >
                                                                        <li   :class="(item.imos.acool)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</li>
                                                                        <li  :class="(item.imos.afunny)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</li>
                                                                        <li   :class="(item.imos.auseful)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</li>
                                                            </template> -->
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
                            <div  class="col-md-3 col-sm-3">
                                <div class="new-inner-item-1">
                                    <!-- Health Meter -->
                                    <div class="switch-link-content _1health  " style="padding: 0;">
                                    <div style="padding: 10px 20px;"> 
                                        <div class="_1health_title mb pad-border" style="padding-left: 0;">
                                            <p class="_1health_title_text">Health Meter</p>

                                            <img class="_1health_img" src="/image/coach-review45.jpg" alt="" title="">

                                            <p class="_1health_value">100%</p>
                                        </div>

                                        <div class="new-health-meter-box">
                                            <p class="_1health_subtitle cera-medium font-16 weight-400" style="text-transform: capitalize;">Healthy</p>
                                            <div class="_1health_numbers">
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 76 && allTableData.healthSore <=100 )? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">100</span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 51 && allTableData.healthSore <=75 )? '_1health_numbers_text_active' : ''">
                                                    <span></span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 26 && allTableData.healthSore <=50 )? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">50</span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 0 && allTableData.healthSore <=25 )? '_1health_numbers_text_active' : ''">
                                                    <span></span>
                                                </div>
                                                <div  class="_1health_numbers_text" :class="(allTableData.healthSore==0)? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">00</span>
                                                </div>
                                            </div>

                                        <p class="_1health_subtitle _1health_subtitle_border cera-medium font-16 weight-400" style="text-transform: capitalize;">Harmful</p>
                                        </div>
                                    </div>

                                    <div class="_1healtfh_main _new_1healtfh_main">
                                        <p class="_1health_main_title cera-bold weight-400 font-18">Flank News: We've enhanced our Health Meter</p>

                                        <ul class="_1health_main_list _new_1health_main_list">
                                            <li>We’re always working to improve the authenticity of the attributes selected on Flank.</li>
                                            <li>We now have Verified Ratings and Reviews to make our Health Score more useful.</li>
                                            <li>When you see “Verified” it means we’ve confirmed a user verified their identity. </li>
                                        </ul>
                                    </div>

                                    <!-- <p class="_1health_more" style="text-align: center;">
                                        <a class="_1health_more_a" href="">LEARN MORE</a>
                                    </p> -->
                                </div>
                                    <!-- Health Meter -->

                                    <div class="switch-link-content"></div>

                                    <div class="switch-link-content">
                                        <div class="switch-link-title">
                                            <h4 class="mb-6">Latest videos</h4>
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
                                                        <p>Players accuse GCU women's soccer coach of verbal, mental, physical abuse.</p>
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
                                                        <p>The abuse of child athletes by their coaches.</p>
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
                                    <!-- this is my div to work -->
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
       </div>
       <div v-else-if="mobileScreen">
           <div :class="(this.isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action pk-new-sidebar">
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
                                <a @click="$router.push(`/local_business`)">
                                    <figure>
                                        <img src="/image/Local-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Local instructors <span class="red">(Coming soon)</span></p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/bussniess-promotion`)">
                                    <figure>
                                        <img src="/image/ProductsServices.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
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
                            <li v-if="!isLoggedIn"><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Your account</p></div></nuxt-link></li>
                            <li v-if="!isLoggedIn"><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Sign in</p></div></nuxt-link></li>
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

                    <div class="mobile-social-icon">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flank-page-header"> 
                <div class="flank-page-top">
                    <div class="container no-padding">
                        <div class="flank-full">
                            <div class="flank-item-1 mob-flank-item-1">
                                <figure>
                                
                                    <img src="/image/fl_lg.png" alt="">
                                </figure>
                                <div class="flank-header-cap flank-header-cap-mob">
                                    <h1>Coach <br><span>{{legendData.name}}</span></h1>
                                    <ul>
                                        <!-- <li><img  :src="legendData.school.logo" alt="">{{legendData.school.schoolName}}</li> -->
                                        <li><img  src="/images/sticker-3.png" alt="">{{legendData.school.schoolName}}</li>
                                        <li>&bull;</li>
                                        <li>{{legendData.school.sport}}</li>
                                    </ul>
                                    <div class="flank-item-left-list flank-item-left-list-mob">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><span>Program type:</span></td>
                                                    <td>{{legendData.school.schoolName}}</td>
                                                </tr>
                                                <tr>
                                                    <td><span>City/state:</span></td>
                                                    <td>{{legendData.school.city}} {{legendData.school.state}}</td> 
                                                </tr>
                                                <tr>
                                                    <td><span>Profile views:</span></td>
                                                    <td>123 views</td>
                                                </tr>
                                                <tr>
                                                    <td><span>Status:</span></td>
                                                    <td><span class="green"></span>Active</td>
                                                </tr>
                                                <tr>
                                                    <td><span>Streak:</span></td>
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
                                                <h4>RTG</h4>
                                                <div class="review-star pranto-review-star">
                                                    <ul>
                                                        <li  :class="(averageRating>0)? 'review-star-5' : 'star_half_1'"><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>1)? 'review-star-5' :  'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>2)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>3)? 'review-star-5' : 'star_half_1'" ><span><i class="fas fa-star"></i></span></li>
                                                        <li :class="(averageRating>4)? 'review-star-5' : 'star_half_1'"  ><span><i class="fas fa-star"></i></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Hs</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSore) ? allTableData.healthSore.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Heali</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSoreIndex.healthyIndex) ? allTableData.healthSoreIndex.healthyIndex.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
                                            <div class="right-list-inner-item" v-if="allTableData.metrice">
                                                <h4>Harmi</h4>
                                                <div class="ti">
                                                    <p>{{ (allTableData.healthSoreIndex.harmfulIndex) ? allTableData.healthSoreIndex.harmfulIndex.toFixed(2) : 0}}</p>
                                                </div>
                                            </div>
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

            <div class="new-banner-section new-banner-section-1" style="padding-top: 0;">
                <div class="container-fluid no-padding">
                    <div class="inner-banner inner-banner-2">
                        <figure style="height: auto;">
                            <img src="/images/long-form-example.png" alt="">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="new-section-content">
                <div class="container no-padding">
                    <div class="new-content-inner">
                        <div class="row flex-row">
                            <div class="new-inner-item-2 plr-10">
                                <div class="inner-item-table-sec new-box-shadow new-mt-10">
                                    <div class="inner-item-table-title">
                                        <h4 class="pad-border" style="padding-left: 0;">Stats</h4>
                                    </div>
                                    <div class="inner-item-table">
                                        <table> 
                                            <thead>
                                                <tr>
                                                    <th class="th-nor cera-bold weight-600">Stats</th>
                                                    <th>HS <p>Health Score</p></th>
                                                    <th>PC <p>Program chemistry</p></th>
                                                    <th>PR <p>Positive review</p></th>
                                                    <th>NR <p>Negative review</p></th>
                                                    <th>PCT <p>Winning percentage</p></th>
                                                    <th>HEALI <p>Healthy index</p></th>
                                                    <th>HARMI <p>Hermful index</p></th>
                                                    <th>DIFF <p>Differential</p></th>
                                                    <th>STRK <p>Streak</p></th>
                                                    <th>L10 <p>Last 10</p></th>
                                                    <th>PCI </th>
                                                    <th>STI <p>Strength of Team Index</p></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-if="allTableData.metrice">
                                                    <td class="th-nor" style="text-transform: capitalize;">Regular season</td>
                                                    <td>{{ allTableData.healthSore.toFixed(2) }}</td>
                                                    <td>{{ allTableData.ps }}</td>
                                                    <td>{{ (allTableData.metrice.PositiveReview) ? allTableData.metrice.PositiveReview : 0 }}</td>
                                                    <td>{{ (allTableData.metrice.NegativeReview) ? allTableData.metrice.NegativeReview : 0 }}</td>
                                                    <td>{{ allTableData.PCT }}</td>
                                                    <td>{{ (allTableData.healthSoreIndex.healthyIndex) ? allTableData.healthSoreIndex.healthyIndex.toFixed(2) : 0}}</td>
                                                    <td>{{ (allTableData.healthSoreIndex.harmfulIndex) ? allTableData.healthSoreIndex.harmfulIndex.toFixed(2) : 0 }}</td>
                                                    <td>{{ ( allTableData.metrice ) ? allTableData.metrice.PositiveReview - allTableData.metrice.NegativeReview : ''}}</td>
                                                    <td>{{ allTableData.streak }}</td>
                                                    <td>{{ allTableData.last10.PositiveReview + "-" + allTableData.last10.NegativeReview }}</td>
                                                    <td>{{ allTableData.ps }}</td>
                                                    <td>{{ allTableData.STI.toFixed(2) }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="th-nor" style="text-transform: capitalize;">Overall</td>
                                                    <td>00</td>
                                                    <td>00</td>
                                                    <td>00</td>
                                                    <td>00</td>
                                                    <td>00</td>
                                                    <td>00</td>
                                                    <td>0.0</td>
                                                    <td>+01</td>
                                                    <td>00</td>
                                                    <td>01</td>
                                                    <td>01</td>
                                                    <td>1.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="switch-link-content _1health new-box-shadow new-mt-10" style="padding: 0;">
                                    <div style="padding: 10px 20px;"> 
                                        <div class="_1health_title mb pad-border" style="padding-left: 0;">
                                            <p class="_1health_title_text">Health Meter</p>

                                            <img class="_1health_img" src="/image/coach-review45.jpg" alt="" title="">

                                            <p class="_1health_value">100%</p>
                                        </div>

                                        <div class="new-health-meter-box">
                                            <p class="_1health_subtitle cera-medium font-16 weight-400" style="text-transform: capitalize;">Healthy</p>
                                            <div class="_1health_numbers">
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 76 && allTableData.healthSore <=100 )? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">100</span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 51 && allTableData.healthSore <=75 )? '_1health_numbers_text_active' : ''">
                                                    <span></span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 26 && allTableData.healthSore <=50 )? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">50</span>
                                                </div>
                                                <div class="_1health_numbers_text" :class="(allTableData.healthSore >= 0 && allTableData.healthSore <=25 )? '_1health_numbers_text_active' : ''">
                                                    <span></span>
                                                </div>
                                                <div  class="_1health_numbers_text" :class="(allTableData.healthSore==0)? '_1health_numbers_text_active' : ''">
                                                    <span class="new-meter-font">00</span>
                                                </div>
                                            </div>

                                        <p class="_1health_subtitle _1health_subtitle_border cera-medium font-16 weight-400" style="text-transform: capitalize;">Harmful</p>
                                        </div>
                                    </div>

                                    <div class="_1healtfh_main _new_1healtfh_main">
                                        <p class="_1health_main_title cera-bold weight-400 font-18">Flank News: We've enhanced our Health Meter</p>

                                        <ul class="_1health_main_list _new_1health_main_list">
                                            <li>We’re always working to improve the authenticity of the attributes selected on Flank.</li>
                                            <li>We now have Verified Ratings and Reviews to make our Health Score more useful.</li>
                                            <li>When you see “Verified” it means we’ve confirmed a user verified their identity. </li>
                                        </ul>
                                    </div>

                                    <!-- <p class="_1health_more" style="text-align: center;">
                                        <a class="_1health_more_a" href="">LEARN MORE</a>
                                    </p> -->
                                </div>
                                <div class="inner-item-review-sec new-box-shadow new-mt-10" v-if="legendData.topAtrribute">
                                    <div class="inner-item-known-title pad-border" style="padding: 15px 0 10px;">
                                        <h4>Known For</h4>
                                    </div>
                                    <div class="inner-item-known-details"  style="padding: 5px 0;" >
                                        <div class="inner-item-known-item" v-for="(item,index) in legendData.topAtrribute" :key="index" >
                                            <figure>
                                                <img :src="item.info.image" alt="">
                                            </figure>
                                            <div class="known-item-caption">
                                                <p class="weight-400">{{item.info.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-att">
                                        <!-- <p><a href="">26 More Attributes</a></p> -->
                                    </div>
                                </div> 
                                <div class="com new-box-shadow" style="padding-left: 0; padding-right: 0;">
                                    <div class="switch-link-content no-margin no-shadow" style="border-radius: 0; padding-left: 20px; padding-right: 20px;">
                                        <div class="switch-link-title" style="padding-left: 0;">  
                                            <h4 class="pad-border" style="padding-left: 0;">Switch coach</h4>
                                        </div>
                                        <div class="plr-15">
                                            <div class="switch-link-btn no-border switch-link-btn-mob mt-15">
                                                <ul>
                                                    <!-- <li><button>{{legendData.name}}</button></li> -->
                                                    <li><input type="text" v-model="searchCoach" placeholder="Search Coach"></li>
                                                    <li @click="showBestRated = !showBestRated"><button>Best rated coach</button></li>
                                                </ul>
                                            </div>
                                            <div class="switch-coach-sec">
                                                <div class="switch-coach active" v-for="(item,index) in searchedSimilarCoach" :key="index" >
                                                    <figure :href="`/school_coach/${item.id}`" > 
                                                        <img src="/images/new-man.gif" alt="">
                                                    </figure>
                                                    <div class="switch-coach-caption" style="padding-top: 0;" >
                                                        <p><a :href="`/school_coach/${item.id}`"  style="padding-top: 0; color: rgb(214, 6, 6) !important; font-weight: 600;">{{item.name}}</a></p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="switch-link-foot switch-link-foot-mb">
                                                <p><a href="#"><span><i class="fas fa-chevron-down"></i></span> Full staff</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="new-inner-item-1 mb-new-red-border " style="padding-left: 20px; padding-right: 20px; padding-top: 15px;">
                                        <div class="switch-link-content no-margin no-shadow" style="border-radius: 0;">
                                            <div class="switch-link-title sc-switch-link-title" style="padding-left: 0;padding-right: 0;">  
                                                <h4 class="pad-border" style="padding-left: 0;">Coach Selection</h4>
                                            </div>
                                            <div class="switch-new-coach mb-switch-new-coach no-border">
                                                <div class="switch-new-coach-item">
                                                    <figure>
                                                        <img src="/images/new-man.gif" alt="">
                                                    </figure>
                                                    <div class="new-coach-item-text">
                                                        <h3>Not here? <br> Tell us what we're missing.</h3>
                                                        <p style="margin-top: 5px;">If the coach you are looking for isn't here, add it.</p>
                                                    </div>
                                                </div>
                                                <div class="coach-btn mb-btn no-border" style="padding-bottom: 0;" @click="addNew.modal = true"><button>Add a Coach</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- new flank -->
                                <div class="inner-item-review-sec new-box-shadow new-mt-10" style="padding: 0;">
                                    <div class="inner-item-review-title" style="padding: 25px 20px 10px; background: transparent;">
                                        <h4 class="pad-border" style="padding-left: 0;">Review Highlights</h4>
                                    </div>
                                    <div class="inner-item-reco-details" style="padding: 25px 0;">
                                        <div class="inner-item-rev-item mob-inner-item-rev-item" v-for="(item,index) in topReviews" :key="index" >
                                            <figure style="border: 1px solid #a60202; border-radius: 10px" v-if="item.reviwer && item.reviwer.img">
                                                <img :src="item.reviwer.img" alt="">
                                            </figure>
                                            <figure style="border: 1px solid #a60202; border-radius: 10px" v-else>
                                                <!-- <img src="/images/act.png" alt=""> -->
                                                <img src="/images/sticker-3.png" alt="">
                                            </figure>
                                            <div class="rev-item-caption">
                                                <p class="readmore">"{{item.content}}"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inner-scandal-video new-box-shadow" style="padding: 0px;">
                                    <div class="inner-item-review-title" style="padding: 15px 30px; margin-bottom: 5px;background: transparent;">
                                        <h4 class="pad-border" style="padding-left: 0;">LATEST VIDEOS</h4>
                                    </div>
                                    <div class="row plus-row up-ch-pad" style="padding-bottom: 15px;">
                                        <hooper :itemsToShow="3" :infiniteScroll="false">
                                            <slide v-for="(item,index) in coachVideo" :key="index">
                                                <div class="col-md-3 col-sm-6"  >
                                                    <div class="inner-scandal-video-item" @click="openVideomobile(item.body)">
                                                        <figure >
                                                            <img :src="item.img" alt="">
                                                            <!-- <p v-html="item.body"></p> -->
                                                            <div class="play-caption">
                                                                <span><i class="fas fa-play"></i></span>
                                                            </div>
                                                            <div class="video-duration">
                                                                <p class="duration"><span>{{item.video_length}}</span></p>
                                                            </div>
                                                        </figure>
                                                        <div class="scandal-video-caption">
                                                            <p style="color: #d60606;">{{item.title}}</p>
                                                        </div>
                                                        <div class="video-logo">
                                                            <img src="/image/flank.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>
                                            <!-- <slide >
                                                <div class="col-md-3 col-sm-6"  >
                                                    <div class="inner-scandal-video-item">
                                                        <figure @click="openVideo(1)">
                                                    <img src="/newFile/12.jpg" alt="">
                                                    <div class="play-caption">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-duration">
                                                        <p class="duration"><span>4:27</span></p>
                                                    </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p style="color: #d60606;">Rutgers coach fired for abuse of players.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/image/flank.png" alt="">
                                                    </div>
                                                    </div>
                                                </div>
                                            </slide> -->
                                            <!-- <slide >
                                                <div class="col-md-3 col-sm-6"  >
                                                    <div class="inner-scandal-video-item">
                                                        <figure @click="openVideo(1)">
                                                    <img src="/newFile/13.jpg" alt="">
                                                    <div class="play-caption">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-duration">
                                                        <p class="duration"><span>3:55</span></p>
                                                    </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p style="color: #d60606;">The abuse of child atheletes by their coache.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/image/flank.png" alt="">
                                                    </div>
                                                    </div>
                                                </div>
                                            </slide>
                                            <slide >
                                                <div class="col-md-3 col-sm-6"  >
                                                    <div class="inner-scandal-video-item">
                                                        <figure @click="openVideo(1)">
                                                    <img src="/newFile/12.jpg" alt="">
                                                    <div class="play-caption">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-duration">
                                                        <p class="duration"><span>1:37</span></p>
                                                    </div>
                                                    </figure>
                                                    <div class="scandal-video-caption">
                                                        <p style="color: #d60606;">Rutgers coach fired for abuse of players.</p>
                                                    </div>
                                                    <div class="video-logo">
                                                        <img src="/image/flank.png" alt="">
                                                    </div>
                                                    </div>
                                                </div>
                                            </slide> -->
                                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                        </hooper>
                                        
                                        <!-- <div class="col-md-3 col-sm-6 new-min-height">
                                            <div class="inner-scandal-video-item" style="margin-top: 0;">
                                                <figure @click="openVideo(1)">
                                                    <img src="/newFile/1.png" alt="">
                                                    <div class="play-caption">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-duration">
                                                        <p class="duration"><span>2:17</span></p>
                                                    </div>
                                                </figure>
                                                <div class="scandal-video-caption">
                                                    <p>Out of control Coache's abusive behavior caught on tape.</p>
                                                </div>
                                                <div class="video-logo">
                                                    <img src="/image/flank.png" alt="">
                                                </div>
                                            </div>
                                        </div> -->
                                        <!-- <div class="col-md-3 col-sm-6 new-min-height">
                                            <div class="inner-scandal-video-item">
                                                <div class="inner-video-iframe">
                                                    <iframe src="https://www.youtube.com/embed/rdVEag98q6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                <figure @click="openVideo(2)">
                                                    <img src="/newFile/2.png" alt="">
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
                                        <div class="col-md-3 col-sm-6 new-min-height">
                                            <div class="inner-scandal-video-item">
                                                <div class="inner-video-iframe">
                                                    <iframe src="https://www.youtube.com/embed/LdK2d4CGzrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                <figure @click="openVideo(4)">
                                                    <img src="/newFile/4.png" alt="">
                                                    <div class="play-caption">
                                                        <span><i class="fas fa-play"></i></span>
                                                    </div>
                                                    <div class="video-duration">
                                                        <p class="duration"><span>2:17</span></p>
                                                    </div>
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
                                <div class="inner-item-reco-sec inner-item-reco-sec-one new-box-shadow" style="padding: 0; padding-bottom: 10px;">
                                    <div class="inner-item-reco-title" style="padding: 25px 20px 10px;">
                                        <h4 class="pad-border">Ask The Community</h4>
                                    </div>
                                    <div class="inner-item-top-con inner-one-item-top-con" style="padding: 5px 20px; margin-top: 5px;">
                                        <figure>
                                            <img src="/images/sticker-3.png" alt="">
                                        </figure>
                                       <div class="top-con-cap one-top-cont-cap">
                                            <p>Don't see your question? <span style="cursor:pointer; color: #2380bb; font-family: ceraProMedium;padding-left: 20px;" @click="$router.push(`/coachquestionlist/${legendData.id}`)">Ask your verified audience! (Click here) </span> </p>
                                            <!-- <a >(Click Here)</a> -->
                                        </div>
                                    </div>
                                    <div class="new-flank-form"  v-if="legendData.question && !isMoreQuestion" style="padding: 0 20px;">
                                        <p style="font-family: CeraPro;font-size: 14px;color: #000;margin-top: 7px;font-weight: 600;">Question:</p>
                                        <div class="new-qu" style="padding-left: 0; border: 0; padding-bottom: 10px">
                                            
                                            <div class="new-qu-text">
                                                <p>{{legendData.question.content}}</p>
                                            </div>
                                        </div>
                                        <div class="new-flank-coach-rev" style="padding-top: 0;">
                                            <div class="inner-one-item-help-area2"  >
                                                <h6 class="help-ans"><span>1</span> answer</h6>
                                                <div v-if="legendData.question.answers">
                                                        
                                                    <p class="help-text">{{legendData.question.answers.content}}</p>
                                                </div>
                                                
                                                <div class="inner-one-item-help-btn">
                                                    <p class="view-question-btn" style="text-align: left; padding-left: 15px;"><nuxt-link :to="{name: 'question_details-id', params: {  id:legendData.question.id } }" >View questions details</nuxt-link></p>
                                                    <div class="helpful-btn-full">
                                                        <ul>
                                                            <li><a @click="storeAnswerLike(legendData.question,1,0)" class="helpful"><i class="fas fa-long-arrow-alt-up"></i><span>{{legendData.question.answers ? legendData.question.answers.helpful : ''}}</span> helpful</a></li>
                                                            <li><a @click="storeAnswerLike(legendData.question,0,1)" class="most-helpful"><i class="fas fa-long-arrow-alt-down"></i><span>{{legendData.question.answers ? legendData.question.answers.not_helpful : ''}}</span> Not helpful</a></li>
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="new-flank-form" v-else-if="questionList.length>0 && isMoreQuestion" v-for="(item,index) in questionList " :key="index" style="padding: 0 20px;">
                                        <p style="font-family: CeraPro;font-size: 14px;color: #000;margin-top: 7px;font-weight: 600;">Question:</p>
                                        <div class="new-qu" style="padding-left: 0; border: 0; padding-bottom: 10px">
                                            
                                            <div class="new-qu-text">
                                                <p>{{item.content}} </p>
                                            </div>
                                        </div>
                                        <div class="new-flank-coach-rev" style="padding-top: 0;">
                                            <div class="inner-one-item-help-area2"  >
                                                <h6 class="help-ans" v-if="item.__meta__.answers_count>0">{{item.__meta__.answers_count}} {{(item.__meta__.answers_count>1)? 'Answers' : 'Answer' }}</h6>
                                                <h6 class="help-ans" v-else-if="item.__meta__.answers_count==0">No Answer</h6>
                                                <div v-if="item.answers">
                                                    <p class="help-text">{{item.answers.content}}</p>
                                                </div>
                                                
                                                <div class="inner-one-item-help-btn">
                                                    <p class="view-question-btn" style="text-align: left;"><nuxt-link :to="{name: 'question_details-id', params: {  id:item.id } }" >View questions details</nuxt-link></p>
                                                    <div class="helpful-btn-full">
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
                                        <p v-if="!isMoreQuestion"><a @click="isMoreQuestion= true"><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                        <p  v-else-if="isMoreQuestion"><a @click="isMoreQuestion= false"><span><i class="fas fa-chevron-up"></i></span>Show less activity</a></p>
                                    </div>
                                </div>
                                    <!-- <GChart
                                    type="LineChart"
                                    :data="chartData"
                                    :options="chartOptions"
                                    class="full"
                                    /> -->
                                <div class="inner-item-reco-sec new-box-shadow" style="padding: 0;">
                                    <div class="inner-item-reco-title" style="padding: 15px 20px;">
                                        <h4 class="pad-border" style="padding-left: 0;">Recommended Reviews <span style="font-size: 18px; text-transform: none;">for Coach {{legendData.name}}</span></h4>
                                    </div>
                                    <div class="inner-item-top-con" style="padding: 5px 20px;">
                                        <figure>
                                            <img src="/images/sticker-3.png" alt="">
                                        </figure>
                                        <div class="top-con-cap">
                                            <p style="font-family: ceraPro;font-weight: 600;"><span>Your trust is our top concern,</span> so coaches can't pay to alter or remove there reviews.</p>
                                        </div>
                                    </div>
                                    <div class="new-flank-form" style="padding: 0 20px;">
                                        <div class="new-flank-sort-sec">
                                            <div class="new-flank-search mob-new-flank-search">
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
                                                <ul class="coa-rev new-coa-rev">
                                                    <li @mouseover="changeDataHover(1)"    @click="reviewPageWith(1)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 0)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li  @mouseover="changeDataHover(2)"  @click="reviewPageWith(2)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 1)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li  @mouseover="changeDataHover(3)"  @click="reviewPageWith(3)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 2)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li @mouseover="changeDataHover(4)"   @click="reviewPageWith(4)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 3)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                    <li @mouseover="changeDataHover(5)"   @click="reviewPageWith(5)"  @mouseleave="changeDataHoverLeave"   :class="(drating.index > 4)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                </ul>
                                                <div class="start-link">
                                                    <p>Start your review of <span>Coach {{legendData.name}}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="new-flank-given-review new-box-shadow" style="padding-left: 20px; padding-right: 20px;">
                                    <div class="flank-given-review-item mob-flank-given-review-item" v-for="(item,index) in reviews" :key="index" >
                                        <div class="linear-border"></div>
                                        <div class="review-item-inner">
                                            <div class="review-item-left">
                                                <div class="review-item-left-fig">
                                                    <figure>
                                                        <img :src="item.reviwer.img" alt="">
                                                    </figure>
                                                    <div class="review-item-left-fig-c">
                                                        <h4>{{item.reviwer.firstName}} {{item.reviwer.lastName}}</h4>
                                                        <!-- <h5>{{item.reviwer.address}}</h5> -->
                                                        <ul class="left-fig-link">
                                                            <li><img src="/images/mw.png" alt=""><span>3 Friends</span></li>
                                                            <li><img src="/images/mstar.png" alt=""><span>{{item.reviwer.__meta__.totalreviewbyuser}} reviews</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="review-figure-exper">
                                                    <ul>
                                                        <!-- <li @click="isShareModalOn(item.reviwer)">
                                                            <img src="/images/new-mstar.png" alt=""> 
                                                            <p><a>Share review</a></p>
                                                        </li> -->
                                                        <li @click="embeddedModalOn(item)">
                                                            <img src="/images/new-mstar1.png" alt="">
                                                            <p><a>Embed Review</a></p>
                                                        </li>
                                                        <li @click="messageModal = true"> 
                                                            <img src="/images/new-mstar2.png" alt="">
                                                            <p><a>Send message</a></p>
                                                        </li>
                                                            <!-- <li>
                                                            <img src="/images/new-mstar3.png" alt="">
                                                            <p><a>Follow valerie C.</a></p>
                                                        </li> -->
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
                                                    <div class="review-date mob-review-date">
                                                        <!-- <p>5/8/2019 <span>5:25:36</span></p> -->
                                                        <!-- <p>{{item.created_at}}</p> -->
                                                        <p>07/24/2019</p>
                                                    </div>
                                                    <div class="review-checkin" v-if="item.is_active">
                                                        <Tooltip content="We're always working to improve the authenticity of the reviews posted on Flank. When you see 'Verified' it means we've confirmed a user via (.edu, .org or.gov) profiles or reviews submitted by 'Active Player' profiles.">
                                                        <p><span><i class="far fa-check-circle"></i></span> Verified</p>
                                                        </Tooltip>
                                                        
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
                                                            <li @click="reviewImo('cool',index,item)"  :class="(item.imosall.cool >= 1)? 'active_imo' : ''" ><img src="/images/ic1.png" alt=""><span>Official</span> &nbsp;&nbsp;{{item.official}}</li>
                                                            <li  @click="reviewImo('funny',index,item)" :class="(item.imosall.funny >= 1)? 'active_imo' : ''" ><img src="/images/ic2.png" alt=""><span>Bravery Badge</span> &nbsp;&nbsp;{{item.bravery}}</li>
                                                            <li @click="reviewImo('useful',index,item)" :class="(item.imosall.useful >= 1)? 'active_imo' : ''" ><img src="/images/ic3.png" alt=""><span>Distinguished</span> &nbsp;&nbsp;{{item.distinguished}}</li>
                                                        </ul>
                                                            <!-- <template v-if="item.imos" >
                                                                    <li   :class="(item.imos.acool)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</li>
                                                                    <li  :class="(item.imos.afunny)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</li>
                                                                    <li   :class="(item.imos.auseful)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</li>
                                                        </template> -->
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
                                    <div class="show-more-ac">
                                        <p><a href=""><span><i class="fas fa-chevron-down"></i></span>Show More Review</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>

         <Modal v-model="loginModal">
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
                                <li><button class="fb-btn"  :data-href="location" ><span><i class="fab fa-facebook-square"></i></span> <a style="color:#ffff !important;"  :href="'https://www.facebook.com/sharer/sharer.php?u='+location" target="_blank" >Share on facebook</a> </button></li>
                                <li><button class="tw-btn"><span><i class="fab fa-twitter-square"></i></span><a  style="color:#ffff !important;" :href="`https://twitter.com/share?text=${this.twitter_text};url=${twitter_location}`" target="_blank" rel="noopener noreferrer">Share on twitter</a></button></li>
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
                                    <input type="submit" @click="messageSubmit" v-if="!isLoad" value="Send Message">
                                    <input type="submit" v-else value="Loading..." disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Modal>
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
                                                    <label for="">Sport <span class="required">*</span></label>
                                                    <input disabled type="text" v-model="step1Form.sport">
                                                    
                                                </div>
                                            </form>
                                            <div class="build-redirect">
                                                <p>Information submitted on this site is subject to the <nuxt-link to="/policy">Privacy Policy.</nuxt-link></p>
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
                                                <p>Please allow us 24-48 hours to pull your information into one place, and see your low risk insight instantly benefit the player communities where you played.</p>
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

        
    </div>
</template>

<script>
import { Hooper, Slide ,Pagination as HooperPagination ,Navigation as HooperNavigation} from 'hooper';
import { GChart } from 'vue-google-charts';

export default {
   
   components: {
       Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
   },
    data(){
        return{
            mobileScreen:false,
            twitter_text:"Check out Coach John Doe’s Review on @Flank",
            isSmallScreen:false,
            showBestRated:false,
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
            questionList:[],
            isMoreQuestion:false,
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
            onHover: false,
            step3Form:{
                reviewFor:'',
                school_id:'',
                content:"",
                review_type:'school',
                rating:'',
            },
            addNew:{
                step:1,
                modal:false,
                onHover:false,
                isReg: true
            },
            location:{},
            twitter_location:'',
           shareForm:{
               name:'',
               email:'',
               to:'',
               note:'',
           },
             messageModal:false,
            isShareModal:false,
            embeddedModal:false,
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
            askModal:false,
            answerModal:false,
            askData:{
                content:'',
            },
           
            tempAIndex:'',
            atrrtributepoint:'',
            reviews:[],
            hours:[],
            similarCoaches:[],
            galleryIndex:0,
            todayHour:{},
            healthSore:{},
            rpagination:{},
            reviewSearch:'',
            reviewStar:0,
            isLoading:true,
            flip:-1,
            coach_id:-1,
            coach_index:-1,
            page:1,
            sort:'',
            value2: 0,
            topReviews: [],
            allTableData: {},
            drating:{
                class:'',
                index: 0
            },
            chartData: [
                ["HealthScore",'HealthScore'],
                [ 5,5],
            ],
            chartOptions: {
                width: 400,
                height: 400,
                colors: ['#000',],
                backgroundColor:'#fff',
                vAxis:{
                        maxValue: 100,
                        minValue: 1,
                    
                    textStyle:{
                        color: '#000',
                    }
                },
                hAxis:{
                        maxValue: 1,
                        minValue: 1,
                    // format: '#%',
                        textStyle:{
                        color: '#fff',
                    },
                },
                trendlines: { 0: {} } ,
                
            },
            newCoach:{},
            message:{
                email:'',
                subject: '',
                message: '',
            },
            embeded_id:16,
            embededText:'',
            searchCoach:'',
            metaContent:'',
            coachVideo:[],
            isPlayingItemId:-1,
            playingVideo:'',
            isLoad:false,
       
        }
    },
    head () {
        return {
        title: this.title,
        meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                // {
                //     hid: 'description',
                //     name: 'description',
                //     content: this.metaContent
                // },
                // {
                //     property: 'og:image',
                //     content: 'https://goflank.com/images/flank-1.png',
                // },
                // {
                //     property: 'og:image:type',
                //     content: 'image/png',
                // },
                // {
                //     property: 'og:image:width',
                //     content: '1024',
                // },
                {
                    name: 'twitter:card',
                    content:"summary_large_image"
                },
                {
                    name: 'twitter:domain',
                    content:"goflank.com"
                },
                {
                    name: 'twitter:app:name:iphone',
                    content:"Goflank"
                },
                {
                    name: 'twitter:site',
                    content:"@Flank",
                }, 
                {
                    name: 'twitter:title',
                    // content: this.title
                    content: 'this is some title'
                },
                {
                    name: 'twitter:image',
                    content: 'https://goflank.com/images/flank-1.png',
                },
                {
                    name: 'twitter:description',
                    // content: this.metaContent
                    content: 'This is some description'
                },
            ],
        }
    },
    computed:{
        searchedSimilarCoach(){
            if(!this.showBestRated){
                return this.similarCoaches.filter((data)=>{                    
                    return data.name.toUpperCase().match(this.searchCoach.toUpperCase()) && data.id != this.legendData.id ;}
                );
            }
            else{
                let best_rated = [];
                if(this.similarCoaches.length>0){
                    best_rated.push(this.similarCoaches[0]);
                    for(let d of this.similarCoaches){
                        if(d.avg_rating> best_rated[0].avg_rating) best_rated[0] = d
                    }
                }
                
                return best_rated;
            }
            
        }
    },
    methods:{
         copyToClipBoard(){
           this.$clipboard(this.embededText);
            this.$Message.info('code copied');
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
                this.s("Message has been sent Successfully!")
            this.message={
                email:'',
                subject: '',
                message: '',
            }
            // this.message.message = ''
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
        embeddedModalOn(item){
            
            this.embeded_id = item.id
            this.embededText = `<link href="https://widget.goflank.com/flank-review/css/app.css" rel=stylesheet><forehand-rank lid="${this.embeded_id}"><\/forehand-rank><script src="https://widget.goflank.com/flank-review/js/app.js"><\/script>`
            this.embeddedModal = true
        },
         selectContactDate(date){
            
            this.contact.date = date
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
                this.similarCoaches.push(res.data)
                this.newCoach = res.data
                this.i("New Coach Created !")
                if(this.isLoggedIn) this.addNew.step = 3
                else this.addNew.step = 2
            }
            else{
                this.swr()
                this.addNew.modal = false
            }
            
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
        isShareModalOn(user){
            
            this.isShareModal = true
            this.twitter_text = `Check out ${user.firstName} ${user.lastName}’s Review on @Flank`
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
        openVideomobile(link){ 
             this.isVideo.link = `<div class="inner-video-iframe">${link}</div>`
            this.isVideo.modal= true
        },
        openVideo(link,index){ 
            this.isPlayingItemId = index
            this.playingVideo = link
            
            // if(no == 1){
            //     this.isVideo.link = `<div class="inner-video-iframe">
            //                                                 <iframe width="560" height="315" src="https://www.youtube.com/embed/Vz738aqEI5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                                 </div> `
            //     this.isVideo.header = `Out of control Coache's abusive behaviour caught on tape.`
            // }
            // else if(no == 2){
            //     this.isVideo.link = `<div class="inner-video-iframe">
            //                                                 <iframe src="https://www.youtube.com/embed/rdVEag98q6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                                 </div> `
            //     this.isVideo.header = `Players accuse GCU women's soccer coach of verbal, mental, physial abuse.`
            // }
            // else if(no == 3){
            //     this.isVideo.link = `<div class="inner-video-iframe">
            //                                                 <iframe src="https://www.youtube.com/embed/AzcPG9sRDMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                                 </div> `
            //     this.isVideo.header = `Rutgers coach fired for abuse of players.`
            // }
            // else if(no == 4){
            //     this.isVideo.link = `<div class="inner-video-iframe">
            //                                                 <iframe src="https://www.youtube.com/embed/LdK2d4CGzrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                                 </div> `
            //     this.isVideo.header = `The abuse of child atheletes by their coaches.`
            // }
            // this.isVideo.modal= true
        },
       async followMethod(item){
           let temp = JSON.parse(JSON.stringify(item));
           if(!this.authInfo){
               return this.e("Please login")
           }
           let ob = {
               following:temp.reviwer_id
           }
           this.isLoad =true
        const res = await this.callApi('post','/app/createNewFollow',ob)
            if(res.status==200 || res.status==201){
                  for(let i in this.reviews){
                    if(temp.reviwer_id==this.reviews[i].reviwer_id){
                        this.reviews[i].__meta__.follow_count = parseInt(this.reviews[i].__meta__.follow_count)+1
                        this.reviews[i].hasfollow ={
                             follower:this.authInfo.id,
                             following:item.reviwer_id,
                        }
                    }
                }
                this.isLoad =false
                this.s("Your now following ")
            }
            else if(res.status==401){
                this.isLoad =false
               return this.e(res.data.msg)
            }
            else{
                this.isLoad =false
                this.e("please check your network!")
            }
            console.log(item)
        },
       async unfollowMethod(item){
           let temp = JSON.parse(JSON.stringify(item));
           if(!this.authInfo){
               return this.e("Please login")
           }
           let ob = {
               following:temp.reviwer_id
           }
           this.isLoad =true
        const res = await this.callApi('post','/app/createNewUnFollow',temp.hasfollow)
            if(res.status==200 || res.status==201){
                for(let i in this.reviews){
                    if(temp.hasfollow[0].following==this.reviews[i].reviwer_id && temp.hasfollow[0].follower==this.authInfo.id){
                        this.reviews[i].__meta__.follow_count = parseInt(this.reviews[i].__meta__.follow_count)-1
                        this.reviews[i].hasfollow =[]
                    }
                }
                this.isLoad =false
                this.s("Your now following ")
            }
            else if(res.status==401){
                this.isLoad =false
               return this.e(res.data.msg)
            }
            else{
                this.isLoad =false
                this.e("please check your network!")
            }
            console.log(item)
        },
        closeVideo(){
            this.isVideo.modal = false
            this.isVideo.link = ''
            this.isVideo.header = ''
        },
        reviewPageWith(num){
            setTimeout(()=>{ this.$router.push(`/scoach_review/${this.$route.params.id}?star=${num}`) }, 1000)
            
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
        setPage(index){
            this.page = index
            this.pageniateReview()
        },
        async pageniateReview(){
            console.log( ' aim here')
            if(this.coach_index != '-1'){
                this.coach_id = this.coaches[this.coach_index].id
            }
           let link = `/app/SchoolCoachReview/${this.$route.params.id}?page=${this.page}&str=${this.str}`
           if(this.coach_id != -1){
               link = link+`&coach=${this.coach_id}`
           }
            const res = await this.callApi('get',link )
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }
        },
        prevModalImage(){
            if(this.galleryIndex>0){
                this.galleryIndex--;
            }
        },
        async answerModalOpen(item,index){
            this.answerData.question_id = item.id
            this.tempAIndex = index
            this.answerModal = true

        },
        // async askQuestion(){
        //     if(this.askData.content == ''){
        //         this.i('You question field is empty!')
        //         return
        //     }
        //     if(this.isLoggedIn == false){
        //         this.i('Please login first !')
        //         this.$router.push('/login');
        //         return
        //     }

        //     this.askData.school_id = this.legendData.school.id
        //     const res = await this.callApi('post','/storequestions',this.askData)
        //     if(res.status===200){
        //         this.s("Your question has been posted successfully!")
        //         this.questionList.push(res.data)
        //         this.totalQuestion++
        //         this.askModal = false
        //     }
        //     else{
        //         this.swr();
        //     }

        // },
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
        handleView (item) {
                this.imgName = item;
                
        },
        getImoName(name,index){
           return 
        },
        handleView (item) {
            this.imgName = item;
        },
        async getcoachatrributeConteptData(id,index){
            this.atrrtributepoint = []
            this.coach_index = index
            const res = await this.callApi('get', `/app/coachatrributeConteptData/${id}`)
            if(res.status == 200){
                this.atrrtributepoint = res.data
                this.flip = index
            }
            else{
                this.swr()
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
        changeDataHoverLeave(){
            this.onHover = false
            
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
        },
        heathMeter(a){
          
            
            if( a < 7) a += 5
            if(a >93) a -= 5

            return a
        }
    },
    mounted(){
        this.step1Form.schoolName = this.legendData.school.schoolName
        this.step1Form.city = this.legendData.school.city
        this.step1Form.division = this.legendData.school.division
        this.step1Form.state = this.legendData.school.state
        this.step1Form.sport = this.legendData.school.sport
        if(window.innerWidth < 1050){
            this.mobileScreen = true
        }
    },
    
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/coaches/${params.id}`)
          
            return{
                legendData : data.School,
                title : 'Coach '+data.School.name,
                metaContent: data.School.school.schoolName+' in '+data.School.school.city+' , '+data.School.school.state,
                school_id : data.School.school_id,
                totalReview : data.School.__meta__.allreview_count,
                averageRating : (data.School.avgRating)? data.School.avgRating.averageRating : 0 , 
                totalRating : (data.School.avgRating)? data.School.avgRating.totalRating : 0 , 
                
            }
		}catch (error) {
            console.log(error)
           // return redirect('/')
		}
    },
   
   async created(){
       this.location = window.location.href
       this.twitter_location = `https%3A%2F%2Fgoflank.com%2Fschool_coach%2F${this.$route.params.id}`
       this.twitter_text = `Check out Coach ${this.legendData.name}’s Review on @Flank`
      
        const [ res2, res4,res5,res6,res7,res8] = await Promise.all([
            this.callApi('get', `/app/getAdditionCoachInfo/${this.$route.params.id}`),  
            this.callApi('get', `/reviews/${this.$route.params.id}?type=school`),
            this.callApi('get', `/app/getCoachTopReviews/${this.$route.params.id}?type=school`),
            this.callApi('get', `/app/getSimilarCoach/${this.school_id}/${this.$route.params.id}`), 
            this.callApi('get', `/questions/${this.$route.params.id}?type=school&limit=3`), 
            this.callApi('get', `/app/allCoachVideo`), 
        ])
        if( res2.status===200 && res8.status===200 &&res7.status===200 &&res4.status === 200){
            
            this.reviews = res4.data.data
            this.similarCoaches = res6.data
            this.rpagination = res4.data
            this.topReviews = res5.data
            delete this.rpagination.data
            this.healthSore = res2.data.healthSore
            this.questionList = res7.data.data,
            this.coachVideo = res8.data
         if(res8.data.length>0){
             console.log('creatd',res8.data)
                this.playingVideo=  this.coachVideo[0].body
                this.isPlayingItemId=0
            
            }
            this.isLoading = false

            this.allTableData = res2.data
            
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
.best_rated_background{
    background: #c7b3b3 !important;
}

</style>







       






