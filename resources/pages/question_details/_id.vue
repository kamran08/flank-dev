<template>
     <div class="pt-120">
        
        <!-- Header-->

        
        <section class="rd second-section bg-white" v-if="questionData" > 
            <div class="container">
                <div class="section-content">
                    <div class="review-content rem-review-content">
                        <div class="breadcrumbs">
                            <ul class="no-border">
                                <li v-if="questionData.type == 'school'"><nuxt-link :to="{name: 'school_coach-id', params: { id:legend_id } }">{{questionData.coach.name}}</nuxt-link></li>
                                <li v-else-if="questionData.type == 'legend'"><nuxt-link :to="{name: 'local_instructor-id', params: { id:legend_id } }">{{questionData.legend.name}}</nuxt-link></li>
                                <li  v-if="questionData.type == 'school'"><span><i class="fas fa-chevron-right"></i></span><nuxt-link :to="{name: 'coachquestionlist-id', params: { id:legend_id } }">Ask the Community</nuxt-link></li>
                                <li  v-if="questionData.type == 'legend'"><span><i class="fas fa-chevron-right"></i></span><nuxt-link :to="{name: 'questionlist-id', params: { id:legend_id } }">Ask the Community</nuxt-link></li>
                                <li><span><i class="fas fa-chevron-right"></i></span>Details</li>
                            </ul>
                        </div>
                        
                        <div class="row" >
                            <div class="col-md-8">
                                <div class="full-question border-right">
                                    <div class="ques">
                                        <h3>{{questionData.content}}</h3>
                                        <span><small>Asked by <a @click="$router.push(`/flanker/${questionData.user.id}`)" >{{questionData.user.firstName}} {{questionData.user.lastName}} </a> </small></span>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;<span><small>{{questionData.created_at}}</small></span>
                                        <span class="icon-flag"><i class="fas fa-flag"></i></span>
                                        <div class="bellow-link border-bottom">
                                            <p style="color: #ff0000;">{{questionData.allAnswers.length}} Answer</p>
                                            <!-- <div class="sortTag no_pos">Sort by&nbsp;<strong>Popular&nbsp;<span><i class="fas fa-sort-down"></i>
                                                        
                                            </span>
                                                <ul>
                                                    <li><a href="">Popular</a></li>
                                                    <li><a href="">Most Answerd</a></li>
                                                    <li><a href="">Newest First</a></li>
                                                </ul>
                                            </strong>
                                                
                                            </div> -->
                                        </div>
                                    </div>
                                    <template v-if="questionData.allAnswers.length" >
                                        <div class="comment-individual border-bottom" v-for="(item,index) in questionData.allAnswers" :key="index"  >
                                            <div class="media">
                                                <div class="media-left">
                                                    <img class="profile_picU" :src="item.user.img" alt="" style="width: 55px; height: 55px; border-radius: 10px;">
                                                </div>

                                                <div class="media-body" style="padding-top: 3px;">
                                                    <p style="color: #000; font-size: 16px; font-weight: 600;">{{item.user.firstName}} {{item.user.lastName}} </p>
                                                    <span><small style="font-size: 13px; margin-top: 3px;">Business Manager</small></span>
                                                    <br><br>
                                                    <p style="font-size: 15px; color: #000;">{{item.content}}</p>
                                                    <span><small style="font-size: 13px; margin-top: 3px;">{{item.created_at}}</small></span>
                                                </div>
                                                <!-- <div class="media-body-left">
                                                    <span><small>{{item.created_at}}</small></span>
                                                    <ul>
                                                        <li>Update</li>
                                                        <li>Delete</li>
                                                    </ul>
                                                </div> -->
                                            </div>
                                            <!-- <div class="check_review_button">
                                                <ul>
                                                    <li><button><span><i class="fas fa-arrow-up"></i></span> Helpful</button></li>
                                                    <li><button><span><i class="fas fa-arrow-down"></i></span> Not Helpful</button></li>
                                                </ul>
                                                <span class="icon-flag"><i class="fas fa-flag"></i></span>
                                            </div> -->
                                        </div>
                                    </template>
                                    

                                    <div class="question-button">
                                        <p>Provide an answer:</p>
                                        <button  @click="answerModal = true" >Post an Answer</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">

                                <div class="view-sect">
                                    <div class="view-media">
                                        <div class="media" v-if="questionData.type == 'legend'">
                                             <div class="media-left" style="flex: 0 0 110px; width: 110px;">
                                                <!-- <img style="width: 100%" class="profile_picU" :src="(questionData.legend)? questionData.legend: '/uploads/default.png'" alt=""> -->
                                                <img :src="questionData.legend.img" style="width: 100%;" alt="">

                                            </div>
                                            <div class="media-body new-med" style="flex:0 0 75%; width: 75%;">
                                                <h4><nuxt-link :to="{name: 'local_instructor-id', params: { id:legend_id } }">{{questionData.legend.name}}</nuxt-link></h4>
                                                <h5 style="margin-bottom: 5px;">{{questionData.legend.sport}}</h5>
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(questionData.legend.avg_rating>0)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.legend.avg_rating>1)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.legend.avg_rating>2)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.legend.avg_rating>3)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.legend.avg_rating>4)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                    </p>
                                                    <h5>{{questionData.legend.city}}/{{questionData.legend.state}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="questionData.type == 'school'" class="media" style="display: flex; flex-flow: row;"  >
                                            <div class="media-left" style="flex: 0 0 25%; width: 100%;">
                                                <img style="width: 100%" class="profile_picU" :src="(questionData.coach.school.logo)? questionData.coach.school.logo: '/uploads/default.png'" alt="">
                                            </div>
                                            <div class="media-body" style="flex: 75%; width: 100%;">
                                                <h4><nuxt-link :to="{name: 'profile-id', params: { id:legend_id } }">{{questionData.coach.name}}</nuxt-link></h4>
                                                <h5 style="margin-bottom: 5px;">{{questionData.coach.school.sport}}</h5>
                                                <h5>{{questionData.coach.school.schoolName}}</h5>
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(questionData.coach.avg_rating>0)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.coach.avg_rating>1)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.coach.avg_rating>2)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.coach.avg_rating>3)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(questionData.coach.avg_rating>4)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                    </p>
                                                    <h5>{{questionData.coach.school.city}}/{{questionData.coach.school.state}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="other-ques">
                                            <h4 class="border-bottom"  v-if="questionData.type == 'legend'">Other questions for {{questionData.legend.name}}</h4>
                                            <h4 class="border-bottom"  v-if="questionData.type == 'school'">Other questions for {{questionData.coach.name}}</h4>
                                            <template v-if="similarQuestion.length>0 && isLoading==false ">
                                                <div class="other-ques-det" v-for="(item,index) in similarQuestion " :key="index"  >
                                                    <p>{{item.content}}</p>
                                                    <p v-if="item.__meta__.answers_count>0">
                                                        <nuxt-link :to="{name: 'question_details-id', params: {  id:item.id } }" >View {{item.__meta__.answers_count}} answer</nuxt-link>
                                                    </p>
                                                    <p v-else >
                                                        <nuxt-link :to="{name: 'question_details-id', params: {  id:item.id } }" >View this question</nuxt-link>
                                                    </p>
                                                </div>
                                            </template>
                                            <template v-else-if="isLoading" >
                                                 <div class="other-ques-det"  >
                                                    <p>Content is loading...</p>
                                                </div>
                                            </template>
                                            <template v-else >
                                                <div class="other-ques-det"  >
                                                    <p>No similar Question!</p>
                                                </div>
                                            </template>
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="view-sect">
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
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <h2 class="isloadingClass" v-else >Content is Loading....</h2>
        <Modal title="Answer Question" v-model="answerModal">
           <div class="pr-question-modal">
            <Form  :label-width="80">
              
               <FormItem label="answer">
                   <Input v-model="answerData.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Ask your question ..."></Input>
               </FormItem>
            </Form>
           </div>
           <div class="_modal_footer">
                <Button  @click="answerModal=false">Cancel</Button>
                <Button style="margin-left:5px;" type="info" @click="answerQuestion">Answer</Button>
            </div>
        </Modal>
                <Modal title="Sign-In" v-model="loginModal">
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="signcont-left">
                           
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
                        </div>
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
            
            isLoading:true,
             loginModal:false,
            legend_id:0,
            legendData :{},
            userData:{},
            averageRating :0,
            similarQuestion:[],
            healthPulse :{},
            answerModal : false,
             answerData:{
                content:'',
            },
             formData:{
                email:'',
                password:'',
                remember: false,
            },
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
        async answerQuestion(){
            if(this.answerData.content == ''){
                this.i('You asnwerfield field is empty!')
                return
            }
            if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            this.answerData.question_id = this.questionData.id
            const res = await this.callApi('post','/answers',this.answerData)
            if(res.status===200){
                this.s("Your answer has been posted successfully!")
                res.data.user = this.authInfo
                this.questionData.allAnswers.unshift(res.data)
                this.answerData.content = ''
                this.answerModal = false
            }
            else{
                this.swr();
            }

        },
    },
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/answers/${params.id}`)
          
            return{
                questionData : data
            }
		}catch (error) {
            console.log(error)
             return redirect('/')
		}
    },
    async mounted(){
        this.questionData
        this.legend_id = this.questionData.legend_id
        this.legendData = this.questionData.legend_id
        let question_id = this.$route.params.id
        let tempOb = {
            legend_id:this.legend_id,
            question_id:question_id,
            type:this.questionData.type
        }
        
         const [res2] = await Promise.all([
            this.callApi('post', `/app/similarQuestion`,tempOb),
        ])
        if(res2.status===200){ 

                // this.legendData = res1.data.legend
                // this.userData = res1.data.user
           
                this.similarQuestion = res2.data.data
                this.isLoading = false
        } else{
            this.swr()
        }
    }
}
</script>

<style scoped>
     .profile_picU{
        width: 40px;
    }
    .isloadingClass{
        margin: 0 auto;
        text-align: center;
        padding: 20px;
    }
</style>
