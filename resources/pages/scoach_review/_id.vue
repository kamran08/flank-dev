    <template>
       <div class="pt-120">
      <!-- ========== Topbar Start ============= -->
       <!-- <div class="sign-up-topbar main-review-topbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <div class="sign-up-logo">
                            <img src="/images/logo-new.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="top-write-review">
                            <h2>Write a Review</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- ========== Topbar End ============= -->

        <div class="write-review-area" style="font-family: CeraPro">
      <div class="container">
        <div class="row">
          <!-- Write Review Left -->
          <div class="col-md-6 col-md-offset-2 col-sm-7 col-sm-offset-1">
            <div class="write-review-left">
              <div class="write-review-title-area mar_b10">
                <h2 class="red-alert write-review-title">Coach {{coachData.name}}</h2>
                <p class="red-alert write-review-sub"><nuxt-link to="/guidlines">Read our Review Guidelines</nuxt-link></p>
              </div>
              <div class="write-review-box">
                <form v-on:submit.prevent>
                  <div class="write-review-box-inner">
                    <div class="write-review-box-top mar_b20">
                      <ul class="review-star-list" v-if="onHover">
                        <li
                          @mouseover="changeDataHover(1)"
                          @mouseleave="changeDataHoverLeave"
                          @click="changeOldRating(1)"
                          :class="(drating.index > 0)? drating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(2)"
                          @mouseleave="changeDataHoverLeave"
                          @click="changeOldRating(2)"
                          :class="(drating.index > 1)? drating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(3)"
                          @mouseleave="changeDataHoverLeave"
                          @click="changeOldRating(3)"
                          :class="(drating.index > 2)? drating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(4)"
                          @mouseleave="changeDataHoverLeave"
                          @click="changeOldRating(4)"
                          :class="(drating.index > 3)? drating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(5)"
                          @mouseleave="changeDataHoverLeave"
                          @click="changeOldRating(5)"
                          :class="(drating.index > 4)? drating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                      </ul>
                      <ul class="review-star-list" v-else>
                        <li
                          @mouseover="changeDataHover(1)"
                          @mouseleave="changeDataHoverLeave"
                          :class="(oldrating.index > 0)? oldrating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(2)"
                          @mouseleave="changeDataHoverLeave"
                          :class="(oldrating.index > 1)? oldrating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(3)"
                          @mouseleave="changeDataHoverLeave"
                          :class="(oldrating.index > 2)? oldrating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(4)"
                          @mouseleave="changeDataHoverLeave"
                          :class="(oldrating.index > 3)? oldrating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                        <li
                          @mouseover="changeDataHover(5)"
                          @mouseleave="changeDataHoverLeave"
                          :class="(oldrating.index > 4)? oldrating.class: ''"
                        >
                          <span>
                            <i class="fas fa-star"></i>
                          </span>
                        </li>
                      </ul>
                      <span
                        v-if="onHover"
                        style="font-weight: 400; color: #000; margin-left: 5px;font-family: CeraPro"
                      >{{(drating.text)? drating.text : 'Select your rating'}}</span>
                      <span
                        v-else
                        style="font-weight: 400; color: #000; margin-left: 5px;font-family: CeraPro"
                      >{{(oldrating.text)? oldrating.text : 'Select your rating'}}</span>
                    </div>
                    <!-- <ul class="write-review-box-cont mar_b20">
                                        <li>Your review help us to learn about good and bad coaches. </li>
                                        <li>You have been lied to. </li>
                                        <li>You have been lied to. </li>
                                        <li>You have been lied to. </li>
                                        <li>You have been lied to. </li>
                    </ul>-->
                    <div class="write-review-input-box">
                      <textarea
                        v-model="reviewData.content"
                        name
                        id
                        cols="30"
                        rows="10"
                        placeholder="Your review helps others learn about good/bad coaches                                                                            
                                                                                                                                                                                      Please don't review this coach if you are associated with the coach or staff.                                                                                                                   "
                      ></textarea>
                    </div>
                  </div>
                  <div class="play-coach">
                    <p
                      style="font-size: 14px; font-weight: 100;font-family: CeraPro"
                    >Do you actively play for this coach?</p>
                    <div class="play-coach-input">
                      <ul>
                        <li>
                          <input
                            type="radio"
                            id="coach1"
                            v-model="reviewData.is_active"
                            value="1"
                            name="coach"
                          />
                          <label for="coach1">Yes</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="coach2"
                            v-model="reviewData.is_active"
                            value="0"
                            name="coach"
                          />
                          <label for="coach2">No</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button class="block-btn post-btn" @click="postReview">Post Review</button>
                </form>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="review-sidebar" :class="(isActive)?'active':''">
              <span class="review-sidebar-arrow" :class="(isActive)?'active':''" @click="isActive=!isActive">
                <i class="fas fa-caret-right"></i>
              </span>
              <div class="review-sidebar_main">
                <h2 class="review-title">Recent Reviews</h2>
                <!-- Item -->
                <div class="review-item" v-for="(item,index) in reviews" :key="index"> 
                  <div class="review-item-top">
                    <div class="review-item-top-img">
                      <img :src="item.reviwer.img" alt />
                    </div>
                    <div class="review-item-top-cont">
                      <h3>{{item.reviwer | trimSecondLater }}</h3>
                      <p>Wrote a review</p>
                    </div>
                  </div>
                  <div class="review-item-star">
                    <ul class="review-star-list">
                      <li :class="(item.rating>0)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                      <li :class="(item.rating>1)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                      <li :class="(item.rating>2)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                      <li :class="(item.rating>3)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                      <li :class="(item.rating>4)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                      
                    </ul>
                    <span class="review-date">{{item.created_at | onlyDate}}</span>
                  </div>
                  <div class="review-item-cont-area">
                    <p class="review-item-cont">{{item.content}}</p>
                  </div>
                  <div class="review-item-btn-area">
                    <button class="review-item-btn" @click="$router.push(`/local_instructor/${$route.params.id}`)">- Read More</button>
                  </div>
                </div>
                <!-- Item -->
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- <div class="write-review-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-2 col-sm-7 col-sm-offset-1">
                        <div class="write-review-left">
                            <div class="top-write-review">
                                <h2>Write a Review</h2>
                            </div>
                            <div class="write-review-title-area mar_b10">
                                <h2 class="red-alert write-review-title">Coach {{coachData.name}}</h2>
                                <p class="red-alert write-review-sub">Read our review Guidelines</p>
                            </div>
                            <div class="write-review-box">
                                <form v-on:submit.prevent >
                                    <div class="write-review-box-inner">
                                        <div class="write-review-box-top mar_b20">
                                            <ul class="review-star-list" v-if="onHover" >
                                                <li  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(1)" :class="(drating.index > 0)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li   @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave" @click="changeOldRating(2)"  :class="(drating.index > 1)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li   @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave" @click="changeOldRating(3)"  :class="(drating.index > 2)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(4)" :class="(drating.index > 3)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"  @click="changeOldRating(5)" :class="(drating.index > 4)? drating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <ul class="review-star-list" v-else >
                                                <li  @mouseover="changeDataHover(1)"   @mouseleave="changeDataHoverLeave"   :class="(oldrating.index > 0)? oldrating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li   @mouseover="changeDataHover(2)"   @mouseleave="changeDataHoverLeave"   :class="(oldrating.index > 1)? oldrating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li   @mouseover="changeDataHover(3)"   @mouseleave="changeDataHoverLeave"   :class="(oldrating.index > 2)? oldrating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li  @mouseover="changeDataHover(4)"   @mouseleave="changeDataHoverLeave"   :class="(oldrating.index > 3)? oldrating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                                <li  @mouseover="changeDataHover(5)"   @mouseleave="changeDataHoverLeave"   :class="(oldrating.index > 4)? oldrating.class: ''"  ><span><i class="fas fa-star"></i></span></li>
                                            </ul>
                                            <span v-if="onHover">{{(drating.text)? drating.text : 'Select your rating'}}</span>
                                            <span v-else >{{(oldrating.text)? oldrating.text : 'Select your rating'}}</span>
                                        </div>
                                    <div class="write-review-input-box">    
                                        <textarea  v-model="reviewData.content" name="" id="" cols="30" rows="10" placeholder="Your review help us to learn about good and bad coaches"></textarea>   
                                    </div>
                                </div>
                                <div class="play-coach">
                                    <p>Do you actively play for this coach?</p>
                                    <div class="play-coach-input">
                                        <ul>
                                            <li><input type="radio" id="coach1" v-model="reviewData.is_active" value="1" name="coach"><label for="#coach1">Yes</label></li>
                                            <li><input type="radio" id="coach2" v-model="reviewData.is_active" value="0" name="coach"><label for="#coach2">No</label></li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="block-btn post-btn" @click="postReview">Post Review</button>
                               </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="review-sidebar">
                            <span class="review-sidebar-arrow">
                                 <i class="fas fa-caret-right"></i>
                            </span>
                            <div class="review-sidebar_main">
                                <h2 class="review-title">Recent Review</h2>
                                <div class="review-item" v-for="(item,index) in reviews" :key="index"> 
                                    <div class="review-item-top">
                                        <div class="review-item-top-img">
                                        <img :src="item.reviwer.img" alt />
                                        </div>
                                        <div class="review-item-top-cont">
                                        <h3>{{item.reviwer | trimSecondLater }}</h3>
                                        <p>Wrote a review</p>
                                        </div>
                                    </div>
                                    <div class="review-item-star">
                                        <ul class="review-star-list">
                                        <li :class="(item.rating>0)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(item.rating>1)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(item.rating>2)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(item.rating>3)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                                        <li :class="(item.rating>4)? 'review-star-red' : ''"><span><i class="fas fa-star"></i></span></li>
                                        
                                        </ul>
                                        <span class="review-date">{{item.created_at | onlyDate}}</span>
                                    </div>
                                    <div class="review-item-cont-area">
                                        <p class="review-item-cont">{{item.content}}</p>
                                    </div>
                                    <div class="review-item-btn-area">
                                        <button class="review-item-btn" @click="$router.push(`/school_coach/${$route.params.id}`)">- Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
         <Modal title="Sign-In" v-model="loginModal"> 
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
                          <nuxt-link   :to="'/signup?from=scoach_review/'+$route.params.id" > <button class="create-btn">Create your Flank account</button></nuxt-link>
                        
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            reviewData:{
                reviewFor:'',
                school_id:'',
                content:"",
                is_active:0,
                rating:'',
            },
            rating:0,
            defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
            ],
            imgName: '',
            visible: false,
            uploadList: [],
            reviews: [],
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
            loginModal:false,
            formData:{
                email:'',
                password:'',
                remember: false,
            },
            isActive:false,
            
            
        }
    },
     async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/app/schoolcoach/${params.id}`)
          
            if(data.SchoolCoachData == null){

                 return redirect('/')
            }
            return{
                coachData : data.SchoolCoachData,
                AttributeInfo : data.AttributeInfo,
            }
		}catch (error) {
            
            return redirect('/')
		}
    },
    methods:{
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
        changeOldRating(index){
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
        async postReview(){
             if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            if(this.reviewData.content == ''){
                this.i("You must write something in the review box!")
                return
            }
            if(this.reviewData.content == ''){
                this.i("You must write something in the review box!")
                return
            }
            if(this.drating.index == 0 ){
                this.i('Please rate this coach !')
                return;
            }
            this.reviewData.rating = this.oldrating.index
            this.reviewData.review_type = 'school'
            
           // this.reviewData.uploadList = this.uploadList
          //  this.reviewData.AttributeInfo = this.AttributeInfo

            const res = await this.callApi('post','/app/storeSchoolCoachReview',this.reviewData)
            if(res.status===200){
                this.s('Review posted successfully!')
               // this.$router.push('/profile/'+this.legendData.id)
                this.$router.push('/scoach_review/step1/'+res.data.id)
            }
            else{
                this.swr();
            }
            
        },
        handleView (item) {
                this.imgName = item;
                this.visible = true;
        },
        handleRemove (index) {
            this.uploadList.splice(index, 1);
        },
        handleSuccess (res, file) {
            console.log(res)
            this.uploadList.push(res.file)
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
        handleBeforeUpload () {
            const check = this.uploadList.length < 3;
            if (!check) {
                this.$Notice.warning({
                    title: 'Up to 3 pictures can be uploaded.'
                });
            }
            return check;
        }
         
    },
    async created(){
        console.log(this.$route.query.star)
        console.log('this.$route.query.star')
        if(this.$route.query.star){
             this.rating = parseInt(this.$route.query.star)
             this.reviewData.rating = parseInt(this.$route.query.star)
             this.changeDataHover(parseInt(this.$route.query.star))
        }
        this.reviewData.reviewFor = this.coachData.id 
        this.reviewData.school_id = this.coachData.school_id 
        const [res1] = await Promise.all([
            this.callApi('get', `/app/getCoachTopReviews/${this.$route.params.id}`),
        ])
        if(res1.status===200){
            this.reviews = res1.data
        } else{
            this.swr()
        }
    }
}
</script>