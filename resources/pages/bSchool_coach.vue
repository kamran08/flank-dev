<template>
    <div>

        <!-- Header--> 
        
        <div class="section-header-new">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <div class="new-left">
                            <div class="new-left-up">
                                <div class="new-left-icon">
                                    <ul class="icon-list-new">
                                       <li  :class="(averageRating>0)? ' yellow' : ''"><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(averageRating>1)? ' yellow' : ''" ><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(averageRating>2)? ' yellow' : ''" ><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(averageRating>3)? ' yellow' : ''" ><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(averageRating>4)? ' yellow' : ''"  ><span><i class="fas fa-star"></i></span></li>
                                    </ul>
                                    <h3>Coach: <span class="cname">{{legendData.name}}</span></h3>
                                    <figure class="new-ch">
                                        <img :src="legendData.school.logo" alt="">
                                    </figure>
                                    <div class="new-ch-p">
                                        <p class="ch-tt">{{legendData.school.schoolName}}</p>
                                        <p class="ch-play">{{(legendData.school.division)? legendData.school.division+' • ' : '' }} • {{legendData.school.sport}}</p>
                                        <p class="ch-city">{{legendData.school.city}} {{(legendData.school.state)? ' ,'+legendData.school.state : '' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="new-middle">
                            <p class="summary-btn">Summary</p>
                            <div class="ch-score">
                                <div class="ch-score-item">
                                    <div class="score-point">
                                        <div class="scr">
                                            <h2>{{totalRating}}</h2> 
                                        </div>
                                        <p>Score</p>
                                    </div>
                                </div>
                                <div class="ch-score-item-2">
                                    <div class="speed-lim">
                                        <p>Speed limit</p>
                                        <h3>{{totalReview*5}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="new-right">
                            <div class="review-option" @click="$router.push(`/scoach_review/${legendData.id}`)" ><button><i class="fas fa-star"></i>&nbsp;Write a Review</button></div>
                        </div>
                        <div>
                                <GChart
                                type="AreaChart"
                                :data="chartData"
                                :options="chartOptions"
                               
                                
                            />
                        </div>
                    </div>
                </div>
                <div class="new-left-bottom"> 
                    <p class="pow">Powered by FLANKSccres</p>
                    <ul class="ch-quick-link">
                        <li><a href="#AllReviews"><sub>{{totalReview}}</sub> Player reviews</a></li>
                        <li><a href="#AskCommunity" ><sub>{{legendData.school.__meta__.questions_count}}</sub> Answered questions</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section-flex-row">
            <div class="section-flex-item">
                <p>Sport</p>
                <h3>{{(legendData.school.sport)? legendData.school.sport : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Division</p>
                   <h3>{{(legendData.school.division)? legendData.school.division : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Roaster</p>
                   <h3>{{(legendData.school.roster)? legendData.school.roster : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Alumni</p>
                   <h3>{{(legendData.school.alumni)? legendData.school.alumni : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Intersted athlets</p>
                    <h3>{{(legendData.school.interestedAthletes)? legendData.school.interestedAthletes : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Committed reqruits</p>
                   <h3>{{(legendData.school.committedRecruit)? legendData.school.committedRecruit : '---' }}</h3>
            </div>
            <div class="section-flex-item">
                <p>Placed athlets</p>
                    <h3>{{(legendData.school.placedAthletes)? legendData.school.placedAthletes : '---' }}</h3>
            </div>
        </div>
        <section class="rd second-section bg">
            <div class="container">
                <div class="section-content">
                    <div class="review-content">
                        <div class="review-map-section">
                            <div class="row">
                                <div class="col-md-12"> 
                                    <!-- <div class="review-gallary">
                                        <div class="figure">
                                            <ul>
                                                <li @click="galleryModalOn(img_index)"><img  :src="(uploadList[img_index])? uploadList[img_index].url  : '/uploads/default.png' " ></li>
                                                <li @click="galleryModalOn((img_index+1))" ><img :src="(uploadList[img_index+1])? uploadList[img_index+1].url  : '/uploads/default.png' " ></li>
                                                <li @click="galleryModalOn((img_index+2))" ><img :src="(uploadList[img_index+2])? uploadList[img_index+2].url  : '/uploads/default.png' " ></li>
                                                <li @click="galleryModalOn((img_index+3))" ><img :src="(uploadList[img_index+3])? uploadList[img_index+3].url  : '/uploads/default.png' " ></li>
                                            </ul>
                                            <div class="gallary-button">
                                                <div class="button-left" @click="prevImage" >
                                                    <span><i class="fas fa-chevron-left"></i></span>
                                                </div>
                                                <div class="button-right" @click="nextImage" >
                                                    <span><i class="fas fa-chevron-right"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8 col-sm-8" style="border-right: 1px solid #e6e6e6; margin-top: 20px;">
                                <!-- <div class="product-profile school-profile" style="margin-bottom: 82px;">
                                    <div class="product-thumb-data">
                                        <div class="product-thumb">
                                            <figure>
                                                <img :src="legendData.logo" alt="">
                                            </figure>
                                        </div>
                                        <div class="product-data">
                                            <div class="product-data-indi">
                                                <div class="product-data-icon">
                                                    <span><i class="fas fa-passport"></i></span>
                                                </div>
                                                <div class="product-data-des">
                                                    <h2><strong>{{legendData.schoolName}} | {{legendData.sport}}</strong></h2>
                                                    <div class="badge-review">
                                                        <p>
                                                             <span :class="(averageRating>0)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                            <span :class="(averageRating>1)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                            <span :class="(averageRating>2)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                            <span :class="(averageRating>3)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                            <span :class="(averageRating>4)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                            &nbsp;<small class="review-number">{{totalReview}} reviews</small>
                                                        </p>
                                                    </div>
                                                    <p><strong class="u-space-r-half">
                                                             {{legendData.city}}
                                                             {{(legendData.state)? ' ,'+legendData.state : '' }}
                                                             {{(legendData.division)? ' ,'+legendData.division : '' }}
                                                        </strong></p>
                                                </div>
                                            </div>
                                            <div class="product-data-indi product-data-indi-2">
                                                <div class="product-data-icon">
                                                    <span><i class="fas fa-calendar-week"></i></span>
                                                </div>
                                                <div class="product-data-des">
                                                    <p><strong>From:</strong> Saturday, Jun 1, 2:30 pm</p>
                                                    <p><strong>To:</strong> 10:00 pm</p>
                                                    <p><a href="">Add to calender <span><i class="fas fa-caret-down"></i></span></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                                <div class="comment-individual" style="margin: 0px 0px;" v-if="topReviews.length>0" >
                                    <div class="media" v-for="(item,index) in topReviews" :key="index" >
                                        <div class="media-left">
                                            <img :src="item.reviwer.img" style="width: 50px; margin-right: 3px;" alt="">
                                        </div>
                                        <div class="media-body">
                                            <p>“ <strong style="color:#0088cc">Suri</strong> {{item.content}}” <a  href="#AllReviews">view {{totalReview}} reviews</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="reviewComment" style="margin-bottom: 41px;margin-top: 28px;">
                                    <h2>Ask the Community</h2>
                                    <hr>
                                    <div class="comment-individual" style="margin-bottom: 0;">
                                         <Button @click="askModal=true" >Ask a question</Button>
                                    </div>
                                </div>
                                <div class=" askCommunity"  id="AskCommunity" >
                                    <h2>Ask the Community</h2>
                                    <hr>
                                    <template v-if="totalQuestion>0 && isLoading==false " >
                                        <div class="question-set" v-for="(item,index) in questionList" :key="index" >
                                            <div class="comment-individual">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <p><strong>Question:</strong></p>
                                                    </div>
        
                                                    <div class="media-body">
                                                        <p>{{item.content}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p v-if="totalQuestion==1" class="all-que"><a @click="$router.push(`/coach_question_details/${legendData.id}/${item.id}`)" >View question details</a></p>
                                        </div>
                                        <p v-if="totalQuestion>1" class="all-que"><nuxt-link :to="{name: 'coachquestionlist-id', params: { id:legendData.school.id } }" >See all {{totalQuestion}} questions for {{legendData.name}}</nuxt-link></p>
                                    </template>
                                    
                                    <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>

                                    <h4 v-else class="noReview" >No question yet!</h4>

                                    <!-- <div class="pageCount">
                                        <ul>
                                            <li><a href=""><i class="fas fa-chevron-left"></i>&nbsp;Prev</a></li>
                                            <li><a href="">Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                        </ul>
                                    </div>
                                    <hr> -->
                                </div>
                                <div class="reviewItem" id="AllReviews" >
                                    <!-- <h2>{{legendData.schoolName}} | {{legendData.sport}} <span> Coaches</span></h2>
                                    <hr> -->
                                    <div class="searchByReview">
                                        <!-- <div class="searchReview">
                                                <div class="input-grp">
                                                    <input type="text" class="form-control"   placeholder="Search within the reviews">
                                                    <button @click="pageniateReview" ><i class="fas fa-search"></i></button>
                                                        <Select v-model="coach_index" filterable @on-change="pageniateReview" style="width: 50%;" placeholder="Select Any Coaches" >
                                                            <Option value="-1">All</Option>
                                                            <Option v-for="(item,index) in coaches" :value="index" :key="index">{{ item.name }}</Option>
                                                        </Select>
                                                    
                                                </div>
                                                <div class="left-dropdown">
                                                    <ul>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                        <li><a href=""><i class="fas fa-utensils"></i>Restaurents</a></li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div class="flip-card">
                                            <div class="row">
                                                <div class="col-md-4" v-for="(item,index) in coaches" :key="index" v-if="item.id==coach_id || coach_id==-1"  >
                                                    <div class="flip-card-indi" >
                                                        <template   >
                                                            <div class="card-main" :class="(flip==index)? 'hide-card-main': ''"  >
                                                                <h3>{{item.name}}</h3>
                                                                <div class="badge-review" data-v-2a1016fc="">
                                                                    <p data-v-2a1016fc="">
                                                                        <span class=" high rating-bg" data-v-2a1016fc=""><i class="fas fa-star" data-v-2a1016fc=""></i></span> <span class=" high rating-bg" data-v-2a1016fc=""><i class="fas fa-star" data-v-2a1016fc=""></i></span> <span class=" high rating-bg" data-v-2a1016fc=""><i class="fas fa-star" data-v-2a1016fc=""></i></span> <span class=" high rating-bg" data-v-2a1016fc=""><i class="fas fa-star" data-v-2a1016fc=""></i></span> <span class=" high rating-bg" data-v-2a1016fc=""><i class="fas fa-star" data-v-2a1016fc=""></i></span>
                                                        &nbsp; <br><small class="review-number" data-v-2a1016fc="">3 reviews</small></p></div>
                                                                <div class="card-toggle-button"  >
                                                                    <button @click="getcoachatrributeConteptData(item.id,index)"  >Click here</button>
                                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" >Give Review</button>
                                                                </div>
                                                            </div>
                                                            <div class="flipped-card" :class="(flip==index)? 'flipped-active-card': ''" >
                                                                <span class="close-flip" @click="flip=-1" ><i class="fas fa-times"></i></span>
                                                                <div class="business-info-sec ">
                                                                    <h3>Atrribute  info</h3>
                                                                    <div class="business-name" v-if="atrrtributepoint.length>0  && isLoading==false " >
                                                                        <ul>
                                                                            <li v-for="(item,index) in atrrtributepoint" :key="index" ><span style="display: flex;"><i class="fas fa-plus" style="margin-top: 5px; font-size: 13px;"></i>&nbsp;&nbsp;<span style="font-size: 13px;">{{item.content}} <strong>{{item | totalPercent}}</strong></span></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>
                                                                    <h4 v-else class="noReview" >No Atrribute Info yet!</h4>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <h2>Recommended Reviews <span>for Coaches</span></h2>
                                        <hr style="margin-bottom: 20px;">
                                        <div class="reviewOptionSort">
                                            <div class="sortTagFlank">
                                                <!-- Sort by&nbsp;<strong>Flank Sort&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                                <ul>
                                                    <li><a href="">Flank Sort</a></li>
                                                    <li><a href="">Newest Sort</a></li>
                                                </ul>
                                                </strong> -->
                                            </div>
                                            <div class="searchReview">
                                                <form v-on:submit.prevent>
                                                    <input type="text" class="form-control" v-model="str" @keyup.enter="pageniateReview" placeholder="Search within the reviews">
                                                    <button @click="pageniateReview" ><i class="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <template v-if="reviews.length>0 && isLoading==false " >
                                            <div class="review-final" v-for="(item,index) in reviews" :key="index" >
                                                <div class="row" style="margin-right: 15px;">
                                                    <div class="review-final-card">
                                                        <div class="col-md-2 col-sm-2">
                                                        <div class="media">
                                                            <div class="media-left" style="display: block;">
                                                                <img class="media-object profile_picU" :src="item.reviwer.img" alt="">
                                                            </div>
                                                            <div class="media-body" style="display: block;">
                                                                <p><strong>{{item.reviwer.firstName}}</strong></p>
                                                                <small><strong>{{item.reviwer.address}}</strong></small>
                                                                <p>
                                                                    <span><i class="fas fa-star"></i>&nbsp;{{item.reviwer.__meta__.totalreviewbyuser}}</span>
                                                                    <!-- <span><i class="fas fa-male"></i>&nbsp;1304</span>
                                                                    <span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span> -->
                                                                    </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10 col-sm-10">
                                                        <div class="read-review">
                                                            <div class="star-review">
                                                                <p>
                                                                    <span :class="(item.rating>0)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>1)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>2)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>3)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>4)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    &nbsp;<small>{{item.created_at}}</small>
                                                                </p>
                                                            </div>
                                                            <p>{{item.content}}</p>
                                                            <div class="profile-carousel"  style="margin-top: 20px;" v-if="item.images.length>0" >
                                                                <template>
                                                                <Carousel autoplay v-model="value2" loop>
                                                                    <CarouselItem v-if="item.images[0]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[0].url"  style="width: 100%;"></div>
                                                                    </CarouselItem >
                                                                    <CarouselItem v-if="item.images[1]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[1].url"  style="width: 100%;"></div>
                                                                    </CarouselItem>
                                                                   <CarouselItem v-if="item.images[2]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[2].url"  style="width: 100%;"></div>
                                                                    </CarouselItem>
                                                                </Carousel>
                                                            </template>
                                                            </div>
                                                            <!-- <div class="profile-gallary">
                                                                <ul>
                                                                    <li  ><a :href="item.images[0].url"><img ></a></li>
                                                                    <li v-if="item.images[1]"><a :href="item.images[1].url"><img :src="item.images[1].url"></a></li>
                                                                    <li v-if="item.images[2]"><a :href="item.images[2].url"><img :src="item.images[2].url"></a></li>
                                                                </ul>
                                                            </div> -->
                                                            <p id="resultReview" style="margin-top: 20px;"><strong>Was the review...?</strong></p>
                                                            <ul class="section-item-review">
                                                                <template v-if="item.imos" >
                                                                    <li  @click="reviewImo('cool',index,item.imos)" :class="(item.imos.acool)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</li>
                                                                    <li  @click="reviewImo('funny',index,item.imos)" :class="(item.imos.afunny)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</li>
                                                                    <li  @click="reviewImo('useful',index,item.imos)" :class="(item.imos.auseful)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</li>
                                                                </template>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                                <div class="text-center ">
                                                    <div class="pagination-padding">
                                                        <Page :current="rpagination.page" :total="rpagination.total" @on-change="setPage($event)" :page-size="rpagination.perPage" />
                                                    </div>
                                                </div>
                                            <hr>
                                        </template>
                                          <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>
                                          <h4 v-else class="noReview" >
                                              <span v-if="coach_id == -1" >There is no Review for {{legendData.schoolName}}'s Coaches</span>
                                              <span v-else >There is no Review for {{coaches[coach_index].name}}</span>
                                              
                                              </h4>
                                   
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " style="margin-top: 20px;">
                                <div class="review-time-content">
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-passport"></i></span>
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span   >
                                                         <strong class="u-space-r-half">
                                                             {{legendData.school.sport}}
                                                        </strong>
                                                    </span>
                                                   
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content">
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-map-marker-alt"></i></span>
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span   >
                                                         <strong class="u-space-r-half">
                                                             {{legendData.school.city}}
                                                             {{(legendData.school.state)? ' ,'+legendData.school.state : '' }}
                                                             
                                                        </strong>
                                                    </span>
                                                   
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.teamWebsite" >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-globe"></i></span>
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span   >
                                                         <a class="u-space-r-half" :href="legendData.school.teamWebsite" >{{legendData.school.teamWebsite}}</a>
                                                    </span>
                                                   
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.roster"  >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-copy"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span class="attribute-key">Roster</span>
                                                    <span>
                                                        <strong class="u-space-r-half"><span class="nowrap">{{legendData.school.roster}}</span></strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.alumni"  >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-copy"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span class="attribute-key">Alumni</span>
                                                    <span>
                                                        <strong class="u-space-r-half"><span class="nowrap">{{legendData.school.alumni}}</span></strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.placedAthletes"  >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-copy"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span class="attribute-key">Placed Athletes</span>
                                                    <span>
                                                        <strong class="u-space-r-half"><span class="nowrap">{{legendData.school.placedAthletes}}</span></strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.committedRecruit"  >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-copy"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span class="attribute-key">Committed Recruit</span>
                                                    <span>
                                                        <strong class="u-space-r-half"><span class="nowrap">{{legendData.school.committedRecruit}}</span></strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-time-content" v-if="legendData.school.interestedAthletes"  >
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="fas fa-copy"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span class="attribute-key">Interested Athletes</span>
                                                    <span>
                                                        <strong class="u-space-r-half"><span class="nowrap">{{legendData.school.interestedAthletes}}</span></strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="view-sect">
                                    <h3 >People also viewed</h3>
                                    <div class="view-media" style="margin-top: 10px;">
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review mt-5">
                                                    <p style="margin-bottom: 5px;"><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
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
        </section>
        <Modal title="Ask the Community" v-model="askModal">
           <div class="">
            <Form  :label-width="80">
              
               <FormItem label="Question">
                   <Input v-model="askData.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Ask your question ..."></Input>
               </FormItem>
            </Form>
           </div>
           <div slot="footer">
                <Button  @click="askModal=false">Cancle</Button>
                <Button type="info" @click="askQuestion">Ask</Button>
            </div>
        </Modal>

    </div>
</template>

<script>


export default {
    data(){
        return{
            imgName: '/uploads/default.png',
            askModal:false,
            answerModal:false,
            askData:{
                content:'',
            },
           
            tempAIndex:'',
            atrrtributepoint:'',
            reviews:[],
            questionList:[],
            hours:[],
            galleryIndex:0,
            todayHour:{},
            rpagination:{},
            totalQuestion:0,
            reviewSearch:'',
            reviewStar:0,
            isLoading:true,
            flip:-1,
            coach_id:-1,
            coach_index:-1,
            page:1,
            str:'',
            value2: 0,
            topReviews: [],
            
            chartData: [
                ['Days', 'Ratings'],
                [1, 5],
                [2, 4],
                [3, 3],
                [4, 5],
                [5, 4],
                [6, 2],
                [7, 5],
            ],
            chartOptions: {
                chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
                 width: 300,
                  height: 300,
                colors: ['#e63131', '#e46a6a'],
                backgroundColor:'transparent',
                vAxis:{
                    
                    minValue:0,
                    maxValue:5,
                    gridlines: {
                        color: '#5C5C5C',
                        count: 5,
                    },
                    minorGridlines: {
                        color: '#5C5C5C',

                    },
                    textStyle:{
                        color: '#FFF',
                    }
                },
                hAxis:{
                    // maxValue: 1,
                    // format: '#%',
                    title:'Days',
                    titleTextStyle: {
                        color: '#FFF'
                    },
                    type:'string',
                     textStyle:{
                        color: '#FFF',
                    },
                    gridlines: {
                        color: '#5C5C5C',
                        count: 7,
                    },
                   
                   
                },
                trendlines: { 0: {} } ,

            },
       
        }
    },
    methods:{

        reviewPageWith(num){
            
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

            this.askData.school_id = this.legendData.school.id
            const res = await this.callApi('post','/storequestions',this.askData)
            if(res.status===200){
                this.s("Your question has been posted successfully!")
                this.questionList.push(res.data)
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
                this.$router.push('/login');
                return
            }
            let imoData = {
                review_id:this.reviews[index].id,
            }
            imoData[imo] = 1
            const res = await this.callApi('post','/stoteCoachReviewImo',imoData)
            if(res.status===200){
                this.s("you marked this review as "+imo+ "!")
                if(imo=='cool'){
                    imoItem.cool++
                    imoItem.acool=true
                }
                else if(imo=='funny'){
                    imoItem.funny++
                    imoItem.afunny=true
                }
                else if(imo=='useful'){
                    imoItem.useful++
                    imoItem.auseful = true
                }
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
            let {data} = await app.$axios.get(`/coaches/${params.id}`)
          
            return{
                legendData : data.School,
                totalReview : data.School.__meta__.allreview_count,
                averageRating : (data.School.avgRating)? data.School.avgRating.averageRating : 0 , 
                totalRating : (data.School.avgRating)? data.School.avgRating.totalRating : 0 , 
                
            }
		}catch (error) {
            console.log(error)
            return redirect('/')
		}
    },
   
   async created(){
       
        const [ res2, res4,res5] = await Promise.all([
            this.callApi('get', `/app/getAdditionCoachInfo/${this.$route.params.id}`),
            this.callApi('get', `/app/singleSchoolCoachReview/${this.$route.params.id}`),
            this.callApi('get', `/app/getCoachTopReviews/${this.$route.params.id}`),
        ])
        if( res2.status===200 && res4.status === 200){
            
            this.reviews = res4.data.data
            this.rpagination = res4.data
            this.topReviews = res5.data
            delete this.rpagination.data
            this.questionList = res2.data.questions
            this.totalQuestion = res2.data.__meta__.totalQuestion
            this.isLoading = false
            
        } else{
            this.swr()
            this.isLoading = false
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
    .table_extra_p{

    }
</style>









       






