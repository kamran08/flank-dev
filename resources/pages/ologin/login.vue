<template>
    <div>
        
        <!-- Header-->
        
        <!-- <header>
            <div class="header-second">
                <div class="container">
                    <div class="img-center">
                        <a href="index.html" class="navbar-brand"><img class="img-responsive" src="/image/default.png" alt=""></a>
                    </div>
                </div>
            </div>
        </header> -->
        
        <section class="second-section log-sign">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="text-center">
                                <form v-on:submit.prevent>
                                    <h2>Log In to Flank</h2>
                                    <p><strong>Need to Flank?</strong> <nuxt-link to="/register"><strong>Sign up</strong></nuxt-link></p>
                                    <small>By logging in, you agree to Yelp’s <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small><br>
                                    <div class="social-login">
                                        <a @click="goToFacebook"  ><button><i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Log In with Facebook</button></a>
                                        <button><i class="fab fa-google"></i>&nbsp;&nbsp;&nbsp; Log In with Google&nbsp;&nbsp;</button>
                                    </div>
                                    <div class="afbe">
                                        <span>OR</span> 
                                    </div>
                                    <div class="input">
                                        <div class="form-group">
                                            <input type="text" class="form-control"  v-model="formData.email" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                                        </div>
                                        <nuxt-link to='/authentication/resetpassword' >Forget password?</nuxt-link>
                                    </div>
                                    <div class="submit">
                                        <button  @click="onSubmit" >Log In</button>
                                        <span>New to Flank? <nuxt-link to="/register">Sign Up</nuxt-link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="signup-illustration">
                                <img src="/image/signup_illustration.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       <hr>
       
       <footer class="section-margin">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <div class="foo-individual">
                                <h3>About</h3>
                                <div class="foo-option">
                                    <ul>
                                        <li><a href="about.html">About Flank</a></li>
                                        <li><a href="guidelines.html">Current Guidelines</a></li>
                                        <li><a href="terms.html">Terms of Services</a></li>
                                        <li><a href="privacy.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <div class="foo-individual">
                                <h3>Discover</h3>
                                <div class="foo-option">
                                    <ul>
                                        <li><a href="blog.html">Flank BLog</a></li>
                                        <li><a href="support.html">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <div class="foo-individual">
                                <h3>Flank for Business <br> Owners</h3>
                                <div class="foo-option">
                                    <ul>
                                        <li><a href="advertise.html">Advertise on Flank</a></li>
                                        <li><a href="business-blog.html">Flank Blog for Business Owners</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!--<div class="col-md-3 col-sm-3">
                            <div class="foo-individual">
                                <h3>Languages</h3>
                                <div class="foo-option">
                                    <ul>
                                         <li>
                                             <input id="language" type="checkbox" name="menu"/>
                                             <label for="language">English&nbsp;<i class="fas fa-sort-down"></i></label>
                                             <ul class="submenu">
                                                 <li><a href="#">Bahasha Malaysia</a></li>
                                                 <li><a href="#">English (Australia)</a></li>
                                                 <li><a href="#">English (UK)</a></li>
                                                 <li><a href="#">English (US)</a></li>
                                                 <li><a href="#">English (Canada)</a></li>
                                                 <li><a href="#">Bangla</a></li>
                                                 <li><a href="#">French</a></li>
                                             </ul>
                                         </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="foo-individual">
                                <h3>Country</h3>
                                <div class="foo-option">
                                    <ul>
                                         <li>
                                             <input id="country" type="checkbox" name="menu"/>
                                             <label for="country">United States&nbsp;<i class="fas fa-sort-down"></i></label>
                                             <ul class="submenu">
                                                 <li><a href="#">Bangladesh</a></li>
                                                 <li><a href="#">Australia</a></li>
                                                 <li><a href="#">United Kingdom</a></li>
                                                 <li><a href="#">Germany</a></li>
                                                 <li><a href="#">Canada</a></li>
                                                 <li><a href="#">United States</a></li>
                                                 <li><a href="#">Franch</a></li>
                                             </ul>
                                         </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        -->
                    </div>
                    <div class="footer-bg"></div>
                    <div class="text-center"><small class="main-footer_copyright">Copyright © 2004–2019 Yelp Inc. Yelp, <img src="/image/logo_desktop_xsmall_outline.png" alt="">, <img src="/image/burst_desktop_xsmall_outline.png" alt=""> and related marks are registered trademarks of Yelp.</small></div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    middleware: 'guest',
    data(){
        return{
            formData:{
                email:'',
                password:'',
                remember: false,
            },
        }
    },
    methods:{
        async onSubmit(){
            
            const res = await this.callApi('post','authentication/login',this.formData) 
            if(res.status===200){
                this.s("Login Successfully On-Submit !")
                this.$store.dispatch('setAuthInfo',res.data)
                window.location ='/nlogin/step2'
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr();
            }
        },
        goToFacebook(){
           // href="/login/facebook"
           window.location = '/login/facebook'
           
        }
    },
    created(){
      
    }
}
</script>


