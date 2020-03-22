<template>
    <div class="pt-120">
        <section class="rd second-section bg profile-second-section"> 
            <div class="container" v-if="userData.img">
                <div class="section-content">
                    <div class="profile-thumb-section">
                        <div class="row">
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <div class="profile-thumb">
                                    <figure>
                                        <img :src="userData.img" alt="">
                                    </figure>
                                </div>
                                <div class="profile-name">
                                    <h1>{{userData.firstName}} {{userData.lastName}} </h1>
                                    <p>{{userData.city}}, {{userData.state}}</p>
                                    <ul>
                                        <!-- <li><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span><strong>303</strong> Friends</span></li> -->
                                        <li><span class="high"><i class="fas fa-star"></i></span>&nbsp;&nbsp;<span><strong>{{userData.__meta__.reviews_count}}</strong> Reviews</span></li>
                                        <!-- <li><span><i class="fas fa-camera"></i><span>&nbsp;&nbsp;<strong>41</strong> Photos</span></span></li> -->
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-12">
                                <div class="user-profile-action">
                                    <ul>
                                        <!-- <li><a href=""><span><i class="fas fa-user-friends"></i></span><span>Add Friend</span></a></li> -->
                                        <!-- <li><a href=""><span><i class="fas fa-lightbulb"></i></span><span>Compliment</span></a></li> -->
                                        <!-- <li><a @click="messageModal = true"><span><i class="fas fa-envelope"></i></span><span>Send Message</span></a></li> -->
                                        <li><a @click="$router.push(`/profile_edit/`+authInfo.id)"><span><i class="fas fa-edit"></i></span><span>Edit Profile</span></a></li>
                                        <!-- <li><a href=""><span><i class="fas fa-user-friends"></i></span><span>Follow Bryan B.</span></a></li> -->
                                        <!-- <li><a href=""><span><i class="fas fa-user-friends"></i></span><span>Edit Profile</span></a></li> -->
                                        <!-- <li><a href="#user_review"><span><i class="fas fa-sync"></i></span><span>Simillar Reviews</span></a></li> -->
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
                                    <li :class="(tab == 1)? 'active-line' : ''" @click="tab=1"><a ><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span>Profile Overview</span></a></li>
                                    <!-- <li><a ><span><i class="fas fa-user-friends"></i></span>&nbsp;&nbsp;<span>Friends</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span>Profile Overview</span></a></li> -->
                                    <li :class="(tab == 2)? 'active-line' : ''" @click="tab=2"><a ><span class="high"><i class="fas fa-star"></i></span>&nbsp;&nbsp;<span>Reviews</span></a></li>
                                    <!-- <li><a href=""><span><i class="fas fa-camera"></i></span>&nbsp;&nbsp;<span>Business Photos</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="far fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Compliments</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="fas fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Tips</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="far fa-bookmark"></i></span>&nbsp;&nbsp;<span>Bookmarks</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="fas fa-bookmark"></i></span>&nbsp;&nbsp;<span>Collections</span></a></li> -->
                                </ul>
                            </div>
                        </div>
                        <div :class="(tab!=2)? 'col-md-6 col-sm-6 col-xs-12' : 'col-md-9 col-sm-9 col-xs-12'">
                            <div class="profile-review reviewItem">
                                <h2>Reviews</h2>
                                <div class="review-sort">
                                    <div class="sortTag noleft">Sort by :&nbsp;<strong>Date&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                        <!-- <ul>
                                            <li><a href="">Alphabatical</a></li>
                                            <li><a href="">Rating</a></li>
                                            <li><a href="">Date</a></li>
                                            <li><a href="">Useful</a></li>
                                            <li><a href="">Funnny</a></li>
                                        </ul> -->
                                        </strong>
                                    </div>
                                    <hr>
                                </div>
                                <div class="profile-fill-review" v-for="(item,index) in allReviews" :key="index" id >
                                    <div class="profile-item">
                                        <div class="media"  v-if="item.review_type == 'legend'" style="display: flex; flex-flow: row;">
                                            <div class="media-left" style="flex: 0 0 110px; width: 110px;">
                                                <img class="media-object" :src="item.legend.img" alt="" style="width: 100%;">
                                            </div>
                                            <div class="media-body">
                                                <p><strong><nuxt-link :to="`/local_instructor/${item.legend.id}`" >{{item.legend.name}}</nuxt-link></strong></p>
                                                <small>{{item.legend.sport}}</small>
                                                <p>
                                                    <!-- <small>1318 Grant Ave</small><br> -->
                                                    <small>{{item.legend.city}}, {{item.legend.state}}</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="media" style="display: flex; flex-flow: row;" v-if="item.review_type == 'school'">
                                            <div class="media-left">
                                                <img class="media-object" :src="item.school.logo" alt="">
                                            </div>
                                            <div class="media-body" id="user_review">
                                                 <p>Coach Name: <strong>{{item.coach.name}}</strong></p>
                                                <small>{{item.school.sport}}</small>
                                                <p>
                                                    <small>{{item.school.division}}</small><br>
                                                    <small>{{item.school.city}}, {{item.school.state}}</small>
                                                    <!-- <small>San Francisco, CA 94133</small> -->
                                                </p>
                                            </div>
                                        </div>
                                        <div class="read-review new-profile-review">
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
                                            <!-- <div class="profile-gallary new-profile-gallary">
                                                <ul>
                                                    <li><a href=""><img src="/images/1000s.jpg" alt=""></a></li>
                                                    <li><a href=""><img src="/images/300s (1).jpg" alt=""></a></li>
                                                    <li>
                                                        <a href=""><img src="/images/168s.jpg" alt="">
                                                            <div class="offscreen">
                                                                <span>Their wet burrito to go. It could possibly feed a small army. If you like spice like I do, go for the habanero sauce on top!</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> -->
                                            <!-- <p class="gallarymore"><a href="">See all photos from Kat L. for Adolfo’s</a></p> -->
    
                                            <!-- <p id="resultReview"><strong>Was the review...?</strong></p>
                                            <ul class="useful-li">
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li> 
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Funny</li>
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                            
                                                  <li @click="reviewImo('cool',index,item)"  :class="(item.imosall.cool >= 1)? 'active_imo' : ''" ><img src="/images/ic1.png" alt=""><span>Official</span> &nbsp;&nbsp;{{item.official}}</li>
                                                <li  @click="reviewImo('funny',index,item)" :class="(item.imosall.funny >= 1)? 'active_imo' : ''" ><img src="/images/ic2.png" alt=""><span>bravery Bagde</span> &nbsp;&nbsp;{{item.bravery}}</li>
                                                <li @click="reviewImo('useful',index,item)" :class="(item.imosall.useful >= 1)? 'active_imo' : ''" ><img src="/images/ic3.png" alt=""><span>Distinguished</span> &nbsp;&nbsp;{{item.distinguished}}</li>
                                            </ul> -->
                                            <div class="review-btn-sec">
                                                    <p>Was this review ...?</p>
                                                    <div class="review-btn">
                                                        <ul>
                                                            <li @click="reviewImo('cool',index,item)"   :class="(item.imosall.cool >= 1)? 'active_imo' : ''"    ><img src="/images/ic1.png" alt=""><span>Official</span> &nbsp;&nbsp;{{item.official}}</li>
                                                            <li  @click="reviewImo('funny',index,item)"   :class="(item.imosall.funny >= 1)? 'active_imo' : ''"  ><img src="/images/ic2.png" alt=""><span>Brevery Bagde</span> &nbsp;&nbsp;{{item.bravery}}</li>
                                                            <li @click="reviewImo('useful',index,item)"  :class="(item.imosall.useful >= 1)? 'active_imo' : ''"   ><img src="/images/ic3.png" alt=""><span>Distinguished</span> &nbsp;&nbsp;{{item.distinguished}}</li>
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
                                <div class="profile-fill-more">
                                    <p><a href="">More reviews by Kat L.</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12" v-if="tab!=2">
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
                                        <li  ><img src="/images/ic1.png" alt=""> <span>Official <strong>{{imosCount.useful}}</strong></span></li>
                                        <li  ><img src="/images/ic2.png" alt=""> <span>Brevery Bagde <strong>{{imosCount.funny}}</strong></span></li>
                                        <li  ><img src="/images/ic3.png" alt=""> <span>Distinguished <strong>{{imosCount.cool}}</strong></span></li>
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
                                    <p>Flanking Since</p>
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
          <Modal title="Send Message" v-model="messageModal">
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="signcont-left">
                           
                            <!-- <form v-on:submit.prevent> -->
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
                                
                            <!-- </form> -->
                            
                            <div class="group-item">
                                    <input type="submit" @click="messageSubmit" value="Send Message">
                            </div>
                        </div>
                    </div>
                </div>
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
            loginModal:false,
            user_id:0,
            editData:{
                firstName:'',
                lastName:'',
                address:'',

            },
            tab:1,
            allReviews:[],
            page:1,
            review_pagination:{},
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
            formData:{
                email:'',
                password:'',
                remember: false,
            },
             messageModal:false,
             message:{
                email:'',
                subject: '',
                message: '',
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
            return redirect('/')
		}
    },
    methods:{
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
            // this.messageModal = false
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
           async reviewImo(imo,index,imoItem){
             if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            let imoData = {
                review_id:this.allReviews[index].id,
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
                     this.s("you marked this review as Brevery Bagde  ")
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
            this.review_pagination = res.data
            delete this.review_pagination.data 
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
            this.callApi('get',`/app/userReview/${this.userData.id}`)
        ])
        if(res1.status == 200){
            this.allReviews = res1.data.data
            this.review_pagination = res1.data
            delete this.review_pagination.data 
        }
        if(this.userData.packType == 3){
             this.getAllUserProduct()
        }
       

        
    },

}
</script>