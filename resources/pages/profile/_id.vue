<template>
    <div>
        <section class="rd second-section bg">
            <div class="container">
                <div class="section-content">
                    <div class="review-content">
                        <div class="review-map-section">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="review-gallary">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8 col-sm-8">
                                <div class="review-section-title">
                                    <h1 v-if="!isEdit" >
                                        <strong>{{legendData.name}} <span @click="storePulse(1)" ><i class="fas fa-thumbs-up"></i></span> <span @click="storePulse(2)"><i class="fas fa-thumbs-down"></i></span>
                                         <span v-if="healthPulse.GoodCount > healthPulse.BadCount"><i class="fas fa-heartbeat"></i></span>
                                          <span v-else-if="healthPulse.BadCount > healthPulse.GoodCount" ><i class="fas fa-heart-broken"></i></span> 
                                          <span v-else ><i class="far fa-heart"></i></span>
                                           </strong>

                                                <!-- <small><i class="fas fa-check-circle"></i> Claimed</small> -->
                                    </h1>
                                    <div class="header-input big-input" v-else >
                                        <input v-model="formData.name" type="text">
                                    </div>
                                    <div class="coach-review star-review">
                                        <p>
                                            <span :class="(averageRating>0)? ' rating-bg' : ''"><i class="fas fa-star"></i></span>
                                            <span :class="(averageRating>1)? ' rating-bg' : ''"><i class="fas fa-star"></i></span>
                                            <span :class="(averageRating>2)? ' rating-bg' : ''"><i class="fas fa-star"></i></span>
                                            <span :class="(averageRating>3)? ' rating-bg' : ''"><i class="fas fa-star"></i></span>
                                            <span :class="(averageRating>4)? ' rating-bg' : ''"><i class="fas fa-star"></i></span>
                                            &nbsp;<small class="review-number">{{totalReview}} reviews</small>
                                            <span id="showReviewDetails"><i class="fas fa-chart-bar"></i>&nbsp;Details <small>Review details</small></span>
                                        </p>
                                    </div>
                                    <!-- <div class="detail-content">
                                        <p>$$ &nbsp;&#8226;&nbsp;<span><a href="">Pizza</a>,<a href="">Italian</a></span>&nbsp;<span class="edit-button">Edit</span></p>
                                    </div> -->
                                     <div class="review-option">
                                        <button @click="$router.push(`/addreview/${legendData.id}`)" v-if=" user_id !== userData.id"  ><i class="fas fa-star"></i>&nbsp;Write a Review</button>
                                        
                                        <ul>
                                            <li @click="openImageModal" v-if="isLoggedIn && user_id == userData.id" ><a ><i class="fas fa-camera"></i>&nbsp;Add Photo</a></li>
                                            <li v-if="isLoggedIn && user_id == userData.id" > <a v-if="!isEdit" @click="editOn" ><i class="fas fa-bookmark"></i>&nbsp;Edit</a>
                                            <a v-else @click="legendUpdate"><i class="fas fa-bookmark"></i>&nbsp;Save</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class=" review-section-title card-box" v-if=" isLoggedIn && user_id !== userData.id">
                                    <h2>Ask the Community</h2>
                                    <div class="comment-individual" style="margin-bottom: 0 !important;">
                                        <!-- <p><strong>Is it okay to order a pastrami sandwich to share?</strong></p> -->
                                        <!-- <p><a href="">View 22 more answers</a></p> -->
                                         <Button @click="askModal=true"  >Ask a question</Button>
                                    </div>
                                </div>
                                <div class=" askCommunity card-box"  >
                                    <h2>Ask the Community</h2>
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
                                                <!-- <div class="comment-button">
                                                    <span>Delete</span>
                                                    <span>Update</span>
                                                </div> -->
                                            </div>
                                            <!-- <template v-if="item.answers" >
                                            <div class="comment-individual" v-for="(ans,i) in item.answers" :key="i" >
                                                <div class="media">
                                                    <div class="media-left">
                                                        <p><strong>Answer:</strong></p>
                                                    </div>
        
                                                    <div class="media-body">
                                                        <p>{{ans.content}}</p>
                                                        <span><small>{{ans.user.firstName}}</small></span>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;<span><small>{{item.created_at}}</small></span>
                                                        <p><a href="">View 1 more answer</a></p>
                                                    </div>
                                                </div>
                                                <div class="comment-button">
                                                    <span>Delete</span>
                                                    <span>Update</span>
                                                </div>
                                            </div>
                                            </template> -->
                                            <!-- <a ><p @click="answerModalOpen(item,index)" >Answer this question</p></a> -->
                                        <p v-if="totalQuestion==1" class="all-que"><a @click="$router.push(`/question_details/${legendData.id}/${item.id}`)">View question details</a></p>
                                        </div>
                                        <p v-if="totalQuestion>1" class="all-que"><nuxt-link :to="{name: 'questionlist-id', params: { id:legendData.id } }" >See all {{totalQuestion}} questions for {{legendData.name}}</nuxt-link></p>
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
                                <div class="reviewItem">
                                    <div class="card-box">
                                        <h2>Recommended Reviews <span>for {{legendData.name}}</span></h2>
                                        <hr>
                                        <div class="star-review" v-if=" user_id !== userData.id" style="margin-top: 20px; margin-bottom: 10px;" >
                                            <p>
                                                <span :class="(reviewStar>0)? 'high rating-bg' : ''" @click="reviewPageWith(1)" ><i class="fas fa-star"></i></span>
                                                <span :class="(reviewStar>1)? 'high rating-bg' : ''" @click="reviewPageWith(2)" ><i class="fas fa-star"></i></span>
                                                <span :class="(reviewStar>2)? 'high rating-bg' : ''" @click="reviewPageWith(3)" ><i class="fas fa-star"></i></span>
                                                <span :class="(reviewStar>3)? 'high rating-bg' : ''" @click="reviewPageWith(4)" ><i class="fas fa-star"></i></span>
                                                <span :class="(reviewStar>4)? 'high rating-bg' : ''" @click="reviewPageWith(5)" ><i class="fas fa-star"></i></span>
                                            </p>
                                            <p class="moreD" ><nuxt-link :to="{name: 'addreview-id', params: { id:legendData.id } }">Start your review for <strong>{{legendData.name}}</strong></nuxt-link>
                                                
                                            </p>
                                        </div>
                                    </div>
                                    <div class="searchByReview">
                                       
                                        
                                        
                                         <div class="searchReview" style="margin-bottom: 20px;">
                                            <input type="text" class="form-control" v-model="reviewSearch" placeholder="Search within the reviews">
                                            <button @click="SearchReviewResult" style="padding: 8px 12px;"><i class="fas fa-search"></i></button>
                                            <!-- <div class="sortTagOne">Sort by&nbsp;<strong>Flank Sort&nbsp;<span><i class="fas fa-sort-down"></i>
                                                  
                                               </span>
                                                <ul>
                                                    <li><a href="">Flank Sort</a></li>reviewStar
                                                    <li><a href="">Newest Sort</a></li>
                                                </ul>
                                                </strong>
                                                
                                            </div> -->
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
                                        </template>
                                          <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>
                                          <h4 v-else class="noReview" >No Review for {{legendData.name}}</h4>
                                        <hr>
                                        
                                        <div class="pageCount">
                                            <ul>
                                                <li @click="pageniateReview(-1)" ><a><i class="fas fa-chevron-left"></i>&nbsp;Prev</a></li>
                                                <li @click="pageniateReview(1)" ><a >Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                            </ul>
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " style="margin-top: 30px;">
                                <div class="review-time-content">
                                    <ul>
                                        <li>
                                            <div class="biz-hours-icon">
                                                <span><i class="far fa-clock"></i></span> 
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <template v-if="todayHour.today==1" >
                                                        <span class="attribute-key">Today</span>
                                                        <span>
                                                            <strong class="u-space-r-half"><span class="nowrap">{{todayHour.day.time}}</span></strong>
                                                            <p class="nowrap closed" v-if="!todayHour.open" >Closed now</p>
                                                        </span>
                                                    </template>
                                                    <template v-else >
                                                        <span class="attribute-key">Today</span>
                                                        <span>
                                                            <p class="nowrap closed">Closed</p>
                                                        </span>
                                                    </template>
                                                    
                                                    
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
                                                    <span  v-if="!isEdit" >
                                                         <strong class="u-space-r-half">{{legendData.address}}</strong>
                                                    </span>
                                                    <span v-else >
                                                         <input type="text"  v-model="formData.address"  class="adress-input">
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
                                                <span><i class="fas fa-phone"></i></span>
                                            </div>
                                            <div class="biz-hours-time">
                                                <div class="short-def-list">
                                                    <span  v-if="!isEdit" >
                                                         <strong class="u-space-r-half">{{legendData.phone}}</strong>
                                                    </span>
                                                    <span v-else >
                                                         <input type="text"  v-model="formData.phone"  class="adress-input">
                                                    </span>
                                                   
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="section-left-border card-box"> 
                                    <div class="widget-biz-hour">
                                        <h3>Business Hours</h3>
                                        <table class="table-simple-biz-hour" v-if="isLoading==false"  >
                                            <tr>
                                                <template  v-if="isEdit" >
                                                    <th  >Mon</th>
                                                    <td class="table-input table_extra_p">
                                                        <TimePicker v-model="businessHour[0].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[0].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template  v-else-if=" !isEdit && showBusinessHour[0].active">
                                                    <th  >Mon</th>
                                                    <td class="table-data"  >
                                                    <span  class="nowrap">{{showBusinessHour[0].time}}</span>
                                                </td>
                                                </template>
                                            </tr>
                                            <tr>
                                                <template v-if="isEdit" >
                                                    <th>Tue</th>
                                                    <td class="table-input"  >
                                                        <TimePicker v-model="businessHour[1].time"  format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[1].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template v-else-if=" !isEdit && showBusinessHour[1].active" >
                                                    <th>Tue</th>
                                                    <td class="table-data"  >
                                                        <span  class="nowrap">{{showBusinessHour[1].time}}</span>
                                                        
                                                    </td>
                                                </template>
                                                
                                                
                                            </tr>
                                            <tr>
                                                <template v-if="isEdit" >
                                                    <th>Wed</th>
                                                    <td class="table-input" >
                                                        <TimePicker v-model="businessHour[2].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[2].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template v-else-if=" !isEdit && showBusinessHour[2].active">
                                                    <th>Wed</th>
                                                    <td class="table-data"   >
                                                        <span class="nowrap">{{showBusinessHour[2].time}}</span>
                                                        
                                                    </td>
                                                </template>
                                            </tr>
                                            <tr>
                                                <template v-if="isEdit">
                                                    <th>Thu</th>
                                                    <td class="table-input"  >
                                                        <TimePicker v-model="businessHour[3].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[3].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template v-else-if=" !isEdit && showBusinessHour[3].active">
                                                    <th>Thu</th>
                                                    <td class="table-data"   >
                                                        <span  class="nowrap">{{showBusinessHour[3].time}}</span>
                                                        
                                                    </td>
                                                </template>
                                            </tr>
                                            <tr>
                                                <template v-if="isEdit">
                                                    <th>Fri</th>
                                                    <td class="table-input"  >
                                                        <TimePicker v-model="businessHour[4].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[4].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template v-else-if=" !isEdit && showBusinessHour[4].active">
                                                    <th>Fri</th>
                                                    <td class="table-data"   >
                                                        <span  class="nowrap">{{showBusinessHour[4].time}}</span>
                                                        
                                                    </td>
                                                </template>
                                            </tr>
                                            <tr>
                                                <template v-if="isEdit">
                                                    <th>Sat</th>
                                                    <td class="table-input"  >
                                                        <TimePicker v-model="businessHour[5].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[5].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template  v-else-if=" !isEdit && showBusinessHour[5].active">
                                                    <th>Sat</th>
                                                    <td class="table-data"  >
                                                     <span  class="nowrap">{{showBusinessHour[5].time}}</span>
                                                    
                                                </td>
                                                </template>
                                            </tr>
                                            <tr>
                                                <template  v-if="isEdit" >
                                                    <th>Sun</th>
                                                    <td class="table-input" >
                                                        <TimePicker v-model="businessHour[6].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                                                        <Checkbox v-model="businessHour[6].active">Active</Checkbox>
                                                    </td>
                                                </template>
                                                <template  v-else-if=" !isEdit && showBusinessHour[6].active" >
                                                    <th>Sun</th>
                                                     <td class="table-data"  >
                                                        <span class="nowrap">{{showBusinessHour[6].time}}</span>
                                                        
                                                    </td>
                                                </template>
                                            </tr>
                                        </table>
                                        <h4 v-else class="noReview" >Content is Loading...</h4>
                                    </div>

                                    <div class="business-info-sec reviewComment">
                                    <h3>More  info</h3>
                                    <div class="business-name" v-if="atrrtributepoint.length>0  && isLoading==false " >
                                        <ul>
                                            <li v-for="(item,index) in atrrtributepoint" :key="index" ><span><i class="fas fa-plus"></i>&nbsp;&nbsp;<span>{{item.content}} <strong>{{item | totalPercent}}</strong></span></span></li>
                                        </ul>
                                        <!-- <p>Does He ride the storm? &nbsp;&nbsp;<span> <strong>{{(skillCount.first != null )? skillCount.first + '/' : ''}}{{skillCount.total}}</strong></span></p>
                                        <p>Cookie Cutter approach? &nbsp;&nbsp;<span><strong>{{(skillCount.second != null )? skillCount.second + '/' : ''}}{{skillCount.total}}</strong></span></p>
                                        <p>Does he pass the sniff test? &nbsp;&nbsp;<span><strong>{{(skillCount.third != null )? skillCount.third + '/' : ''}}{{skillCount.total}}</strong></span></p>
                                        <p>Does he bring supplies?  &nbsp;&nbsp;<span><strong>{{(skillCount.fourth != null )? skillCount.fourth + '/' : ''}}{{skillCount.total}}</strong></span></p>
                                        <p>Quick heals for games? &nbsp;&nbsp;<span><strong>{{(skillCount.fifth != null )? skillCount.fifth + '/' : ''}}{{skillCount.total}}</strong></span></p>  -->
                                        
                                    </div>
                                    <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>

                                    <h4 v-else class="noReview" >No more yet!</h4>
                                </div>
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
        <Modal title="View Image" v-model="addImageModal">
           <div class="">
            <div >
                 <img :src="imgName" style="width: 100%">
            </div>
            <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
                <template >
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
                    </div>
                </template>
            </div>
            <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                multiple
                type="drag"
                action="/app/upload-review-file"
                style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;" >
                    <Icon type="ios-camera" size="20"></Icon>
                </div>
            </Upload>
           </div>
           <div slot="footer">
                <Button  @click="addImageModal=false">Cancle</Button>
                <Button type="info" @click="uploadsPhotos">Upload</Button>
            </div>
        </Modal>
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
        <div class="ivu-modal-custom">
            <Modal title="Image Gallery" v-model="galleryModal">
           <div class="row">
               <div class="modal-image-carousel">
                    <figure>
                        <img v-if="uploadList[galleryIndex]" :src="uploadList[galleryIndex].url" style="width: 100%">
                        <div data-v-2c068581="" class="modal-button">
                            <div data-v-2c068581="" class="button-left">
                                <span data-v-2c068581="" @click="prevModalImage" ><i data-v-2c068581="" class="fas fa-chevron-left"></i></span>
                            </div> 
                            <div data-v-2c068581="" class="button-right" @click="nextModalImage" >
                                <span data-v-2c068581=""><i data-v-2c068581="" class="fas fa-chevron-right"></i></span>
                            </div>
                        </div>
                        <button class="del-button" @click="deleteImage" v-if=" user_id !== userData.id" >
                            <span><i class="fas fa-trash-alt"></i></span>
                        </button>
                    </figure>
               </div>
               <div class="modal-image-thumb">
                   <div class="item active">
                       <figure>
                           <img src="/uploads/1555598317645.jpeg" alt="">
                       </figure>
                   </div>
                   <div class="item">
                       <figure>
                           <img src="/uploads/1555598317645.jpeg" alt="">
                       </figure>
                   </div>
                   <div class="item">
                       <figure>
                           <img src="/uploads/1555598317645.jpeg" alt="">
                       </figure>
                   </div>
                   <div class="item">
                       <figure>
                           <img src="/uploads/1555598317645.jpeg" alt="">
                       </figure>
                   </div>
                   <div class="item">
                       <figure>
                           <img src="/uploads/1555598317645.jpeg" alt="">
                       </figure>
                   </div>
               </div>
               <!-- <div class="col-md-4">
                   <ul class="modal-list" >
                       <li  v-for="(item,index) in uploadList" :key="index" :class="(index==galleryIndex)? 'selected' : ''"><img :src="item.url" @click="galleryIndex=index" ></li>
                   </ul>
                   <div class="col-md-6"><img :src="imgName" style="width: 100%"></div>
                   <div class="col-md-6"><img :src="imgName" style="width: 100%"></div>

               </div> -->
           </div>
           <div slot="footer">
                <Button type="info"  @click="galleryModal=false">Close</Button>
            </div>
        </Modal>
        </div>
        

    </div>
</template>

<script>
export default {
    data(){
        return{
            isEdit:false,
            value2: 0,
            formData:{
                name:'',
                address:'',
                phone:''
            },
            img_index:0,
            user_id:0,
            addImageModal:false,
            defaultList: [],
            imgName: '/uploads/default.png',
            askModal:false,
            galleryModal:false,
            answerModal:false,
            askData:{
                content:'',
            },
           
            tempAIndex:'',
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
            questionList:[],
            hours:[],
            galleryIndex:0,
            todayHour:{},
            rpagination:{},
            totalQuestion:0,
            reviewSearch:'',
            reviewStar:0,
            isLoading:true,
        }
    },
    methods:{
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
            }
        },
        nextImage(){
            if(this.img_index+4<this.uploadList.length){
                this.img_index++;
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
                this.$router.push('/login');
                return
            }
            // console.log(this.reviews[index])
            // return
            let imoData = {
                review_id:this.reviews[index].id,
            }
            imoData[imo] = 1
            const res = await this.callApi('post','/stoteReviewImo',imoData)
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
          
            return{
                legendData : data.legend,
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
   
   async created(){
        if(this.isLoggedIn) this.user_id = this.authInfo.id
        
        const [res1, res2, res3, res4] = await Promise.all([
            this.callApi('get', `/app/atrributeConteptData/${this.$route.params.id}`),  
            this.callApi('get', `/app/getAdditionlegendInfo/${this.$route.params.id}`),
            this.callApi('get', `/app/getTodayBussinessHour/${this.$route.params.id}`),
            this.callApi('get', `reviews/${this.$route.params.id}`),
        ])
        if(res1.status===200 && res2.status===200 && res3.status === 200 && res4.status === 200){
            this.atrrtributepoint = res1.data
            this.reviews = res4.data.data
            this.rpagination = res4.data
            delete this.rpagination.data
            this.uploadList = res2.data.legendimages
            this.questionList = res2.data.questions
            this.todayHour = res3.data
            this.hours = res2.data.hours
            this.totalQuestion = res2.data.__meta__.totalQuestion
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

.ivu-modal-close i {
  color: #fff !important;
  font-size: 50px !important;
}

.modal-image-carousel {
  width: 50%;
  margin: auto;
}

.ivu-modal {
  width: 100% !important;
}
</style>
