<template>
    <div class="pt-120">
        <section class="rd second-section bg bg-border-bottom find-second-section">
            <div class="container">
                <div class="section-content"> 
                    <div class="find-page-title">
                        <h2>Search Result for <strong>{{sstr}}</strong><span v-if="place != ''" > in {{splace}}</span></h2>
                        <h3>Showing {{pagination.page}} of {{( showCurrentPage)}}</h3>
                    </div>
                    <div class="find-page-nav">
                        <!-- <ul class="filter">
                            <li class="filter-list"><a href="" class="filter-action"><span><i class="far fa-clock"></i></span> Open Now</a>
                                <ul class="filter-list-dropdown">
                                    <li><a href="">Open now</a></li>
                                    <li><a href="">Open now</a></li>
                                    <li><a href="">Open now</a></li>
                                </ul>
                            </li>
                            <li class="filter-list" :class="(filterFlag)? 'active_ON': ''"  @click="filterFlagAction" ><span><i class="fas fa-random"></i></span> All Filters <span class="filter-tag tag-one">Show All Filters</span></li>
                            <li class="filter-list" v-if="pageOption == 'product'" >
                                <ul class="filering-tag">
                                    <li :class="(price>0 && price<=9 )? 'active_ON' : ''" @click="changePriceType(9)" >$ <span class="filter-tag tag-two">Inexpensive</span></li>
                                    <li :class="(price>9 && price<=99 )? 'active_ON' : ''" @click="changePriceType(99)">$$ <span class="filter-tag tag-three">Moderate</span></li>
                                    <li :class="(price>99 && price<=999 )? 'active_ON' : ''" @click="changePriceType(999)">$$$ <span class="filter-tag tag-four">Pricey</span></li>
                                    <li :class="(price>999 && price<=9999 )? 'active_ON' : ''" @click="changePriceType(9999)">$$$$ <span class="filter-tag tag-five">Pricey</span></li>
                                </ul>
                            </li>
                             <li class="filter-list"><span><i class="far fa-clock"></i></span> Open Now <span class="filter-tag tag-six">Find all business that are open now</span></li>
                            <li class="filter-list"><span><i class="far fa-clock"></i></span> Delivery <span class="filter-tag tag-seven">Restaurents that offer ordering on Flank</span></li>
                            <li class="filter-list"><span><i class="far fa-clock"></i></span> Takeout <span class="filter-tag tag-eight">Restaurents that offer ordering on Flank</span></li>
                            <li class="filter-list"><span><i class="far fa-clock"></i></span> Reservation <span class="filter-tag tag-nine">Restaurents that offer reservation on Flank</span></li>
                            <li class="filter-list"><span><i class="far fa-clock"></i></span> Cash Back <span class="filter-tag tag-ten">Restaurents that let you join the waitlist remotely on Flank</span></li>
                        </ul> -->
                        <h3>Search Profile of <span><i class="fas fa-chevron-down"></i></span></h3>
                        <ul class="filter">
                            
                            <li class="filter-list" @click="chnageType('legend')"><a  class="filter-action" :class="(pageOptinoInfo == 'legend')? 'active_ON': ''" >Local Legend </a></li>
                            <li class="filter-list" @click="chnageType('school')"><a  class="filter-action" :class="(pageOptinoInfo == 'school')? 'active_ON': ''" >Schools </a></li>
                            <li class="filter-list" @click="chnageType('coach')"><a  class="filter-action"  :class="(pageOptinoInfo == 'coach')? 'active_ON': ''" >School Coaches </a></li>
                            <li class="filter-list" @click="chnageType('product')"><a  class="filter-action" :class="(pageOptinoInfo == 'product')? 'active_ON': ''"  >Products </a></li>
                        </ul>
                        <h3>Filter <span><i class="fas fa-chevron-down"></i></span></h3>
                        <ul class="filter">
                           
                            <li class="filter-list" @click="changesSortType('normal')"><a  class="filter-action" :class="(sort == 'normal')? 'active_ON': ''" >Recomended</a></li>
                            <li class="filter-list" @click="changesSortType('most')"><a  class="filter-action" :class="(sort == 'most')? 'active_ON': ''" >Most Reviewed</a></li>
                            <li class="filter-list" @click="changesSortType('rated')"><a  class="filter-action"  :class="(sort == 'rated')? 'active_ON': ''" >Highest Rated</a></li>
                            <li class="filter-list" @click="changesSortType('Worst')"><a  class="filter-action" :class="(sort == 'Worst')? 'active_ON': ''"  >Worst Rated</a></li>
                            <template v-if="pageOptinoInfo == 'product'" >
                                <li class="filter-list" @click="changePriceType(9)"><a  class="filter-action" :class="(price>0 && price<=9 )? 'active_ON' : ''"  >$</a></li>
                                <li class="filter-list" @click="changePriceType(99)"><a  class="filter-action" :class="(price>9 && price<=99 )? 'active_ON' : ''"  >$$</a></li>
                                <li class="filter-list" @click="changePriceType(999)"><a  class="filter-action" :class="(price>99 && price<=999 )? 'active_ON' : ''"  >$$$</a></li>
                                <li class="filter-list" @click="changePriceType(9999)"><a  class="filter-action" :class="(price>999 && price<=9999 )? 'active_ON' : ''"  >$$$$</a></li>
                            </template>
                        </ul>
                        <h3  v-if="pageOptinoInfo == 'coach'">Division <span><i class="fas fa-chevron-down"></i></span></h3>
                        <ul class="filter"  v-if="pageOptinoInfo == 'coach'">
                            <template >
                                <li class="filter-list" @click="changeDivType('Junior College')"><a  class="filter-action" :class="(div == 'Junior College')? 'active_ON': ''"  >Junior College</a></li>
                                <li class="filter-list" @click="changeDivType('High School')"><a  class="filter-action" :class="(div == 'High School')? 'active_ON': ''"  >Hsc</a></li>
                                <li class="filter-list" @click="changeDivType('MCLA')"><a  class="filter-action" :class="(div == 'MCLA')? 'active_ON': ''"  >MCLA</a></li>
                                <li class="filter-list" @click="changeDivType('Club/Travel')"><a  class="filter-action" :class="(div == 'Club/Travel')? 'active_ON': ''"  >Club/Travel</a></li>
                                <li class="filter-list" @click="changeDivType('NAIA')"><a  class="filter-action" :class="(div == 'NAIA')? 'active_ON': ''"  >NAIA</a></li>
                                <li class="filter-list" @click="changeDivType('FL')"><a  class="filter-action" :class="(div == 'FL')? 'active_ON': ''"  >FL</a></li>
                                <li class="filter-list" @click="changeDivType('MO')"><a  class="filter-action" :class="(div == 'MO')? 'active_ON': ''"  >MO</a></li>
                                <li class="filter-list" @click="changeDivType('NCAA DI')"><a  class="filter-action" :class="(div == 'NCAA DI')? 'active_ON': ''"  >NCAA DI</a></li>
                                <li class="filter-list" @click="changeDivType('NCAA DII')"><a  class="filter-action" :class="(div == 'NCAA DII')? 'active_ON': ''"  >NCAA DII</a></li>
                                <li class="filter-list" @click="changeDivType('NCAA DIII')"><a  class="filter-action" :class="(div == 'NCAA DIII')? 'active_ON': ''"  >NCAA DIII</a></li>
                                <li class="filter-list" @click="changeDivType('clear')"><a  class="filter-action"   >Clear</a></li>
                            </template>
                        </ul>
                        <div class="filter-content" v-if="filterFlag" >
                            <div class="filter-content-inner">
                                
                                <!-- <div class="filter-item">
                                    <div class="filter-item-title">
                                        <h3>Distance</h3>
                                    </div>
                                    <ul class="filter-item-list">
                                        <li class="active"><a href="">Bird's-eye View</a></li>
                                        <li><a href="">Driving (5 mi.)</a></li>
                                        <li><a href="">Biking (2 mi.)</a></li>
                                        <li><a href="">Walking (1 mi.)</a></li>
                                        <li><a href="">Within 4 blocks</a></li>
                                    </ul>
                                </div> -->
                                <!-- <div class="filter-item">
                                    <div class="filter-item-title">
                                        <h3>Price</h3>
                                    </div>
                                    <ul class="filter-item-list">
                                        <li><input type="checkbox" id="check5"><label for="check5">$</label></li>
                                        <li><input type="checkbox" id="check6"><label for="check6">$$</label></li>
                                        <li><input type="checkbox" id="check7"><label for="check7">$$$</label></li>
                                        <li><input type="checkbox" id="check8"><label for="check8">$$$$</label></li>
                                    </ul>
                                </div> -->
                                <!-- <div class="filter-item">
                                    <div class="filter-item-title">
                                        <h3>Features</h3>
                                    </div>
                                    <ul class="filter-item-list">
                                        <li><input type="checkbox" id="check9"><label for="check9"><span><i class="fas fa-motorcycle"></i></span>Delivery</label></li>
                                        <li><input type="checkbox" id="check10"><label for="check10"><span><i class="fas fa-lock"></i></span>Takeout</label></li>
                                        <li><input type="checkbox" id="check11"><label for="check11"><span><i class="fas fa-stopwatch"></i></span>Waitlist</label></li>
                                        <li><input type="checkbox" id="check12"><label for="check12"><span class="rotated-green"><i class="fas fa-tag"></i></span>Offering a Deal</label></li>
                                        <li><a href="">More Features</a></li>
                                    </ul>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="third-section find-search-third-section"  >
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-8 col-sm-9">
                            <div class="sponsor-part" v-if="!isLoading && searchData.length>0" >
                                <div class="sponsor-title">
                                    <h2>All Results</h2>
                                </div>
                               
                                <div class="sponsor-all-list" v-if="pageOptinoInfo == 'legend'">
                                    <div class="sponsor-media sponsor-item" v-for="(item,index) in searchData" :key="index" >
                                        <div class="sponsor-media-left">
                                            <figure>
                                                <img :src="item.img" alt="">
                                            </figure>
                                            <!-- <div class="sponsor-media-carousel">
                                                <span><i class="fas fa-chevron-left"></i></span>
                                                <span><i class="fas fa-chevron-right"></i></span>
                                            </div> -->
                                        </div>
                                        <div class="sponsor-media-body">
                                            <div class="body-part-one">
                                                <h3 v-if="pageOptinoInfo=='legend'" > <a @click="$router.push(`profile/${item.id}`)" >{{item.name}}</a></h3>
                                                <div class="badge-review">
                                                    <p>
                                                        <!-- <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>-->
                                                       <span :class="(item.avg_rating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avg_rating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avg_rating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avg_rating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avg_rating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <small>{{item.__meta__.allreview}} reviews</small></p>
                                                </div>
                                                <div class="dir-link">
                                                    <p>$ &nbsp; • &nbsp; <a href="">Cafes</a>, <a href="">Delis</a></p>
                                                </div>
                                            </div>
                                            <div class="body-part-two">
                                                <p>{{item.phone}}</p>
                                                <p></p>
                                                <p>{{item.address}}</p>
                                            </div>
                                            <div class="body-para">
                                                <h4><span><i class="fas fa-utensils"></i></span> &nbsp; Popular for its <strong>Veggie Combo</strong></h4>
                                                <p>“I had not visited this little hole-in-the-wall sandwich shop/cafe in about four years and did not know until today that there had been a change in ownership back in 2014. WOW! What…” <a href="">read more</a></p>
                                                <!-- <div class="order-card">
                                                    <p>Offers takeout and delivery</p>
                                                    <button>Start Order</button>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="paginationCount pagination_mark">
                                        <!-- <ul>
                                            <li class="active"><a href="">1</a></li>
                                            <li><a href="">2</a></li>
                                            <li><a href="">3</a></li>
                                            <li><a href="">4</a></li>
                                            <li><a href="">5</a></li>
                                            <li><a href="">Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                        </ul> -->
                                         <div >
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="paginateDataInfo($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                </div>
                                <div class="sponsor-all-list" v-if="pageOptinoInfo == 'product'">
                                    <div class="sponsor-media sponsor-item" v-for="(item,index) in searchData" :key="index" >
                                        <div class="sponsor-media-left">
                                            <figure>
                                                <img :src="item.img" alt="">
                                            </figure>
                                            <!-- <div class="sponsor-media-carousel">
                                                <span><i class="fas fa-chevron-left"></i></span>
                                                <span><i class="fas fa-chevron-right"></i></span>
                                            </div> -->
                                        </div>
                                        <div class="sponsor-media-body">
                                            <div class="body-part-one">
                                                <h3 v-if="pageOptinoInfo =='product'" > <a @click="$router.push(`product/${item.id}`)" >{{item.name}}</a></h3>
                                                <div class="badge-review">
                                                    <p>
                                                        <!-- <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>-->
                                                        <span :class="(item.avgRating.averageRating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <small>{{item.__meta__.allreview}} reviews</small></p>
                                                </div>
                                                <!-- <div class="dir-link">
                                                    <p>$ &nbsp; • &nbsp; <a href="">Cafes</a>, <a href="">Delis</a></p>
                                                </div> -->
                                            </div>
                                            <div class="body-part-two">
                                                <p>$ {{item.price}}</p>
                                                <p></p>
                                                <p>{{item.address}}</p>
                                            </div>
                                            <div class="body-para">
                                                <h4><span><i class="fas fa-utensils"></i></span> &nbsp; Popular for its <strong>{{item.name}}</strong></h4>
                                                <p>{{item.description}}</p>
                                                <!-- <div class="order-card">
                                                    <p>Offers takeout and delivery</p>
                                                    <button>Start Order</button>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="paginationCount pagination_mark">
                                        <!-- <ul>
                                            <li class="active"><a href="">1</a></li>
                                            <li><a href="">2</a></li>
                                            <li><a href="">3</a></li>
                                            <li><a href="">4</a></li>
                                            <li><a href="">5</a></li>
                                            <li><a href="">Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                        </ul> -->
                                         <div >
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="paginateDataInfo($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                </div>
                                <div class="sponsor-all-list" v-if="pageOptinoInfo == 'coach'">
                                    <div class="sponsor-media sponsor-item" v-for="(item,index) in searchData" :key="index"  v-if="item.school">
                                        <div class="sponsor-media-left">
                                            <figure >
                                                <img :src="item.school.logo" alt="">
                                            </figure>
                                        </div>
                                        <div class="sponsor-media-body">
                                            <div class="body-part-one">
                                                <h3 class="pointer_like" @click="$router.push(`/school_coach/${item.id}`)" >{{item.name}}</h3>
                                                <div class="badge-review">
                                                    <p>
                                                        <!-- <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>-->
                                                        <span :class="(item.avgRating.averageRating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <small>{{item.__meta__.allreview}} reviews</small></p>
                                                </div>
                                                <div class="dir-link">
                                                    <p>
                                                        <span></span> <a @click="$router.push(`school/${item.id}`)" >{{item.school.schoolName}} {{item.school.sport}} </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="body-part-two">
                                                <p>{{item.school.sport}}</p>
                                                <p></p>
                                                <p>
                                                    {{item.school.city}}
                                                    {{(item.school.state)? ' ,'+item.school.state : '' }}
                                                    {{(item.school.division)? ' ,'+item.school.division : '' }}
                                                </p>
                                            </div>
                                            <div class="body-para">
                                                <div class="order-card">
                                                   <h4><span><i class="fas fa-utensils"></i></span> &nbsp; Popular for its <strong>Veggie Combo</strong></h4>
                                                    <p>“I had not visited this little hole-in-the-wall sandwich shop/cafe in about four years and did not know until today that there had been a change in ownership back in 2014. WOW! What…” <a href="">read more</a></p>
                                                    <div class="order-card">
                                                        <button class='text-center' @click="$router.push(`/scoach_review/${item.id}`)" >Write a Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="paginationCount pagination_mark">
                                        <!-- <ul>
                                            <li class="active"><a href="">1</a></li>
                                            <li><a href="">2</a></li>
                                            <li><a href="">3</a></li>
                                            <li><a href="">4</a></li>
                                            <li><a href="">5</a></li>
                                            <li><a href="">Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                        </ul> -->
                                         <div >
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="paginateDataInfo($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                </div>
                                <div class="sponsor-all-list" v-if="pageOptinoInfo == 'school'">
                                    <div class="sponsor-media sponsor-item" v-for="(item,index) in searchData" :key="index" >
                                        <div class="sponsor-media-left">
                                            <figure>
                                                <img :src="item.logo" alt="">
                                            </figure>
                                        </div>
                                        <div class="sponsor-media-body">
                                            <div class="body-part-one">
                                                <h3 > <a @click="$router.push(`school/${item.id}`)" > {{item.schoolName}} {{item.sport}} </a></h3>
                                                <div class="badge-review">
                                                    <p>
                                                        <!-- <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>
                                                        <span class="rating-bg high"><i class="fas fa-star"></i></span>-->
                                                        <span :class="(item.avgRating.averageRating>0)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>1)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>2)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>3)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(item.avgRating.averageRating>4)? ' rating-bg high' : ''"><i class="fas fa-star"></i></span>
                                                        <small>{{item.__meta__.allreview}} reviews</small></p>
                                                </div>
                                                <div class="dir-link">
                                                    <p>$ &nbsp; • &nbsp; <a href="">Cafes</a>, <a href="">Delis</a></p>
                                                </div>
                                            </div>
                                            <div class="body-part-two">
                                                <p>{{item.phone}}</p>
                                                <p></p>
                                                <p>
                                                    {{item.city}}
                                                    {{(item.state)? ' ,'+item.state : '' }}
                                                    {{(item.division)? ' ,'+item.division : '' }}
                                                </p>
                                            </div>
                                            <div class="body-para">
                                                <h4><span><i class="fas fa-utensils"></i></span> &nbsp; Popular for its <strong>Veggie Combo</strong></h4>
                                                <p>“I had not visited this little hole-in-the-wall sandwich shop/cafe in about four years and did not know until today that there had been a change in ownership back in 2014. WOW! What…” <a href="">read more</a></p>
                                                <!-- <div class="order-card">
                                                    <p>Offers takeout and delivery</p>
                                                    <button>Start Order</button>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="paginationCount pagination_mark">
                                        <!-- <ul>
                                            <li class="active"><a href="">1</a></li>
                                            <li><a href="">2</a></li>
                                            <li><a href="">3</a></li>
                                            <li><a href="">4</a></li>
                                            <li><a href="">5</a></li>
                                            <li><a href="">Next&nbsp;<i class="fas fa-chevron-right"></i></a></li>
                                        </ul> -->
                                         <div >
                                            <Page :current="pagination.page" :total="pagination.total" @on-change="paginateDataInfo($event)" :page-size="pagination.perPage" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="isLoading" >
                                <div class="sponsor-title">
                                     <div class="sponsor-media sponsor-item">
                                    <div class="sponsor-media-left animated-img">
                                        <figure></figure>
                                    </div>
                                    <div class="sponsor-media-body">
                                        <div class="body-part-one">
                                            <div class="text-one"></div>
                                            <div class="text-two"></div>
                                            <div class="text-three"></div>
                                        </div>
                                        <div class="body-part-two">
                                            <div class="text-four"></div>
                                            <div class="text-five"></div>
                                        </div>
                                        <div class="body-para">
                                            <div class="text-six"></div>
                                            <div class="text-seven"></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="sponsor-title">
                                     <div class="sponsor-media sponsor-item">
                                    <div class="sponsor-media-left animated-img">
                                        <figure></figure>
                                    </div>
                                    <div class="sponsor-media-body">
                                        <div class="body-part-one">
                                            <div class="text-one"></div>
                                            <div class="text-two"></div>
                                            <div class="text-three"></div>
                                        </div>
                                        <div class="body-part-two">
                                            <div class="text-four"></div>
                                            <div class="text-five"></div>
                                        </div>
                                        <div class="body-para">
                                            <div class="text-six"></div>
                                            <div class="text-seven"></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="sponsor-title">
                                    <div class="sponsor-title">
                                     <div class="sponsor-media sponsor-item">
                                    
                                    <div class="sponsor-media-body">
                                        
                                        <div class="body-para">
                                            <div class="text-six_extra"><h3  style="padding: 12px 22px;">We couldn't find anything.....</h3></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                   
                                </div>
                            </div>
                            <div class="city-related-topic">
                                <div class="inner-title">
                                    <h3>Related with topics</h3>
                                </div>
                                <div class="topic-media">
                                    <div class="topic-media-left">
                                        <figure>
                                            <img src="/image/60s.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="topic-media-body">
                                        <h3><a href="">Restaurents</a></h3>
                                        <p>Restaurants to try in san fran? Any idea?</p>
                                    </div>
                                </div>
                                <div class="topic-media">
                                    <div class="topic-media-left">
                                        <figure>
                                            <img src="/image/60s.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="topic-media-body">
                                        <h3><a href="">Restaurents</a></h3>
                                        <p>I am going to the bay brea in a month, spending a lot of time in SF. ANy reccomendations for restaurants and things to do?</p>
                                    </div>
                                </div>
                                <p><a href="">More Topics</a></p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-3">
                            <div class="partner-website-add">
                                <div class="partner-website-link">
                                    <div class="website-link">
                                        <p class="link-partner"><img src="/image/faviconV2.png" alt=""> <a href="" title="bubbagump.com">bubbagump.com</a> ▼+1 415-781-4867</p>
                                        <h3><a href="">Bubba Gump San Francisco - Seafood Restaurant</a></h3>
                                        <p class="link-det"><span>Ad</span>  Enjoy southern-style seafood, outdoor seating, weekday HH and more. View menu. Fun For All Ages. National Fried Shrimp Day. Happy Hour Specials. Easter w/ Shrimp Louie. Amenities: Kid-Friendly <strong>Restaurant</strong>, Host Parties & Events, Fun Retail Shop.</p>
                                        <p class="addre">201 3rd St #100, San Francisco, CA</p>
                                        <button><span><i class="fas fa-arrow-right"></i></span> <a href="">Visit Website</a></button>
                                    </div>
                                    <div class="website-link">
                                        <p class="link-partner"><img src="/image/faviconV2.png" alt=""> <a href="" title="bubbagump.com">bubbagump.com</a> ▼+1 415-781-4867</p>
                                        <h3><a href="">Bubba Gump San Francisco - Seafood Restaurant</a></h3>
                                        <p class="link-det"><span>Ad</span>  Enjoy southern-style seafood, outdoor seating, weekday HH and more. View menu. Fun For All Ages. National Fried Shrimp Day. Happy Hour Specials. Easter w/ Shrimp Louie. Amenities: Kid-Friendly <strong>Restaurant</strong>, Host Parties & Events, Fun Retail Shop.</p>
                                        <p class="addre">201 3rd St #100, San Francisco, CA</p>
                                        <button><span><i class="fas fa-arrow-right"></i></span> <a href="">Visit Website</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="missing-box">
                                <h3>Not here? Tell us what we're missing.</h3>
                                <p class="mt-5">If the business you're looking for isn't here, add it!</p>
                                <button class="mt-5">Add a business</button>
                                <hr>
                                <p>Got search feedback? <a href="">Help us improve.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            str:'',
            place:'',
            page:1,
            flag:1,
            price:'',
            sstr:1,
            splace:1,
            filterFlag:false,
            pageOption: 'legend',
            iam:false,
            showCurrentPage:0,
            sort:'normal',
            isLoading:true,
            dropName:'',
            div:'',

        }
    },
    methods:{
        chnageType(item){
            this.pageOption = item
            this.SearchByKey()
        },
        changePriceType(item){
            this.price = item
            this.SearchByKey()
        },
        changeDivType(item){
            if(item != 'clear'){
                this.div = item
            }
            else {
                this.div = ''
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
        async SearchByKey(){

            const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.str}&pageOption=${this.pageOption}&price=${this.price}&sort=${this.sort}&div=${this.div}`)
            if(res.status === 200){
                this.$store.commit('setPageOptino', this.pageOption )
                this.$store.commit('setSearchData', res.data.data)
                delete res.data.data
                this.$store.commit('setPagination', res.data )
                
                this.sstr = this.str
                this.splace = this.place
                this.showCurrentPage = (Math.ceil((this.pagination.total)/(this.pagination.perPage)))
                this.isLoading = false
            }
            else{
                this.swr();
                this.isLoading = false
            }
        },
        async paginateDataInfo(e){
            this.page = e
             const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.str}&page=${this.page}&pageOption=${this.pageOption}&price=${this.price}&sort=${this.sort}`)
            if(res.status === 200){
                 this.$store.commit('setPageOptino', this.pageOption )
                this.$store.commit('setSearchData', res.data.data)
                delete res.data.data
                this.$store.commit('setPagination', res.data )
                this.sstr = this.str
                this.splace = this.place
                this.showCurrentPage = (Math.ceil((this.pagination.total)/(this.pagination.perPage)))
                this.isLoading = false
            }
            else{
                this.swr();
                this.isLoading = false
            }
        },
        filterFlagAction(){
            this.filterFlag = (this.filterFlag)? false : true
        }

    },
//      async asyncData({app, store,redirect, params,query}){
//         try {
//             let
//             let {data} = await app.$axios.get(`/app/SearchData?place=${query.place}&str=${query.str}&pageOption=legend`)
          
//             return{
//                 searchData : data.data,
//                 pagination : data,
               

//             }
// 		}catch (error) {
//             return redirect('/')
// 		}
//    },
    computed: {
        ...mapGetters({
        searchData: 'getSearchData',
        pagination: 'getPagination',
        pageOptinoInfo: 'getPageOptino'
        })
    },
   async  created(){
       
        this.place = (this.$route.query.place)? this.$route.query.place : ''
        this.str = (this.$route.query.str)? this.$route.query.str :''
        this.pageOption = (this.$route.query.pageOption)? this.$route.query.pageOption :'legend'
        this.sort = (this.$route.query.sort)? this.$route.query.sort :'normal'
        this.div = (this.$route.query.div)? this.$route.query.div :''
       

        this.changeSortName(this.sort)
        
        await this.SearchByKey()

        this.isLoading = false
        // this. showCurrentPage = (Math.ceil(this.pagination.total)/(this.pagination.perPage)-this.pagination.page)

    }

}
</script>

<style>
.active_ON{
    background: #0096d8 !important;
    color: #fff !important;
}
.pagination_mark{
        text-align: center;
}
.pointer_like{
    cursor: pointer;
}

</style>
