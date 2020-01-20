<template>
    <div>
        
        <!-- Header-->

        
        
        <header id="" class="game-mainHeader new-sign-page-header"  :style="{ backgroundColor: signInfo.bColor }" >
            <!-- <div class="opacity"></div> -->
            
           
           <div class="container">
               <div class="game header-content">
                   <div class="game-header-title">
                       <h1>Standard</h1>
                   </div>
                   <div class="battlepart">
                       <h2>Includes</h2>
                       <div class="battlepart-img"></div>
                   </div>
                   <div class="banner">
                       <div class="banner-img"></div>
                   </div>
                   <div class="llama">
                       <div class="llama-img"></div>
                   </div>
                   <div class="soilder">
                       <div class="soilder-img"></div>
                   </div>
                   <div class="buynow-box">
                       <div class="buy-now-title">
                           <h2>Sign Up for {{signInfo.title | packName }}</h2>
                           <p>MORE DETAILS BELOW...</p>
                           <p class="rate">{{signInfo.rate}}</p>
                       </div>
                       <div class="buy-now-button" @click="regModal=true" >
                           <h3>Join Now</h3>
                       </div>
                   </div>
                   <div class="gameContentInCenter">
                       <div class="text-center">
                           <div class="animateButton">
                               <button><span>Play free now</span></button>
                           </div>
                       </div>
                       
                   </div>
                   <div class="sticky-pres">
                        <div class="presentation pre-one" @click="SignUpBox(1)" >
                            <div class="presentation-title">
                                <span>PVP</span>
                                <h2>Standard Flanker</h2>
                            </div>
                            <div class="title-right">
                                <h3>Free</h3>
                            </div>
                        </div>
                        <div class="presentation pre-two" @click="SignUpBox(2)" >
                            <div class="presentation-title">
                                <span>PVP</span>
                                <h2>Local Legend</h2>
                            </div>
                            <div class="title-right">
                                <h3>Paid</h3>
                            </div>
                        </div>
                        <div class="presentation pre-three" @click="SignUpBox(3)" >
                            <div class="presentation-title">
                                <span>PVP</span>
                                <h2>Product Hero</h2>
                            </div>
                            <div class="title-right">
                                <h3>Paid</h3>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </header>
        <!-- <Modal class="product_image" v-model="regModal" width="600">
                <Row >
                     <Col span="12" offset="8">
                       
                        <div class="_login_input_group">
                            <div class="_login_input">
                                <div class="_login_input_inp">
                                      <h3>Registration</h3>
                                </div>
                            </div>
                        </div>
                        <div class="_login_input_group">
                            <div class="_login_input">
                                <div class="_login_input_inp">
                                     <Input v-model="formData.name"  placeholder="Enter Your Full Name" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div class="_login_input_group">
                            <div class="_login_input">
                                <div class="_login_input_inp">
                                     <Input v-model="formData.email"  placeholder="Email Address" type="email"/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="_login_input_group">
                            <div class="_login_input">
                                <div class="_login_input_inp">
                                    <Input v-model="formData.password" placeholder="Password" type="password" />
                                </div>
                            </div>
                        </div>
                        <div class="_login_input_group">
                            <div class="_login_input">
                                <div class="_login_input_inp">
                                    <Input v-model="formData.password_confirmation" placeholder="Confirm Password" type="password" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div slot="footer">
                   <Button type="info" @click="regsitrationUser">Sign up</Button>
                    <Button  @click="regModal=false">Cancle</Button>
                </div>
        </Modal> -->
        <Modal class="product_image" v-model="regModal" width="600">
                <section class="second-section log-sign">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="text-center">
                                <form v-on:submit.prevent="regsitrationUser">
                                    <h2>Sign Up for Flank</h2>
                                    <strong>Connect with great local businesses</strong><br>
                                    <br>
                                    <small>By logging in, you agree to Yelp’s <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small><br>
                                    <!-- <div class="social-login social-sign-up">
                                        <button><i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Sign Up with Facebook</button>
                                        <button><i class="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign Up with Google&nbsp;&nbsp;</button>
                                        <small>Don't worry, we never post without your permission.</small><br>
                                    </div> -->
                                    <br>
                                    <!-- <div class="afbe">
                                        <span>OR</span>
                                    </div> -->
                                    <div class="input">
                                        <div class="form-group">
                                            <input type="text" class="form-control ffl" placeholder="First Name" v-model="formData.firstName" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control ffl" placeholder="Last Name" v-model="formData.lastName" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email" v-model="formData.email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" v-model="formData.password" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confrim Password" v-model="formData.password_confirmation" required>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <input type="text"  v-model="formData.zip" class="form-control" placeholder="Zipcode">
                                        </div>
                                        <div class="form-group">
                                            <strong>Birthday <small>Optional</small></strong><br>
                                            <DatePicker type="date" v-model="formData.birthday" placeholder="Select date" style="width:300px;" ></DatePicker>
                                        </div>
                                        
                                    <span><small>You also understand that Yelp may send marketing emails about Yelp’s products, services, and local events. You can unsubscribe at any time.</small></span>
                                    
                                    </div>
                                    <div class="submit">
                                        <button type="submit">Sign Up</button>
                                        <span>Already in Flank? <nuxt-link to="/login">Log In</nuxt-link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="signup-illustration">
                                <img src="assets/image/signup_illustration.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                <div slot="footer">
                    <Button  @click="regModal=false">Cancle</Button>
                </div>
        </Modal>
    </div>
</template>

<script>
export default {
    middleware: 'guest',
    data(){
        return{
            formData:{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                zip:'',
                password_confirmation :'',
                birthday:'',
                packType:''
            },
            bColor1:'#C7C8D6',
            bColor2:'rgb(191, 145, 151)',
            bColor3:'rgb(164, 208, 163)',
            
            signInfo:{
                title:1,
                rate:'$00.00',
                bColor: '',
            },
            regModal:false,
        }
    },
    methods:{
        async regsitrationUser(){
            if(this.formData.email == '' || this.formData.password == ''  || this.formData.name == ''){
                this.i("All fields are required !")
                return
            }
            if(this.formData.password_confirmation  !==  this.formData.password){
                this.i("Password Doesn't match !")
                return
            }
            // if(!this.termCondition){
            //     this.i("Please agree with our condition !")
            //     return
            // }
            this.formData.packType = this.signInfo.title
            const res = await this.callApi('post','/users',this.formData)
            if(res.status==200){
                this.s('Registration Successfull !')
                this.i('Please Login !')
                 this.$router.push('/login')
                
            }
            else if(res.status === 400){
                for(let d of res.data){
            
                    this.e(d.message)
                }
            }
            else{
                console.log(res)
                this.e('There is an Error!')
            }
        },
        SignUpBox(i){
            if(i==1) {
                this.signInfo.bColor = this.bColor1
                this.signInfo.title = 1
                this.signInfo.rate = '$00.00'
                
            }
            if(i==2) {
                this.signInfo.bColor = this.bColor2
                this.signInfo.title = 2
                this.signInfo.rate = '$19.99 (Monthly)'
            } 
            if(i==3) {
                this.signInfo.bColor = this.bColor3
                this.signInfo.title = 3
                this.signInfo.rate = '$19.99'
            } 
        },
    },
    filters:{
        packName(type){
            if(type == 1) return "Standerd Flank";
            else if(type == 2) return "Local Legend";
            if(type == 3) return "Product Hero";
        }
    },
    created(){
        this.signInfo.bColor = this.bColor1;
    }
}
</script>


