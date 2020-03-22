    <template>
  <div class="pt-120">


    <section class="abp second-section">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="abp-list-box">
                                <h3>About Flank</h3>
                                <ul class="abp-list-box-link">
                                    <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                    <li><nuxt-link to="/guidlines">Content Guidelines</nuxt-link></li>
                                    <li><nuxt-link to="/tos">Terms of Service</nuxt-link></li>
                                    <li><nuxt-link to="/policy">Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="/legal">Legal Inquiries</nuxt-link></li>
                                    <li class="active"><nuxt-link to="/account_closure">Close Your Account</nuxt-link></li>
                                </ul>
                                <!-- <div class="about-blog-list">
                                    <h3>The Flank Blog</h3>
                                    <strong>Latest Post:</strong>
                                    <p><a href="">Chicago Gets The Elite Treatment Fr...</a></p>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div>
                                <h2 class="fl-abs">How do I close my account?</h2>
                                <div class="new-about-header mt-30">
                                    <h3>Flankers</h3>
                                    <p class="mt-20">Closing your user account will remove any content you’ve posted to Flank as a reviewer, and once your account has been closed it cannot be restored.  If you’d like to proceed with closing your user account, please <a href="">submit an account closure request</a>.</p>
                                </div>
                                <div class="new-about-header mt-30">
                                    <h3>Local Instructors</h3>
                                    <p class="mt-20">If you’re a local instructor and you no longer need access to a business page that you’ve created, you can <a href="">close your account here</a>. However, keep in mind that closing your account will not remove the business page you created at Flank (we normally do not remove business pages).</p>
                                </div>
                            </div>
                            <div>
                                <h2 class="fl-abs">Closing your user account</h2>
                                    <div class="legal-alert-box">
                                        <div class="legal-alert-box-inner" v-if="errorData.email==''||errorData.type==''||errorData.question==''||errorData.descriptions==''">
                                            <p>You must give us additional information.</p>
                                        </div>
                                    </div>
                                    <p style="font-size: 15px;">We're sorry to see you go! Please let us know a little about why you're closing your account.</p>
                                    <!-- <hr> -->
                                    <div class="about-content mt-10">
                                        <!-- <form> -->
                                            <div class="legal-form-main">
                                                <div class="legal-form-item legal-form-item-danger">
                                                    <div class="legal-layer">
                                                        <textarea v-model="formData.taxt" name="" id=""  rows="4" ></textarea>
                                                    </div>
                                                </div>
                                                <div class="legal-form-btn">
                                                    <ul>
                                                        <li class="legal-btn" @click="sendData" v-if="!isLoading"><button class="ripple">Send</button></li>
                                                        <li class="legal-btn"  v-else><button class="ripple" disabled>Loading...</button></li>

                                                        <li><a href="/" style="color: #0036b1 !important;" >Cancel</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        <!-- </form> -->
                                    </div>
                            </div>
                            <div class="confirmation-closure" v-if="isSend">
                                <p>We're sorry to see you go. A confirmation message has been sent to your email address. Click on the link in that message to confirm that you wish to close your account. <nuxt-link to="/">Go back</nuxt-link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isLoading:false,
            isSend:false,
            formData:{
                taxt:'',
            },
            errorData:{
                taxt:' ',
            },
            someError:'Some of the data you entered is invalid.',
            unError:'An unknown error occured: You entered the wrong word verification code. Please try the new code shown below.',
            reg: /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
        }
    },
    methods:{
        async sendData(){
            // console.log(this.formData)
            if(!this.authInfo){
                return this.e("please log in first")
            }
          
            if (!this.formData.taxt || this.formData.taxt=='' || this.formData.taxt.trim()=='') {
                this.errorData.taxt =''
                return 
             }
          
             this.isLoading = true
             const res = await this.callApi('post', '/app/sendAccountCloseEmail', this.formData)
             if(res.status==200 || res.status==204){
                 this.s("your request has been sent check your email!!")
                 this.formData = {}
                 this.errorData.taxt =' '
                  this.isSend = true
                  this.isLoading = false
             }
             else if(res.status==403){
                 this.isLoading = false
                 return this.e(res.data.msg)
             }
             else{
                 this.e("check your network or your email id is not valid!!")
                   this.isLoading = false
             }
              this.isLoading = false
        }
    }
}
</script>