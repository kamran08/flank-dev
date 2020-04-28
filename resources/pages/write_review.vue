<template>
    <div class="pt-120">
        <!--  ========== First Review Search Start =========== -->
        <div class="review-search-area padd_tb40">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-7 col-md-offset-2 col-sm-offset-1">
                        <div class="review-search_left">
                            <h2 class="first-review-title">Submit Your First Review</h2>
                            <p class="first-review-sub">At Flank, we believe that all coaches – strong and weak alike – must adhere to standards that govern bad coaching. The standards displayed by great coaches strengthens those who do, and isolates – and weakens – those who don’t. </p>
                            <div class="review-search">
                                <form v-on:submit.prevent>
                                    <div class="review-form-box">
                                        <div class="review-form-item" style="flex:1;">
                                            <div class="review-form-item-inner up-review-form-item-inner">
                                                <label for="">Find</label>
                                                <input type="text" v-model="txt" placeholder="Coach/School Name" style="padding-top: 0px !important; padding-bottom: 2px !important;">
                                            </div>
                                        </div>
                                        <!-- <div class="review-form-item">
                                            <div class="review-form-item-inner">
                                                <label for="">Near</label>
                                                <input type="text" v-model="placetxt" placeholder="Los Angeles, CA">
                                            </div>
                                        </div> -->
                                        <div class="review-form-item">
                                            <div class="review-form-item-inner review-form-item-inner-btn">
                                                <button class="review-search-icon" @click="searchCoach"> <span ><i class="fas fa-search"></i></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <input type="text" placeholder="Find">
                                    <input type="text" placeholder="Near: Los Angeles, CA.">
                                    <span class="review-search-icon"><i class="fas fa-search"></i></span> -->
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- <form v-on:submit.prevent>
                                    <input type="text" placeholder="Find" v-model="txt" >
                                    <input type="text" placeholder="Near: Los Angeles, CA." v-model="placetxt" >
                                    <span class="review-search-icon" @click="searchCoach" ><i class="fas fa-search"></i></span>
                                </form> -->
                    <div class="col-md-2 col-sm-3">
                        <div class="review-search_right">
                            <img src="/images/review_right.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  ========== First Review Search End =========== -->

        <!--  ========== Coaches Start =========== -->
        <div class="coaches-area padd_tb40" v-if="data.total>0" >
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <h2 class="coaches-title">Have you ever played for these coaches?</h2>
                        <div class="row write-review-row">
                            <!-- Item -->
                            <div class="col-sm-6 write-review-row-item" v-for="(item,index) in data.data" :key="index">
                                <div class="single-coaches">
                                    <div class="single-coaches-left">
                                        <!-- <div class="single-coaches-left-title" style="cursor:pointer" @click="$router.push(`/scoach_review/${item.id}`)"><img :src="item.school.logo" alt=""></div> -->
                                        <div class="single-coaches-left-title" style="cursor:pointer" @click="$router.push(`/school_coach/${item.id}`)"><img src="/images/sticker-3.png" alt=""></div>
                                    </div>
                                    <div class="single-coaches-right">
                                        <h4 class="single-coaches-right-title" style="cursor:pointer" @click="$router.push(`/school_coach/${item.id}`)">{{item.name}} - {{item.school.sport}}</h4>
                                        <p class="single-coaches-right-sub">{{item.school.schoolName}}, {{item.school.city}}/{{item.school.state}}</p>
                                        <ul class="review-star-list">
                                            <li :class="(item.avg_rating>0)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.avg_rating>1)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.avg_rating>2)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.avg_rating>3)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                            <li :class="(item.avg_rating>4)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                        </ul>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-sm-4 padding-right-0">
                                           <div class="single-coaches-left">
                                               <div class="single-coaches-left-title" style="cursor:pointer" @click="$router.push(`/scoach_review/${item.id}`)"><img :src="item.school.logo" alt=""></div>
                                               <div class="single-coaches-left-title" style="cursor:pointer" @click="$router.push(`/scoach_review/${item.id}`)"><img src="/images/sticker-3.png" alt=""></div>
                                           </div> 
                                        </div>
                                        <div class="col-sm-8 padding-left-0">
                                            <div class="single-coaches-right">
                                               <h4 class="single-coaches-right-title" style="cursor:pointer" @click="$router.push(`/scoach_review/${item.id}`)">{{item.name}} - {{item.school.sport}}</h4>
                                               <p class="single-coaches-right-sub">{{item.school.schoolName}}, {{item.school.city}}/{{item.school.state}}</p>
                                               <ul class="review-star-list">
                                                   <li :class="(item.avg_rating>0)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                                   <li :class="(item.avg_rating>1)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                                   <li :class="(item.avg_rating>2)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                                   <li :class="(item.avg_rating>3)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                                   <li :class="(item.avg_rating>4)? 'review-star-5' : ''"><span><i class="fas fa-star"></i></span></li>
                                               </ul>
                                           </div> 
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <h2 class="coaches-title">Have you ever played for those coaches?</h2>
                        <div class="row" >
                            <div class="col-sm-6" v-for="(item,index) in data.data" :key="index" >
                                <div class="single-coaches">
                                    <div class="row">
                                        <div class="col-sm-4 padding-right-0">
                                           <div class="single-coaches-left">
                                               <figure>
                                                   <img src="/images/defult_coach.png" alt="">
                                               </figure>
                                           </div> 
                                        </div>
                                        <div class="col-sm-8 padding-left-0">
                                            <div class="single-coaches-right">
                                               <h4 class="single-coaches-right-title" @click="$router.push(`/scoach_review/${item.id}`)"   >{{item.name}}</h4>
                                               <p class="single-coaches-right-sub">{{item.school.sport}}</p>
                                               <p class="single-coaches-right-sub">{{item.school.schoolName}}</p>
                                               <p class="single-coaches-right-sub">{{item.school.city}}/{{item.school.state}}</p>
                                               <ul class="review-star-list">
                                                   <li><span><i class="fas fa-star"></i></span></li>
                                                   <li><span><i class="fas fa-star"></i></span></li>
                                                   <li><span><i class="fas fa-star"></i></span></li>
                                                   <li><span><i class="fas fa-star"></i></span></li>
                                                   <li><span><i class="fas fa-star"></i></span></li>
                                               </ul>
                                           </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="coaches-area padd_tb40">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-1" v-if="txt != '' && data.total==0">
                        <div>
                            <div class="new-find-section" style="padding-left: 0;padding-right: 0;">
                                <div class="">
                                    <div class="new-find-inner">
                                        <h3>No Results for '{{txt}}'  near</h3>
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
                </div>
                       
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
                    
                        <!-- <Button class="mNext" @click="addNew.modal=false">Continue Browsing</Button> -->
                        <Button class="mNext" @click="closeModalsss">Continue Browsing</Button>
                </div>
            </div>
        </Modal>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            txt:'',
            placetxt:'',
            data:{
                totoal:0,
            },

            // new
               formData:{
                email:'',
                password:'',
                remember: false,
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
                is_active:0,
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
        }
    },
    methods:{
        async searchCoach(){
            const res = await this.callApi('get',`/app/searchCoachForReview?txt=${this.txt}&place=${this.placetxt}`)
            if(res.status == 200){
                this.data = res.data
            }
            else{
                this.swr();
            }
        },
         //   new coach add methods 

          closeModalsss(){
        //   this.i("ookk")
        
        
            this.step1Form={
                schoolName:'',
                city:'',
                division:'',
                state:'',
                sport:'',
                name:'',

            }
            this.step2Form={
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                
                password_confirmation :'',
                birthday:'',
                packType:''
            }
            this.step3Form={
                reviewFor:'', 
                school_id:'',
                review_type:'school',
                content:"",
                is_active:0,
                rating:''
            }
            this.newCoach={}
             this.addNew.modal=false
          this.addNew.step=1
          this.addNew.onHover=false
          this.addNew.isReg=true
      },
      async getSportsType2(){
          this.tab2=2
          const res = await this.callApi('get',`/app/getAllSportsByKey?key=${this.selectedSearchData.schoolName}`)
          if(res.status==200){
              this.searchSports = res.data
                

          }
        //   this.selectedSearchData.schoolName

        
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
    },
    async created(){
        this.searchCoach()

        const res = await this.callApi('get',`/app/getAllSports`)
        if(res.status==200){
            this.allSports = res.data
        }
    }
}
</script>