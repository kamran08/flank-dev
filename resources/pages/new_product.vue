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
                                        <li><a href=""><span><i class="fas fa-lightbulb"></i></span><span>Compliment</span></a></li>
                                        <li><a href=""><span><i class="fas fa-envelope"></i></span><span>Send Message</span></a></li>
                                        <!-- <li><a href=""><span><i class="fas fa-user-friends"></i></span><span>Follow Bryan B.</span></a></li> -->
                                        <li><a href=""><span><i class="fas fa-sync"></i></span><span>Simillar Reviews</span></a></li>
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
                                <h2>Kat's Profile</h2>
                                <ul>
                                    <li class="active-line"><a href=""><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span>Profile Overview</span></a></li>
                                    <!-- <li><a href=""><span><i class="fas fa-user-friends"></i></span>&nbsp;&nbsp;<span>Friends</span></a></li> -->
                                    <!-- <li><a href=""><span><i class="fas fa-male"></i></span>&nbsp;&nbsp;<span>Profile Overview</span></a></li> -->
                                    <li><a href=""><span class="high"><i class="fas fa-star"></i></span>&nbsp;&nbsp;<span>Reviews</span></a></li>
                                    <li><a href=""><span><i class="fas fa-camera"></i></span>&nbsp;&nbsp;<span>Business Photos</span></a></li>
                                    <li><a href=""><span><i class="far fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Compliments</span></a></li>
                                    <!-- <li><a href=""><span><i class="fas fa-lightbulb"></i></span>&nbsp;&nbsp;<span>Tips</span></a></li> -->
                                    <li><a href=""><span><i class="far fa-bookmark"></i></span>&nbsp;&nbsp;<span>Bookmarks</span></a></li>
                                    <!-- <li><a href=""><span><i class="fas fa-bookmark"></i></span>&nbsp;&nbsp;<span>Collections</span></a></li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="profile-review reviewItem">
                                <h2>Reviews</h2>
                                <div class="review-sort">
                                    <div class="sortTag noleft">Sort by :&nbsp;<strong>Date&nbsp;<span><i class="fas fa-sort-down"></i></span>
                                        <ul>
                                            <li><a href="">Alphabatical</a></li>
                                            <li><a href="">Rating</a></li>
                                            <li><a href="">Date</a></li>
                                            <li><a href="">Useful</a></li>
                                            <li><a href="">Funnny</a></li>
                                        </ul>
                                        </strong>
                                    </div>
                                    <hr>
                                </div>
                                <div class="profile-fill-review">
                                    <div class="profile-item">
                                        <div class="media">
                                            <div class="media-left">
                                                <img class="media-object" src="/images/80.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <p><strong><a href="">Adolfo’s</a></strong></p>
                                                <small><a href="">Mexican</a></small>
                                                <p>
                                                    <small>1318 Grant Ave</small><br><small>San Francisco, CA 94133</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="read-review new-profile-review">
                                            <div class="star-review">
                                                <p><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high rating-bg"><i class="fas fa-star"></i></span><span class="high"><i class="fas fa-star"></i></span>&nbsp;<small>3/3/2019</small></p>
                                            </div>
                                            <p>Lovely place. Lovely people. But most importantly, lovely food! </p>
                                            <p>Seriously, I'm so glad I live one minute away from this new gem in North Beach. They've been open for less than a month but I've been here about five times already. I always get the wet burrito with carne asada, Spanish rice, pinto beans, and their super yummy (and spicy!) habanero sauce. The burrito is HUGE and I get two meals out of it.Their chips and guac are delicious as well. </p>
                                            <p>The interior is spacious and they have quite a few tables for a small North Beach restaurant. </p>
    
                                            <div class="profile-gallary new-profile-gallary">
                                                <ul>
                                                    <li><a href=""><img src="/images/1000s.jpg" alt=""></a></li>
                                                    <li><a href=""><img src="/images/300s (1).jpg" alt=""></a></li>
                                                    <li><a href=""><img src="/images/168s.jpg" alt="">
                                                        <div class="offscreen">
                                                            <span>Their wet burrito to go. It could possibly feed a small army. If you like spice like I do, go for the habanero sauce on top!</span>
                                                        </div></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="gallarymore"><a href="">See all photos from Kat L. for Adolfo’s</a></p>
    
                                            <p id="resultReview"><strong>Was the review...?</strong></p>
                                            <ul class="useful-li">
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Funny</li>
                                                <li><i class="fas fa-grin-beam"></i>&nbsp;Useful</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-fill-more">
                                    <p><a href="">More reviews by Kat L.</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="profile-about">
                                <h3>About Kat L.</h3>
                                <p>Rating Distribution</p>

                                <div class="about-rating">
                                    <table>
                                        <tr>
                                            <td class="histogram-label histogram-label-1">5 Stars</td>
                                            <td class="histogram-bar histogram-bar-1"></td>
                                            <td class="histogram-number">13</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-2">4 Stars</td>
                                            <td class="histogram-bar histogram-bar-2"></td>
                                            <td class="histogram-number">2</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-3">3 Stars</td>
                                            <td class="histogram-bar histogram-bar-3"></td>
                                            <td class="histogram-number">0</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-4">2 Stars</td>
                                            <td class="histogram-bar histogram-bar-4"></td>
                                            <td class="histogram-number">0</td>
                                        </tr>
                                        <tr>
                                            <td class="histogram-label histogram-label-5">1 Stars</td>
                                            <td class="histogram-bar histogram-bar-5"></td>
                                            <td class="histogram-number">0</td>
                                        </tr>
                                    </table>
                                    <p><a href="">View more graphs</a></p>
                                </div>

                                <div class="about-side-bar">
                                    <p>Review Votes</p>
                                    <ul>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Useful <strong>17</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Funny <strong>7</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Cool <strong>12</strong></span></li>
                                    </ul>
                                </div>

                                <div class="about-side-bar">
                                    <p>Stats</p>
                                    <ul>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Bookmarks <strong>17</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>First <strong>7</strong></span></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <span>Followers <strong>12</strong></span></li>
                                    </ul>
                                </div>

                                <div class="about-side-bar">
                                    <p>2 Compliments</p>
                                    <ul class="icon-bg">
                                        <li><span><i class="fas fa-grin-beam"></i></span> <small>1</small></li>
                                        <li><span><i class="fas fa-grin-beam"></i></span> <small>1</small></li>
                                    </ul>
                                </div>

                                <div class="about-side-bar">
                                    <p>Locations</p>
                                    <p class="in-ab">San Francisco, CA</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>Yelping Since</p>
                                    <p class="in-ab">September 2016</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>Find Me In</p>
                                    <p class="in-ab">a dog park, with no dog, petting all the dogs</p>
                                </div>
                                <div class="about-side-bar">
                                    <p>My Hometown</p>
                                    <p class="in-ab">Jackson, MS</p>
                                </div>
                                <div class="about-side-bar">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { Promise } from 'q';
export default {
    data(){
        return{
            isEdit:false,
            user_id:0,
            editData:{
                firstName:'',
                lastName:'',
                address:'',

            },
            tab:1,
            allReviews:[],
            page:1,
            pagination:{},
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
          //  return redirect('/')
		}
    },
    methods:{
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
            this.pagination = res.data
            delete this.pagination.data 
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
            this.callApi('get',`/app/getUserallReview/${this.userData.id}`)
        ])
        if(res1.status == 200){
            this.allReviews = res1.data.data
            this.pagination = res1.data
            delete this.pagination.data 
        }
        if(this.userData.packType == 3){
             this.getAllUserProduct()
        }
       

        
    },

}
</script>