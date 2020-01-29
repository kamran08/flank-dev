
<template>
     <div class="pt-120">
        <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="row flex-row">
                    <div class="col-md-4 col-md-offset-2 new-col-md-4">
                        <div class="signcont-left">
                            <div class="step1-left-top mar_b20 new-sign-user">
                                <h3 class="create-account">Welcome to Flank, name!</h3>
                                <p>Complete your profile so others can find you.</p>
                            </div>
                            <form action="" class="new-flanker-form">
                                <div class="new-flanker-photo">
                                    <div class="flanker-photo-up">
                                        <figure>
                                            <img src="/images/user_flanker.png" alt="">
                                        </figure>
                                    </div>
                                    <div class="flanker-photo-soc">
                                        <div class="flanker-photo-soc-box">
                                            <button class="flanker-new-btn fb-flanker"><span><i class="fab fa-facebook-square"></i></span> Use facebook photo</button>
                                        </div>
                                        <div class="flanker-divider">
                                            <span>Or</span>
                                        </div>
                                        <div class="flanker-photo-soc-box">
                                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                                <Button  class="flanker-new-btn">Upload photo</Button>
                                            </Upload>
                                        </div>
                                    </div>
                                </div>
                                <div class="flank-gender-sel">
                                    <h4>Gender</h4>
                                    <ul>
                                        <li><input type="radio" id="gen1" name="gen"><label for="gen1">Female</label></li>
                                        <li><input type="radio" id="gen2" name="gen"><label for="gen2">Male</label></li>
                                        <li><input type="radio" id="gen3" name="gen"><label for="gen3">Other Options</label></li>
                                    </ul>
                                </div>
                                <div class="next-btn">
                                    <button>Save & continue</button>
                                    <p><a href="#">Skip</a></p>
                                </div>
                            </form>
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
                <div class="flanker-find-sec">
                    <div class="flanker-find-selection  flanker-find-pad">
                        <div class="flanker-find-sel-short">
                            <h4>Find friends</h4>
                            <ul class="flanker-flind-short-list">
                                <li class="active"><a href="#"><img src="/images/fb.png" alt="">In Facebook</a></li>
                                <li><a href="#"><img src="/images/envelop.png" alt="">In Your Email Contacts</a></li>
                                <li><a href="#"><img src="/images/yelp.png" alt="">Invite Friends to Flank</a></li>
                            </ul>
                        </div>
                        <div class="flanker-find-search">
                            <h4>Search Friends on Flank</h4>
                            <div class="flanker-find-search-bar">
                                <input type="text" placeholder="e.g Tom Shaw, Tom S, toms">
                                <button><span><i class="fas fa-search"></i></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="flanker-find-det flanker-find-pad">
                        <div class="flanker-find-det-item">
                            <h2>You haven’t connected with your friends on Facebook yet!</h2>
                            <p>You may have signed up with your Facebook account, but Flank still needs your permission to see your friends list. Mind sharing?  Doing so will make it essy  to stay connected to all the awesome things your friends  and teammates are doing on Flank.</p>
                            <div class="find-fb">
                                <button><span><i class="fab fa-facebook-square"></i></span> Find Your Facebook Friends on Flank</button>
                            </div>
                        </div>
                        <div class="flanker-find-det-item">
                            <h2>Choose your email account from the following providers </h2>
                            <div class="flanker-all-soc">
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/gm.png" alt="">
                                            <p>Gmail</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/yahoo.png" alt="">
                                            <p>Yahoo</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/outlook.png" alt="">
                                            <p>Outlook</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/aol.png" alt="">
                                            <p>AOL</p>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div class="email-para">
                                <p>Don’t see your email provider here? Don’t worry, you can still invite your friends to Flank.</p>
                                <p class="lock"><span><i class="fas fa-lock"></i></span> Your information is safe.</p>
                                <p>We don’t store your email password. Your address book is used to find friends on Flank.</p>
                            </div>
                        </div>
                        <div class="flanker-find-det-item">
                            <h2>Send Flank Invites To These Email Addresses: </h2>
                            <div class="flanker-new-form">
                                <form action="">
                                    <div class="flanker-new-form-item">
                                        <label for="">Email Address</label>
                                        <input type="text" placeholder="e.g. tom@email.com">
                                    </div>
                                    <div class="flanker-new-form-item">
                                        <input type="text">
                                    </div>
                                    <div class="flanker-new-form-item">
                                        <input type="text">
                                    </div>
                                    <div class="add-email">
                                        <p><a href="#">Add another email address</a></p>
                                    </div>
                                    <div class="send-btn"><button>Send email invites</button></div>
                                </form>
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
                
            this.formData.packType = 1
            const res = await this.callApi('post','/users',this.formData)
            if(res.status==200){
                this.s('Registration Completed !')
              
                window.location= '/flanker/'+res.data.id
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
        //   if(this.isLoggedIn == true){
        //         this.i('You Already Login!')
        //         this.$router.push('/')
        //         return
        //     }
        this.signInfo.bColor = this.bColor1;
    }
}
</script>


