<template>
         <div class="pt-120">
        
        <!-- Header-->
        <section class="rd second-section bg-white">
            <div class="container">
                <div class="section-content">
                    <div class="review-content rem-review-content">
                        <div class="breadcrumbs">
                            <ul class="no-border">
                                <li><nuxt-link :to="{name: 'school_coach-id', params: { id:legend_id } }">{{legendData.name}}</nuxt-link></li>
                                <li><span><i class="fas fa-chevron-right"></i></span>Ask the Community</li>
                            </ul>
                        </div>

                        <div class="row">
                            <div class="col-md-8 col-sm-8">
                                <div class="reviewComment no_margin border-right" style="margin-bottom: 30px;">
                                    <div class="comment_title border-bottom mb-20">
                                        <h2>Ask the Community</h2>
                                        <!-- <div class="sortTag no_pos">Sort by&nbsp;<strong>Popular&nbsp;
                                            <span><i class="fas fa-sort-down"></i></span>
                                            <ul>
                                                <li><a href="">Popular</a></li>
                                                <li><a href="">Most Answerd</a></li>
                                                <li><a href="">Newest First</a></li>
                                            </ul>
                                            </strong>
                                        </div> -->
                                    </div>
                                    <div class="question-main-bo">
                                        <div class="_questions no-border">
                                            <!-- Items -->
                                            <div class="_que_title_main no-border" v-for="(item,index) in questionList" :key="index" >
                                                <div class="_que_pro">
                                                    <img class="_que_img" :src="item.user.img" alt="" title="">
                                                </div>

                                                <div class="_que_details">
                                                    <p class="_que_details_title" @click="$router.push(`/question_details/${item.id}`)">{{item.content}}</p>
                                                    <p class="_que_details_text">By <span class="_color_user" @click="$router.push(`/flanker/${item.user.id}`)" >{{item.user.firstName}} {{item.user.lastName}} </span> Asked {{item.created_at}}</p>
                                                </div>

                                                <div class="_que_details_time">
                                                    <p class="_que_details_titme_text"> {{item.__meta__.answers_count}} <i class="fas fa-sticky-note"></i></p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                        </div>
                                    </div>
                                     <div class="text-center " v-if="rpagination.total>0">
                                            <div class="pagi-1" style="border-top: 1px solid #e6e6e6;">
                                                <Page :current="rpagination.page" :total="rpagination.total" @on-change="setPage($event)" :page-size="rpagination.perPage" class="no-border" />
                                            </div>
                                    </div>
                                    <div class="question-button" style="margin-bottom: 20px;">
                                        <p>Don’t see your question? Ask away!</p>
                                        <button @click="askModal=true" class="_1btn" >Ask a question</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">

                                <div class="view-sect" v-if="legendData.school">
                                    <div class="view-media">
                                        
                                        <div class="media" style="display: flex; flex-flow: row;"  >
                                            <div class="media-left" style="flex: 0 0 110px; width: 110px;">
                                                <img style="width: 100%" class="profile_picU" :src="legendData.school.logo" alt="">
                                            </div>
                                            <div class="media-body new-med" style="flex: 75%; width: 100%;">
                                                <h4><nuxt-link :to="{name: 'school_coaches-id', params: { id:legend_id } }">{{legendData.name}}</nuxt-link></h4>
                                                <h5 style="margin-bottom: 5px;">{{legendData.school.sport}}</h5>
                                                <h5>{{legendData.school.schoolName}}</h5>
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(legendData.avg_rating>0)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(legendData.avg_rating>1)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(legendData.avg_rating>2)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(legendData.avg_rating>3)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(legendData.avg_rating>4)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        &nbsp;<small v-if="legendData.__meta__" class="review-number">{{(legendData.__meta__.allreview_count)? legendData.__meta__.allreview_count : 0}} reviews</small>
                                                    </p>
                                                    <h5>{{legendData.school.city}}/{{legendData.school.state}}</h5>
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
        <Modal title="Ask the Community" v-model="askModal"> 
           <div class="">
            <Form  :label-width="80">
              
               <FormItem label="Question">
                   <Input v-model="askData.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Ask your question ..."></Input>
               </FormItem>
            </Form>
           </div>
           <div class="_modal_footer" >
                <Button  @click="askModal=false">Cancel</Button>
                <Button style="margin-left:5px;" type="info" @click="askQuestion">Ask</Button>
            </div>
        </Modal>
         <Modal v-model="loginModal">
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            legend_id:'',
            loginModal:false,
            askModal:false,
            askData:{
                content:'',

            },
            formData:{
                email:'',
                password:'',
                remember: false,
            },
            legendData :{},
            userData:{},
            averageRating :0,
            healthPulse :{},
            rpagination:{},

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
        async askQuestion(){
            if(this.askData.content == ''){ 
                this.i('You question field is empty!')
                return
            }
            if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.loginModal = true
                return
            }
            this.askData.legend_id = this.legend_id
            this.askData.school_id = this.legendData.school.id
            this.askData.type = 'school'
            const res = await this.callApi('post','/questions',this.askData)
            if(res.status===200){
                this.s("Your question has been posted successfully!")
                let __meta__ = {
                    answers_count:0
                }
                res.data.__meta__ = __meta__
                 res.data.user = this.authInfo
                this.questionList.unshift(res.data)
                 this.askData.content = ''
                this.askModal = false
            }
            else{
                this.swr();
            }

        },
        setPage(index){
            this.page = index
            this.pageniateQuestion();
        },
         async pageniateQuestion(index){
            if(this.rpagination.page+index <=0 || this.rpagination.page+index > this.rpagination.lastPage){
                this.i("No more pages left!")
                return
            }
            this.rpagination.page = this.rpagination.page+index
           
            const res = await this.callApi('get', `questions/${this.$route.params.id}?page=${this.rpagination.page}&type=school`)
            if(res.status===200){
                this.questionList = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }
        },

    },
     async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/questions/${params.id}?type=school`)
          
            return{
                questionList : data.data,
                rpagination : data
            }
		}catch (error) {
            console.log(error)
            return redirect('/')
		}
    },
    async created(){
        this.legend_id = this.$route.params.id
         const [res1] = await Promise.all([
            this.callApi('get', `coaches/${this.$route.params.id}`),
        ])
        if(res1.status===200){ 
                this.legendData = res1.data.School
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

    .star-review p {
        margin-bottom: 10px;
    }

    .star-review p .rating-bg {
        font-size: 10px;
    }
</style>

