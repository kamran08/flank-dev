<template>
    <div class="pt-120">
        <div class="flank-container " v-if="!mobileScreen">  
            

            <div class="new-search-flank" id="topId">
                <!-- <div class="new-search-flank-num" v-if="searchOn">
                    <p v-if="showStr" >  1-5 of over {{pagination.total}} results for <span>"{{showStr}}"</span></p> 
                </div> -->
                <div class="new-search-flank-num" >
                    <p v-if="str">  1-5 of over {{pagination.total}} results for <span>"{{str}}"</span></p> 
                    <p v-else>  1-5 of over {{pagination.total}} results  <span></span></p> 
                </div>
                <div :class="(isMobileMenu)? 'modal-open': 'flank-filter'" v-if="showMenuButton" >
                    <span @click="isMobileMenu = (isMobileMenu)? false : true"><i class="fas fa-filter"></i></span>
                </div>
                <!-- <div class="flank-filter" >
                    <span @click="submitSupport"><i class="fas fa-filter"></i></span>
                </div> --> 
                <div class="new-search-flank-sort" v-if="searchOn">
                <!-- <div class="new-search-flank-sort" > -->
                    <select name="" id="" v-model="sort" @change="sortBySelect($event)">
                        <option value="Sort By" disabled>Sort By</option>
                        <option value="1">Review: Low to High</option>
                        <option value="2">Review: High to Low</option>
                        <option value="3">Newest Arrivals</option>
                    </select>
                </div>
            </div>

            <div class="new-flank-container-fluid" style="margin-top: 15px;">
                <transition name="slide-fade">
                    <div  :class="menuClass" v-if="isMobileMenu">
                        <div class="new-flank-sidebar-list">
                            <h3>Department</h3>
                            <ul class="pad-list">
                                <!-- <li @click="chnageType('school')" ><a :class="(pageOption == 'school')? 'active_coach': ''">All Schools</a></li>
                                <li @click="chnageType('coach', '')" ><a :class="(pageOption == 'coach' && div == '')? 'active_coach': ''">All Coaches</a></li> -->
                                <li @click="chnageType('coach', 'High School')" ><a :class="(pageOption == 'coach' && div == 'High School')? 'active_coach': ''">High school coaches</a></li>
                                <li @click="chnageType('coach', 'Junior College')" ><a :class="(pageOption == 'coach' && div == 'Junior College')? 'active_coach': ''">College coaches</a></li>
                                <!-- <li @click="chnageType('coach', 'all')" ><a :class="(pageOption == 'coach' && div == 'all')? 'active_coach': ''">Coming Soon</a></li> -->
                                <li @click="chnageType('coach', 'Club/Travel')" ><a :class="(pageOption == 'coach' && div == 'Club/Travel')? 'active_coach': ''">Travel team coaches</a></li>
                                <li @click="$router.push('/bussniess-promotion')" ><a >Local instructors</a></li>
                                <!-- <li @click="chnageType('product')" ><a :class="(pageOption == 'product' )? 'active_coach': ''">Products & services</a></li> -->
                            </ul>
                        </div>
                        <div class="new-flank-sidebar-list" v-if="pageOption != 'product'" >
                            <h3>Avg customer review</h3>
                            <ul>
                                <li>
                                    <p v-if="onHover">
                                        <span  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(1)" :class="(drating.index > 0)? drating.class: ''"  ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(2)" :class="(drating.index > 1)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(3)" :class="(drating.index > 2)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(4)" :class="(drating.index > 3)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(5)" :class="(drating.index > 4)? drating.class: ''"  ><i class="fas fa-star"></i></span>
                                    </p>
                                    <p v-else>
                                        <span  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(1)" :class="(oldrating.index > 0)? oldrating.class: ''"  ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(2)" :class="(oldrating.index > 1)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(3)" :class="(oldrating.index > 2)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(4)" :class="(oldrating.index > 3)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                        <span  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(5)" :class="(oldrating.index > 4)? oldrating.class: ''"  ><i class="fas fa-star"></i></span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="new-flank-sidebar-list"  v-if="pageOption != 'product'">
                            <h3>Attributes</h3>
                            <ul>
                                <li>
                                    
                                    <input type="radio" name="gende"  v-model="attribute" id="che1" :value="'averageHealthy'" v-on:change="AttributesSearchByKey" ><label for="che1">Healthy index</label>
                                </li>
                                <li>
                                    <input type="radio" name="gende"  v-model="attribute" id="che2" :value="'averageHarmful'" v-on:change="AttributesSearchByKey"><label for="che2">Harmful index</label>
                                </li>
                            </ul>
                        </div>
                        <div class="new-flank-sidebar-list"  v-if="pageOption != 'product' ">
                            <h3>Sport type</h3>
                            <!-- <CheckboxGroup v-model="sports" @on-change="SpoprtsSearchByKey"> -->
                            <ul v-if="allSports.length">
                                <li v-for="(item,index) in allSports" :key="index" >
                                     <input type="radio" name="gender"  v-model="tsports" :id="`che${index+3}`" :value="item.value" v-on:change="SpoprtsSearchByKey"><label :for="`che${index+3}`">{{item.name}}</label>
                                    <!-- <Checkbox :label="item.value">{{item.name}}</Checkbox> -->
                                    <!-- <input type="checkbox" id="che3"><label for="che3">Baseball</label> -->
                                </li>
                            
                            </ul>
                            <!-- </CheckboxGroup> -->
                        </div>
                    </div>
                </transition>
            
                <div>
                    <div class=" col-md-10" v-if="str != '' && searchData.length == 0  ">
                        <div>
                            <div class="new-find-section">
                                <div class="">
                                    <div class="new-find-inner">
                                        <h3>No Results for '{{str}}'  near <span>{{place}}</span></h3>
                                        <!-- <div class="new-find-pagi">
                                            <ul>
                                                <li><a href="">Los Angeles, CA</a></li>
                                                <li><span><i class="fas fa-chevron-right"></i></span><a href="">Brentwood</a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="suggestion-result">
                                            <div class="suggestion-inner">
                                                <h3>Suggestions for improving the results</h3>
                                                <div class="suggestion-inner-list">
                                                    <ul>
                                                        <!-- <li>Try a larger search area.</li> -->
                                                        <li>Try a different location.</li>
                                                        <li>Check the spelling or try alternate spellings.</li>
                                                        <li>Try a more general search e.g. "John Doe" instead of "Coach John"</li>
                                                    </ul>
                                                </div>
                                                <div class="suggestion-container">
                                                    <div class="suggestion-container-inner">
                                                        <div class="suggestion-container-left">
                                                            <h3>Not here? Tell us what we're missing.</h3>
                                                            <p>If the coach you are looking for isn’t here, add him/her!</p>
                                                        </div>
                                                        <div class="suggestion-container-right">
                                                            <button @click="addNew.modal = true" >Add a School/Coach</button>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="suggestion-container-text">
                                                        <p>Got search feedback? <a href="#">Help us improve</a></p>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new-flank-content" v-else  >
                        <div v-if="pageOption == 'coach'">
                            <div class="new-flank-content-rev" v-if=" searchData.length>0 && searchData[0].allreviewLimit != null && isLoggedIn"  >
                                <div class="new-content-rev-title">
                                    <!-- <Button @click="isMobileMenu = !isMobileMenu" > Click</Button>
                                    <transition name="slide-fade">
                                    
                                        <h2 v-if="isMobileMenu" >Your past reviews</h2>
                                    </transition> -->
                                    <h2 class="pad-border uppercase" >Your past reviews</h2>
                                
                                    <!-- <p><a @click="$router.push(`/school_coach/${searchData[0].id}`)" class="new-text-blue">See all past reviews</a></p> -->
                                </div>
                                <!-- <div v-if="searchData[0].avg_rating !=0" class="new-best-rated rated-red mt-15">
                                    <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div> -->
                                <div class="new-content-rev-details nupd-new-content-rev-details">
                                    <div v-if="searchData[0].avg_rating !=0" class="new-best-rated rated-red">
                                        <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                    <div class="new-content-rev-left upd-new-content-rev-left">
                                        
                                        <figure>
                                            <img src="/images/ps.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="new-content-rev-right" v-if="searchData[0].school">
                                        <h2 class="width-260" style="cursor:pointer; margin-bottom: 0 !important;"  @click="$router.push(`/school_coach/${searchData[0].id}`)" >{{ searchData[0].name}} -  {{ (searchData[0].school.sport)? searchData[0].school.sport: ''}}  </h2>
                                        <p>{{ searchData[0].school.schoolName}}</p>
                                        <span class="city-s">{{searchData[0].school.city}}, {{searchData[0].school.state}}</span>
                                        <div class="new-content-star" style="margin-top: 14px">
                                            <ul>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <!-- <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p> -->
                                        </div>
                                        <div class="new-comment-para pr-new-comment-para" :class="(isonSee)?'mo-new-comment-para':''" style="margin-top: 13px">
                                            <p style="line-height: 18px">
                                                "{{searchData[0].allreviewLimit.content}}"
                                                <!-- <a href="">read more</a> -->
                                            </p>

                                             

                                            <p @click="isonSee=false" class="pr-new-link"  v-if="isonSee"><a >read less</a></p>
                                            <p @click="isonSee=true" class="pr-new-link" v-else><a >read more</a></p>
                                        </div>
                                        <div class="new-comment-btn">
                                            <button @click="$router.push(`/scoach_review/${searchData[0].id}`)" >Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div v-if="pageOption == 'legend'">
                            <div class="new-flank-content-rev" v-if=" searchData.length>0 && searchData[0].allreviewLimit != null && isLoggedIn"  >
                                <div class="new-content-rev-title">
                                    <h2>Your past reviews</h2>
                                    <!-- <p><a @click="$router.push(`/local_instructor/${searchData[0].id}`)">+++++++++++++++++++++++past reviews</a></p> -->
                                </div>
                                <!-- <div v-if="searchData[0].avg_rating !==0" class="new-best-rated rated-red mt-15">
                                    <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div> -->
                                <div class="new-content-rev-details nupd-new-content-rev-details">
                                    <div v-if="searchData[0].avg_rating !==0" class="new-best-rated rated-red mt-15">
                                        <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                    <div class="new-content-rev-left upd-new-content-rev-left">
                                        
                                        <figure>
                                            <img src="/images/ps.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="new-content-rev-right">
                                        <h2 class="width-260" style="cursor:pointer; margin-bottom: 0 !important;"  @click="$router.push(`/local_instructor/${searchData[0].id}`)" >{{ searchData[0].name}} -  {{ searchData[0].sport}}  </h2>
                                        
                                        <span class="city-s">{{searchData[0].city}}, {{searchData[0].state}}</span>
                                        <div class="new-content-star" style="margin-top: 14px">
                                            <ul>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <!-- <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p> -->
                                        </div>
                                        <div class="new-comment-para pr-new-comment-para" :class="(isonSee)?'mo-new-comment-para':''" style="margin-top: 13px">
                                            <p style="line-height: 18px">
                                                "{{searchData[0].allreviewLimit.content}}"
                                                <!-- <a href="">read more</a> -->
                                            </p>
                                            
                                            <p @click="isonSee=false" class="pr-new-link"  v-if="isonSee"><a >read less</a></p>
                                            <p @click="isonSee=true" class="pr-new-link" v-else><a >read more</a></p>

                                            <!-- <p class="pr-new-link"><a href="">read more</a></p> -->
                                        </div>
                                        <div class="new-comment-btn">
                                            <button @click="$router.push(`/addreview/${searchData[0].id}`)" >Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                        

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items" v-if="pageOption == 'coach'"  v-for="(item,index) in searchData" :key="index"  >
                                <div class="desk-fl-top ">

                                    <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p style="color: #000;">{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="_1coach_items" v-if="pageOption == 'school'"  v-for="(item,index) in searchData" :key="index"  >
                                <!-- <div class="desk-fl-top">
                                    <p v-if="item.avgRating.averageRating !=0" class="worst yellow">{{ (item.avgRating.averageRating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>
                                 -->
                                 <!-- <div class="desk-fl-top">

                                    <div v-if="item.avg_rating !=0 || item.avg_rating!=null" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                    ami ekano kichu edit korsilam 
                                </div> -->
                                 <div class="desk-fl-top " v-if="item.avgRating">

                                    <div v-if="item.avgRating.averageRating !=0 || item.avgRating.averageRating!=null" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avgRating.averageRating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>
                                                <!-- <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p style="color: #000;">{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                </div> -->
                                                    <!-- <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button> -->

                                                <div class="_2card_details" >
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school/${item.id}`)">{{item.schoolName}} {{item.sport}} </p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avgRating.averageRating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.city}}, {{item.state}}</p>
                                                    </div>
                                                   <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                </div>
                                                    <!-- <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button> -->
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <!-- <div class="col-xl-12 col-md-12 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p class="_2coach_title_two _2coach_title_two_red"> 10.00
                                                    
                                                    <span>91.98%</span>
                                                
                                                </p>
                                            </div>

                                    
                                        </div> -->
                                        <!-- Right -->
                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            <div class="_1coach_items" v-if="pageOption == 'legend'"  v-for="(item,index) in searchData" :key="index"  >
                                <div class="desk-fl-top">

                                    <p v-if="item.avg_rating !=0" class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>
                                

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/local_instructor/${item.id}`)" >{{item.name}} - {{item.sport}} </p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.city}}, {{item.state}}</p>
                                                    </div>
                                                <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/addreview/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main">
                                                <p class="_2coach_main_right_title">Known for:</p>

                                                <!-- <ul class="coach-main-known-list">
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_1coach_items" v-if="pageOption != 'product'" >
                            <div class="_1coach_top desk-fl-top">
                                <div class="_1coach_top_pic">
                                    <img class="_1coach_top_img" src="images/fla.png" alt="" title="">
                                </div>

                                <div class="_1coach_top_right">
                                    <p class="_1title">Editorial recommendations</p>

                                    <p class="_1coach_top_by">By Flank | </p>
                                </div>
                            </div>

                            <div class="_1coach_main">
                                <div class="row">
                                    <div class="col-xl-12 col-md-6 col-lg-3 col-sm-12">
                                        <div class="_1coach_main_one">
                                            <p class="_1title">Best Coach Reviews: The Ultimate List</p>

                                            <p class="_1coach_time">Sept,11,2019</p>

                                            <p class="_1coach_status">
                                            There’s a human context around this, its just 
not the statistics that drive people to see how
change is necessary, it’s the human context –
sharing the experience and frustration from
players, who were cast aside, by coaches
who didn’t care and just focused on their
own interests.  Often times it’s a series of
tribes, Flank is the main tribe what won’t let
a crisis go to waste, crisis force bureaucracy,
we force leaders to make decisions, when
reputations are on the line, resources are
on the line. Use this site to drive change.
Because doing nothing, leads to nothing.
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Card Items -->
                                    <div class="col-xl-12 col-md-6 col-lg-3 col-sm-6 col-xs-6" v-for="(item,index) in ratedpost" :key="index">
                                        <div class="_1card">
                                            <p class="_2title">Our Top Choice</p>

                                              <p class="_1card_subtitle">{{item.name}} - {{item.school.sport}}</p>
                                              <p class="_1card_subtitle">{{item.school.city}}/{{item.school.state}}</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">{{item.school.schoolName}} - {{item.school.sport}}</p>
                                                <p class="_3title" style="margin-bottom: 10px;">{{item.school.city}}, {{item.school.state}}</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.avg_rating}}</li>
                                                    </ul>
                                                </div>
                                                <p class="_1card_tag">{{item.healthScore}} Health Score</p>
                                                  <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>
                                                <!-- <p class="_1text">
                                                    When you're after a true empowering coach
                                                    , coach {{item.name}} nails all the healthy coaching attributes.
                                                </p> -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card Items -->

                                    <!-- Card Items -->
                                    <!-- <div class="col-xl-12 col-md-6 col-lg-3 col-sm-6 col-xs-6">
                                        <div class="_1card">
                                            <p class="_2title">Our Top Choice</p>

                                            <p class="_1card_subtitle">Coach Name - Sport Type City/State</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">Coach Name - Sport Type</p>
                                                <p class="_3title" style="margin-bottom: 10px;">City/State</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 10</li>
                                                    </ul>
                                                </div>
                                                <p class="_1card_tag">67.0 Health Score</p>
                                                <p class="_1text">
                                                    When you're after a true empowering coach
                                                    , coach Jhon Doe nails all the healthy coaching attributes.
                                                </p>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- Card Items -->

                                    <!-- Card Items -->
                                    <!-- tracter -->
                                    <!-- <div class="col-xl-12 col-md-6 col-lg-3 col-sm-6 col-xs-6" v-for="(item,index) in ratedpost" :key="index">
                                        
                                        <div class="_1card">
                                            <p class="_2title">Our Top Choice</p>

                                            <p class="_1card_subtitle">{{item.name}} - {{item.school.sport}} {{item.school.city}}</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">{{item.name}} - {{item.school.sport}}</p>
                                                <p class="_3title" style="margin-bottom: 10px;">{{item.school.city}}/{{item.school.state}}</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li :class="(item.avg_rating>0)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>1)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>2)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>2)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating==5)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.avg_rating}}</li>
                                                    </ul>
                                                </div>
                                                <p class="_1card_tag">{{item.averageHealthy}} Health Score</p>
                                                <p class="_1text">
                                                    When you're after a true empowering coach
                                                    , coach Jhon Doe nails all the healthy coaching attributes.
                                                </p>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- Card Items -->
                                </div>
                            </div>
                        </div>

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items"   v-for="(item,index) in similar" :key="index" v-if="pageOption == 'coach' && ((index%2) == 0)"  >
                                <div class="desk-fl-top">

                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p style="color: #000;">{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>          
                                                   <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>

                            <div class="_1coach_items"   v-for="(item,index) in similar" :key="index" v-if="pageOption == 'school' && ((index%2) == 0)"  >
                                <!-- <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p> -->
                                <div class="desk-fl-top">

                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                 

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p>{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="_1coach_items" v-for="(item,index) in similar" :key="index"  v-if="pageOption == 'legend' && ((index%2) == 0)   "  >
                                <!-- <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p> -->
                                <div class="desk-fl-top">

                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                 

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/local_instructor/${item.id}`)" >{{item.name}} - {{item.sport}} </p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avgRating.averageRating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.address}}</p>
                                                    </div>
                                                   <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/addreview/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <!-- <div class="_2coach_main_right_main">
                                                <p class="_2coach_main_right_title">Known for:</p>

                                                <ul class="coach-main-known-list">
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul>
                                            </div> -->
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                        <div class="_1coach_items"  v-if="pageOption != 'product'" >
                            <div class="_1coach_barch desk-fl-top">
                                <p class="worst worst-col">Flank's <span>Choice</span></p>
                                <p class="_1title">Higly rated, sustainable instructors that benefit the players communities where they coach.</p>
                            </div>

                            <div class="_2coach_main">
                                <div class="row flex-row">
                                    <!-- Card -->
                                    <div class="col-xl-12 col-md-3 col-lg-3 col-sm-6 flex-1" v-for="(item,index) in mostratedpost" :key="index" style="padding: 0 10px;">
                                        <div class="_1card" v-if="!item.trace">
                                            <p class="_1card_star">{{4-index}} {{(4-index==1)?'Star':(4-index==4)?'Stars & Up':'Stars & Down'}}</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title text-ellipis" style="font-weight: 600;" >{{"no coach found"}} - {{"sports"}}</p>
                                                <p class="_3title text-ellipis">{{"no School found"}}</p>
                                                <div class="_1rating" style="margin-top: 7px;">
                                                     <!-- <ul class="_1rating_list">
                                                        <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.totalRating}}</li>
                                                    </ul> -->
                                                     <ul class="_1rating_list">
                                                        <li :class="(4-index>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 0</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="_1card" v-else>
                                            <p class="_1card_star">{{4-index}} {{(4-index==1)?'Star':(4-index==4)?'Stars & Up':'Stars & Down'}}</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title text-ellipis" style="font-weight: 600;cursor: pointer;" @click="$router.push('/school_coach/'+item.id)">{{item.name}} - {{item.school.sport}}</p>
                                                <p class="_3title text-ellipis">{{item.school.schoolName}}</p>
                                                <div class="_1rating" style="margin-top: 7px;">
                                                     <!-- <ul class="_1rating_list">
                                                        <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.totalRating}}</li>
                                                    </ul> -->
                                                     <ul class="_1rating_list">
                                                        <li :class="(4-index>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li :class="(4-index>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.totalRating}}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card -->

                                    <!-- Card -->
                                    <!-- <div class="col-xl-12 col-md-3 col-lg-3 col-sm-6 flex-1">
                                        <div class="_1card">
                                            <p class="_1card_star">3 Stars & Up</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">Coach Name - Sport Type City/State</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- Card -->

                                    <!-- Card -->
                                    <!-- <div class="col-xl-12 col-md-3 col-lg-3 col-sm-6 flex-1">
                                        <div class="_1card">
                                            <p class="_1card_star">2 Stars & Down</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">Coach Name - Sport Type City/State</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span>10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- Card -->

                                    <!-- Card -->
                                    <!-- <div class="col-xl-12 col-md-3 col-lg-3 col-sm-6 flex-1">
                                        <div class="_1card">
                                            <p class="_1card_star">1 Stars</p>

                                            <div class="_1card_pic">
                                                <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                            </div>

                                            <div class="_1card_details">
                                                <p class="_3title">Coach Name - Sport Type City/State</p>
                                                <div class="_1rating">
                                                    <ul class="_1rating_list">
                                                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class=""><i class="fas fa-star"></i></li>
                                                        <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- Card -->
                                </div>
                            </div>
                        </div>

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items"  v-for="(item,index) in similar" :key="index" v-if="(pageOption == 'coach') && ((index%2) != 0)"   >
                                <div class="desk-fl-top">
                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                <!-- <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p> -->
                                 

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p>{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            <div class="_1coach_items"  v-for="(item,index) in similar" :key="index" v-if="(pageOption == 'school') && ((index%2) != 0)"   >
                                <div class="desk-fl-top">
                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                <!-- <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p> -->
                                 

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details" v-if="item.school">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}} -  {{(item.school)? item.school.sport: ''}}  </p>
                                                            <p>{{ item.school.schoolName}}</p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.school.city}}, {{item.school.state}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                    <button @click="$router.push(`/scoach_review/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="_1coach_items"  v-for="(item,index) in similar" :key="index"  v-if="pageOption == 'legend' && ((index%2) != 0)" >
                                <!-- <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p> -->
                                <div class="desk-fl-top">
                                    <div v-if="item.avg_rating !=0">
                                        <p class="worst yellow">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                 

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="_2card_details">
                                                    <div class="_2card_details_top">
                                                        <div class="_2card_details_left">
                                                            <p class="_2title" style=" cursor: pointer; "  @click="$router.push(`/local_instructor/${item.id}`)" >{{item.name}} - {{item.sport}}  </p>
                                                            <div class="_1rating">
                                                                <ul class="_1rating_list">
                                                                    <li :class="(item.avgRating.averageRating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li :class="(item.avgRating.averageRating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                    <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.__meta__.allreview}}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p class="_2card_details_city">{{item.address}}</p>
                                                    </div>
                                                    <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>

                                                <button @click="$router.push(`/addreview/${item.id}`)" class="_1btn">Write a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div style="text-align: center;padding: 20px 0px;" v-if="searchData.length>0">
                            <Page prev-text="Previous" next-text="Next"  :current="parseInt(pagination.page)" :total="pagination.total" @on-change="SearchByKey" :page-size="parseInt(pagination.perPage)" />
                        </div>
                        <div class="_1reiew_box desk-fl-top">
                            <p class="_1reiew_box_title">Tell us how can improve</p>

                            <p class="_1reiew_con">If you need help, Please <a href="">visit the help section</a> or contact us below</p>

                            <textarea class="_1reiew_taxtarea" rows="5" v-model="support.text" placeholder="Your voice is important. Help us make it easier to find the coach you want"></textarea>
                            <button class="_1btn new-1btn" type="button" @click="submitSupport" v-if="!isLoad">Submit</button>
                            <button class="_1btn new-1btn" type="button"  v-else disabled>Loading...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backtop mb-15">
                <p><a href="#topId" style="color:#fff !important;">Back to top</a></p>
            </div>
        </div>
        <div v-else-if="mobileScreen" class="flank-container flank-container-mobile ">
        

            <div class="new-search-flank new-box-shadow" id="topId" style="padding-top: 20px;">
                <div class="new-search-flank-num">
                    <!-- <p v-if="showStr" >  1-5 of over {{pagination.total}} results for <span>"{{showStr}}"</span></p> -->
                    <p v-if="str" >  1-5 of over {{pagination.total}} results for <span>"{{str}}"</span></p>
                    <p v-else >  1-5 of over {{pagination.total}} results </p>
                </div>
               
            </div>

            <div class="new-sidebar" :class="isMobileSideBar?'active' : ''" >
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Department</h4>
                        <ul>
                            
                            <li @click="chnageType('coach', 'High School')"><a :class="(pageOption == 'coach' && div == 'High School')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">High school coaches</p></div></a></li>
                            <li @click="chnageType('coach', 'Junior College')"><a :class="(pageOption == 'coach' && div == 'Junior College')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">College coaches</p></div></a></li>
                            <li @click="Healthiestcoaches('coach', '','averageHealthy')"><a :class="(pageOption == 'coach' && div == '')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">Healthiest coaches</p></div></a></li>
                            <li @click="chnageType('coach', 'Club/Travel')"><a :class="(pageOption == 'coach' && div == 'Club/Travel')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">Travel team coaches</p></div></a></li>
                            <li @click="$router.push('/local_business')" ><a :class="(pageOption == 'coach' && div == 'Club/Travel')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">Local instructors</p></div></a></li>
                            <!-- <li @click="chnageType('school')"><a :class="(pageOption == 'school')? 'active_coach': ''"><div class="quick-link-caption"><p class="capitalize">All Schools</p></div></a></li> -->
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list new-flank-sidebar-list">
                        <h4>Avg Customer review</h4>
                        <ul style="padding-left: 0;">
                            <li>
                                <p v-if="onHover">
                                    <span  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(1)" :class="(drating.index > 0)? drating.class: ''"  ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(2)" :class="(drating.index > 1)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(3)" :class="(drating.index > 2)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(4)" :class="(drating.index > 3)? drating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(5)" :class="(drating.index > 4)? drating.class: ''"  ><i class="fas fa-star"></i></span>
                                </p>
                                <p v-else>
                                    <span  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(1)" :class="(oldrating.index > 0)? oldrating.class: ''"  ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(2)" :class="(oldrating.index > 1)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(3)" :class="(oldrating.index > 2)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(4)" :class="(oldrating.index > 3)? oldrating.class: ''" ><i class="fas fa-star"></i></span>
                                    <span  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(5)" :class="(oldrating.index > 4)? oldrating.class: ''"  ><i class="fas fa-star"></i></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <div class="new-flank-sidebar-list"  v-if="pageOption != 'product'">
                            <h3>Attributes</h3>
                            <ul>
                                <li>
                                    <input type="radio" name="gender"  v-model="attribute" id="che1" value="averageHealthy" v-on:change="AttributesSearchByKey" ><label for="che1">Healthy index</label>
                                </li>
                                <li>
                                    <input type="radio" name="gender"  v-model="attribute" id="che2" value="averageHarmful" v-on:change="AttributesSearchByKey"><label for="che2">Harmful index</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <div class="new-flank-sidebar-list"  v-if="pageOption != 'product' ">
                            <h3>Sport type</h3>
                            <!-- <CheckboxGroup v-model="sports" @on-change="SearchByKey"> -->
                            <ul v-if="allSports.length">
                                <li v-for="(item,index) in allSports" :key="index" >
                                    <input type="radio" name="gend"  v-model="tsports" :id="`che${index+3}`" :value="item.value" v-on:change="SpoprtsSearchByKey"><label :for="`che${index+3}`">{{item.name}}</label>
                                    <!-- <Checkbox :label="item.value">{{item.name}}</Checkbox> -->
                                    <!-- <input type="checkbox" id="che3"><label for="che3">Baseball</label> -->
                                </li>
                            
                            </ul>
                            <!-- </CheckboxGroup> -->
                        </div>
                            
                        <!-- </ul> -->
                    </div>
                </div>
            </div>

            <div class="new-flank-container-fluid">
            
            
                <div style="width: 100%;">
                    <div class=" col-md-10" v-if="str != '' && place != '' && searchData.length == 0  ">
                        <div>
                            <div class="new-find-section">
                                <div class="">
                                    <div class="new-find-inner">
                                        <h3>No Results for '{{str}}'  near <span>{{place}}</span></h3>
                                        <!-- <div class="new-find-pagi">
                                            <ul>
                                                <li><a href="">Los Angeles, CA</a></li>
                                                <li><span><i class="fas fa-chevron-right"></i></span><a href="">Brentwood</a></li>
                                            </ul>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="suggestion-result">
                                            <div class="suggestion-inner">
                                                <h3>Suggestions for improving the results</h3>
                                                <div class="suggestion-inner-list">
                                                    <ul>
                                                        <!-- <li>Try a larger search area.</li> -->
                                                        <li>Try a different location.</li>
                                                        <li>Check the spelling or try alternate spellings.</li>
                                                        <li>Try a more general search e.g. "John Doe" instead of "Coach John"</li>
                                                    </ul>
                                                </div>
                                                <div class="suggestion-container">
                                                    <div class="suggestion-container-inner">
                                                        <div class="suggestion-container-left">
                                                            <h3>Not here? Tell us what we're missing.</h3>
                                                            <p>If the coach you are looking for isn’t here, add him/her!</p>
                                                        </div>
                                                        <div class="suggestion-container-right">
                                                            <button @click="addNew.modal = true" >Add a School/Coach</button>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="suggestion-container-text">
                                                        <p>Got search feedback? <a href="#">Help us improve</a></p>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new-flank-content no-margin" v-else  >
                        <div v-if="pageOption == 'coach'">
                            <div class="new-flank-content-rev new-box-shadow " v-if=" searchData.length>0 && searchData[0].allreviewLimit != null && isLoggedIn"  style="padding-bottom: 5px;">
                                <div class="new-content-rev-title">
                                  
                                    <h2 class="pad-border uppercase" >Your past reviews</h2>
                                
                                    <!-- <p><a @click="$router.push(`/school_coach/${searchData[0].id}`)" class="new-text-blue">See all past reviews</a></p> -->
                                </div>
                                <div v-if="searchData[0].avg_rating !==0" class="new-best-rated rated-red mt-15">
                                    <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>
                                <div class="_2card _2card_new new-content-rev-details new-overflow-x ">
                                    <div class="_2card_pic"><img src="/images/ps.png" alt="" title="" class="_2card_img"></div>
                                    <div class="new-content-rev-right" v-if="searchData[0].school">
                                        <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${searchData[0].id}`)" class="font-24 weight-400 width-260">{{ searchData[0].name}} -  {{ (searchData[0].school.sport)? searchData[0].school.sport: ''}}  </h2>
                                        <p class="font-18 weight-400">{{ searchData[0].school.schoolName}}</p>
                                        <span class="city-s">{{searchData[0].school.city}}, {{searchData[0].school.state}}</span>
                                        <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                            <ul>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                        </div>
                                        <div class="new-comment-para" :class="(isonSee)?'mo-new-comment-para':''" style="margin-top: 25px;">
                                            <p class="font-24 weight-400">"{{searchData[0].allreviewLimit.content}}"
                                                <!-- <span>"{{searchData[0].allreviewLimit.content}}"</span> -->

                                               
                                            </p>
                                            <p @click="isonSee=false" v-if="isonSee">
                                                <a  class="new-text-blue">read less</a>
                                             </p>
                                            <p @click="isonSee=true" v-else>
                                                <a  class="new-text-blue" >read more</a>
                                            </p>
                                        </div>
                                        <div class="new-comment-btn mob-new-comment-btn">
                                            <button @click="$router.push(`/scoach_review/${searchData[0].id}`)" >Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div v-if="pageOption == 'legend'">
                            <div class="new-flank-content-rev new-box-shadow " v-if=" searchData.length>0 && searchData[0].allreviewLimit != null && isLoggedIn"  style="padding-bottom: 5px;">
                                <div class="new-content-rev-title">
                                    <h2 class="pad-border uppercase" >Your past reviews</h2>
                                    <!-- <p><a @click="$router.push(`/local_instructor/${searchData[0].id}`)" class="new-text-blue">See all past reviews</a></p> -->
                                </div>
                                <div v-if="searchData[0].avg_rating !==0" class="new-best-rated rated-red mt-15">
                                    <p >{{ (searchData[0].avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>
                                <div class="new-content-rev-details new-overflow-x ">
                                    <div class="new-content-rev-left">
                                        
                                        <figure>
                                            <img src="/images/ps.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="new-content-rev-right">
                                        <h2 style="cursor:pointer;"  @click="$router.push(`/local_instructor/${searchData[0].id}`)" class="font-24 weight-400 width-260">{{ searchData[0].name}} -  {{ searchData[0].sport}}  </h2>
                                        <span class="city-s">{{searchData[0].city}}, {{searchData[0].state}}</span>
                                        <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                            <ul>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                <li><span :class="( searchData[0].allreviewLimit.rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                        </div>
                                         <div class="new-comment-para" :class="(isonSee)?'mo-new-comment-para':''" style="margin-top: 25px;">
                                            <p class="font-24 weight-400">"{{searchData[0].allreviewLimit.content}}"
                                                <!-- <span>"{{searchData[0].allreviewLimit.content}}"</span> -->

                                               
                                            </p>
                                            <p @click="isonSee=false" v-if="isonSee">
                                                <a  class="new-text-blue">read less</a>
                                             </p>
                                            <p @click="isonSee=true" v-else>
                                                <a  class="new-text-blue" >read more</a>
                                            </p>
                                        </div>
                                        <div class="new-comment-btn">
                                            <button @click="$router.push(`/addreview/${searchData[0].id}`)" >Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                        

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items new-box-shadow" v-if="pageOption == 'coach'"  v-for="(item,index) in searchData" :key="index">
                                <div class="new-fl-top">

                                    <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>
                                

                                <div class="_2coach_main">
                                    <div class="row new-row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card _2card_new">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>
                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <!-- here i am -->
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                            <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                            <!-- i am {{item}} -->
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->
                                        <!-- {{searchData}} -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right _2coach_main_right_new">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                  
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            <div class="_1coach_items" v-if="pageOption == 'school'"  v-for="(item,index) in searchData" :key="index"  >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                       
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                            <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <!-- <div class="col-xl-12 col-md-12 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p class="_2coach_title_two _2coach_title_two_red"> 10.00
                                                    
                                                    <span>91.98%</span>
                                                
                                                </p>
                                            </div>

                                    
                                        </div> -->
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            <div class="_1coach_items" v-if="pageOption == 'legend'"  v-for="(item,index) in searchData" :key="index"  >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}} dsfa"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main">
                                                <p class="_2coach_main_right_title">Known for:</p>

                                                <!-- <ul class="coach-main-known-list">
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_1coach_items new-box-shadow" v-if="pageOption != 'product'" >
                            <div class="_1coach_top pad-border">
                                <div class="_1coach_top_pic">
                                    <img class="_1coach_top_img" src="images/fla.png" alt="" title="">
                                </div>

                                <div class="_1coach_top_right">
                                    <p class="_1title font-24 weight-400 vs-text-size" style="text-transform: uppercase;">Editorial recommendations</p>

                                    <p class="_1coach_top_by font-18">By Flank | </p>
                                </div>
                            </div>

                            <div class="_1coach_main">
                                <div class="row">
                                    <div class="col-xl-12 col-md-6 col-lg-3 col-sm-12 pad-10-b">
                                        <div class="_1coach_main_one">
                                            <p class="_1title">Best Coach Reviews: The Ultimate List</p>

                                            <p class="_1coach_time" style="font-style: italic;">Sept,11,2019</p>

                                            <p class="_1coach_status">
                                            There’s a human context around this, its just 
not the statistics that drive people to see how
change is necessary, it’s the human context –
sharing the experience and frustration from
players, who were cast aside, by coaches
who didn’t care and just focused on their
own interests.  Often times it’s a series of
tribes, Flank is the main tribe what won’t let
a crisis go to waste, crisis force bureaucracy,
we force leaders to make decisions, when
reputations are on the line, resources are
on the line. Use this site to drive change.
Because doing nothing, leads to nothing.
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <!-- Card Items -->
                                </div>
                                <div class="row  mt-20 new-flanker-top-choice">
                                    <hooper :settings="editHooperSetting" >
                                    <!-- Card Items -->
                                        <slide v-for="(item,index) in ratedpost" :key="index" >
                                            <div class=" pad-10-b mobile-flanker-top-item">
                                                <div class="_1card _1card-border">
                                                    <p class="_2title">Our Top Choice</p>

                                                    <p class="_1card_subtitle weight-400">{{item.name}} - {{item.school.sport}}</p>
                                                    <p class="_1card_subtitle weight-400">{{item.school.city}}/{{item.school.state}}</p>

                                                    <div class="_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details">
                                                       <p class="_3title">{{item.name}} - {{item.school.sport}}</p>
                                                        <p class="_3title" style="margin-bottom: 10px;">{{item.school.city}}, {{item.school.state}}</p>
                                                        <div class="_1rating">
                                                           <ul class="_1rating_list">
                                                                <li :class="(item.avg_rating>0)? '_1rating_active' : ''"><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>1)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>2)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>3)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>4)? '_1rating_active' : ''" ><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.avg_rating}}</li>
                                                            </ul>
                                                        </div>
                                                       <p class="_1card_tag">{{item.healthScore}} Health Score</p>
                                                        <!-- <p class="_1text">
                                                            When you're after a true empowering coach
                                                            , coach Jhon Doe nails all the healthy coaching attributes.
                                                        </p> -->
                                                        <p :class="(item.isSeeMore)? '_2card_status open _2taxt' : '_2card_status _2taxt'">{{item.ratingText}}</p>
                                                    <p v-if="item.isSeeMore"><a @click="item.isSeeMore = false" class="see_more">See less</a></p>
                                                    <p v-else-if="!item.isSeeMore"><a @click="item.isSeeMore = true" class="see_more">See more</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <!-- Card Items -->

                                        <!-- Card Items -->
                                        <!-- <slide >
                                            <div class=" pad-10-b">
                                                <div class="_1card _1card-border">
                                                    <p class="_2title">Our Top Choice</p>

                                                    <p class="_1card_subtitle">Coach Name - Sport Type <br> City/State</p>

                                                    <div class="_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details">
                                                        <p class="_3title">Coach Name - Sport Type</p>
                                                        <p class="_3title" style="margin-bottom: 10px;">City/State</p>
                                                        <div class="_1rating">
                                                            <ul class="_1rating_list">
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class=""><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 10</li>
                                                            </ul>
                                                        </div>
                                                        <p class="_1card_tag">67.0 Health Score</p>
                                                        <p class="_1text">
                                                            When you're after a true empowering coach
                                                            , coach Jhon Doe nails all the healthy coaching attributes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide> -->
                                        <!-- Card Items -->

                                        <!-- Card Items -->
                                        <!-- <slide >
                                            <div class=" pad-10-b">
                                                <div class="_1card _1card-border">
                                                    <p class="_2title">Our Top Choice</p>

                                                    <p class="_1card_subtitle">Coach Name - Sport Type <br> City/State</p>

                                                    <div class="_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details">
                                                        <p class="_3title">Coach Name - Sport Type</p>
                                                        <p class="_3title" style="margin-bottom: 10px;">City/State</p>
                                                        <div class="_1rating">
                                                            <ul class="_1rating_list">
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class=""><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> 10</li>
                                                            </ul>
                                                        </div>
                                                        <p class="_1card_tag">67.0 Health Score</p>
                                                        <p class="_1text">
                                                            When you're after a true empowering coach
                                                            , coach Jhon Doe nails all the healthy coaching attributes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide> -->
                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                    </hooper>
                                </div>
                            </div>
                        </div>

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items new-box-shadow"   v-for="(item,index) in similar" :key="index" v-if="pageOption == 'coach' && ((index%2) == 0)"  >
                                <div class="new-fl-top">

                                    <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row new-row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card _2card_new">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right _2coach_main_right_new">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!--<li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                         <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>

                            <div class="_1coach_items"   v-for="(item,index) in similar" :key="index" v-if="pageOption == 'school' && ((index%2) == 0)"  >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row new-row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card _2card_new">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right _2coach_main_right_new">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="_1coach_items" v-for="(item,index) in similar" :key="index"  v-if="pageOption == 'legend' && ((index%2) == 0)   "  >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <!-- <div class="_2coach_main_right_main">
                                                <p class="_2coach_main_right_title">Known for:</p>

                                                <ul class="coach-main-known-list">
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul>
                                            </div> -->
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                        <div class="_1coach_items new-box-shadow"  v-if="pageOption != 'product'" >
                            <div class="new-fl-top">

                                <div class="_1coach_barch">
                                    <p class="worst worst-col">Flank's <span class="red-col">Choice</span></p>
                                    <p class="_1title weight-400">Higly rated, sustainable instructors that benefit the players communities where they coach.</p>
                                </div>
                            </div>

                            <div class="_2coach_main _2coach_main_hooper mobile-flank-choice">
                                <hooper  :settings="choiceHooperSetting" >
                                        <slide v-for="(item,index) in mostratedpost" :key="index" >
                                            <div class="mobile-choice-item-list">
                                                <div class="_1card">
                                                    <p class="_1card_star">{{4-index}} {{(4-index==1)?'Star': 'Stars & Up'}}</p>

                                                    <div class="_1card_pic _new_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>
                                                    <div class="_1card_details _1card_details_mob">
                                                        <h3 class="_3title text-ellipis" @click="$router.push('/school_coach/'+item.id)" style="cursor: pointer;">{{item.name}}</h3>
                                                        <p class="_3title text-ellipis">{{item.school.schoolName}}</p>
                                                        <p class="_3title">{{item.school.sport}}</p>
                                                        <div class="_1rating mt-10">
                                                             <ul class="_1rating_list">
                                                                <li :class="(item.avg_rating>0)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>1)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>2)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating>2)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                                <li :class="(item.avg_rating==5)?'_1rating_active':''"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span> {{item.avg_rating}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <!-- <slide>
                                            <div class=" flex-1">
                                                <div class="_1card">
                                                    <p class="_1card_star">3 Stars & Up</p>

                                                    <div class="_1card_pic _new_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details _1card_details_mob">
                                                        <h3 class="_3title">Coach Name - <span>Football</span></h3>
                                                        <p class="_3title">School Name</p>
                                                        <div class="_1rating mt-10">
                                                            <ul class="_1rating_list">
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class=""><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span>10</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide> 
                                        <slide>
                                            <div class=" flex-1">
                                                <div class="_1card">
                                                    <p class="_1card_star">2 Stars & Up</p>

                                                    <div class="_1card_pic _new_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details _1card_details_mob">
                                                        <h3 class="_3title">Coach Name - <span>Football</span></h3>
                                                        <p class="_3title">School Name</p>
                                                        <div class="_1rating mt-10">
                                                            <ul class="_1rating_list">
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class=""><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span>10</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <slide>
                                            <div class=" flex-1">
                                                <div class="_1card">
                                                    <p class="_1card_star">1 Stars & Up</p>

                                                    <div class="_1card_pic _new_1card_pic">
                                                        <img class="_1card_img" src="/images/ps.png" alt="" title="">
                                                    </div>

                                                    <div class="_1card_details _1card_details_mob">
                                                        <h3 class="_3title">Coach Name - <span>Football</span></h3>
                                                        <p class="_3title">School Name</p>
                                                        <div class="_1rating mt-10">
                                                            <ul class="_1rating_list">
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                                                <li class=""><i class="fas fa-star"></i></li>
                                                                <li class="_1rating_num"><span> <i class="fas fa-chevron-down"></i> </span>10</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>-->
                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                    </hooper>
                            </div>
                        </div>

                        <div v-if="searchData.length>0" >

                            <div class="_1coach_items new-box-shadow"  v-for="(item,index) in similar" :key="index" v-if="(pageOption == 'coach') && ((index%2) != 0)"   >
                                <div class="new-fl-top">

                                    <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                        <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                    </div>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row new-row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card _2card_new">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right _2coach_main_right_new">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            <div class="_1coach_items"  v-for="(item,index) in similar" :key="index" v-if="(pageOption == 'school') && ((index%2) != 0)"   >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-6 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                    <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>

                                            <div class="_2coach_main_right_main"  @click="$router.push(`/school_coach/${item.id}`)" >
                                                <p class="_2coach_main_right_title">Known for:</p>
                                                    <!-- 
                                                <ul class="coach-main-known-list"  >
                                                    <li  v-for="(item,index) in item.topAtrribute" :key="index">
                                                        <figure>
                                                            <img :src="item.info.image" alt="">
                                                        </figure>
                                                        <p>{{item.info.content}}</p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/plus.gif" alt="">
                                                        </figure>
                                                        <p>Health Score<span>55 out of 100</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="/images/veh.gif" alt="">
                                                        </figure>
                                                        <p>Delivery<span>No</span></p>
                                                    </li>
                                                </ul> -->
                                                <div class="known-for-list">
                                                    <ul>
                                                        <li><img src="/attribute/1.png" alt=""><span>Health Score</span></li>
                                                        <li><img src="/attribute/2.png" alt=""><span>Great Communicator</span></li>
                                                        <li><img src="/attribute/3.png" alt=""><span>Creates a Healthy Environment</span></li>
                                                        <li><img src="/attribute/4.png" alt=""><span>Pushes you to be Better</span></li>
                                                        <li><img src="/attribute/5.png" alt=""><span>Extension of your Parents</span></li>
                                                        <!-- <li><img src="/attribute/6.png" alt=""><span>Earns your Respect</span></li>
                                                        <li><img src="/attribute/7.png" alt=""><span>Remembers their promises</span></li>
                                                        <li><img src="/attribute/8.png" alt=""><span>Adaptable</span></li>
                                                        <li><img src="/attribute/9.png" alt=""><span>Natures your talents</span></li>
                                                        <li><img src="/attribute/10.png" alt=""><span>Rides the storm</span></li> -->
                                                    </ul>
                                                </div>

                                                <!-- <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                    Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul>

                                                <ul class="_2coach_main_right_list">
                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Health Score 55 out of 100
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Delivery No
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Accepts Credit Cards Yes
                                                    </li>

                                                    <li>
                                                        <i class="fab fa-algolia"></i>
                                                        Paking Private Lot
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="_1coach_items"  v-for="(item,index) in similar" :key="index"  v-if="pageOption == 'legend' && ((index%2) != 0)" >
                                <div v-if="item.avg_rating !=0" class="new-best-rated rated-yellow">
                                    <p  class="">{{ (item.avg_rating>=3)? 'Best Rated' : 'Worst Rated'}}</p>
                                </div>

                                <div class="_2coach_main">
                                    <div class="row">
                                        <!-- Left -->
                                        <div class="col-xl-12 col-md-12 col-lg-7 _2coach_main_left">
                                            <div class="_2card">
                                                <div class="_2card_pic">
                                                    <img class="_2card_img" src="/images/ps.png" alt="" title="">
                                                </div>

                                                <div class="new-content-rev-right" v-if="item.school">
                                                    <h2 style="cursor:pointer;"  @click="$router.push(`/school_coach/${item.id}`)" class="font-24 weight-400">{{ item.name}} -  {{ (item.school.sport)? item.school.sport: ''}}  </h2>
                                                    <p class="font-18 weight-400">{{ item.school.schoolName}}</p>
                                                    <span class="city-s">{{item.school.city}}, {{item.school.state}}</span>
                                                    <div class="new-content-star lg-content-star"  style="margin-top: 20px;">
                                                        <ul>
                                                            <li><span :class="( item.avg_rating>0)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>1)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>2)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>3)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                            <li><span :class="( item.avg_rating>4)? 'bg' : ''" ><i class="fas fa-star"></i></span></li>
                                                        </ul>
                                                        <p><span><i class="fas fa-chevron-down"></i></span><a >{{(item.__meta__)? item.__meta__.allreview:0}}</a></p>
                                                    </div>
                                                    <div class="new-comment-para mo-new-comment-para" style="margin-top: 25px;">
                                                        <p class="font-24 weight-400">
                                                              <span :class="(item.isSeeMore)? ' open' : ''" >"{{item.ratingText}}"</span>
                                                            <a v-if="item.isSeeMore" @click="item.isSeeMore = false" class="new-text-blue">See less</a>
                                                            <a v-else-if="!item.isSeeMore"  @click="item.isSeeMore = true" class="new-text-blue">See more</a>
                                                        </p>
                                                    </div>
                                                    <div class="new-comment-btn mob-new-comment-btn">
                                                        <button @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Left -->

                                        <!-- Right -->
                                        <div class="col-xl-12 col-md-8 col-lg-5 _2coach_main_right">
                                            <div class="_2coach_title">
                                                <p class="_2coach_title_one">Health Score:</p>

                                                <p :class="((item.recentHealthScore) > 10)? '_2coach_title_two' : '_2coach_title_two _2coach_title_two_red'"> {{ item.recentHealthScore }}
                                                    
                                                <span>{{item.healthScore}}%</span>
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <!-- Right -->
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div class="mob-pagination">
                            <div style="text-align: center;padding: 20px 0px;" v-if="searchData.length>0">
                                <Page prev-text="Previous" next-text="Next"  :current="parseInt(pagination.page)" :total="pagination.total" @on-change="SearchByKey" :page-size="parseInt(pagination.perPage)" />
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
            <div class="_1reiew_box new-padding no-border _1reiew_box_new">
                <p class="_1reiew_box_title font-24">Tell us how can improve</p>

                <p class="_1reiew_con font-16">If you need help, Please <a href="">visit the help section</a> or contact us below</p>

                <textarea class="_1reiew_taxtarea new-mob-textarea" rows="5" v-model="support.text" placeholder="Your voice is important. Help us make it easier to find the coach you want"></textarea>
                <div class="new-fl-btn">
                    <button class="_1btn new-1btn" type="button" @click="submitSupport"  v-if="!isLoad">Submit</button>
                    <button class="_1btn new-1btn" type="button"  v-else disabled>Loading...</button>
                </div>
            </div>
            <div class="backtop mb-15">
                <p><a href="#topId" style="color:#fff !important;">Back to top</a></p>
            </div>
        </div>
        <Modal width="850px"  v-model="addNew.modal"  :closable='false' >
            <div class="sss">
                    <div class="">
                        <div class="bulid-section build-section-1" v-if="addNew.step == 1" >
                            <div class="build-section-title">
                                <h3>Build together</h3>
                                <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false" >
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
                                                        <input type="text" v-model="step1Form.schoolName" >
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">Coach name <span class="required">*</span></label>
                                                        <input type="text" v-model="step1Form.name" >
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">City <span class="required">*</span></label>
                                                        <input type="text" v-model="step1Form.city" >
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">Division <span class="required">*</span></label>
                                                        <select name="" id="" v-model="step1Form.division" >
                                                            <option value="Club/Travel">Club/Travel</option>
                                                            <option value="FL">FL</option>
                                                            <option value="High School">High School</option>
                                                            <option value="Junior College">Junior College</option>
                                                            <option value="MCLA">MCLA</option>
                                                            <option value="MO">MO</option>
                                                            <option value="NAIA">NAIA</option>
                                                            <option value="NCAA DI">NCAA DI</option>
                                                            <option value="NCAA DII">NCAA DII</option>
                                                            <option value="NCAA DIII">NCAA DIII</option>
                                                        </select>
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">State <span class="required">*</span></label>

                                                        <select name="" id="" v-model="step1Form.state" >
                                                            <option :value="item.state" v-for="(item,index) in getState" :key="index">{{item.name2}}</option>
                                                         
                                                        </select>
                                                        <!-- <input type="text" v-model="step1Form.state" > -->
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">Sport <span class="required">*</span> </label>
                                                        <select name="" id="" v-model="step1Form.sport" >
                                                            <option v-for="(item,index) in allSports" :key="index" :value="item.value">{{item.name}}</option>
                                                            
                                                        </select>
                                                    </div>
                                                </form>
                                                <div class="build-redirect" >
                                                    <p>Information submitted on this site is subject to the <nuxt-link to="/policy">Privacy Policy.</nuxt-link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="build-section-inner-bottom">
                                    <div class="build-cancel">
                                        <p>Cancel</p>
                                    </div>
                                    <div class="build-btn">
                                        <ul>
                                            <li><button>Back</button></li>
                                            <li class="go-btn"><button>Next</button></li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="bulid-section build-section-2"  v-if="addNew.step == 2">
                            <div class="build-section-title">
                                <h3>Build together</h3>
                                <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false" >
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
                                            <div class="build-right-form-inner" v-if="addNew.isReg " >
                                                <form action="#">
                                                    <div class="build-input">
                                                        <label for="">Your First name <span class="required">*</span></label>
                                                        <input type="text" v-model="step2Form.firstName" >
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">Your Last name <span class="required">*</span></label>
                                                        <input type="text" v-model="step2Form.lastName">
                                                    </div>
                                                    <div class="build-input full_input">
                                                        <label for="">Email <span class="required">*</span></label>
                                                        <input type="email" v-model="step2Form.email">
                                                    </div>
                                                    <!-- <div class="build-input">
                                                        <label for="">Division <span class="required">*</span></label>
                                                        <select name="" id="">
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                        </select>
                                                    </div> -->
                                                    <div class="build-input">
                                                        <label for="">Password <span class="required">*</span></label>
                                                        <input type="password" v-model="step2Form.password">
                                                    </div>
                                                    <div class="build-input">
                                                        <label for="">Re-enter password <span class="required">*</span></label>
                                                        <input type="password" v-model="step2Form.password_confirmation">
                                                    </div>
                                                    <!-- <div class="build-input">
                                                        <label for="">Sport </label>
                                                        <select name="" id="">
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                            <option value="one"></option>
                                                        </select>
                                                    </div> -->
                                                </form>
                                                <div class="build-redirect">
                                                    <p>Already have an account Please <a @click="addNew.isReg = false" > Login .</a></p>
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
                                                    <p>Don't have any account. Please <a @click="addNew.isReg = true" >Register</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="build-section-inner-bottom">
                                    <div class="build-cancel">
                                        <p>Cancel</p>
                                    </div>
                                    <div class="build-btn">
                                        <ul>
                                            <li class="go-btn"><button>Submit</button></li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="bulid-section build-section-2"  v-if="addNew.step == 3">
                            <div class="build-section-title">
                                <h3>Build together</h3>
                                <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false" >
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
                                                        <div v-if="onHover" >
                                                            <ul>
                                                                <li  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(1)" :class="(drating.index > 0)? drating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li  @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(2)" :class="(drating.index > 1)? drating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li  @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(3)" :class="(drating.index > 2)? drating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(4)" :class="(drating.index > 3)? drating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(5)" :class="(drating.index > 4)? drating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                            </ul>
                                                            <p>Select your rating</p>
                                                        </div>
                                                        <div v-else>
                                                            <ul>
                                                                <li @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(1)" :class="(oldrating.index > 0)? oldrating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(2)" :class="(oldrating.index > 1)? oldrating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(3)" :class="(oldrating.index > 2)? oldrating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(4)" :class="(oldrating.index > 3)? oldrating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
                                                                <li @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRatingV2(5)" :class="(oldrating.index > 4)? oldrating.class: ''" ><span    ><i class="fas fa-star"></i></span></li>
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

                                                         <div class="play-coach" style="padding-top: 10%;">
                                        <p
                                        style="font-size: 14px; font-weight: 100;font-family: CeraPro"
                                        >Do you actively play for this coach?</p>
                                        <div class="play-coach-input">
                                        <ul>
                                        <li>
                                        <input
                                        type="radio"
                                        id="coach1"
                                        v-model="step3Form.is_active"
                                        value="1"
                                        name="coach"
                                        />
                                        <label for="coach1">Yes</label>
                                        </li>
                                        <li>
                                        <input
                                        type="radio"
                                        id="coach2"
                                        v-model="step3Form.is_active"
                                        value="0"
                                        name="coach"
                                        />
                                        <label for="coach2">No</label>
                                        </li>
                                        </ul>
                                        </div>
                                        </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="build-section-inner-bottom">
                                    <div class="build-cancel">
                                        <p>Cancel</p>
                                    </div>
                                    <div class="build-btn">
                                        <ul>
                                            <li class="go-btn"><button>Submit</button></li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="bulid-section build-section-2"  v-if="addNew.step == 4">
                            <div class="build-section-title">
                                <h3>Build together</h3>
                            <div class="build-close" style="cursor:pointer;" @click="addNew.modal = false" >
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
                                <!-- <div class="build-section-inner-bottom">
                                    <div class="build-cancel">
                                        <p>Cancel</p>
                                    </div>
                                    <div class="build-btn">
                                        <ul>
                                            <li class="go-btn"><button>Continue Browsing</button></li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
            </div>
            <div class="_footer_noCoach" >
                <div v-if="addNew.step == 1" class="mFooter" >
                    <p class="mCancel"  @click="addNew.modal=false">Cancel</p>
                        
                        <Button class="mNext" @click="addNewItem">Next</Button>
                </div>
                <div v-if="addNew.step == 2" class="mFooter" >
                    <p class="mCancel"  @click="addNew.modal=false">Cancel</p>
                        <Button  class="mBack" @click="addNew.modal=false">Back</Button>

                        <Button v-if="addNew.isReg"  class="mNext" @click="register">Next</Button>
                        <Button v-else class="mNext" @click="login">Next</Button>
                </div>
                    
                <div v-if="addNew.step == 3" class="mFooter"  >
                        <p class="mCancel"  @click="addNew.modal=false">Cancel</p>
                        
                        <Button class="mNext" @click="reviewSubmit">Submit</Button>
                </div>
                    
                <div v-if="addNew.step == 4" class="mFooter"  >
                    
                        <Button class="mNext" @click="addNew.modal=false">Continue Browsing</Button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex' 

import { Hooper, Slide ,Pagination as HooperPagination ,Navigation as HooperNavigation} from 'hooper';
export default {
    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
    },
    data(){
        return{
            isonSee:false,
            editHooperSetting: {
                breakpoints: {
                    700: {
                        itemsToShow: 2.3
                    },

                    550: {
                        itemsToShow: 2.1
                    },

                    450: {
                        itemsToShow: 1.6
                    },

                    350: {
                        itemsToShow: 1.3
                    },

                    300: {
                        itemsToShow: 1.2
                    },
                }
            },
            choiceHooperSetting: {
                breakpoints: {
                    700: {
                        itemsToShow: 3.3
                    },

                    600: {
                        itemsToShow: 3.1
                    },

                    500: {
                        itemsToShow: 2.5
                    },

                    400: {
                        itemsToShow: 2.1
                    },

                    349: {
                        itemsToShow: 1.8
                    },

                    300: {
                        itemsToShow: 1.5
                    },
                }
            },
            searchOn:true,
            ratedpost:{},
            tsports:'',
            mostratedpost:[],
            mobileScreen:false,
            isMobileMenu:true,
            showMenuButton:false,
            menuClass:'new-flank-sidebar',
            showStr:'',
           
            page:1,
            flag:1,
            price:'',
            attribute:'averageHealthy',
            sstr:1,
            splace:1,
            sports:[],
            
            allSports:[],
            filterFlag:false,
            
            iam:false,
            showCurrentPage:0,
            sort:0,
            isLoading:true,
            
            dropName:'',
          
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
            onHover: false,
            onTest: false,
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
                review_type:'school',
                content:"",
                is_active:0,
                rating:'',
            },
            newCoach:{},
             formData:{
                email:'',
                password:'',
                remember: false,
            },
            support:{
                text:''
            },
            isLoad:false,
            str2:''

        }
    },
    methods:{
        sortBySelect(e){
             this.SearchByKey()
        },
        // menuMethod(){
        //     this.support.text = ''
        //     this.s("Thank you for your response ")
        // },
        async submitSupport(){
            // support.text
            if(!this.support.text || this.support.text=='' || this.support.text.trim()==''){
               return this.e("please write your messege first!!")
            }
            this.isLoad = true
            const res = await this.callApi('post', '/app/sendSupportMessege', this.support)
             if(res.status == 200 || res.status ==204){
                     this.s("Thank you for your response ")
                     this.isLoad = false
                    this.support.text = ''
             }
             else if(res.status==403){
                 his.isLoad = false
                return this.e("Given Data Is Ivalid")
             }
            else{
                his.isLoad = false
                this.swr();
            }

           
        },
        changeDataHover(index){
            console.log('changeDataHover')
            this.drating.index = index
            this.onHover = true
            // return
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
        changeOldRating(index){
            this.$store.commit('setStr', '')
             this.attribute=''
             this.tsports=''
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

             this.SearchByKey()

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
        async  addNewItem(){
            if(this.step1Form.schoolName == '') return this.i("All Fields are required!")
            if(this.step1Form.city == '') return this.i("All Fields are required!")
            if(this.step1Form.division == '') return this.i("All Fields are required!")
            if(this.step1Form.name == '') return this.i("All Fields are required!")
            if(this.step1Form.sport == '') return this.i("All Fields are required!")
            if(this.step1Form.state == '') return this.i("All Fields are required!")
            const res = await this.callApi('post','/coaches',this.step1Form)

            if(res.status == 200){
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

            const res = await this.callApi('post','/app/storeSchoolCoachTeampReview',this.step3Form)
            // const res = await this.callApi('post','/app/storeSchoolCoachReview',this.step3Form)
            if(res.status===200){
                this.s('Review posted successfully!')
                this.addNew.step = 4
            }
            else{
                this.swr();
            }
           
            
        },
        
        changeDataHoverLeave(){
            this.onHover = false
            
        },
        chnageType(item , division=''){
            
            // this.i("dskkfd")
            this.$store.commit('setStr', '')
            this.$store.commit('setUrl', "new value")
            // this.searchOn=false
            this.showStr=''
            this.attribute=''
            this.$store.commit('setPageOption', item )
            this.$store.commit('setDiv', division )
            // this.$router.push(`/coach_search?pageOption=item&div=division`)
          
            this.SearchByKey()
        },
        changePriceType(item){
            this.price = item
            this.SearchByKey()
        },
        changeDivType(item){
            if(item != 'clear'){
                this.$store.commit('setDiv', item )
                
            }
            else {
                this.$store.commit('setDiv', '' )
            }
            this.SearchByKey()
        },
        changesSortType(item){
            this.sort = item
            this.changeSortName(item)
            this.SearchByKey()
        },
        
        changeSortName(item){
            if(item == 'normal')
                this.dropName = 'Recomended' 
            else if(item == 'most')
                this.dropName = 'Most Reviewed'
            else if(item == 'rated')
                this.dropName = 'Highest Rated'
            else if(item == 'Worst')
                this.dropName = 'Worst Rated'
        },
        async Healthiestcoaches(item , division='',att){
            this.$store.commit('setPageOption', item )
            this.$store.commit('setDiv', division )
            this.attribute = att
            this.SearchByKey()
        },
        async AttributesSearchByKey(){
            this.$store.commit('setStr', '')
            this.sort = 0
            this.searchOn = false
            this.oldrating=[]
            this.tsports=''
            this.sports = [];
            this.SearchByKey()
        },
        async SpoprtsSearchByKey(key){

            this.$store.commit('setStr', '')
             this.searchOn = false
            //  this.showStr = ''
             this.oldrating=[]
            //  this.sports = [];
             this.sports.push(this.tsports);
            // this.$router.push(`/coach_search?pageOption=item&div=division`) 
            this.SearchByKey()
        },
        async SearchByKey(page=1){
          
            // this.showStr=''

            // if(this.pageOption != 'product'){
            //     if(this.str == '' ) return this.i("Please Write a name")
            //     if(this.place == '') return this.i("Please Write a City")
            // }
            // console.log("SearchByKey")
            if(!this.searchOn){
                this.showStr = ''
               this.$store.commit('setStr', '')
            }
            
          

          
            const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.str}&str2=${this.str2}&pageOption=${this.pageOption}&sort=${this.sort}&div=${this.div}&rate=${this.oldrating.index}&sports=${this.sports}&attribute=${this.attribute}&page=${page}`)
            if(res.status === 200){
                if(res.data && res.data.mainData && res.data.mainData.data && res.data.mainData.data.length>0){

                    if(this.pageOption == 'school') this.schoolAssignRateTExt(res.data.mainData.data)
                    else this.coachAssignRateText(res.data.mainData.data)
                    this.coachAssignRateText(res.data.similarData)
                }
                if(res.data && res.data.mainData && res.data.mainData.data && res.data.mainData.data.length>0){
                this.$store.commit('setSearchData', res.data.mainData.data)
                delete res.data.mainData.data
                this.$store.commit('setPagination', res.data.mainData )
                }
            //    if(res.data.similarData.length>0)
                this.$store.commit('setSimilar', res.data.similarData)
                this.sstr = this.str
                this.showStr = this.str
                this.splace = this.place
                this.onTest = true
                this.showCurrentPage = (Math.ceil((this.pagination.total)/(this.pagination.perPage)))
                this.$store.commit('setIsMobileSideBar', false )
            }
            else{
                this.swr();
            }
            
        },
        
        
        filterFlagAction(){
            this.filterFlag = (this.filterFlag)? false : true
        },
       

    },
    async  created(){
        // this.i("okk")
       
        let tempPlace = (this.$route.query.place)? this.$route.query.place : ''
        
        this.attribute = (this.$route.query.attribute)? this.$route.query.attribute : ''
        this.$store.commit('setPlace', tempPlace )
        let tempStr = (this.$route.query.str)? this.$route.query.str :''
        this.$store.commit('setStr', tempStr )
        let tempPageOption = (this.$route.query.pageOption)? this.$route.query.pageOption :'coach' 
        this.$store.commit('setPageOption', tempPageOption )

        this.sort = (this.$route.query.sort)? this.$route.query.sort :'normal'
        this.oldrating.index = (this.$route.query.rate)? this.$route.query.rate :''
        
        let div = (this.$route.query.div)? this.$route.query.div :''
        this.$store.commit('setDiv', div )
        
        this.showStr = this.str
        this.splace = this.place
        let sportss = (this.$route.query.sports)? this.$route.query.sports :''
        this.str2 = (this.$route.query.str2)? this.$route.query.str2 :''
        if(sportss=="Women's Soccer"){

            this.sports.push(sportss)
            this.sports.push("Men's Soccer")
        }
        else if(sportss=="Men's Soccer"){

            this.sports.push(sportss)
            this.sports.push("Women's Soccer")
        }
        else{
            this.sports.push(sportss)
        }
        await this.SearchByKey()
        
        const [ res, res1,res2] = await Promise.all([
            this.callApi("get", `/app/getAllSports`),
            this.callApi("get", `/app/getSchoolCoachByhighRated`),
            this.callApi("get", `/app/getSchoolCoachByMostRated`),
        
        ]);
        if(res.status == 200 && res1.status == 200 && res2.status == 200){

            this.allSports = res.data
            this.ratedpost = res1.data
            this.mostratedpost = res2.data
            this.coachAssignRateText(this.ratedpost)
            this.coachAssignRateText(this.mostratedpost)
        }
       

        this.sort = "Sort By"
        // this. showCurrentPage = (Math.ceil(this.pagination.total)/(this.pagination.perPage)-this.pagination.page)

    },

     watch: { 

         'str':function(newValue, oldValue) {

          if(newValue!=''){
               this.oldrating=[]
                this.tsports=''
                this.sports = [];
                this.attribute =''
          }
      
       
      }
     },
    mounted(){
       
         if(window.innerWidth < 1050){
            this.menuClass = 'new-flank-sidebar sidebar-mobile'
            this.isMobileMenu = false
            this.showMenuButton = true
        }
        if(window.innerWidth < 1050){
            this.mobileScreen = true
        }
    }

}
</script>

<style>
.ivu-modal-body {
    padding: 0px !important;
    font-size: 12px;
    line-height: 1.5;
}

.active_ON{
    background: #0096d8 !important;
    color: #fff !important;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.mob-pagination .ivu-page-next, .mob-pagination .ivu-page-prev{
    background-color: transparent !important;
}

</style>
