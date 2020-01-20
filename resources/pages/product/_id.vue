<template>
        <div>
        <section class="rd second-section bg profile-second-section">
            <div class="container">
                <div class="section-content">
                    <div class="page-content-title">
                        <h1 class="header-text"><strong>{{productData.name}}</strong></h1> 
                        <p>{{productData.category}}</p>
                    </div>
                    <div class="product-profile">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="product-thumb-data">
                                    <!-- <div class="product-thumb">
                                        <figure>
                                            <img src="/image/thumb.jpg" alt="">
                                        </figure>
                                    </div> -->
                                    <div class="profile-thumb">
                                    <figure>
                                       <div class="Details_profie_img_div" v-if=" userData.id==user_id && isEdit" >
                                            <Upload
                                            ref="upload"
                                            type="drag"
                                            :with-credentials="true"
                                            :on-success="profileHandleSuccess"
                                            :format="['jpg','jpeg','png']"
                                            :max-size="2048"
                                            :action="'/app/user/updateProductProfileImage/'+productData.id">
                                            <!-- action="/app/uploadServiceImages"> -->
                                            <div  >
                                            <img :src="productData.img" alt=""  style="width: 140px;height: 150px;">
                                                <p   class="Details_profie_img_edit">Upload Image</p>
                                            </div>
                                        </Upload>
                                            
                                        </div>
                                        <div class="Details_profie_img_div" v-else >
                                            <div >
                                            <img :src="productData.img" alt=""  style="width: 140px;height: 150px;">
                                            </div>
                                        </div>
                                        
                                    </figure>
                                </div>
                                    <div class="product-data">
                                        <div class="product-data-indi">
                                            <div class="product-data-icon" v-if="!isEdit" >
                                                <span><i class="fas fa-map-marker-alt"></i></span>
                                            </div>
                                            <div class="product-data-des" v-if="!isEdit" >
                                                <h2>{{productData.address}}</h2>
                                                <div class="badge-review">
                                                    <p>
                                                        <span :class="(averageRating>0)? 'high rating-bg' : ''" ><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>1)? 'high rating-bg' : ''" ><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>2)? 'high rating-bg' : ''" ><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>3)? 'high rating-bg' : ''" ><i class="fas fa-star"></i></span>
                                                        <span :class="(averageRating>4)? 'high rating-bg' : ''" ><i class="fas fa-star"></i></span>
                                                        &nbsp;<small>{{productData.__meta__.reviewsall_count}} reviews</small></p>
                                                </div>
                                                <!-- <p>
                                                    1115 South San Pedro St <br> Los Angeles, CA 90015 <br> (844) 310-2674
                                                </p> -->
                                            </div>

                                            <div class="edit_inputs" v-else >
                                                <div class="edit_inputs_main">
                                                    <Input v-model="formData.name" placeholder="Enter something..."/>
                                                </div>

                                                <div class="edit_inputs_main">
                                                    <Select style="width:100%;" v-model="formData.category" placeholder="Select Category..."  >
                                                        <Option value="Food" >Food</Option>
                                                        <Option value="Food" >Cloth</Option>
                                                        <Option value="Food" >Service</Option>
                                                    </Select>
                                                </div>
                                                <div class="form-group">
                                                    <InputNumber 
                                                        style="width: 100%"
                                                        placeholder="Enter Price..." 
                                                        :min="1" v-model="formData.price">
                                                    </InputNumber>
                                                </div>

                                                <div class="edit_inputs_main">
                                                    <Input v-model="formData.address" placeholder="Enter Address something..."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-data-indi product-data-indi-2" v-if=" userData.id==user_id && !isEdit">
                                            <div class="product-data-icon">
                                                <span><i class="fas fa-calendar-week"></i></span>
                                            </div>
                                            <div class="product-data-des">
                                                <!-- <p><strong>From:</strong> Saturday, Jun 1, 2:30 pm</p>
                                                <p><strong>To:</strong> 10:00 pm</p>
                                                <p><a href="">Add to calender <span><i class="fas fa-caret-down"></i></span></a></p> -->
                                                <div class="edit_inputs_main">
                                                    <Button type="primary" @click="editOn" >Edit Product</Button>
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

        <section class="third-section user-details-section product-profile-section">
            <div class="container">
                <div class="section-content">
                    <div class="profileProdut-sec">
                        <div class="row">
                            <div class="profilePrduct-content">
                                <div class="col-md-9 col-sm-12 profile-full-box">
                                    <div class="profile-content-des">
                                        <template v-if="!isEdit" >
                                            <h3>Description:</h3>
                                            <p>{{productData.description}}</p>
                                        </template>
                                       

                                        <div class="edit_inputs" v-else >
                                            <div class="edit_inputs_main">
                                                <Input type="textarea" v-model="formData.description" :rows="4" placeholder="Enter something..." />
                                            </div>

                                             <div class="edit_inputs_main">
                                                <Button type="primary" @click="legendUpdate" >Save Changes</Button>
                                            </div>
                                        </div>

                                        <!-- <div class="profile-content-des-inner">
                                            <span></span>
                                            <p class="inner-title">About lorem:</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                            <p class="inner-link">Learn more: <a href="">google.com</a></p>
                                        </div>
                                        <div class="profile-content-des-inner">
                                            <span></span>
                                            <p class="inner-title">About lorem:</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div class="profile-content-des-inner">
                                            <span></span>
                                            <p class="inner-title">About lorem:</p>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                        <div class="profile-flag">
                                            <span><i class="fas fa-flag"></i></span>
                                        </div>
                                        <div class="profile-content-discuss">
                                            <div class="profile-content-discuss-header">
                                                <h3>Discuss this event</h3>
                                                <p><span><i class="fas fa-envelope"></i></span> Email me about updates</p>
                                                <span class="inner-left-icon"><i class="fas fa-arrow-down"></i></span>
                                            </div>
                                            <div class="profile-content-discuss-inner">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="media">
                                                            <div class="media-left">
                                                                <img class="media-object" src="/image/80.png" alt="">
                                                            </div>
                                                            <div class="media-body">
                                                                <p><strong><a href="">Franny A.</a></strong></p>
                                                                <small><strong>San Francisco Bay Area, CA</strong></small>
                                                                <p><span><i class="fas fa-male"></i>&nbsp;856</span><span><i class="fas fa-male"></i>&nbsp;1304</span><span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span>
                                                            </p></div>
                                                        </div>   
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="inner-description">
                                                            <div class="idescription">
                                                                <p>Seriously, I'm so glad I live one minute away from this new gem in North Beach. They've been open for less than a month but I've been here about five times already. I always get the wet burrito with carne asada, Spanish rice, pinto beans, and their super </p>
                                                                <span>8 hours ago</span>
                                                            </div>
                                                            <div class="profile-flag">
                                                                <span><i class="fas fa-flag"></i></span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="profile-content-discuss-header profile-content-discuss-header-1">
                                                <p><span><i class="fas fa-envelope"></i></span> Email me about updates</p>
                                                <span class="inner-left-icon"><i class="fas fa-arrow-up"></i></span>
                                                <button class="inner-btn">Post</button>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="reviewComment card-box" v-if=" isLoggedIn && user_id !== userData.id">
                                        <h2>Ask the Community</h2>
                                        <hr>
                                        <div class="comment-individual">
                                            <Button @click="askModal=true" >Ask a question</Button>
                                        </div>
                                    </div>
                                    <div class=" askCommunity card-box mt-20"  >
                                        <h2>Ask the Community</h2>
                                        <template v-if="totalQuestion>0 && isLoading==false " >
                                            <div class="question-set" v-for="(item,index) in questionList" :key="index" >
                                                <div class="comment-individual">
                                                    <div class="media">
                                                        <div class="media-left">
                                                            <p><strong>Question:</strong></p> 
                                                        </div>
            
                                                        <div class="media-body">
                                                            <p>{{item.content}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p v-if="totalQuestion==1" class="all-que"><a @click="$router.push(`/product_question_details/${productData.id}/${item.id}`)" >View question details</a></p>
                                            </div>
                                            <p v-if="totalQuestion>1" class="all-que"><nuxt-link :to="{name: 'productQuestionlist-id', params: { id:productData.id } }" >See all {{totalQuestion}} questions for {{productData.name}}</nuxt-link></p>
                                        </template>
                                        
                                        <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>

                                        <h4 v-else class="noReview" >No question yet!</h4>
                                    </div>
                                    <div class="reviewItem" style="margin-top: 0;">
                                        
                                        <div class="searchByReview">
                                            <div class="card-box">
                                                <h2>Recommended Reviews <span>for {{productData.name}}</span></h2>
                                                <hr>
                                                <div class="searchReview" style="margin-top: 15px;">
                                                    <input type="text" class="form-control" v-model="reviewSearch" placeholder="Search within the reviews">
                                                    <button @click="SearchReviewResult" ><i class="fas fa-search"></i></button>
                                                </div>
                                            
                                            <div class="star-review" v-if=" user_id !== userData.id" >
                                                <p>
                                                    <span :class="(reviewStar>0)? 'high rating-bg' : ''" @click="reviewPageWith(1)" ><i class="fas fa-star"></i></span>
                                                    <span :class="(reviewStar>1)? 'high rating-bg' : ''" @click="reviewPageWith(2)" ><i class="fas fa-star"></i></span>
                                                    <span :class="(reviewStar>2)? 'high rating-bg' : ''" @click="reviewPageWith(3)" ><i class="fas fa-star"></i></span>
                                                    <span :class="(reviewStar>3)? 'high rating-bg' : ''" @click="reviewPageWith(4)" ><i class="fas fa-star"></i></span>
                                                    <span :class="(reviewStar>4)? 'high rating-bg' : ''" @click="reviewPageWith(5)" ><i class="fas fa-star"></i></span>
                                                </p>
                                                <hr>
                                                <p class="moreD" ><nuxt-link :to="{name: 'addreview-id', params: { id:productData.id } }">Start your review for <strong>{{productData.name}}</strong></nuxt-link>
                                                    
                                                </p>
                                            </div>
                                            </div>
                                             <template v-if="reviews.length>0 && isLoading==false " >
                                            <div class="review-final" v-for="(item,index) in reviews" :key="index" >
                                                <div class="row" style="margin-right: 15px;">
                                                    <div class="review-final-card">
                                                        <div class="col-md-2 col-sm-2">
                                                        <div class="media">
                                                            <div class="media-left" style="display: block;">
                                                                <img class="media-object profile_picU" :src="item.reviwer.img" alt="">
                                                            </div>
                                                            <div class="media-body" style="display: block;">
                                                                <p><strong>{{item.reviwer.firstName}}</strong></p>
                                                                <small><strong>{{item.reviwer.address}}</strong></small>
                                                                <p>
                                                                    <span><i class="fas fa-star"></i>&nbsp;{{item.reviwer.__meta__.totalreviewbyuser}}</span>
                                                                    <!-- <span><i class="fas fa-male"></i>&nbsp;1304</span>
                                                                    <span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span> -->
                                                                    </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10 col-sm-10">
                                                        <div class="read-review">
                                                            <div class="star-review">
                                                                <p>
                                                                    <span :class="(item.rating>0)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>1)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>2)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>3)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    <span :class="(item.rating>4)? 'high rating-bg' : ''"><i class="fas fa-star"></i></span>
                                                                    &nbsp;<small>{{item.created_at}}</small>
                                                                </p>
                                                            </div>
                                                            <p>{{item.content}}</p>
                                                            <div class="profile-carousel"  style="margin-top: 20px;" v-if="item.images.length>0" >
                                                                <template>
                                                                <Carousel autoplay v-model="value2" loop>
                                                                    <CarouselItem v-if="item.images[0]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[0].url"  style="width: 100%;"></div>
                                                                    </CarouselItem >
                                                                    <CarouselItem v-if="item.images[1]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[1].url"  style="width: 100%;"></div>
                                                                    </CarouselItem>
                                                                   <CarouselItem v-if="item.images[2]">
                                                                        <div class="demo-carousel" style="width: 100%; height: 350px;"><img :src="item.images[2].url"  style="width: 100%;"></div>
                                                                    </CarouselItem>
                                                                </Carousel>
                                                            </template>
                                                            </div>
                                                            <!-- <div class="profile-gallary">
                                                                <ul>
                                                                    <li  ><a :href="item.images[0].url"><img ></a></li>
                                                                    <li v-if="item.images[1]"><a :href="item.images[1].url"><img :src="item.images[1].url"></a></li>
                                                                    <li v-if="item.images[2]"><a :href="item.images[2].url"><img :src="item.images[2].url"></a></li>
                                                                </ul>
                                                            </div> -->
                                                            <p id="resultReview" style="margin-top: 20px;"><strong>Was the review...?</strong></p>
                                                            <ul class="section-item-review">
                                                                <template v-if="item.imos" >
                                                                    <li  @click="reviewImo('cool',index,item.imos)" :class="(item.imos.acool)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Cool&nbsp;&nbsp;{{item.imos.cool}}</li>
                                                                    <li  @click="reviewImo('funny',index,item.imos)" :class="(item.imos.afunny)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Funny&nbsp;&nbsp;{{item.imos.funny}}</li>
                                                                    <li  @click="reviewImo('useful',index,item.imos)" :class="(item.imos.auseful)? 'imo_back' : ''" ><i class="fas fa-grin-beam"></i>&nbsp;Useful&nbsp;&nbsp;{{item.imos.useful}}</li>
                                                                </template>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                            <h4 v-else-if="isLoading==true" class="noReview" >Content is Loading...</h4>
                                            <h4 v-else class="noReview" >No Review for {{productData.name}}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card-box">
                                        <div class="intersted-part">
                                        <h3>Are you interested?</h3>
                                        <button class="inner-btn" @click="$router.push(`/product_review/${productData.id}`)" v-if=" user_id !== userData.id"  ><i class="fas fa-star"></i>&nbsp;Write a Review</button>
                                    </div>
                                    <div class="want-part">
                                        <h3>Who wants in? <span>36 responses</span></h3>
                                        <div class="media">
                                            <div class="media-left">
                                                <img class="media-object" src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <p><strong><a href="">Franny A.</a></strong></p>
                                                <p><span><i class="fas fa-male"></i>&nbsp;856</span><span><i class="fas fa-male"></i>&nbsp;1304</span><span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span>
                                            </p></div>
                                        </div> 
                                        <div class="media">
                                            <div class="media-left">
                                                <img class="media-object" src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <p><strong><a href="">Franny A.</a></strong></p>
                                                <p><span><i class="fas fa-male"></i>&nbsp;856</span><span><i class="fas fa-male"></i>&nbsp;1304</span><span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span>
                                            </p></div>
                                        </div>
                                        <p><a href="">See all</a></p>
                                    </div>
                                    <div class="want-part">
                                        <h3>Submitted by</h3>
                                        <div class="media">
                                            <div class="media-left">
                                                <img class="media-object" src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <p><strong><a href="">Franny A.</a></strong></p>
                                                <p><span><i class="fas fa-male"></i>&nbsp;856</span><span><i class="fas fa-male"></i>&nbsp;1304</span><span><span><i class="fas fa-camera"></i>&nbsp;1304</span></span>
                                            </p></div>
                                        </div> 
                                    </div>
                                    <div class="nearby-part">
                                        <h3>Near by business</h3>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review">
                                                    <p><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                </div>
                                                <a href="">Italian, Breakfast & Brunch</a>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">The Grubbies</a></h4>
                                                <div class="star-review">
                                                    <p><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class=""><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                                </div>
                                                <a href="">Italian, Breakfast & Brunch</a>
                                            </div>
                                        </div>
                                        <p><a href="">See all</a></p>
                                    </div>
                                    <div class="nearby-part">
                                        <h3>Other events this week</h3>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">"Meet The Makers" Happaning in May!</a> <span>Saturday May 4, 12:20 pm - Friday May 31, 8:00 pm</span></h4>
                                                <small>142 are interested</small>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left">
                                                <img src="/image/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h4><a href="">"Meet The Makers" Happaning in May!</a> <span>Saturday May 4, 12:20 pm - Friday May 31, 8:00 pm</span></h4>
                                                <small>142 are interested</small>
                                            </div>
                                        </div>
                                        <p><a href="">See all</a></p>
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
           <div slot="footer">
                <Button  @click="askModal=false">Cancle</Button>
                <Button type="info" @click="askQuestion">Ask</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rpagination:{},
            isEdit:false,
            formData:{
                name:'',
                address:'',
                category:'',
                description:'',
                price:''
            },
            img_index:0,
            user_id:0,
            addImageModal:false,
            defaultList: [],
            imgName: '/uploads/default.png',
            askModal:false,
            galleryModal:false,
            answerModal:false,
            askData:{
                content:'',
            },
           
            tempAIndex:'',
            atrrtributepoint:'',
            reviews:[],
            questionList:[],
            hours:[],
            galleryIndex:0,
            totalQuestion:0,
            reviewSearch:'',
            reviewStar:0,
            isLoading:true,
            page:1,
            str:'',
        

        }
    },
    methods:{
        profileHandleSuccess(){
             this.productData.img = res.file 
        },
        setPage(index){
            this.page = index
            this.SearchReviewResult()
        },
        reviewPageWith(num){
            this.reviewStar = num
            setTimeout(()=>{ this.$router.push(`/product_review/${this.productData.id}?star=${this.reviewStar}`) }, 1000)
            
        },
        async SearchReviewResult(){
           
            const res = await this.callApi('get', `/app/ProductReview/${this.$route.params.id}?page=${this.page}&str=${this.reviewSearch}`)
            if(res.status===200){
                this.reviews = res.data.data
                this.rpagination = res.data
                delete this.rpagination.data
            }
            else{
                this.swr()
            }

        },
        galleryModalOn(index){
            if(this.uploadList[index]){
                 this.galleryIndex = index
                this.galleryModal = true
            }
        },
        async deleteImage(){
            if(!confirm("Are you sure to delete this Image")){
                return;
            }

            let ob = {
                id: this.uploadList[this.galleryIndex].id
            }
            const res = await this.callApi('delete','/app/deleteImage',ob)
            if(res.status==200){
                this.uploadList.splice(this.galleryIndex,1)
                this.i("image has been deleted!")
            }
            else if (res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }


        },
        prevImage(){
            if(this.img_index>0){
                this.img_index--;
            }
        },
        nextImage(){
            if(this.img_index+4<this.uploadList.length){
                this.img_index++;
            }
        },
        prevModalImage(){
            if(this.galleryIndex>0){
                this.galleryIndex--;
            }
        },
        nextModalImage(){
            if(this.galleryIndex+1<this.uploadList.length){
                this.galleryIndex++;
            }
        },
        async  storePulse(flag){
           
            let pulseData = {
                legend_id:this.productData.id,
                
            }
            if(flag == 1) pulseData.good = 1
            else pulseData.bad = 1
            const res = await this.callApi('post','pulses',pulseData)
            if(res.status == 200){
                if(flag==1) {
                    this.healthPulse.GoodCount +=1
                    this.s('you up-voted this user! ')
                }
                else {
                     this.healthPulse.BadCount +=1
                     this.i('you down-voted this user!')
                }
            }
            else if(res.status==401){
                this.i(res.data.message)
            }
            else{
                this.swr();
            }
        },
        openImageModal(){
            if(this.uploadList.length>0) this.imgName = this.uploadList[(this.uploadList.length-1)].url

            this.addImageModal=true
        },
        async answerModalOpen(item,index){
            this.answerData.question_id = item.id
            this.tempAIndex = index
            this.answerModal = true

        },
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
            this.askData.product_id = this.productData.id
            const res = await this.callApi('post','/storeProductquestions',this.askData)
            if(res.status===200){
                this.s("Your question has been posted successfully!")
                if(this.questionList.length<=0){
                    this.questionList.push(res.data)
                    this.totalQuestion++
                    this.askModal = false
                }
                else this.questionList.unshift(res.data)
                this.askModal = false
            }
            else{
                this.swr();
            }

        },
        async reviewImo(imo,index,imoItem){
            if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.$router.push('/login');
                return
            }
            // console.log(this.reviews[index])
            // return
            let imoData = {
                review_id:this.reviews[index].id,
            }
            imoData[imo] = 1
            const res = await this.callApi('post','/stoteProductReviewImo',imoData)
            if(res.status===200){
                this.s("you marked this review as "+imo+ "!")
                if(imo=='cool'){
                    imoItem.cool++
                    imoItem.acool=true
                }
                else if(imo=='funny'){
                    imoItem.funny++
                    imoItem.afunny=true
                }
                else if(imo=='useful'){
                    imoItem.useful++
                    imoItem.auseful = true
                }
               
                
            }
            else{
                this.swr();
            }

        },
        
        async editOn(){
            this.formData.name = this.productData.name
            this.formData.address = this.productData.address
            this.formData.category = this.productData.category
            this.formData.description = this.productData.description
            this.formData.price = this.productData.price
            this.isEdit = true
        },
        async legendUpdate(){
            if(this.formData.name == ''|| this.formData.address =='' || this.formData.category == '' || this.formData.description == ''|| this.formData.price == ''){
                this.i("All fields must be filled !")
                console.log('All fields must be filled !')
                return;
            }
            this.formData.id = this.productData.id
            const res = await this.callApi('put',`/products/${this.productData.id}`,this.formData)
            if(res.status===200){

                this.productData.name = this.formData.name
                this.productData.address = this.formData.address
                this.productData.category = this.formData.category
                this.productData.description = this.formData.description
                this.productData.price = this.formData.price
                this.isEdit=false
                this.s('Product infomation updated!')
            }
            else{
                this.swr();
            }
        },
        async uploadsPhotos(){
            if(this.uploadList.length<1){
                this.i("you didn't select any photos")
                return
            }

            const res = await this.callApi('post','/uploadLegendPhotos',{uploadList: this.uploadList})
            if(res.status===200){
                this.s("Images have been uploaded successfully!")
                this.addImageModal = false
            }
            else{
                this.swr();
            }
        },
        handleView (item) {
                this.imgName = item;
        },
        handleRemove (index) {
            this.uploadList.splice(index, 1);
        },
        handleSuccess (res, file) {
            console.log(res)
            let ob = {
                url:res.file
            }
            this.imgName = res.file
            this.uploadList.push(ob)
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
        // handleBeforeUpload () {
        //     const check = this.uploadList.length < 3;
        //     if (!check) {
        //         this.$Notice.warning({
        //             title: 'Up to 3 pictures can be uploaded.'
        //         });
        //     }
        //     return check;
        // },
        getImoName(name,index){
           return 
           
        }
    },
    async asyncData({app, store,redirect, params}){
        try {
            let {data} = await app.$axios.get(`/products/${params.id}`)
          
            return{
                productData : data.product,
                averageRating : (data.product.avgRating== null)? 0 : data.product.avgRating.averageRating ,
                userData : data.user,
            }
		}catch (error) {
            console.log(error)
             return redirect('/')
		}
    },
   async created(){
         if(this.isLoggedIn) this.user_id = this.authInfo.id

         const [ res2, res4] = await Promise.all([
            this.callApi('get', `/app/getAdditionProductInfo/${this.$route.params.id}`),
            this.callApi('get', `/app/ProductReview/${this.$route.params.id}`),
        ])
        if( res2.status===200 && res4.status === 200){
            
            this.reviews = res4.data.data
            this.rpagination = res4.data
            delete this.rpagination.data
            this.questionList = res2.data.questions
            this.totalQuestion = res2.data.__meta__.totalQuestion
            this.isLoading = false
            
        } else{
            this.swr()
            this.isLoading = false
        }

    }

}
</script>

<style>
.profile_picU {
  width: 40px;
}

.pageOption:hover .menu_dropDown_on {
  display: block;
}

.reviewItem .searchByReview .searchReview button {
    padding: 8px 12px;
}
</style>
