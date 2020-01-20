
<template>
    <div>
        <!-- ========== Topbar Start ============= -->

        <!-- ========== Header End ============= -->

        <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1">
                        <div class="signcont-left">
                            <div class="step1-left-top mar_b20">
                                <h3 class="create-account">Create an account</h3>
                            </div>
                            <div class="sign-up-social">
                                <a @click="goToFacebook" class="sign-social-facebook"><i class="fab fa-facebook-square"></i> Sign Up with Facebook</a>
                                <a @click="goToGoogle" class="sign-social-google"><i class="fab fa-google-plus"></i> Sign Up with Google</a>
                            </div>
                            <form v-on:submit.prevent>
                                <div class="group-item">
                                    <label>Your First name</label>
                                    <input type="text"  v-model="formData.firstName" >
                                </div>
                                <div class="group-item">
                                    <label>Your Last name</label>
                                    <input type="text" v-model="formData.lastName">
                                </div>
                                <div class="group-item">
                                    <label>Email</label>
                                    <input type="email" v-model="formData.email">
                                </div>
                                <div class="group-item">
                                    <label>Password</label>
                                    <input type="password" v-model="formData.password">
                                    <p>Password must be in 6 character</p>
                                </div>
                                <div class="group-item">
                                    <label>Re-enter password</label>
                                    <input type="password" v-model="formData.password_confirmation">
                                </div>
                                <div class="group-item">
                                    <input type="submit"  @click="onSubmit"   value="Create your flank account">
                                </div>
                            </form>
                            <p class="by">By creating an account, you agree to Conditions Flank's of Use and Privacy Notice</p>
                            <p>Already have an account? <router-link to='/login' class="sign-in">Sign in</router-link></p>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="signcont-right">
                            <div class="signcont-img">
                                <img src="/images/flank-1.png" alt=""> 
                                <img src="/images/sign-up1.jpg" alt="">
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
             if(this.formData.password_confirmation  !==  this.formData.password) return this.i("Password Doesn't match !")
                
            this.formData.packType = 2
            const res = await this.callApi('post','/users',this.formData)
            if(res.status==200){
                this.s('Registration Completed !')
              
                window.location= '/local_instructor/'+res.data.legend.id
                // this.$router.push('/login')
                 
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
           window.location = '/login/facebook'
           
        },
        async goToGoogle(){
           // href="/login/facebook"
           window.location = '/authenticated/google'
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


