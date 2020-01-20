<template>
    <div class="pt-120">
        
       <section class="rd second-section bg profile-second-section"> 
            <div class="container">
                <div class="section-content">
                    <div class="profile-thumb-section">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="profile-thumb">
                                    <figure>
                                       <div class="Details_profie_img_div" v-if=" userData.id==user_id && isEdit" >
                                            <Upload
                                            ref="upload"
                                            type="drag"
                                            :with-credentials="true"
                                            :on-success="handleSuccess"
                                            :format="['jpg','jpeg','png']"
                                            :max-size="2048"
                                            action="/app/user/updateProfileImage">
                                            <!-- action="/app/uploadServiceImages"> -->
                                            <div  >
                                            <img :src="userData.img" alt=""  style="width: 140px;height: 150px;">
                                                <p   class="Details_profie_img_edit">Upload Image</p>
                                            </div>
                                        </Upload>
                                            
                                        </div>
                                        <div class="Details_profie_img_div" v-else >
                                            <div  >
                                            <img :src="userData.img" alt=""  style="width: 140px;height: 150px;">
                                            </div>
                                        </div>
                                        
                                    </figure>
                                </div>
                                <div class="profile-name">
                                    <div>
                                         <div v-if="isEdit"  >
                                             <Row>
                                                  FirstName：
                                                <Input  prefix="ios-contact" v-model="editData.firstName" style="width: auto" placeholder="Enter something..." />
                                             </Row>
                                             <Row>
                                                   LastName：
                                                <Input  prefix="ios-contact" v-model="editData.lastName" style="width: auto" placeholder="Enter something..." />
                                             </Row>
                                             <Row>
                                                Address:    
                                                <Input   type="textarea" :rows="3" v-model="editData.address" style="width: auto" placeholder="Enter your address..." />
                                            </Row>
                                             
                                             
                                         </div>
                                         <h1 v-else >{{userData.firstName}} {{userData.lastName}}</h1>
                                        
                                    </div>
                                    <div  v-if="!isEdit" >
                                        <p >{{userData.address}}</p>
                                    </div>
                                   
                                    
                                    <ul>
                                        <!-- <li><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span><strong>303</strong> Friends</span></li> -->
                                        <li><span class="high"><i class="fas fa-star"></i></span>&nbsp;&nbsp;<span><strong>{{userData.reviews.length}}</strong> Reviews</span></li>
                                        <!-- <li><span><i class="fas fa-camera"></i>&nbsp;&nbsp;<span><strong>41</strong> Photos</span></span></li> -->
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="user-profile-action"> <i class=""></i>
                                   
                                    <ul>
                                        <li v-if="isEdit" @click=" updateProfile" ><a ><span><i class="far fa-save"></i></span>&nbsp;&nbsp;<span>Save</span></a></li>
                                        <li  v-else-if=" !isEdit && userData.id==user_id" @click="EditProfileOn" ><a ><span><i class="fas fa-wrench"></i></span>&nbsp;&nbsp;<span>Edit Profile</span></a></li>
                                        <li  v-if="userData.id==user_id"><a @click="emailModal = true" ><span><i class="fas fa-user-friends"></i></span>&nbsp;&nbsp;<span>Change Email</span></a></li>
                                        <li v-if="userData.id==user_id"><a ><span><i class="fas fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Change Password</span></a></li>
                                        <li v-if="userData.id==user_id && userData.packType == 3"><a @click="$router.push('/product_register')" ><span><i class="fas fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Create New Product</span></a></li>
                                        <!-- <li v-if="userData.id==user_id"><a href=""><span><i class="fas fa-envelope"></i></span>&nbsp;&nbsp;<span>Send Message</span></a></li>
                                        <li><a href=""><span><i class="fas fa-user-friends"></i></span>&nbsp;&nbsp;<span>Follow Bryan B.</span></a></li>
                                        <li><a href=""><span><i class="fas fa-sync"></i></span>&nbsp;&nbsp;<span>Simillar Reviews</span></a></li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="third-section user-details-section">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="profile-link">
                                <h2>{{userData.firstName}}'s Profile</h2>
                                <ul>
                                   <li :class="(tab==1)? 'active-line' : ''" @click="tab=1" ><a ><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span>Profile Overview</span></a></li>
                                    <!-- <li><a ><span><i class="fas fa-user-friends"></i></span>&nbsp;&nbsp;<span>Friends</span></a></li> -->
                                    <li :class="(tab==2)? 'active-line' : ''" @click="tab = 2" ><a ><span class="high"><i class="fas fa-star"></i></span>&nbsp;&nbsp;<span>Reviews</span></a></li>
                                    <li :class="(tab==3)? 'active-line' : ''" @click="tab = 3" v-if="userData.id == user_id && userData.packType == 3" ><a ><span><i class="fas fa-camera"></i></span>&nbsp;&nbsp;<span>ProductList</span></a></li>
                                    <!-- <li><a href=""><span><i class="far fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Compliments</span></a></li>
                                    <li><a href=""><span><i class="fas fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Tips</span></a></li>
                                    <li><a href=""><span><i class="far fa-bookmark"></i></span>&nbsp;&nbsp;<span>Bookmarks</span></a></li>
                                    <li><a href=""><span><i class="fas fa-bookmark"></i></span>&nbsp;&nbsp;<span>Collections</span></a></li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12" v-if="tab == 1" >
                            <div class="profile-review reviewItem">
                                <h2>Reviews</h2>
                                <div class="review-sort">
                                    <!-- <div class="sortTag noleft">Sort by :&nbsp;<strong>Date&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                        <ul>
                                            <li><a href="">Alphabatical</a></li>
                                            <li><a href="">Rating</a></li>
                                            <li><a href="">Date</a></li>
                                            <li><a href="">Useful</a></li>
                                            <li><a href="">Funnny</a></li>
                                        </ul>
                                        </strong>
                                    </div> -->
                                </div>
                                <div class="profile-fill-review card-box" v-for="(item,index) in userData.reviews" :key="index" >
                                    <div class="profile-item">
                                            <div class="media" v-if="item.review_type == 'legend'" >
                                                <div class="media-left">
                                                    <img class="media-object profile_picU" :src="item.legend.img" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p><strong><a @click="$router.push(`profile/${item.legend.id}`)">{{item.legend.name}}</a></strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>{{item.legend.address}}</small>
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div class="media" v-if="item.review_type == 'school'" >
                                                <div class="media-left">
                                                    <img class="media-object profile_picU" :src="item.school.logo" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p>Coach Name: <strong>{{item.coach.name}}</strong></p>
                                                    <p><strong><a @click="$router.push(`school/${item.school.id}`)" >{{item.school.schoolName}} | {{item.school.sport}} </a></strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>
                                                             {{item.school.city}}
                                                             {{(item.school.state)? ' ,'+item.school.state : '' }}
                                                             {{(item.school.division)? ' ,'+item.school.division : '' }}
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="read-review">
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(item.rating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>&nbsp;
                                                        <small>{{item.created_at}}</small>
                                                    </p>
                                                </div>
                                                <p>{{item.content}} </p>
        
                                                <div class="profile-gallary">
                                                    <ul>
                                                        <li v-if="item.images[0]" ><a :href="item.images[0].url"><img :src="item.images[0].url"></a></li>
                                                        <li v-if="item.images[1]"><a :href="item.images[1].url"><img :src="item.images[1].url"></a></li>
                                                        <li v-if="item.images[2]"><a :href="item.images[2].url"><img :src="item.images[2].url"></a></li>
                                                    </ul>
                                                </div>
                                                <p id="resultReview"><strong>Was the review...?</strong></p>
                                                <ul class="section-item-review">
                                                    <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                                    <li><i class="fas fa-grin-beam"></i>&nbsp;Funny</li>
                                                    <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                                <div class="profile-fill-more" v-if="userData.reviews.length>0" style="margin-bottom: 20px; border-bottom: 0;">
                                    <p><a @click="tab=2" >More reviews by {{userData.firstName}}</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12" v-if="tab==3" >
                            <div class="profile-review reviewItem">
                                <h2>All Products</h2>
                                <div class="review-sort">
                                    <!-- <div class="sortTag noleft">Sort by :&nbsp;<strong>Date&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                        <ul>
                                            <li><a href="">Alphabatical</a></li>
                                            <li><a href="">Rating</a></li>
                                            <li><a href="">Date</a></li>
                                            <li><a href="">Useful</a></li>
                                            <li><a href="">Funnny</a></li>
                                        </ul>
                                        </strong>
                                    </div> -->
                                </div>
                                <div class="profile-fill-review card-box" v-for="(item,index) in allProducts" :key="index" >
                                    <div class="profile-item">
                                            <div class="media">
                                                <div class="media-left">
                                                    <img class="profile_picU" :src="item.img" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p><strong><a @click="$router.push(`/product/${item.id}`)">{{item.name}}</a></strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>{{item.address}}</small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="read-review">
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(item.avgRating.averageRating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        &nbsp;<small>{{item.__meta__.reviewsall_count}} Reviews</small></p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="profile-fill-more" v-if="allProducts.length>0"  >
                                   <hr>
                                    <div class="text-center ">
                                        <div class="pagination-padding">
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="setPage($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12" v-if="tab==2" >
                            <div class="profile-review reviewItem">
                                <h2>All Reviews</h2>
                                <div class="review-sort">
                                    <!-- <div class="sortTag noleft">Sort by :&nbsp;<strong>Date&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                        <ul>
                                            <li><a href="">Alphabatical</a></li>
                                            <li><a href="">Rating</a></li>
                                            <li><a href="">Date</a></li>
                                            <li><a href="">Useful</a></li>
                                            <li><a href="">Funnny</a></li>
                                        </ul>
                                        </strong>
                                    </div> -->
                                </div>
                                <div class="profile-fill-review card-box" v-for="(item,index) in allReviews" :key="index" >
                                    <div class="profile-item">
                                           <div class="media" v-if="item.review_type == 'legend'" >
                                                <div class="media-left">
                                                    <img class="media-object profile_picU" :src="item.legend.img" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p><strong><a @click="$router.push(`profile/${item.legend.id}`)">{{item.legend.name}}</a></strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>{{item.legend.address}}</small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="media" v-if="item.review_type == 'product'" >
                                                <div class="media-left">
                                                    <img class="media-object profile_picU" :src="item.product.img" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p><strong><a @click="$router.push(`product/${item.product.id}`)" >{{item.product.name}}</a></strong></p>
                                                    <p>$<strong>{{item.product.price}}</strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>
                                                            {{item.product.address}}
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="media" v-if="item.review_type == 'school'" >
                                                <div class="media-left">
                                                    <img   class="media-object profile_picU" :src="item.school.logo" alt="">
                                                </div>
                                                <div class="media-body">
                                                    <p>Coach Name: <strong>{{item.coach.name}}</strong></p>
                                                    <p><strong><a @click="$router.push(`school/${item.school.id}`)" >{{item.school.schoolName}} | {{item.school.sport}} </a></strong></p>
                                                    <!-- <small><a href="">Mexican</a></small> -->
                                                    <p>
                                                        <small>
                                                             {{item.school.city}}
                                                             {{(item.school.state)? ' ,'+item.school.state : '' }}
                                                             {{(item.school.division)? ' ,'+item.school.division : '' }}
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(item.rating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.rating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>&nbsp;
                                                        <small>{{item.created_at}}</small>
                                                    </p>
                                                </div>
                                                <p style="font-size: 16px; margin-top: 10px;">{{item.content}} </p>
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
                                                        <li v-if="item.images[0]" ><a :href="item.images[0].url"><img :src="item.images[0].url"></a></li>
                                                        <li v-if="item.images[1]"><a :href="item.images[1].url"><img :src="item.images[1].url"></a></li>
                                                        <li v-if="item.images[2]"><a :href="item.images[2].url"><img :src="item.images[2].url"></a></li>
                                                    </ul>
                                                </div> -->
                                                <p id="resultReview" style="margin-top: 20px;" ><strong>Was the review...?</strong></p>
                                                <ul class="section-item-review">
                                                    <li  :class="(item.imos.acool)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</li>
                                                    <li  :class="(item.imos.afunny)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</li>
                                                    <li  :class="(item.imos.auseful)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</li>
                                                    <!-- <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                                    <li><i class="fas fa-grin-beam"></i>&nbsp;Funny</li>
                                                    <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li> -->
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                                <div class="profile-fill-more" v-if="allReviews.length>0">
                                   <hr>
                                    <div class="text-center ">
                                        <div class="pagination-padding">
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="setPage($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="profile-about card-box">
                                <h3>About {{userData.firstName}} {{userData.lastName}}</h3>
                                <p>Rating Distribution</p>

                                <div class="about-rating">
                                    <table>
                                        <tr>
                                            <td class="histogram-label histogram-label-1">5 Stars</td>
                                            <td class="histogram-bar histogram-bar-1" :style="{ padding:'0px '+ratingD[4].padding+'px'}" ></td>
                                            <td class="histogram-number">{{ratingD[4].total}}</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-2">4 Stars</td>
                                            <td class="histogram-bar histogram-bar-2" :style="{ padding:'0px '+ratingD[3].padding +'px'}" ></td>
                                            <td class="histogram-number">{{ratingD[3].total}}</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-3">3 Stars</td>
                                            <td class="histogram-bar histogram-bar-3" :style="{ padding:'0px '+ratingD[2].padding+'px'}" ></td>
                                            <td class="histogram-number">{{ratingD[2].total}}</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-4">2 Stars</td>
                                            <td class="histogram-bar histogram-bar-4" :style="{ padding:'0px '+ratingD[1].padding+'px'}" ></td>
                                            <td class="histogram-number">{{ratingD[1].total}}</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-5">1 Stars</td>
                                            <td class="histogram-bar histogram-bar-5" :style="{ padding:'0px '+ratingD[0].padding+'px'}" ></td>
                                            <td class="histogram-number">{{ratingD[0].total}}</td>
                                        </tr>
                                    </table>
                                    <p><a href="">View more graphs</a></p>
                                </div>
                                <div class="about-side-bar">
                                    <p>Review Votes</p>
                                    <ul v-if="imosCount" >
                                        <li  ><span><i class="fas fa-lightbulb"></i></span> <span>Useful <strong>{{imosCount.useful}}</strong></span></li>
                                        <li  ><span><i class="far fa-laugh-wink"></i></span> <span>Funny <strong>{{imosCount.funny}}</strong></span></li>
                                        <li  ><span><i class="fas fa-grin-beam"></i></span> <span>Cool <strong>{{imosCount.cool}}</strong></span></li>
                                    </ul>
                                </div>

                                <div class="about-side-bar" v-if="userData.packType == 3">
                                    <p>Products</p>
                                    <ul v-if="imosCount" >
                                        <li  ><span><i class="far fa-laugh-wink"></i></span> <span>Product 1 </span></li>
                                        <li v-if="user_id == userData.id" @click="$router.push(`/product_register`)" ><span><i class="fas fa-grin-beam"></i></span> <span>Create New Product </span></li>
                                    </ul>
                                </div>

                                <!-- <div class="about-side-bar">
                                    <p>Stats</p>
                                    <ul>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Bookmarks <strong>17</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>First <strong>7</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Followers <strong>12</strong></span></li>
                                    </ul>
                                </div> -->
                                <!-- <div class="about-side-bar">
                                    <p>2 Compliments</p>
                                    <ul class="icon-bg">
                                        <li><span><i class="fas fa-grin-beam"></i></span> <small>1</small></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <small>1</small></li>
                                    </ul>
                                </div> -->

                                <div class="about-side-bar">
                                    <p>Locations</p>
                                    <p class="in-ab">{{userData.address}}</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>Yelping Since</p>
                                    <p class="in-ab">{{userData.created_at}}</p>
                                </div>
                                <!-- <div class="about-side-bar">
                                    <p>Find Me In</p>
                                    <p class="in-ab">a dog park, with no dog, petting all the dogs</p>
                                </div> -->
                                <div class="about-side-bar">
                                    <p>My Hometown</p>
                                    <p class="in-ab">{{userData.address}}</p>
                                </div>
                                <!-- <div class="about-side-bar">
                                    <p>Why You Should Read My Reviews</p>
                                    <p class="in-ab">I love food and get extremely excited about the ones that are good</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>The Last Great Book I Read</p>
                                    <p class="in-ab">The Girl with All the Gifts</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>My First Concert</p>
                                    <p class="in-ab">Backstreet Boys</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>My Last Meal On Earth</p>
                                    <p class="in-ab">Molinari's Hot Renzo Sandwich</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>Most Recent Discovery</p>
                                    <p class="in-ab">Bananas are curved because they grow towards the sun</p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Modal title="Change Email Address" v-model="emailModal">
           <div class="">
            <Form :label-width="80">
              <FormItem label="Email">
                    <Input v-model="emailData.email" placeholder="Enter New Email-Address..." style="width: 300px" />
                    <Input v-model="emailData.confirm_email" placeholder="Confirm Email-Address..." style="width: 300px" />
               </FormItem>
               <FormItem label="Password">
                    <Input type="password" v-model="emailData.old_password" placeholder="Enter Your  Password ..." style="width: 300px" />
               </FormItem>
               
            </Form>
           </div>
           <div slot="footer">
                <Button  @click="emailModal=false">Cancle</Button>
                <Button type="info" @click="UpdateEmail">Update</Button>
            </div>
        </Modal>
        <Modal title="Change Email Address" v-model="passwordModal">
           <div class="">
            <Form :label-width="80">
              <FormItem label="New Password">
                    <Input type="password" v-model="passwordData.password" placeholder="Enter New Email-Address..." style="width: 300px" />
                    <Input type="password" v-model="passwordData.confirm_passowrd" placeholder="Confirm Email-Address..." style="width: 300px" />
               </FormItem>
               <FormItem label="Old Password">
                    <Input type="password" v-model="passwordData.old_password" placeholder="Enter Your  Password ..." style="width: 300px" />
               </FormItem>
               
            </Form>
           </div>
           <div slot="footer">
                <Button  @click="passwordModal=false">Cancle</Button>
                <Button type="info" @click="UpdatePassword">Update</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { Promise } from 'q';
export default {
    data(){
        return{
            isEdit:false,
            user_id:0,
            editData:{
                firstName:'',
                lastName:'',
                address:'',

            },
            tab:1,
            allReviews:[],
            page:1,
            pagination:{},
            allProducts:[],
            productPagination:{},
            emailModal:false,
            passwordModal:false,
            emailData:{
                email:'',
                confirm_email:'',
                old_password:'',
            },
            passwordData:{
                password:'',
                confirm_passowrd:'',
                old_password:''
            },
        }
    },
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/users/${params.id}`)
          
            return{
                userData : data.user,
                ratingD : data.reviewRatings,
                imosCount : data.user.imosCount,
            }
		}catch (error) {
            console.log(error)
          //  return redirect('/')
		}
    },
    methods:{
        async UpdateEmail(){
            if(this.passwordData.password != this.passwordData.confirm_passowrd){
                return this.i("Password doesn't match !")
            }
            if(this.passwordData.old_password == ''){
                return this.i("Please write Your Old password !")
            }
            this.passwordData.id = this.user_id
            const res = await this.callApi('put','/app/updatePassword',this.emailData)
            if(res.status == 200){
                this.s("Password has been Updated!")
                try {
                    let { data } = await this.$axios.get("/logout");
                    this.$store.commit("updateAuthUser", false);
                    window.location = '/login'
                } catch (error) {
                    console.log(error);
                }
                    

            }
        },

        async UpdatePassword(){
            if(this.emailData.email != this.emailData.confirm_email){
                return this.i("Email doesn't match !")
            }
            if(this.emailData.old_password == ''){
                return this.i("Please write Your password !")
            }
            this.emailData.id = this.user_id
            const res = await this.callApi('put','/app/updateEmail',this.emailData)
            if(res.status == 200){
                this.s("Email has been changed!")
                try {
                    let { data } = await this.$axios.get("/logout");
                    this.$store.commit("updateAuthUser", false);
                    window.location = '/login'
                } catch (error) {
                    console.log(error);
                }
                    

            }
        },
        async setPage(key){
            this.page = key
            const res = await  this.callApi('get',`/app/getUserallReview/${this.userData.id}?page=${this.page}`)
            if(res.status == 200){
                 this.allReviews = res.data.data
            this.pagination = res.data
            delete this.pagination.data 
            }
        },
        EditProfileOn(){
            console.log(this.getTheMaxValue)
            this.editData.firstName = this.userData.firstName
            this.editData.lastName = this.userData.lastName
            this.editData.address = this.userData.address
            this.isEdit = true
        },
        async getAllUserProduct(page = 1){
            const res = await this.callApi('get',`/app/getAllUserProduct/${this.userData.id}?page=${page}`)
            if(res.status == 200){
                this.allProducts = res.data.data
                this.productPagination = res.data
                delete this.productPagination.data
            }
            
        },
        async updateProfile(){
            if(this.editData.firstName == '' || this.editData.lastName == '' || this.editData.address ==''){
                this.i('All fields are required!')
                return
            }
            
            const res = await this.callApi('put',`/users/${this.userData.id}`,this.editData)
            if(res.status===200){
                this.userData.firstName = this.editData.firstName
                this.userData.lastName = this.editData.lastName
                this.userData.address = this.editData.address
                this.isEdit = false
                this.s('Profile have been upadated!')
            }
            else if (res.status===401){
                this.e(res.data.message)
            }
            else{
                this.swr();
            }
        },
        handleSuccess (res, file) {
            this.userData.img = res.file 
        },

    },
    filters:{
        getIcon(value){
            if(value == 'Useful' ) return "fas fa-lightbulb";
            else if(value == 'Funny' ) return "far fa-laugh-wink"; 
            else if(value == 'Cool' ) return "fas fa-grin-beam";
        }
    },
    
    async created(){
        if(this.isLoggedIn) this.user_id = this.authInfo.id
        const [res1] = await Promise.all([
            this.callApi('get',`/app/getUserallReview/${this.userData.id}`)
        ])
        if(res1.status == 200){
            this.allReviews = res1.data.data
            this.pagination = res1.data
            delete this.pagination.data 
        }
        if(this.userData.packType == 3){
             this.getAllUserProduct()
        }
       

        
    },

}
</script>

<style scoped>
.profile_picU{
    width: 40px;
    
}
.Details_profie_img_edit {
    position: absolute;
    cursor: pointer;
    bottom: -100%;
    background: #0000009e;
    color: #fff;
    font-size: 11px;
    left: 0;
    transition: .3s all ease;
    text-align: center;
    width: 100%;
    height: 40px;
    padding-top: 10px;
}
.Details_profie_img_div:hover .Details_profie_img_edit{
    bottom:0;
}

@media only screen and (max-width: 767px) {
    .profile-review.reviewItem {
        margin-top: 20px;
    }

    .profile-about  {
        margin-top: 20px;
    }
}
</style>