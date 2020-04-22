<template>
         <div class="pt-120">
        
        <!-- Header-->
        <section class="rd second-section bg-white">
            <div class="container">
                <div class="section-content">
                    <div class="review-content rem-review-content">
                        <div class="breadcrumbs">
                            <ul class="no-border">
                                <li><nuxt-link :to="{name: 'profile-id', params: { id:legend_id } }">{{legendData.name}}</nuxt-link></li>
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
                                    <!-- <div class="_questions _border_color no-border">
                                        <div class="_que_title_main _border_color no-border" v-for="(item,index) in questionList" :key="index" >
                                            <div class="_que_pro">
                                                <img class="_que_img" :src="item.user.img " alt="" title="">
                                            </div>

                                            <div class="_que_details">
                                                <p class="_que_details_title" @click="$router.push(`/question_details/${item.id}`)">{{item.content}}</p>
                                                <p class="_que_details_text">By <span class="_color_user" @click="$router.push(`/flanker/${item.user.id}`)" >{{item.user.firstName}} {{item.user.lastName}} </span> Created_at  with {{item.created_at}}</p>
                                            </div>

                                            <div class="_que_details_time">
                                                <p class="_que_details_titme_text"> {{item.__meta__.answers_count}} <i class="fas fa-sticky-note"></i></p>
                                            </div>
                                        </div>
                                    </div> -->
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
                                     <div class="text-center">
                                        <div class="pagi-1">
                                            <Page :current="rpagination.page" :total="rpagination.total" @on-change="setPage($event)" :page-size="rpagination.perPage" class="no-border"/>
                                        </div>
                                    </div>
                                    <div class="question-button" style="margin-bottom: 20px;">
                                        <p>Don’t see your question? Ask away!</p>
                                        <button @click="askModal=true" >Ask a question</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">

                                <div class="view-sect">
                                    <div class="view-media">
                                        <!-- <div class="media">
                                            <div class="media-left">
                                                <img src="image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Inn Above Tide</a></h4>
                                                <div class="star-review">
                                                    <p><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                    <span>$$</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>Japanese, Sushi Bars</span>
                                                    <span>Financial District</span>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="media" style="display: flex; flex-flow: row;"   >
                                            <div class="media-left" style="flex: 0 0 110px; width: 110px;">
                                                <!-- <img class="profile_picU" :src="(legendData.firstImage)? legendData.firstImage.url : '/uploads/default.png'" alt="">
                                                 -->
                                                 <img :src="legendData.img" alt="" style="width:100%;">
                                            </div>
                                            <div class="media-body" style="flex: 1 1 75%; width: 100%;">
                                                <h4><nuxt-link :to="{name: 'profile-id', params: { id:legend_id } }">{{legendData.name}}</nuxt-link></h4>
                                                <div class="star-review">
                                                    <p>
                                                        <span :class="(averageRating>0)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>1)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>2)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>3)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>4)? ' high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                        &nbsp;<small v-if="legendData.__meta__" class="review-number">{{(legendData.__meta__.totalReview_count)? legendData.__meta__.totalReview_count : 0}} reviews</small>
                                                    </p>
                                                    <span></span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>{{legendData.address}}</span>
                                                </div>
                                            </div>
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
        <Modal title="Ask the Community" v-model="askModal">
           <div class="pr-question-modal">
            <Form  :label-width="80">
              
               <FormItem label="Question">
                   <Input v-model="askData.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Ask your question ..."></Input>
               </FormItem>
            </Form>
           </div>
           <div class="_modal_footer" style="padding: 10px 15px 15px;">
                <Button  @click="askModal=false">Cancle</Button>
                <Button style="margin-left:5px;" type="info" @click="askQuestion">Ask</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            legend_id:'',
            askModal:false,
            askData:{
                content:'',
            },
            legendData :{},
            userData:{},
            averageRating :0,
            healthPulse :{},
            rpagination:{},

        }
    },
    methods:{
        async askQuestion(){
            if(this.askData.content == ''){
                this.i('You question field is empty!')
                return
            }
            if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.$router.push('/login');
                return
            }
            this.askData.legend_id = this.legend_id
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
           
            const res = await this.callApi('get', `questions/${this.$route.params.id}?page=${this.rpagination.page}`)
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
            let {data} = await app.$axios.get(`/questions/${params.id}`)
          
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
            this.callApi('get', `legends/${this.$route.params.id}`),
        ])
        if(res1.status===200){ 
                this.legendData = res1.data.legend
                this.averageRating = res1.data.averageRating
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

