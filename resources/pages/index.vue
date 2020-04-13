
<template>
    <div class="pt-120">
        <div >
 
           
            <!-- <div :class="(this.isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action pk-new-sidebar">
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
            </div> -->
            <div class="new-banner-section new-banner-section-black new-banner-width" >
                <div class="container" style="">
                     <!-- <adsbygoogle /> -->
                    <div class="inner-banner new-fl-inner-banner">
                        <figure v-if="leandingData.length>0">
                        <img :src="leandingData[0].url" alt="">
                    </figure>
                    <!-- <figure>
                    <adsbygoogle />
                    </figure> -->
                            <!-- <Adsense
                                data-ad-client="ca-pub-1329433058038954"
                                data-ad-slot="1234567890">
                            </Adsense> -->
                    </div>
                </div>
            </div>
            <div class="red-header-bg">
                <div class="container">
                    <!-- find a coach ba rate a coach e click korle ei div hide hobe. shudu header-none class ta add korlei hobe jkn click kora hobe -->
                    <div class="first-header-content" :class="(tab==1 || tab==2)?'header-none':''">
                        <h1>{{findTaxt}}</h1>
                        <div class="row">
                            <div class="red-header-item" @click="tab=1">
                                <div class="red-header-item-inner" @click="tab=1" @mouseover="findTaxt='Find the coach you’re looking for.'" @mouseout="findTaxt='You could select ANYTHING here.'">
                                    <div class="red-inner-card">
                                        <h2>Find a</h2>
                                        <h3>Coach</h3>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="red-header-item">
                                <div class="red-header-item-inner">
                                    <div class="red-inner-card">
                                        <h2>Find a</h2>
                                        <h3>School</h3>
                                    </div>
                                </div>
                            </div> -->
                            <div class="red-header-item">
                                <div class="red-header-item-inner" @click="tab=2" @mouseover="findTaxt='Flank the Coach you’re looking for.'" @mouseout="findTaxt='You could select ANYTHING here.'">

                                    <!-- When clicking on this class, add class active with this class -->
                                    <div class="red-inner-card" @click="tab=2">
                                        <h2>Rate a</h2>
                                        <h3>Coach</h3>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- find a coach ba rate a coach e click korle ei div show hobe. shudu header-show class ta add korlei hobe jkn click kora hobe -->
                    <div class="second-header-content" :class="(tab==1 || tab==2)?'header-show':''">
                        <!-- ei div ta find a coach er jonno -->
                        <div class="second-header-content-item" v-if="tab==1">
                            <h1>Find a Coach</h1>
                            <div class="header-coach-new-search">
                                <div class="header-coach-search-title">
                                    <p>Flank by:</p>
                                    <div class="header-coach-search-selection">
                                        <!-- je item e click kora hobe sei item er class er sathe active class add hobe. taile item er background color change hobe -->
                                        <div class="header-selection-item" @click="tab1=1" :class="(tab1==1)?'active':''">
                                            <span></span>
                                            <p>Name</p>
                                        </div>
                                        <div class="header-selection-item" @click="tab1=2" :class="(tab1==2)?'active':''">
                                            <span></span>
                                            <p>Sport</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-coach-search-details">
                                    <div class="header-details-input">
                                        <label>I'm looking for a coach at</label>
                                        <!-- input e jkn type shuru hobe thkn active class add hobe   -->
                                        <input type="text" v-on:keyup="SearchByKeySchool" v-model="rData.school"   placeholder="your school">

                                        <!-- suggestion hisabe eta show hobe. active class add hobe jkn show hobe -->
                                        <div class="header-details-select-dropdown header-details-school-dropdown" :class="(schoolList.length==0 && rData.school)?'no-data active':(rData.school)?'active':''" :style="(schoolList.length==0 && rData.school!='' && selectedSearchData.track==1)?'display:none;':''">
                                        <!-- :class="(schoolList.length>0)?'active':''" -->
                                            <ul v-if="schoolList.length>0">
                                                    <li v-for="(shcool,index) in schoolList" :key="index" @click="selectSchoolName(shcool)">
                                                            <p>{{shcool.name}}</p>
                                                            <span>{{shcool.city}}, {{shcool.state}}</span>
                                                            <!-- <span>{{shcool.sport}}</span> -->
                                                    </li>
                                                </ul>
                                            <!-- <p @click="addNew.modal=true" class="drop-click-here" v-if="schoolCoachList.length==0 && rData.school!=''"><a href="#">Don't see your coach? <span>Click here</span></a></p> -->
                                            <p @click="addNew.modal=true" class="drop-click-here" v-if="rData.school!=''"><a href="#">Don't see your coach? <span>Click here</span></a></p>
                                        </div>
                                    </div>
                                    <!-- ei div hocche sport er. sport option e click korle ei div e active class add hobe -->
                                    <div class="header-details-select" :class="(tab1==2)?'active':''" :style="(tab1==2)?'':'display:none;'">
                                        <p>in the</p>
                                        <div class="header-details-select-inner">
                                            <div class="header-details-select-title" @click="tab2=2" v-if="tab2==0 || tab2==1">
                                                <p>{{sportValue}}</p>
                                            </div>
                                            <div class="header-details-select-title" @click="tab2=1" v-if="tab2==2">
                                                <p>{{sportValue}}</p>
                                            </div>
                                            <!-- <div class="header-details-select-title" @click="tab1=1,tab2=0" v-if="tab2==2">
                                                <p>{{sportValue}}</p>
                                            </div> -->
                                            <!-- jkn select e click kora hobe thkn ei div ta show hobe tai ei div e active class ta add korte hobe -->
                                            <div class="header-details-select-dropdown sport-header-details-select-dropdown" :class="(tab2==2)?'active':''">
                                                <h4>Sport type</h4>
                                                <ul>
                                                    <li @click="setValue('Baseball')">Baseball</li>
                                                    <li @click="setValue(`Men's Basketball`)">Basketball(M)</li>
                                                    <li @click="setValue(`Women's Basketball`)">Basketball (W)</li>
                                                    <li @click="setValue(`Football`)">Football</li>
                                                    <li @click="setValue(`Men's Lacrosse`)">Lacrosse (M)</li>
                                                    <li @click="setValue(`Women's Lacrosse`)">Lacrosse (W)</li>
                                                    <li @click="setValue(`Men's Soccer`)">Soccer(M)</li>
                                                    <li @click="setValue(`Women's Soccer`)">Soccer(W)</li>
                                                    <li @click="setValue(`Softball`)">Softball</li>
                                                    <li @click="setValue(`Men's Volleyball`)">Volleyball(M)</li>
                                                    <li @click="setValue(`Women's Volleyball`)">Volleyball(W)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ei div hocche name er. name option e click korle ei div e active class add hobe, by default etate active class thakbe. jokn sport e click kora hobe thkn eta theke active class chole jabe. -->
                                    <div class="header-details-select" :class="(tab1==1)?'active':''" :style="(tab1==1)?'':'display:none;'">
                                        <p>named</p>
                                        <div class="header-details-select-inner">
                                            <div class="header-details-select-input active">
                                                <!-- jkn type kora hobe thkn active class add hobe -->
                                                <input type="text"  v-on:keyup="SearchByKeySchoolCoach" v-model="rData.key"  placeholder="coach name">
                                            </div>
                                            <!-- active jkn input e type kora hobe thkn ei div ta show hobe tai ei div e active class ta add korte hobe -->
                                            <div class="header-details-select-dropdown header-details-school-dropdown" :class="(schoolCoachList.length==0 && rData.key!='' && selectedSearchData.track2==0)?'no-data active':(rData.key!='' && selectedSearchData.track2==0)?'active':''" :style="(schoolCoachList.length==0 && rData.key!='' && selectedSearchData.track2==1)?'display:none;':''">
                                                <ul v-if="schoolCoachList.length>0">
                                                    <li v-for="(coach,index) in schoolCoachList" :key="index" @click="selectSchoolCoachName(coach)">
                                                            <p>{{coach.name}}</p>
                                                            <span v-if="coach.school">{{coach.school.sport}}</span>
                                                    </li>
                                                  
                                                </ul>
                                                <p @click="addNew.modal=true" class="drop-click-here" v-if="rData.key!=''"><a href="#">Don't see your coach? <span>Click here</span></a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- eta button. search ar cancel korar jnno -->
                                    <div class="header-submission">
                                        <div class="header-submission-btn" @click="gotoReviewPage()">
                                            <button>Search</button>
                                        </div>
                                        <div class="header-close" @click="closeOpetions">
                                            <p>Close</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ei div ta rate your coach er jonno -->
                        <div class="second-header-content-item" v-if="tab==2">
                            <h1>Rate Your Coach</h1>
                            <div class="header-coach-new-search">
                                <div class="header-details-select-inner">
                                    <div class="header-details-select-input">
                                        <input type="text" v-on:keyup="SearchByKeySchoolCoachNew" v-model="coachName" placeholder="coach name">
                                    </div>
                                    <!-- jkn input e type kora hobe thkn ei div ta show hobe tai ei div e active class ta add korte hobe -->
                                    <div class="header-details-select-dropdown header-details-school-dropdown"   :class="(coachList.length==0 && coachName!='' && selectedSearchData.track3==0)?'no-data active':(coachName!='' && selectedSearchData.track3==0)?'active':''" >
                                        <ul v-if="coachList.length>0">
                                            <li v-for="(coach,index) in coachList" :key="index" @click="selectCoachName(coach)">
                                                <!-- <a href="#"> -->
                                                    <p v-if="coach.name">{{coach.name}}</p>
                                                    <!-- <span v-if="coach.sport">{{coach.sport}}</span> -->
                                                    <span v-if="coach.school">{{coach.school.schoolName}}</span>
                                                <!-- </a> -->
                                            </li>
                                        
                                        </ul>
                                        <p @click="addNew.modal=true" class="drop-click-here" v-if="coachName!=''"><a href="#">Don't see your coach? <span>Click here</span></a></p>
                                    </div>
                                </div>
                            </div>
                               <div class="header-submission">
                                        <div class="header-submission-btn" @click="gotoReviewPage()">
                                            <button>Search</button>
                                        </div>
                                        <div class="header-close" @click="closeOpetions">
                                            <p>Close</p>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flank-section">
                <div class="container">
                    <div class="recent-submission-section pc-recent-submission-section">
                        <div class="row">
                            <div :class="(index>0)?'flex-gap-4':''" class="submission-item"  v-for="(item,index) in recentReview " :key="index" v-if="index<4"  >
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img" >
                                        <img src="/images/sub1.jpg" alt="">
                                    </div>
                                    <div class="submission-details" >
                                        <!-- @click="directToCoachWall(item)" -->
                                        <h4 >{{item.coach.name}} </h4>
                                        <p>Reviewed by: <span @click="$router.push(`/flanker/${item.reviwer.id}`)" style="cursor: pointer;">{{item.reviwer.firstName}} {{item.reviwer.lastName}}</span></p>
                                        <ul class="sub-rating" v-if="item.coach">
                                            <li :class="(item.coach.avg_rating>0)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>1)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>2)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>3)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating==5)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <Poptip trigger="hover">
                                            <!-- <Button>Hover @click="directToCoachWall(item)"</Button> -->
                                        <button  class="sub-btn"><img src="/images/sub-img.png" alt=""  > <span>See more</span></button>
                                            <div class="api" slot="content">
                                                <div class="red-inner-popup">
                                                    <div class="red-popup-title">
                                                        <h4>Flankmeter</h4>
                                                        <div class="red-title-side">
                                                            <img src="/images/pop-flank.png" alt="">
                                                            <p v-if="item.coach">{{(100*item.coach.avg_rating)/5}}%</p>
                                                        </div>
                                                    </div>
                                                    <div class="red-popup-details">
                                                        <h3 v-if="item.coach">{{item.coach.name}} / <span v-if="item.school">{{item.school.city}}, {{item.school.state}}</span></h3>
                                                        <p v-if="item.school">{{item.school.schoolName}}</p>
                                                        <div class="red-popup-progress" v-if="item.coach">
                                                            <!-- <div class="red-popup-progress-inner" :style="(item.coach.totalRating==5)?'width:100%;':(item.coach.totalRating>=4)?'width:80% ;':(item.coach.totalRating>=3)?'width:60%;':(item.coach.totalRating>=2)?'width:40% ;':(item.coach.totalRating>=1)?'width:20%;':'width:0%;'"></div> -->
                                                            <div class="red-popup-progress-inner" :style="item.coach.avg_rating|formatedstring"></div>
                                                            <!-- <div class="red-popup-progress-inner" :style="'width:'+(100*item.coach.avg_rating)/5+'%;'"></div> -->
                                                           

                                                        </div>
                                                        <div class="red-progress-details" v-if="item.coach">
                                                            <!-- <p>Average rating: <span>{{item.coach.avg_rating}}/{{item.coach.totalRating}}</span></p> -->
                                                            <p>Average rating: <span>{{item.coach.avg_rating}}/5</span></p>
                                                            <p>Total count: <span>{{item.coach.totalRating}}</span></p>
                                                            <ul>
                                                                <li>Good: <span>{{item.coach.totalgood}}</span></li>
                                                                <li>Bad: <span>{{item.coach.totalbad}}</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Poptip>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub2.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub3.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub4.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="recent-submission-section mobile-recent-submission-section">
                        <div class="row">
                            <div :class="(index>0)?'flex-gap-4':''" class="submission-item"  v-for="(item,index) in recentReview " :key="index" v-if="index<3"  >
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img" >
                                        <img src="/images/sub1.jpg" alt="">
                                    </div>
                                    <div class="submission-details" >
                                        <!-- @click="directToCoachWall(item)" -->
                                        <h4 >{{item.coach.name}} </h4>
                                        <p>Reviewed by: <span @click="$router.push(`/flanker/${item.reviwer.id}`)" style="cursor: pointer;">{{item.reviwer.firstName}} {{item.reviwer.lastName}}</span></p>
                                        <ul class="sub-rating" v-if="item.coach">
                                            <li :class="(item.coach.avg_rating>0)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>1)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>2)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating>3)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.coach.avg_rating==5)?'active':''"><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <Poptip trigger="hover">
                                            <!-- <Button>Hover @click="directToCoachWall(item)"</Button> -->
                                        <button  class="sub-btn"><img src="/images/sub-img.png" alt=""  > <span>See more</span></button>
                                            <div class="api" slot="content">
                                                <div class="red-inner-popup">
                                                    <div class="red-popup-title">
                                                        <h4>Flankmeter</h4>
                                                        <div class="red-title-side">
                                                            <img src="/images/pop-flank.png" alt="">
                                                            <p v-if="item.coach">{{(100*item.coach.avg_rating)/5}}%</p>
                                                        </div>
                                                    </div>
                                                    <div class="red-popup-details">
                                                        <h3 v-if="item.coach">{{item.coach.name}} / <span v-if="item.school">{{item.school.city}}, {{item.school.state}}</span></h3>
                                                        <p v-if="item.school">{{item.school.schoolName}}</p>
                                                        <div class="red-popup-progress" v-if="item.coach">
                                                            <!-- <div class="red-popup-progress-inner" :style="(item.coach.totalRating==5)?'width:100%;':(item.coach.totalRating>=4)?'width:80% ;':(item.coach.totalRating>=3)?'width:60%;':(item.coach.totalRating>=2)?'width:40% ;':(item.coach.totalRating>=1)?'width:20%;':'width:0%;'"></div> -->
                                                            <div class="red-popup-progress-inner" :style="item.coach.avg_rating|formatedstring"></div>
                                                        </div>
                                                        <div class="red-progress-details" v-if="item.coach">
                                                            <!-- <p>Average rating: <span>{{item.coach.avg_rating}}/{{item.coach.totalRating}}</span></p> -->
                                                            <p>Average rating: <span>{{item.coach.avg_rating}}/5</span></p>
                                                            <p>Total count: <span>{{item.coach.totalRating}}</span></p>
                                                            <ul>
                                                                 <li>Good: <span>{{item.coach.totalgood}}</span></li>
                                                                <li>Bad: <span>{{item.coach.totalbad}}</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Poptip>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub2.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub3.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-gap-4 submission-item">
                                <div class="submission-item-inner">
                                    <div class="submission-header">
                                        <h3>Recent <span>submission</span></h3>
                                    </div>
                                    <div class="submission-img">
                                        <img src="/images/sub4.jpg" alt="">
                                    </div>
                                    <div class="submission-details">
                                        <h4>Coach First Last Name </h4>
                                        <p>Reviewed by: <span>Person First Last Name</span></p>
                                        <ul class="sub-rating">
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li class="active"><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                            <li><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                        <button class="sub-btn"><img src="/images/sub-img.png" alt=""> <span>See more</span></button>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    
                </div>
                <div class="new-banner-section middle-banner-section " >
                    <div class="container" style="">
                        <div class="inner-banner new-fl-inner-banner">
                            <figure v-if="leandingData.length>0">
                                <img :src="leandingData[0].url" alt="">
                            </figure>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="most-review-section">
                        <div class="row" v-if="highRatedCoach && highRatedCoach[0] && highRatedCoach[1] && highRatedCoach[2]">
                            <div class="most-review-item" v-if="highRatedCoach[0]">
                                <div class="most-review-item-inner" @click="goToCoachSearchPage(highRatedCoach[0].avg_rating,highRatedCoach[0].school.sport)">
                                    <div class="most-review-item-img">
                                        <img src="/images/mr1.png" alt="">
                                    </div>
                                    <div class="most-review-item-details">
                                        <h3>Most <br> Reviewed</h3>
                                        <h2 v-if="highRatedCoach[0] && highRatedCoach[0].school && highRatedCoach[0].school.sport">{{highRatedCoach[0].school.sport}}</h2>
                                        <p>Coach</p>
                                        <div class="most-review-rat">
                                            <ul>
                                                <!-- In these list, there are two types of rating. If the rating are 5 then show "<li class="mrat-full"><i class="fas fa-star"></i></li>" this list otherwise show "<li class="mrat"><i class="far fa-star"></i></li>" this list. First one is full star with red background and second one is only star  -->
                                                <li :class="(highRatedCoach[0].avg_rating>0)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[0].avg_rating>0)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[0].avg_rating>1)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[0].avg_rating>1)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[0].avg_rating>2)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[0].avg_rating>2)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[0].avg_rating>3)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[0].avg_rating>3)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[0].avg_rating==5)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[0].avg_rating==5)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                            </ul>
                                            <h4><img src="/images/no-rat.png" alt=""> <span>{{highRatedCoach[0].totalRating}}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="most-review-item">
                                <div class="most-review-item-inner"  @click="goToCoachSearchPage(highRatedCoach[1].avg_rating,highRatedCoach[1].school.sport)">
                                    <div class="most-review-item-img">
                                        <img src="/images/mr2.png" alt="">
                                    </div>
                                    <div class="most-review-item-details">
                                        <h3>Most <br> Reviewed</h3>
                                         <h2 v-if="highRatedCoach[1] && highRatedCoach[1].school && highRatedCoach[1].school.sport">{{highRatedCoach[1].school.sport}}</h2>
                                        <p>Coach</p>
                                        <div class="most-review-rat">
                                            <ul  v-if="highRatedCoach &&highRatedCoach[1] && highRatedCoach[1].avg_rating">
                                                <!-- In these list, there are two types of rating. If the rating are 5 then show "<li class="mrat-full"><i class="fas fa-star"></i></li>" this list otherwise show "<li class="mrat"><i class="far fa-star"></i></li>" this list. First one is full star with red background and second one is only star  -->
                                                 <li :class="(highRatedCoach[1].avg_rating>0)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[1].avg_rating>0)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[1].avg_rating>1)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[1].avg_rating>1)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[1].avg_rating>2)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[1].avg_rating>2)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[1].avg_rating>3)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[1].avg_rating>3)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[1].avg_rating==5)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[1].avg_rating==5)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                            </ul>
                                            <h4><img src="/images/no-rat.png" alt=""> <span v-if="highRatedCoach &&highRatedCoach[1] && highRatedCoach[1].totalRating">{{highRatedCoach[1].totalRating}}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="most-review-item">
                                <div class="most-review-item-inner"  @click="goToCoachSearchPage(highRatedCoach[2].avg_rating,highRatedCoach[2].school.sport)">
                                <!-- <div class="most-review-item-inner"  @click="goToCoachSearchPage(highRatedCoach[2].avg_rating,'Soccer')"> -->
                                    <div class="most-review-item-img">
                                        <img src="/images/mr3.png" alt="">
                                    </div>
                                    <div class="most-review-item-details">
                                        <h3>Most <br> Reviewed</h3>
                                        <!-- <h2 >Baseball</h2> -->
                                         <!-- <h2 v-if="highRatedCoach[2] && highRatedCoach[2].school && highRatedCoach[2].school.sport">{{highRatedCoach[2].school.sport}}</h2> -->
                                         <h2 v-if="highRatedCoach[2] && highRatedCoach[2].school && highRatedCoach[2].school.sport">Soccer</h2>

                                        <p>Coach</p>
                                        <div class="most-review-rat">
                               <ul  v-if="highRatedCoach &&highRatedCoach[2] && highRatedCoach[2].avg_rating">
                                                <!-- In these list, there are two types of rating. If the rating are 5 then show "<li class="mrat-full"><i class="fas fa-star"></i></li>" this list otherwise show "<li class="mrat"><i class="far fa-star"></i></li>" this list. First one is full star with red background and second one is only star  -->
                                                 <li :class="(highRatedCoach[2].avg_rating>0)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[2].avg_rating>0)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[2].avg_rating>1)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[2].avg_rating>1)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[2].avg_rating>2)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[2].avg_rating>2)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[2].avg_rating>3)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[2].avg_rating>3)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                                <li :class="(highRatedCoach[2].avg_rating==5)?'mrat-full':'mrat'">
                                                    <i :class="(highRatedCoach[2].avg_rating==5)?'fas fa-star':'far fa-star'"></i>
                                                </li>
                                            </ul>
                                            <h4><img src="/images/no-rat.png" alt=""> <span v-if="highRatedCoach &&highRatedCoach[2] && highRatedCoach[2].totalRating">{{highRatedCoach[2].totalRating}}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="highRatedCoach.length<1">
                            <h2>Loading...</h2>
                        </div>
                    </div>
                </div>

                <div class="most-blog-section">
                    <div class="container">
                        <div class="row">
                            <div class="most-blog-item" v-for="(item,index) in lastTwoPost" :key="index">
                                <div class="most-blog-item-inner">
                                    <div class="most-blog-item-img" v-if="item.img">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="most-blog-item-details" @click="$router.push('/blog/'+item.id)">
                                        <h2>Recent blog post</h2>
                                        <p>{{item.title}}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="most-blog-item">
                                <div class="most-blog-item-inner">
                                    <div class="most-blog-item-img">
                                        <img src="/images/mb2.png" alt="">
                                    </div>
                                    <div class="most-blog-item-details">
                                        <h2>Recent blog post</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="new-banner-section banner-mb middle-banner-section mobile-no-margin" >
                    <div class="container" style="">
                        <div class="inner-banner new-fl-inner-banner">
                            <figure v-if="leandingData.length>0">
                                <img :src="leandingData[0].url" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <!-- <div class="new-section-content">
                <div class="container">
                    <div class="new-content-inner">
                        <div class="row">
                            <div class="new-inner-item-1"  >
                                <div class="col-md-3 col-sm-3">
                                    <div class="quick-link-content">
                                        <h4 class="pad-border cera-bold font-18 weight-400">QUICK LINKS</h4>
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
                                                <a @click="$router.push('/local_business')">
                                                    <figure>
                                                        <img src="/image/Local-Coaches.gif" alt="">
                                                    </figure>
                                                    <div class="quick-link-caption">
                                                        <p>Local instructors <span class="red">(Coming soon)</span></p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click="$router.push('/bussniess-promotion')">
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
                                    <div class="review-content " v-if="!isLoggedIn" >
                                        <h4 class="pad-border">Review Your Coach</h4>
                                        <ul class="no-border">
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
                                        <ul class="activity-list activity-list-new">
                                            <li class="activity-list-inner" v-for="(item,index) in recentReview " :key="index" v-if="index<3" >
                                                <div class="recent-activity-part-inner">
                                                    <div class="activ-thumb" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                        <figure>
                                                            <img v-if="item.review_type == 'school'"  src="/images/sticker-3.png" alt="">
                                                            <img v-if="item.review_type == 'product'" src="/images/sticker-3.png" alt="">
                                                            <img   v-if="item.review_type == 'legend'"  src="/images/sticker-3.png"   alt="">
                                                        </figure>
                                                    </div>
                                                    <div class="activ-det">
                                                        <div v-if="item.review_type == 'school'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                            <h3 v-if="item.coach" class="cera-bold font-18 weight-600" style="margin-bottom: 10px;">{{item.coach.name}}</h3>
                                                        </div>
                                                        <p class="cera-regular font-18">{{item.content}}</p>
                                                        <h5 class="itl  cera-light-italic font-18" style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)">
                                                         <span>by</span> {{item.reviwer.firstName}} {{item.reviwer.lastName}}
                                                         </h5>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="recent-title no-border new-recent-title">
                                            <h2 class="cera-medium font-18 weight-400">Recent Activity</h2>
                                        </div>
                                    </div>
                                    <div class="spotlight-content ">
                                        <div class="spotlight-content-title">
                                            <h4 class="cera-bold font-18 weight-400">The Deals Keep going</h4>
                                        </div>
                                        <div class="spotlight-img">
                                            <figure>
                                                <img src="/images/Spotlight.png" alt="">
                                            </figure>
                                        </div>
                                        <div class="spotlight-foot-img">
                                            <p><a href="#">Learn More</a></p>
                                            <figure>
                                                <img src="/image/flank.png" alt="">
                                            </figure>
                                        </div>
                                        
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
                                                        <input type="text"  v-model="searchTxt" v-on:keyup.enter="goToCoachSearch"  > 
                                                        <button @click="goToCoachSearch"><img src="/images/form-search.png" alt=""></button>
                                                        <div class="form-main-dropdown" v-if="isDropOption" >
                                                            <ul>
                                                                <li><a @click="pageOptionDropChange('coach')">Coach Name</a></li>
                                                                <li><a @click="pageOptionDropChange('school')">School Name</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="coach-scandal-sec">
                                        <div class="coach-scandal">
                                            <div class="coach-scandal-title" style="border-width: 2px;">
                                                <figure>
                                                    <img src="/images/st.png" alt="">
                                                </figure>
                                                <div class="scandal-head">
                                                    <h2 class="cera-medium font-24 weight-400" >Coach scandal</h2>
                                                </div>
                                            </div>
                                            <div class="inner-scandal">
                                                <figure>
                                                    <img src="/images/soccer.png" alt="">
                                                </figure>
                                                <div class="scandal-caption">
                                                    <div class="blg-inner-cap new-blg-inner-cap">
                                                        <p class="">Come for the tour. But leave your review behind</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="inner-scandal-video no-border new-fl-hooper" v-if="videos.length>0" style="padding-top: 0;">
                                            <div class="row ">
                                                <hooper :itemsToShow="3" :infiniteScroll="true"  class="new-pr-hooler-parent" >
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                                    <div class="play-caption">
                                                                        <span><i class="fas fa-play"></i></span>
                                                                    </div>
                                                                    <div class="video-duration">
                                                                        <p class="duration"><span>{{item.video_length}}</span></p>
                                                                    </div>
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                </hooper>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-sect-part" v-if="review_of_day.bestReview && loading == false">
                                        <div class="review-sect">
                                            <div class="linear-border"></div>
                                            <div class="drop-title new-font">
                                                <h2 class=" pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Review of the Day</h2>
                                            </div>
                                            <div class="review-sect-header">
                                                <figure style="cursor:pointer;" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">
                                                    <img :src="review_of_day.bestReview.reviwer.img" alt="">
                                                </figure>
                                                <div class="review-header-title new-font">
                                                    <div class="review-title-left">
                                                        <h3 style="cursor:pointer; font-size: 20px;" class="cera-medium weight-400 font-24" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">{{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</h3>
                                                        <ul>
                                                            <li><span class="rev-ti-im"><img src="/images/mgroup.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                            <li><span class="rev-ti-im"><img src="/images/mgroup1.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                        </ul>
                                                        <h4 class="wr-re" style="" v-if="review_of_day.bestReview.review_type == 'school' ">Review For:  <span @click="directToCoachWall(review_of_day.bestReview)" v-if="review_of_day.bestReview.coach" style="font-size: 20px;">Coach {{review_of_day.bestReview.coach.name}}</span></h4>
                                                        <h4 class="wr-re" style="cursor:pointer;" v-if="review_of_day.bestReview.review_type == 'legend' ">Wrote a review for: Coach <span @click="directToCoachWall(review_of_day.bestReview)">{{review_of_day.bestReview.legend.name}}</span></h4>
                                                    </div>
                                                    <div class="review-champ">
                                                        <img src="/images/cham.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-star">
                                                <ul>
                                                    <li :class="(review_of_day.bestReview.rating> 0)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 1)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 2)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 3)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                    <li :class="(review_of_day.bestReview.rating> 4)? '' : 'star-half' "><span  ><i class="fas fa-star"></i></span></li>
                                                </ul>
                                                <div class="review-time">
                                                    <p>7/02/2019</p>
                                                </div>
                                            </div>
                                            <div class="revt-details new-font">
                                                <p style="font-size: 15px;">
                                                    I was incredibly skeptical of Vespertine. And why wouldn't you be? Jordan Kahn is the
                                                    Elon Musk of the fine dining world, and it's the equivalent of paying a lot of money
                                                    for something that Musk thought up - it could very well be brilliant, because he's
                                                    clearly off on his own planet with everything he's doing,or it could be a disaster and
                                                    you wont know until you give it a go... <a href="#" style="color: #018ee7  !important;font-weight: 400;">Continue reading</a>
    
                                                </p>
                                            </div>
                                            <div class="recent-title">
                                                <div class="drop-bottom-icon" style="margin: 0;">
                                                    <ul>
                                                        <li><img src="/images/ic1.png" alt=""><span>{{review_of_day.bestReview.official}}</span></li>
                                                        <li><img src="/images/ic2.png" alt=""><span>{{review_of_day.bestReview.bravery}}</span></li>
                                                        <li><img src="/images/ic3.png" alt=""><span>{{review_of_day.bestReview.distinguished}}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="review-sect-part">
                                        <div class="review-sect">
                                            <div class="drop-title no-border">
                                                <h2 class="pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Recent drops</h2>
                                            </div>
                                            <div class="drop-content mt-10">
                                                <div class="row plus-row">
                                                     <hooper :itemsToShow="3" :infiniteScroll="true" >
                                                        <slide v-for="(item,index) in recentReview " :key="index" v-if="index<5">
                                                            <div class="drop-item"  >
                                                                <div class="drop-item-inner">
                                                                    <div class="linear-border"></div>
                                                                    <div class="drop-item-title">
                                                                        <figure>
                                                                            <img src="/images/ms.jpg" alt="">
                                                                        </figure>
                                                                        <div class="drop-title-caption">
                                                                            <h3 style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                            <p>Wrote a Review</p>
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
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                            </div>
                                                                            <div class="review-star small-review-star">
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
                                                                                <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                            </div>
                                                                        </div>
                                                                        <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                            <ul>
                                                                                <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                                <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                                <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </slide>
                                                        
                                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                    </hooper>
                                                </div>
                                                <div class="row plus-row" v-if="showMoreActivity>5">
                                                     <hooper :itemsToShow="3" :infiniteScroll="true" >
                                                        <slide v-for="(item,index) in recentReview " :key="index" v-if="index>5">
                                                            <div class="drop-item"  >
                                                                <div class="drop-item-inner">
                                                                    <div class="linear-border"></div>
                                                                    <div class="drop-item-title">
                                                                        <figure>
                                                                            <img src="/images/ms.jpg" alt="">
                                                                        </figure>
                                                                        <div class="drop-title-caption">
                                                                            <h3 style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                            <p>Wrote a Review</p>
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
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                                <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                            </div>
                                                                            <div class="review-star small-review-star">
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
                                                                                <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                            </div>
                                                                        </div>
                                                                        <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                            <ul>
                                                                                <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                                <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                                <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </slide>
                                                        
                                                        <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                    </hooper>
                                                </div>
                                                <div class="row">
                                                    <div class="drop-item" style="margin-top: 10px">
                                                        <div class="drop-item-inner">
                                                            <div class="linear-border"></div>
                                                            <div class="drop-item-title" style="padding: 10px 10px 10px 25px">
                                                                <figure><img src="/images/ms.jpg" alt=""></figure>
                                                                <div class="drop-title-caption">
                                                                    <h3 style="cursor: pointer;">Nazmul C.</h3>
                                                                    <p>Wrote a Review</p>
                                                                </div>
                                                            </div>
                                                            <div class="drop-inner">
                                                                <div class="drop-inner-figure drop-inner-figure-big">
                                                                    <figure><img src="/images/cmnt1.png" alt=""></figure>
                                                                </div>
                                                                <div class="drop-inner-cap">
                                                                    <div class="drop-inner-coach">
                                                                        <h4 style="cursor: pointer;">Coach Nazmul</h4></div>
                                                                    <div class="review-star small-review-star">
                                                                        <ul>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                            <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="drop-inner-coach-txt">
                                                                        <p>aaaaaa</p> <a>Continue reading</a></div>
                                                                </div>
                                                                <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                    <ul>
                                                                        <li><img src="/images/ic1.png" alt=""><span>0</span></li>
                                                                        <li><img src="/images/ic2.png" alt=""><span>0</span></li>
                                                                        <li><img src="/images/ic3.png" alt=""><span>0</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="drop-more" v-if="showMoreActivity == 5">
                                                <p><a @click="showMoreActivity = 10" ><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                            </div>
                                            <div class="drop-more" v-else>
                                                <p><a @click="showMoreActivity = 5" ><span><i class="fas fa-chevron-up"></i></span>Show less activity </a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-sect-part">
                                        <div class="review-sect">
                                            <div class="drop-title tup no-border">
                                                <h2 class="pad-border cera-medium weight-400 font-24" style="border-width: 2px !important;">Browse coaches by category</h2>
                                            </div>
                                            <div class="activity-sec mt-10">
                                                <div class="row plus-row no-margin">
                                                    <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/high-school.png" alt="">
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/college-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/travel-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item"  @click="$router.push(`/bussniess-promotion`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/local-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/best-coaches.png" alt="">
                                                                </figure>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=Worst`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/worst-coach.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/healtiest-coach.png" alt="">
                                                                </figure>
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="activity-item" @click="$router.push(`/bussniess-promotion`)">
                                                        <div class="activity-inner">
                                                            <div class="activity-inner-fig">
                                                                <figure>
                                                                    <img src="/images/products-service.png" alt="">
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
                            <div class="new-inner-item-1"  >
                                <div class="col-md-3 col-sm-3" v-if="topHeadlines.length>0">
                                    <div class="headline-link-content" style="display:none;">
                                        <h4 class="pad-border">Top headlines</h4>
                                        <ul>
                                            <li v-for="(item,index) in topHeadlines" :key="index">
                                                <a href="#">
                                                {{item.title}}
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a href="#">
                                                <img src="/images/flan.png" alt="">
                                                Example Text of Headline
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flank-banner ">
                                        <figure v-if="leandingData.length>0">
                                            <img :src="leandingData[1].url" alt="">
                                        </figure>
                                    </div>
                                    <div class="scandal-analytics ">
                                        <div class="scandal-analytics-title">
                                            <h4 class="pad-border">FLANK Analytics</h4>
                                        </div>
                                        <div class="scandal-ana-banner">
                                            <figure>
                                                <img src="/images/banner-2.png" alt="">
                                            </figure>
                                        </div>
                                        <div class="scandal-list">
                                            <ul>
                                                <li>
                                                    <a @click="openToolTip(1)">Health Score Index (HSI)</a>
                                                </li>
                                                <li>
                                                    <a @click="openToolTip(2)
                                                        ">Strength of Team Index (STI)</a>
                                                </li>
                                                <li>
                                                    <a @click="openToolTip(3)">Program Chemistry Index (PCI)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="scandal-extra-link">
                                            <ul>
                                                <li>
                                                    <nuxt-link to="/tos">Terms of Service</nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/guidlines">Content Guidelines</nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/policy">Privacy Policy</nuxt-link>
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
                                            <div style="padding: 0 30px;">
                                                <h2>Get the best of FLANK sent to your inbox</h2>
                                                <p>The FLANK Daily delivers the most important team predictions for your team.</p>
                                            </div>
                                            <form v-on:submit.prevent>
                                                <div class="fla-form-full">
                                                    <input type="text" placeholder="Email Address" v-model="flankDaily.email" >
                                                </div>
                                                <div class="fla-form-button">
                                                    <button @click="emailSubcription" v-if="!isLoad"> Sign me up!</button>
                                                    <button v-else disabled> Loading...</button>
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
            </div> -->
        </div>
        <div style="display:none;">
            <div class="new-banner-section" >
                <div class="container no-padding">
                    <div class="inner-banner new-fl-inner-banner">
                          <figure v-if="leandingData.length>0">
                        <img :src="leandingData[0].url" alt="">
                    </figure>
                    
                    </div>
                </div>
            </div>
            <div :class="(this.isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action">
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
                </div>
            </div>
            <div class="new-section-content no-padding">
                <div class="container no-padding">
                    <div class="new-content-inner">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="mob-new-slider">
                                    <div class="mob-slider-box">
                                        <hooper :settings="hooperSettings" >
                                            <slide>
                                                <figure>
                                                    <img src="/images/mob-header-slider.png" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/greatestyears.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/6Coaches.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <slide>
                                                <figure>
                                                    <img src="/images/StandardFlankerBanner.jpg" alt="">
                                                </figure>
                                            </slide>
                                            <hooper-pagination slot="hooper-addons"></hooper-pagination>
                                        </hooper>
                                    </div>
                                </div>
                                <div class="vertising-opportunity-sec mobile-signup-sec new-box-shadow">
                                    <div class="review-sect" style="box-shadow: none;">
                                        <div class="drop-title new-font mb-10">
                                            <h2 class="">Sign In For The Best Experience</h2>
                                        </div>
                                        <div class="new-auth-bx">
                                            <div class="new-auth-bx-in">
                                                <nuxt-link to="/login">
                                                    <button>Sign in</button>
                                                </nuxt-link>
                                                <p><nuxt-link to="/signup">Create an Account</nuxt-link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="coach-scandal-sec new-box-shadow new-mt-10" style="padding: 0;">
                                    <div class="coach-scandal" style="padding: 25px 30px;">
                                        <div class="coach-scandal-title" style="border-width: 2px;">
                                            <figure>
                                                <img src="/images/st.png" alt="">
                                            </figure>
                                            <div class="scandal-head">
                                                <h2 class="cera-bold font-24 weight-400" >Coach scandal</h2>
                                            </div>
                                        </div>
                                        <div class="inner-scandal">
                                            <figure>
                                                <img src="/images/soccer.png" alt="">
                                            </figure>
                                            <div class="scandal-caption">
                                                <div class="blg-inner-cap">
                                                    <p class="cera-black font-18 weight-400">Come for the tour. But leave your review behind</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner-scandal-video" v-if="videos.length>0" style="padding: 0;">
                                        <div class="logo-title" style="padding: 15px 30px; margin-bottom: 5px;">
                                            <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span>LATEST ON FLANKs</span></h2>
                                        </div>
                                        <div class="row plus-row up-ch-pad" style="padding-bottom: 15px;">
                                            <hooper :itemsToShow="3" :infiniteScroll="false">
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                                    <div class="play-caption">
                                                                        <span><i class="fas fa-play"></i></span>
                                                                    </div>
                                                                    <div class="video-duration">
                                                                        <p class="duration"><span>{{item.video_length}}</span></p>
                                                                    </div>
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                                </hooper>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="recent-activity-part  new-box-shadow new-mt-10">
                                    <div class="drop-title no-border">
                                        <h2 class="pad-border cera-bold font-24 weight-400" style="border-width: 2px !important;">Recent activity</h2>
                                    </div>
                                    <ul class="activity-list mob-new-activity-list">
                                        <li class="activity-list-inner" v-for="(item,index) in recentReview " :key="index" v-if="index<3" >
                                            <div class="recent-activity-part-inner">
                                                <div class="activ-thumb new-activ-thumb" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                    <figure>
                                                        <img v-if="item.review_type == 'school'"  :src="(item.school.logo != null)? item.school.logo : '/images/sticker-3.png'"  alt="">
                                                        <img v-if="item.review_type == 'product'" :src="(item.product.img)? item.product.img : '/images/sticker-3.png'" alt="">
                                                        <img   v-if="item.review_type == 'legend'"  :src="(item.legend.img)? item.legend.img : '/images/sticker-3.png'"   alt="">
                                                    </figure>
                                                </div>
                                                <div class="activ-det new-activ-det">
                                                    <div v-if="item.review_type == 'school'" @click="directToCoachWall(item)" style="cursor: pointer;" >
                                                        <h3 v-if="item.coach" class="cera-bold font-18 weight-400" style="margin-bottom: 10px;">{{item.coach.name}}</h3>
                                                    </div>
                                                    <p class="cera-medium font-18">{{item.content}}</p>
                                                    <h5 class="itl receiver-na cera-light-italic" style="cursor:pointer;"  @click="$router.push(`/flanker/${item.reviwer.id}`)"><img src="/images/title-logo.png" alt=""> <span>by</span> {{item.reviwer.firstName}} {{item.reviwer.lastName}}</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="new-latest-flank  new-box-shadow new-mt-10" style="padding: 0;" v-if="videos.length>0">
                                    <div class="inner-scandal-video no-border" style="padding: 0;">
                                        <div class="logo-title" style="padding: 15px 30px; margin-bottom: 5px;">
                                            <h2 class="logo-title-heading"><img src="/images/title-logo.png" alt=""> <span class="cera-black">LATEST ON FLANK</span></h2>
                                        </div>
                                        <div class="row plus-row up-ch-pad" style="padding-bottom: 15px;">
                                            <hooper :itemsToShow="3"  >
                                                    <slide v-for="(item,index) in videos" :key="index">
                                                        <div class="col-md-3 col-sm-6"  >
                                                            <div class="inner-scandal-video-item">
                                                                <figure @click="openDynamicVideo(item)">
                                                                    <img :src="item.img" alt="">
                                                            
                                                                </figure>
                                                                <div class="scandal-video-caption">
                                                                    <p>{{item.title}}</p>
                                                                </div>
                                                                <div class="video-logo">
                                                                    <img src="/image/flank.png" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                                                </hooper>
                                            
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part" v-if="review_of_day.bestReview && loading == false">
                                    <div class="review-sect">
                                        <div class="linear-border"></div>
                                        <div class="drop-title new-font">
                                            <h2 class=" pad-border cera-bold weight-400 font-24" style="border-width: 2px !important;">Review of the Day</h2>
                                        </div>
                                        <div class="review-sect-header">
                                            <figure style="cursor:pointer;" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">
                                                <img :src="review_of_day.bestReview.reviwer.img" alt="">
                                            </figure>
                                            <div class="review-header-title new-font">
                                                <div class="review-title-left">
                                                    <h3 style="cursor:pointer; font-size: 20px;" class="cera-medium weight-400 font-24" @click="$router.push(`/flanker/${review_of_day.bestReview.reviwer.id}`)">{{review_of_day.bestReview.reviwer.firstName}} {{review_of_day.bestReview.reviwer.lastName}}</h3>
                                                    <ul>
                                                        <li><span class="rev-ti-im"><img src="/images/mgroup.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                        <li><span class="rev-ti-im"><img src="/images/mgroup1.png" alt=""></span><span class="rev-ti-p">{{review_of_day.bestReview.reviwer.__meta__.totalreviewbyuser}}</span></li>
                                                    </ul>
                                                    <h4 class="wr-re" style="" v-if="review_of_day.bestReview.review_type == 'school' ">Review For:  <span @click="directToCoachWall(review_of_day.bestReview)" v-if="review_of_day.bestReview.coach" style="font-size: 20px;">Coach {{review_of_day.bestReview.coach.name}}</span></h4>
                                                    <h4 class="wr-re" style="cursor:pointer;" v-if="review_of_day.bestReview.review_type == 'legend' ">Wrote a review for: Coach <span @click="directToCoachWall(review_of_day.bestReview)">{{review_of_day.bestReview.legend.name}}</span></h4>
                                                </div>
                                                <div class="review-champ">
                                                    <img src="/images/cham.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-star">
                                            <ul>
                                                <li :class="(review_of_day.bestReview.rating> 0)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 1)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 2)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 3)? '' : 'star-half' "><span><i class="fas fa-star"></i></span></li>
                                                <li :class="(review_of_day.bestReview.rating> 4)? '' : 'star-half' "><span  ><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <div class="review-time">
                                                <p>7/02/2019</p>
                                            </div>
                                        </div>
                                        <div class="revt-details new-font">
                                            <p style="font-size: 15px;">
                                                I was incredibly skeptical of Vespertine. And why wouldn't you be? Jordan Kahn is the
                                                Elon Musk of the fine dining world, and it's the equivalent of paying a lot of money
                                                for something that Musk thought up - it could very well be brilliant, because he's
                                                clearly off on his own planet with everything he's doing,or it could be a disaster and
                                                you wont know until you give it a go... <a href="#" style="color: #018ee7  !important;font-weight: 400;">Continue reading</a>

                                            </p>
                                        </div>
                                        <div class="recent-title">
                                            <div class="drop-bottom-icon">
                                                <ul>
                                                    <li><img src="/images/ic1.png" alt=""><span>{{review_of_day.bestReview.official}}</span></li>
                                                    <li><img src="/images/ic2.png" alt=""><span>{{review_of_day.bestReview.bravery}}</span></li>
                                                    <li><img src="/images/ic3.png" alt=""><span>{{review_of_day.bestReview.distinguished}}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="vertising-opportunity-sec new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="vertising-bg" style="margin: 0;margin-top: 15px;">
                                            <img src="/images/local-ins2.png" >
                                        </div>
                                        <div class="vertising-text" style="padding-left: 0;">
                                            <p>Coming soon</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="drop-title no-border">
                                            <h2 class="pad-border cera-bold weight-400 font-24" style="border-width: 2px !important;">Recent drops New</h2>
                                        </div>
                                        <div class="drop-content mt-10" style="padding-left: 0; padding-right: 0;">
                                            <div class="row plus-row" style="padding-left: 0; padding-right: 0;">
                                                 <hooper :itemsToShow="3"  >
                                                    <slide v-for="(item,index) in recentReview " :key="index" v-if="index<showMoreActivity" class="new-mob-drop-item">
                                                        <div class="drop-item"  >
                                                            <div class="drop-item-inner">
                                                                <div class="linear-border"></div>
                                                                <div class="drop-item-title new-drop-item-title">
                                                                    <figure>
                                                                        <img src="/images/ms.jpg" alt="">
                                                                    </figure>
                                                                    <div class="drop-title-caption">
                                                                        <h3 style="cursor:pointer;" class="font-18"  @click="$router.push(`/flanker/${item.reviwer.id}`)"  >{{item.reviwer | trimSecondLater}}</h3>
                                                                        <p class="font-12">Wrote a Review</p>
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
                                                                            <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'school' && item.coach" >Coach {{item.coach.name}}</h4>
                                                                            <h4 style="cursor:pointer;" @click="directToCoachWall(item)" v-if="item.review_type == 'legend'">Coach {{item.legend.name}}</h4>
                                                                        </div>
                                                                        <div class="review-star small-review-star">
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
                                                                            <a @click="directToCoachWall(item)" >Continue reading</a> 
                                                                        </div>
                                                                    </div>
                                                                    <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                        <ul>
                                                                            <li><img src="/images/ic1.png" alt=""><span>{{item.official}}</span></li>
                                                                            <li><img src="/images/ic2.png" alt=""><span>{{item.bravery}}</span></li>
                                                                            <li><img src="/images/ic3.png" alt=""><span>{{item.distinguished}}</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </slide>
                                                    
                                                    <hooper-navigation slot="hooper-addons"></hooper-navigation>

                                                </hooper>
                                               
                                            </div>
                                            
                                            <div class="row plus-row">
                                                <div class="drop-item" style="margin-top: 15px">
                                                    <div class="drop-item-inner">
                                                        <div class="linear-border"></div>
                                                        <div class="drop-item-title" style="padding: 10px 10px 10px 25px">
                                                            <figure><img src="/images/ms.jpg" alt=""></figure>
                                                            <div class="drop-title-caption">
                                                                <h3 style="cursor: pointer;">Nazmul C.</h3>
                                                                <p class="font-12">Wrote a Review</p>
                                                            </div>
                                                        </div>
                                                        <div class="drop-inner">
                                                            <div class="drop-inner-figure drop-inner-figure-big">
                                                                <figure><img src="/images/cmnt1.png" alt=""></figure>
                                                            </div>
                                                            <div class="drop-inner-cap">
                                                                <div class="drop-inner-coach">
                                                                    <!---->
                                                                    <h4 style="cursor: pointer;" class="font-16">Coach Nazmul</h4></div>
                                                                <div class="review-star small-review-star">
                                                                    <ul>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                        <li class=""><span><i class="fas fa-star"></i></span></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="drop-inner-coach-txt">
                                                                    <p class="font-14">aaaaaa</p> <a>Continue reading</a></div>
                                                            </div>
                                                            <div class="drop-bottom-icon small-drop-bottom-icon">
                                                                <ul>
                                                                    <li><img src="/images/ic1.png" alt=""><span>0</span></li>
                                                                    <li><img src="/images/ic2.png" alt=""><span>0</span></li>
                                                                    <li><img src="/images/ic3.png" alt=""><span>0</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="drop-more" v-if="showMoreActivity == 5">
                                            <p><a @click="showMoreActivity = 10" class="font-18"><span><i class="fas fa-chevron-down"></i></span>Show more activity</a></p>
                                        </div>
                                        <div class="drop-more" v-else>
                                            <p><a @click="showMoreActivity = 3"  class="font-18"><span><i class="fas fa-chevron-up"></i></span>Show less activity </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-sect-part new-box-shadow new-mt-10">
                                    <div class="review-sect no-box-shadow">
                                        <div class="drop-title tup no-border">
                                            <h2 class="pad-border cera-bold font-24 weight-400" style="border-width: 2px !important;">Browse coaches by category</h2>
                                        </div>
                                        <div class="activity-sec mt-10">
                                            <div class="row plus-row">
                                                <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/high-school.png" alt="">
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="activity-item"  @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/college-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/travel-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item"  @click="$router.push('/bussniess-promotion')">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/local-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/best-coaches.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=Worst`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/worst-coach.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push(`/coach_search?sort=rated`)">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/healtiest-coach.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="activity-item" @click="$router.push('/bussniess-promotion')">
                                                    <div class="activity-inner">
                                                        <div class="activity-inner-fig">
                                                            <figure>
                                                                <img src="/images/products-service.png" alt="">
                                                            </figure>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <p class="font-12">The FLANK Daily delivers the most important team predictions for your team.</p>
                                        <form v-on:submit.prevent>
                                            <div class="fla-form-full">
                                                <input type="text" placeholder="Email Address" v-model="flankDaily.email" >
                                            </div>
                                            <div class="fla-form-button">
                                                <button @click="emailSubcription" v-if="!isLoad" class="cera-medium"> Sign me up!</button>
                                                <button  v-else class="cera-medium" disabled> Loading..</button>
                                            </div>
                                        </form>
                                        <div class="priv">
                                            <p><a href="#" class="cera-medium">Privacy policy</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <Modal title="Details" v-model="toolTipModal" >
            <div class="tooltip-box" >
                <p v-html="toolTipText" ></p>
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
                                                        <input type="text" v-model="step1Form.state" >
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
import { Hooper, Slide ,Pagination as HooperPagination ,Navigation as HooperNavigation} from 'hooper';

export default {
    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
    },
  data() {
    return {
        findTaxt:'You could select ANYTHING here.',
        lastTwoPost:[],
        sportValue:'Select',
        tab:0,
        tab1:1,
        tab2:0,
        highRatedCoach:[],
        isLoad:false,
        mobileScreen:false,
      showMoreActivity: 3,
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
      topHeadlines: [],
      videos: [],
      schoolList: [],
      schoolCoachList: [],
      productList: [],
      sData: {
        school_id: 0
      },
      leandingData:[],
      iamIndex: false,
      toolTipModal: false,
      toolTipText: '',
      isVideo:{
          modal :false,
          header:'',
          link:''
      },
      city:'All citys',
      allCity:[],
      isDropOption:false,
        tabindex:0,
        flankDaily:{
            email:''
        },
        hooperSettings: {
             infiniteScroll: true,
            // centerMode: true
        },
        latesthooperSettings: {
            infiniteScroll: true,
            // centerMode: true,
            // itemsToShow:3,
            
        },
        selectedSearchData:{
            schoolId:'',
            schoolName:'',
            coachName:'',
            coachId:'',
            track:0,
            track2:0,
            track3:0,
        },
        coachName:'',
        coachId:'',
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
                
                rating:'',
            },
            newCoach:{},
            allSports:[],
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
    };
  },

  async asyncData({ app, store, redirect, params }) {

    try {
    const [res1,res2, res3,res4,res5,res6,res7,res8] = await Promise.all([
    //  this.callApi("get", `/app/getSchoolcoaches`),
      app.$axios.get(`/app/bannerImage`),
      app.$axios.get( `/app/reviewOfTheDay`),
     // app.$axios.get( `/app/recentCitys`),
      app.$axios.get( `/app/getRecentReview`),
      app.$axios.get( `/app/topHeadline`),
      app.$axios.get( `/app/videos`),
      app.$axios.get( `/app/getSchoolCoachByhighRated`),
      app.$axios.get( `/app/getAllBlogPostsTwo`),
      app.$axios.get(`/legends`)
      
    ])

    var review_of_day
    var recentReview
    var topHeadlines
    var videos
    var highRatedCoach
    var leandingData
    var lastTwoPost
    var legendList

    // if (res1.status==200 && res3.status == 200 && res2.status == 200 && res4.status == 200 && res5.status == 200 && res6.status == 200 && res7.status == 200 && res8.status == 200) { 
    //  this.schoolCoaches = res1.data;
      leandingData = res1.data
      review_of_day = res2.data;
      recentReview = res3.data;
      topHeadlines = res4.data;
      videos = res5.data;
      highRatedCoach = res6.data;
      lastTwoPost = res7.data
      legendList=res8.data
      console.log(highRatedCoach.length)
    
    // }
     return {
         leandingData:leandingData,
         review_of_day:review_of_day,
         recentReview:recentReview,
         topHeadlines:topHeadlines,
         videos:videos,
         highRatedCoach:highRatedCoach,
         lastTwoPost:lastTwoPost,
         legendList:legendList,
         
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
  methods: {
      goToCoachSearchPage(rate,sports){
            this.$router.push(`/coach_search?pageOption=coach&str2=&sports=${sports}&rate=${rate}`)
      },
      selectCoachName(coach){
          this.selectedSearchData.track3=1
          this.coachName = coach.name
          this.coachId = coach.id
      },
      gotoReviewPage(){
        //   /scoach_review/507170
        if(this.tab==1){
            if(this.tab1==1){
                if(this.selectedSearchData.coachId && this.selectedSearchData.schoolId){
                    this.$router.push('/scoach_review/'+this.selectedSearchData.coachId)
                }
                else{
                    this.i("please find first coach!!")
                }
            }
            else if(this.tab1==2){
                // /coach_search?place=&str=&pageOption=coach&div=High%20School&attribute=
                this.$router.push(`/coach_search?pageOption=coach&str2=${this.selectedSearchData.schoolName}&sports=${this.sportValue}`)
                // this.$router.push(`/coach_search?place=&sports=${this.sportValue}&str=${this.selectedSearchData.schoolName}&pageOption=school&div=High%20School&attribute=`)

            }
        }
        else{
            if(this.coachId){

                this.$router.push('/scoach_review/'+this.coachId)
            }
             else{
                    this.i("please find first coach!!")
                }
        }
          
      },
      closeOpetions(){
          this.tab=0
          this.tab1=1
          this.tab2=0
      },
      selectSchoolCoachName(coach){
          console.log(coach)
          this.rData.key = coach.name
          this.selectedSearchData.track2=1
          this.selectedSearchData.coachName = coach.name
          this.selectedSearchData.coachId = coach.id
      },
      selectSchoolName(school){

          this.rData.school = school.name
            this.selectedSearchData.schoolName= school.name
            // this.rData.key= school.name
            this.selectedSearchData.schoolId= school.id
            this.sData.school_id= school.id
            this.schoolList =[]
            this.selectedSearchData.track = 1

      },

    //   new coach add methods 

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

            //  this.SearchByKey()

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

            const res = await this.callApi('post','/app/storeSchoolCoachReview',this.step3Form)
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
            this.searchOn=false
            this.showStr=''
            this.attribute=''
            this.$store.commit('setPageOption', item )
            this.$store.commit('setDiv', division )
            // this.$router.push(`/coach_search?pageOption=item&div=division`)
          
            // this.SearchByKey()
        },
        changePriceType(item){
            this.price = item
            // this.SearchByKey()
        },
        changeDivType(item){
            if(item != 'clear'){
                this.$store.commit('setDiv', item )
                
            }
            else {
                this.$store.commit('setDiv', '' )
            }
            // this.SearchByKey()
        },
        //   new coach add methods 
    openToolTip(no){
        if(no == 1){
            this.toolTipText = `Your coach’s health score collects historical data based on values from 0-100%. The closer to 100%, the healthier environment it is for you to play in. Each coach is also rated 
                                            on a list of attributes to generate their overall health score. This score is our Flank standard and each coach is calculated the same across the country. Each score is point based, either +3.3 or -3.3 influenced by either positive attributes or demerit points based on the numbers of violations and severity of each. Every violation per inspection is assigned a score value as following:

                                           <p> +3.3 point per positive attribute </p>
                                           <p> -3.3 point per negative attribute </p>
                                            `
        }
        else if(no == 2){
            this.toolTipText = `PCI attempts to quantify the un-quantifiable: the overall sentiment of every sports program. 
            Using “active player” reviews, selection regulated via the actual coach review screen, each player has the capability (with immunity) to affect the overall chemistry of their respective program based on their coach review. To calculate this, we take a 120-day view of a program’s operation and the summation of active player reviews to quantify the impact on your programs morale as regulated by your coach. To ensure the percentages are fair based on reporting standards, players outside of program jurisdiction as validated via sign-up are not included. `
        }
        else if(no == 3){
            this.toolTipText = `After analyzing the previous four weeks of player reviews, we’ve identified two things that have predictive value. The metric that is associated most closely with the committee’s selections is “Strength of team index” which simply demonstrates how durable your team is, given the amount of reviews submitted. Along with the Program Chemistry Index (CPI) and overall Health Score, we can estimate a team’s chance at success. This can be done at any time during the season, even before the season the starts. `
        }
       
        this.toolTipModal= true
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
    openDynamicVideo(item){
        this.isVideo.link = `<div class="inner-video-iframe">${item.body}</div> `
        this.isVideo.modal= true
    },
    closeVideo(){
        this.isVideo.modal = false
        this.isVideo.link = ''
        this.isVideo.header = ''
    },
    async  emailSubcription(){

        if(this.flankDaily.email == '') return this.i("Please enter Email Frist !")
        this.isLoad = true
        const res = await this.callApi('post','/app/emailSubscription', this.flankDaily)
        if(res.status == 200 || res.status ==204){
            this.s("You have Subscribed to Flank Daily !")
            this.flankDaily.email = ''
            this.isLoad = false
        }
        else if(res.status == 401){
            this.isLoad = false
            return this.e('Email is invalid')
        }
        else{
            this.isLoad = false
            this.swr();
        }
    },
    handleFocus(){
      
      this.tabindex = -1
    },
    handleFocusOut(){
      
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
        this.selectedSearchData.track2=0
        
        // this.i(this.rData.key)
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
    async SearchByKeySchoolCoachNew() {
        this.selectedSearchData.track3=0
        
        // this.i(this.rData.key)
      const res = await this.callApi(
        "get",
        `/app/SearchByKeySchoolCoachNew?coachName=${this.coachName}
        `
      );
      if (res.status === 200) {
        this.coachList = res.data;
      } else {
        this.swr();
      }
    },
    async SearchByKeyCoach() {
      const res = await this.callApi(
        "get",
        `/app/SearchByKeyCoach?key=${this.coachName}`
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
        this.selectedSearchData.track=0
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
      if (this.review_of_day.bestReview.review_type == "legend") {
        this.$router.push(
          `/local_instructor/${this.review_of_day.bestReview.reviewFor}`
        );
      } else if (this.review_of_day.bestReview.review_type == "school") {
        this.$router.push(`/school_coach/${this.review_of_day.bestReview.school_id}`);
      } 
    //   else if (this.review_of_day.bestReview.review_type == "product") {
    //     this.$router.push(
    //       `/product/${this.review_of_day.bestReview.product_id}`
    //     );
    //   }
    },
    async setValue(item) {
        this.sportValue = item
        this.tab2=1
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
    },
  },
  mounted(){
      if(window.innerWidth < 1199){
            this.mobileScreen = true
        }
  },
  filters: {
  formatedstring: function (value) {
      let a = (100*value)/5
    return "width:"+a+"%;"
  }
},

  async created() {
    //   const res1 = await this.callApi("get", `/app/bannerImage`)
    //   if(res1.status==200){
    //       this.leandingData = res1.data
    //   }

    if(this.$route.query.login == 'success') this.i("Login Successful !")
    // const [res1,res2, res3,res4,res5,res6] = await Promise.all([
    // //  this.callApi("get", `/app/getSchoolcoaches`),
    //   this.callApi("get", `/app/bannerImage`),
    //   this.callApi("get", `/app/reviewOfTheDay`),
    //  // this.callApi("get", `/app/recentCitys`),
    //   this.callApi("get", `/app/getRecentReview`),
    //   this.callApi("get", `/app/topHeadline`),
    //   this.callApi("get", `/app/videos`),
    //   this.callApi("get", `/app/getSchoolCoachByhighRated`),
      
    // ]);
    // if (res1.status==200 && res3.status === 200 && res2.status == 200 && res4.status == 200 && res5.status == 200 && res6.status == 200) { 
    // //  this.schoolCoaches = res1.data;
    //   this.review_of_day = res2.data;
    //   this.recentReview = res3.data;
    //   this.topHeadlines = res4.data;
    //   this.videos = res5.data;
    //   this.highRatedCoach = res6.data;
    //   this.leandingData = res1.data
      
     
    //  // this.allCity = res4.data;
    //   // this.review_of_day.bestReview = res2.data.bestReview
    //   this.loading = false;
    // } else {
    //   this.swr();
    //   this.loading = false;
    // }
    // const res7 =await this.callApi("get", `/app/getAllSports`)
    // if(res7.status === 200 ){
    //     this.allSports = res7.data
    // }
    // const res8 =await this.callApi("get", `/app/getAllBlogPostsTwo`)
    // if(res7.status === 200 ){
    //     this.lastTwoPost = res8.data
    // }
   
    
  },
  
};
</script>
