<template>
  <div class="pt-120">
    <header id="main-header" class="mainHeader">
      <div class="opacity"></div>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-nav nav">
            <!-- <li><a href="review.html">Write a Review</a></li> --> 
          </ul>

          <ul class="pull-right navbar-nav nav" v-if="!isLoggedIn">
            <li>
              <nuxt-link class="nav-link" to="/login">Log In</nuxt-link>
            </li>
            <li class="border-nav">
              <nuxt-link class="nav-link" to="/register">Sign Up</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <div class="header-content">
          <div class="contentInCenter">
            <div class="text-center landing-page-logo">
              <a @click="$router.push('/')">
                <img src="/image/default.png" alt="page_logo">
              </a>

              <form action="#">
                <div class="equal-div">
                  <div class="input-group pageOption">
                    <span class="input-group-addon position-top" id="basic-addon1">Coach</span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="pageOption"
                      placeholder="Different type of Sport Coaches"
                    >
                    <div class="right-dropdown menu_dropDown_on">
                      <div class="menu_dropDown_on_main">
                        <ul>
                          <li @click="pageOption = 'school'">
                            <a>
                              <i class="fas fa-running"></i>School
                            </a>
                          </li>
                          <li @click="pageOption = 'coach'">
                            <a>
                              <i class="fas fa-running"></i>Coach
                            </a>
                          </li>
                          <li @click="pageOption = 'legend'">
                            <a>
                              <i class="fas fa-running"></i>Local Legend
                            </a>
                          </li>
                          <li @click="pageOption = 'product'">
                            <a>
                              <i class="fas fa-running"></i>Products & services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="input-group" onclick="toggle_visibility('menu');">
                    <span class="input-group-addon" id="basic-addon1">Find</span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="searchTxt"
                      placeholder="Search any Attributes"
                      aria-describedby="basic-addon1"
                    >
                    <span
                      @click="$router.push(`/search_result?place=${addressTxt}&str=${searchTxt}&pageOption=${pageOption}`)"
                      class="input-group-btn search-btn position-top"
                    >
                      <i class="fas fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
              <div class="homepage-category">
                <ul>
                  <li>
                    <i class="fas fa-calculator"></i>
                    <a @click="$router.push(`/search_result?pageOption=coach`)">High school coaches</a>
                  </li>
                  <li>
                    <i class="fas fa-utensils"></i>
                    <a @click="$router.push(`/search_result?pageOption=school`)">College coaches</a>
                  </li>
                  <li>
                    <i class="fas fa-tools"></i>
                    <a @click="$router.push(`/search_result?pageOption=legend`)">Travel team coaches</a>
                  </li>
                  <li>
                    <i class="fas fa-truck"></i>
                    <a
                      @click="$router.push(`/search_result?pageOption=product`)"
                    >Products & services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="lp bg second-section padding-top-bottom-bg">
      <div class="container">
        <div class="text-center">
          <h2>
            Flank
            <span>360</span>
          </h2>
        </div>
        <div class="section-content">
          <div class="row row-flex">
            <div class="col-md-3 col-sm-3 col-xs-6 mt-10">
              <div class="business-category" @click="$router.push(`/search_result?sort=rated`)">
                <figure>
                  <img src="/image/two.jpeg" alt="find_business_category_image">
                </figure>
                <figcaption>
                  <a>Best Rated Coaches</a>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-6 mt-10">
              <div class="business-category" @click="$router.push(`/search_result?sort=Worst`)">
                <figure>
                  <img src="/image/one.jpeg" alt="find_business_category_image">
                </figure>
                <figcaption>
                  <a>Worst Rated Coachess</a>
                </figcaption>
              </div>
            </div>
           <div class="col-md-3 col-sm-3 col-xs-6 mt-10">
              <div class="business-category" @click="$router.push(`/search_result?sort=most`)">
                <figure>
                  <img src="/image/four.jpeg" alt="find_business_category_image">
                </figure>
                <figcaption>
                  <a>Most Connected</a>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-6 mt-10">
              <div class="business-category" @click="$router.push(`/search_result`)">
                <figure>
                  <img src="/image/three.jpeg" alt="find_business_category_image">
                </figure>
                <figcaption>
                  <a>Local Instruction</a>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lp comm">
      <div class="container">
        <div class="media bg">
          <div class="media-left">
            <img class="media-object" src="/image/coffee shop stars _Converted_.png" alt>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Flank the Community</h4>
            <p>Find Flank reviews helpful? Start helping others by sharing your experiences</p>
            <button class="mt-10">
              <a @click="reviewModal=true">start your first review</a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="lp third-section">
      <div class="container">
        <div class="text-center">
          <h2>Flank {{city}}</h2>
        </div>
        <div class="section-content">
          <div class="cityName">
            <ul>
              <li  >
                <a @click="getCity('All citys')">All</a>
              </li>
              <li v-for="(item,index) in allCity" :key="index" >
                <a @click="getCity(item.city)">{{item.city}}</a>
              </li>
            </ul>
          </div>
          <div class="review-coach">
            <div class="text-center">
              <h3>Hot & Cold Coaches</h3>
            </div>
            <div class="row" v-if="schoolCoaches.length">
              <div class="col-md-4 col-sm-4" v-for="(item,index) in schoolCoaches" :key="index">
                <div class="review-photo">
                  <figure @click="$router.push(`/school_coach/${item.id}`)" style="cursor:pointer;" >
                    <img :src="item.school.logo" alt>
                  </figure>
                  <figcaption class="figcap-border">
                    <h4 @click="$router.push(`/school_coach/${item.id}`)">
                      <strong>
                        <a>{{item.name}}</a>
                      </strong>
                    </h4>
                    <p>
                      <span :class="(item.average_rating>0)? ' rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(item.average_rating>1)? ' rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(item.average_rating>2)? ' rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(item.average_rating>3)? ' rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(item.average_rating>4)? ' rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      &nbsp;{{item.__meta__.allreview_count}} reviews
                    </p>
                    <p  @click="$router.push(`/school/${item.school_id}`)" style="cursor:pointer;"> 
                      {{item.school.schoolName}} ,
                      <template>{{item.school.city}}</template>
                      <template>,{{item.school.state}}</template>
                    </p>
                    <p class="fire">
                      <i class="fas fa-fire"></i>&nbsp;Submitted 4 weeks ago
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <p class="moreD">
              <a>See more hot & cold coaches</a>
            </p>
          </div>
          <div class="row text-center">
            <div class="col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-6">
              <div class="explore-item">
                <h3 class="text-center">The Local Flank</h3>
                <figure>
                  <a @click="$router.push(`/search_result?pageOption=legend`)">
                    <img src="/image/h.jpg" alt>
                  </a>
                </figure>
                <figcaption class="figcap-border">
                  <h4 @click="$router.push(`/search_result?pageOption=legend`)">
                    <strong>
                      <a>
                        It’s Wednesday, do you need a cocktail?&nbsp;
                        <i class="fas fa-trophy"></i>
                      </a>
                    </strong>
                  </h4>
                  <p>Up, fizzy, on the rocks––no matter how you like ‘em, cocktails take the edge off and sure do taste good going down. We’ve put together a list of local libations that will have you calling for another ...</p>
                  <p class="bltitle">The Local Flank</p>
                </figcaption>
              </div>
              <!-- <div class="text-center">
                               <p class="moreD"><a href="">See more</a></p>
              </div>-->
            </div>
            <!-- <div class="col-md-4 col-sm-6">
                           <div class="explore-item">
                               <h3 class="text-center">Product spotlight</h3>
                               <figure>
                                <a href="local_flank.html"><img src="/image/300s.jpg" alt=""></a>
                               </figure>
                               <figcaption class="figcap-border">
                                   <h4><a href="">UYE: Let it Awash all over you!!!</a></h4>
                                   <p>Saturday, March 9 @ 1pm is happening! Our generous hosts @ Awash BK have ...</p>
                                   <p>Sat, Mar 9, 1:00 pm</p>
                               </figcaption>
                           </div>
                           <div class="text-center">
                               <p class="moreD"><a href="">See all events</a></p>
                           </div>
            </div>-->
          </div>
          <!-- Review of the day -->
          <div class="reviewDay">
            <div class="row">
              <div class="col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-6">
                <div class="explore-item">
                  <div class="text-center">
                  <h3 class="text-center">Review of the Day</h3>
                </div>
                <div class="figcap-border" v-if="review_of_day.info && loading == false">
                  <div class="media">
                    <div class="media-left">
                      <img class="profile_picU" :src="review_of_day.bestReview.reviwer.img" alt>
                    </div>
                    <div class="media-body">
                      <strong>
                        <a
                          @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)"
                        >{{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</a>
                      </strong>
                      <p></p>
                      <p>
                        <span>
                          <i class="fas fa-star"></i>
                          &nbsp;{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}
                        </span>
                        <!-- <span><i class="fas fa-male"></i>&nbsp;1304</span> -->
                        <!-- <span><a href="">Elite ’19</a></span> -->
                      </p>
                    </div>
                  </div>
                  <div class="badge-banner">
                    Wrote a review for
                    <strong>
                      <a @click="goToProfilePage()">{{review_of_day.bestReview.reviewforInfo.name}}</a>
                    </strong>
                    <img src="/image/40x40_rotd.png" alt>
                  </div>
                  <div class="badge-review">
                    <p>
                      <span :class="(review_of_day.bestReview.rating>0)? 'high rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(review_of_day.bestReview.rating>1)? 'high rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(review_of_day.bestReview.rating>2)? 'high rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(review_of_day.bestReview.rating>3)? 'high rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      <span :class="(review_of_day.bestReview.rating>4)? 'high rating-bg' : ''">
                        <i class="fas fa-star"></i>
                      </span>
                      &nbsp;{{review_of_day.bestReview.created_at}}
                    </p>
                  </div>
                  <div class="review-text">{{review_of_day.bestReview.content}}</div>
                </div>
                <div v-else-if="loading == true">
                  <h3 class="text-center">Content Loading....</h3>
                </div>
                <div v-else>
                  <h3 class="text-center">No Content.....</h3>
                </div>
                </div>
                
                <!-- <div class="text-center">
                                   <p class="moreD"><a href="">Read previous reviews</a></p>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lp fourth-section mt-30">
      <div class="container">
        <div class="text-center">
          <h2>Recent Activity</h2>
        </div>
        <div class="section-content" v-if="recentReview.length>0  && loading == false">
          <div class="row">
            <div class="col-md-4 col-sm-4" v-for="(item,index) in recentReview " :key="index">
              <div class="activity-individual">
                <div class="media">
                  <div class="media-left">
                    <img class="profile_picU" :src="item.reviwer.img" alt>
                  </div>
                  <div class="media-body">
                    <strong>
                      <a href>{{item.reviwer.firstName}} {{item.reviwer.lastName}}</a>
                    </strong>
                    <p>
                      <span>
                        <i class="fas fa-star"></i>
                        &nbsp;{{item.reviwer.__meta__.totalreviewbyuser}}
                      </span>
                    </p>
                    <small>Wrote a Review</small>
                  </div>
                </div>
                <figcaption>
                  <p>
                    <strong>
                      <a
                        v-if="item.review_type=='product'"
                        @click="$router.push(`/product/${item.prodcut.id}`)"
                      >{{item.product.name}}</a>
                      <a
                        v-if="item.review_type=='legend'"
                        @click="$router.push(`/profile/${item.prodcut.id}`)"
                      >{{item.legend.name}}</a>
                      <a
                        v-if="item.review_type=='school'"
                        @click="$router.push(`/school/${item.school.id}`)"
                      >{{item.coach.name}}</a>
                    </strong>
                  </p>
                  <hr>
                  <div class="scroll-review-sec">
                    <div class="activity-review">
                      <p>
                        <span :class="(item.rating>0)? 'high rating-bg' : ''">
                          <i class="fas fa-star"></i>
                        </span>
                        <span :class="(item.rating>1)? 'high rating-bg' : ''">
                          <i class="fas fa-star"></i>
                        </span>
                        <span :class="(item.rating>2)? 'high rating-bg' : ''">
                          <i class="fas fa-star"></i>
                        </span>
                        <span :class="(item.rating>3)? 'high rating-bg' : ''">
                          <i class="fas fa-star"></i>
                        </span>
                        <span :class="(item.rating>4)? 'high rating-bg' : ''">
                          <i class="fas fa-star"></i>
                        </span>
                        &nbsp;
                        <small>{{item.created_at}}</small>
                      </p>
                    </div>
                    <p>{{item.content}}</p>
                    <hr>
                    <div class="scroll-image-grid" v-if="item.images.length>0">
                      <div class="grid-full-item">
                        <img src="/image/300s.jpg" alt>
                      </div>
                      <div class="grid-half-item">
                        <div class="grid-inner-flex">
                          <img src="/image/300s.jpg" alt>
                        </div>
                        <div class="grid-inner-flex">
                          <img src="/image/300s.jpg" alt>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="emoicon">
                    <ul>
                      <li>
                        <p><span><i class="far fa-grin-beam"></i></span><span>01</span></p>
                        <small>Usefull</small>
                      </li>
                      <li>
                        <p><span><i class="far fa-grin-beam"></i></span><span>01</span></p>
                        <small>Usefull</small>
                      </li>
                      <li>
                        <p><span><i class="far fa-grin-beam"></i></span><span>01</span></p>
                        <small>Usefull</small>
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="emoicon">
                    <p class="pull-left">
                      <span>
                        <i class="far fa-grin-beam"></i>
                        <span>01</span>
                        <small>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</small>
                      </span>
                      <span>
                        <i class="far fa-grin-beam"></i>
                        <small>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</small>
                      </span>
                      <span>
                        <i class="far fa-grin-beam"></i>
                        <small>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</small>
                      </span>
                    </p>
                    <p class="pull-right">
                      <span>
                        <a href>
                          <i class="far fa-grin-beam"></i>
                        </a>
                        <small>Useful</small>
                      </span>
                    </p>
                  </div> -->
                </figcaption>
              </div>
            </div>
          </div>
          <hr>
          <!-- <div class="text-center">
                       <p class="moreD"><a href=""><i class="fas fa-angle-down"></i>&nbsp;Show more work in New York</a></p>
          </div>-->
        </div>
        <div v-else-if="loading == true">
          <h3 class="text-center">Content Loading....</h3>
        </div>
        <div v-else>
          <h3 class="text-center">No Content.....</h3>
        </div>
      </div>
    </section>
    <section class="padding-top-bottom-bg bg lp fifth-section section-margin">
      <div class="container">
        <div class="text-center">
          <h2>Browse Coaches by Category</h2>
        </div>
        <div class="section-content">
          <div class="row row-flex">
            <div class="col-md-3 col-sm-3 col-xs-4">
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?pageOption=coach`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>High School Coaches</strong>
                </figcaption>
              </div>
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?pageOption=product`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Products & Services</strong>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>College Coaches</strong>
                </figcaption>
              </div>
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?sort=rated`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Best Rated Instructions</strong>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?pageOption=coach`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Travel Coaches</strong>
                </figcaption>
              </div>
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?sort=Worst`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Worst Rated Instructions</strong>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3 col-sm-3">
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Local Instruction</strong>
                </figcaption>
              </div>
              <div
                class="browse-category-individual text-center"
                @click="$router.push(`/search_result?sort=most`)"
              >
                <figure>
                  <img src="/image/72x72_restaurants.png" alt>
                </figure>
                <figcaption>
                  <strong>Most Connected</strong>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal v-model="reviewModal" title="Riview Modal" width="500">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <p class="msg_box_header">Write Review For?</p>
            <div class="review-button">
              <div class="btn-role" @click="rData.for=1">
                <Button :class="(rData.for == 1)? 'act-btn': ''">School</Button>
              </div>
              <div class="btn-role" @click="rData.for=2">
                <Button :class="(rData.for == 2)? 'act-btn': ''">Local Legend</Button>
              </div>
              <div class="btn-role" @click="rData.for=3">
                <Button :class="(rData.for == 3)? 'act-btn': ''">Product</Button>
              </div>
            </div>
            <template v-if="rData.for == 2">
              <Input
                v-model="rData.key"
                placeholder="Enter Coach Name ..."
                style="width: 100%; padding: 15px; background: #F2F2F2;margin-top: 15px;"
                @on-keyup="SearchByKeyCoach"
              />
              <div v-if="coachList.length>0" style="border: 1px solid #0088cc;">
                <p
                  class="pointer_like"
                  v-for="(item,index) in coachList"
                  :key="index"
                  @click="goToLegendWall(item)"
                >{{item.name}}</p>
              </div>
            </template>
            <template v-if="rData.for ==3">
              <Input
                v-model="rData.key"
                placeholder="Enter Product"
                style="width: 100%; padding: 15px; background: #F2F2F2;margin-top: 15px;"
                @on-keyup="SearchByKeyProduct"
              />
              <div v-if="productList.length>0" style="border: 1px solid #0088cc;">
                <p
                  class="pointer_like"
                  v-for="(item,index) in productList"
                  :key="index"
                  @click="goToProductWall(item)"
                >{{item.name}}</p>
              </div>
            </template>
            <template v-else-if="rData.for==1">
              <Input
                v-model="rData.school"
                placeholder="Enter School Name ..."
                style="width: 100%; padding: 15px; background: #F2F2F2;margin-top: 15px;"
                @on-keyup="SearchByKeySchool"
              />
              <div v-if="schoolList.length>0" style="border: 1px solid #0088cc;">
                <p
                  class="pointer_like"
                  v-for="(item,index) in schoolList"
                  :key="index"
                  @click="manageSchoolData(item)"
                >{{item.name}} | {{item.sport}}</p>
              </div>

              <template v-if="sData.school_id !=0">
                <hr>
                <Input
                  v-model="rData.key"
                  placeholder="Enter School Coach Name ..."
                  style="width: 100%; padding: 15px; background: #F2F2F2;margin-top: 15px;"
                  @on-keyup="SearchByKeySchoolCoach"
                />
                <div
                  v-if="schoolCoachList.length>0 && sData.school !='' "
                  style="border: 1px solid #0088cc;"
                >
                  <p
                    class="pointer_like"
                    v-for="(item,index) in schoolCoachList"
                    :key="index"
                    @click="goToCoachWall(item)"
                  >{{item.name}}</p>
                </div>
                <Button v-else @click="CreateNewCoach" style="margin-top: 10px;">Create a Coach</Button>
              </template>
            </template>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button @click="closeModal">Close</Button>
        <Button type="success">Send</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      searchTxt: "",
      pageOption: "",
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
<style>
.profile_picU {
  width: 40px;
}

.pageOption:hover .menu_dropDown_on {
  display: block;
}
</style>
