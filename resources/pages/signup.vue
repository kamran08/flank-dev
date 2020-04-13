
<template>
     <div class="pt-120">
        <!-- ========== Topbar Start ============= -->

        <!-- ========== Header End ============= -->

        <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="row flex-row">
                    <div class="col-md-4 col-md-offset-2">
                        <div class="signcont-left">
                            <div class="step1-left-top mar_b20 text-center">
                                <h3 class="create-account" style="margin-bottom: 10px">Sign Up for Flank</h3>
                                <p style="font-family: CeraPro; font-weight: 600; font-size: 15px;margin-bottom: 10px;">Review Healthy or Harmful Coaches</p>
                                <p style="font-family: CeraPro;line-height: 19px;font-size: 13px;">By continuing, you agree to Flank's <nuxt-link to="/tos">Terms of Service</nuxt-link> and acknowledge Flank's <nuxt-link to="/policy">Privacy Policy</nuxt-link>.</p>
                            </div>
                            <div class="sign-up-social">
                                <!-- <a @click="goToFacebook" class="sign-social-facebook"><i class="fab fa-facebook-square"></i> Sign Up with Facebook</a> -->
                                <!-- <a @click="goToGoogle" class="sign-social-google"><img src="/images/go.png" /> Sign Up with Google</a> -->
                            </div>
                            <p style="font-family: CeraPro;font-size: 13px;text-align: center;">Don't worry. We never post without your permission.</p>
                            <div class="flanker-divider"><span>Or</span></div>
                            <form v-on:submit.prevent>
                                <div class="new-group-form">
                                    <div class="new-group-item">
                                        <input type="text" v-model="formData.firstName" placeholder="First Name">
                                    </div>
                                    <div class="new-group-item">
                                        <input type="text" v-model="formData.lastName" placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="new-group-form">
                                    <div class="new-group-item">
                                        <input type="text" v-model="formData.email" placeholder="Email">
                                    </div>
                                </div>
                                <div class="new-group-form">
                                    <div class="new-group-item">
                                        <input type="password" v-model="formData.password" placeholder="Password">
                                    </div>
                                </div>
                                <div class="new-group-form">
                                    <div class="new-group-item">
                                        <input type="text" v-model="formData.zip" placeholder="Zip Code">
                                    </div>
                                </div>
                                <div class="new-group-form-full">
                                    <label>Birthday <span>(Optional)</span></label>
                                    <div class="new-group-form">
                                        <div class="new-group-item">
                                            <select name="" id="" v-model="birthday.month">
                                                <option value="" disabled selected>Month</option>
                                                <option v-for="item in 12" :value="item" :key="item">{{item}}</option>
                                            </select>
                                        </div>
                                        <div class="new-group-item">
                                            <select name="" id="" v-model="birthday.day">
                                                <option value="" disabled selected>Day</option>
                                                <option v-for="item in 31" :value="item" :key="item">{{item}}</option>
                                            </select>
                                        </div>
                                        <div class="new-group-item">
                                            <select name="" id="" v-model="birthday.year">
                                                <option value="" disabled selected>Year</option>
                                                <option v-for="item in 120" :value="item" :key="item">{{item+1900}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <p class="by">You also understand that Flank may send marketing emails about Flank products and services. You can unsubscribe at any time.</p>
                                <div class="group-item" style="margin-top: 20px;">
                                    <input type="submit"  @click="onSubmit"   value="Sign Up">
                                </div>
                            </form>
                            <!-- <div class="authen-bill-action"></div> -->
                            <div class="new-div">
                                <p style="font-weight: 400;font-family: CeraPro;font-size: 13px;">Already have an account? <router-link to='/login' class="sign-in">Sign-In</router-link></p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="signcont-right">
                            <div class="signcont-img">
                                <img src="/images/flank-1.png" alt=""> 
                                <img src="/images/sign-up1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                
                password_confirmation :'',
                birthday:'',
                packType:''
            },
            birthday:{
                month:'',
                day:'',
                year:''
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
        async onSubmit(){
            
            
            if(this.formData.firstName == '') return this.i("Frist name is empty!")
            if(this.formData.lastName == '') return this.i("Last name is empty!")
            if(this.formData.email == '') return this.i("Email  is empty!")
            if(this.formData.password == '') return this.i("Password  is empty!")
            if(this.formData.zip == '') return this.i("Zip  is empty!")
            // if(this.formData.zip == '') return this.i("Zip  is empty!")
            //  if(this.formData.password_confirmation  !==  this.formData.password) return this.i("Password Doesn't match !")
            
            // if(this.birthday.month == '') return this.i("Month  is empty!")
            // if(this.birthday.day == '') return this.i("Day  is empty!")
            // if(this.birthday.year == '') return this.i("Year  is empty!")
            this.formData.birthday= `${this.birthday.year}-${this.birthday.month}-${this.birthday.day}`
            this.formData.packType = 1
            this.formData.password_confirmation = this.formData.password
            
            const res = await this.callApi('post','/users',this.formData)
            if(res.status==200){
                // this.s('Registration Completed !')
                this.s("Start Flanking")
            // return
                window.location= '/nlogin/step2'
                 //this.$router.push('/login')
                 
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
        goToFacebook(){
           // href="/login/facebook"
           this.s("Start Flanking")
           window.location = '/login/facebook'
           
        },
        async goToGoogle(){
            this.s("Start Flanking")
           // href="/login/facebook"
           window.location = '/login/google'
        //   let ob = {
              
        //   }
        //   const res = await this.callApi("get",'/login/FoulMethods') 
        //   if(res.status == 200){
        //       console.log(res.data)
        //   }
           
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
          if(this.isLoggedIn == true){
                this.i('You Already Login!')
                this.$router.push('/')
                return
            }
        this.signInfo.bColor = this.bColor1;
    }
}
</script>


