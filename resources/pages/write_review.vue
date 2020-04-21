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
                                        <div class="review-form-item">
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
                                        <div class="single-coaches-left-title" style="cursor:pointer" @click="$router.push(`/scoach_review/${item.id}`)"><img src="/images/sticker-3.png" alt=""></div>
                                    </div>
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
        }
    },
    created(){
        this.searchCoach()
    }
}
</script>