    <template>
  <div class="pt-120">


    <section class="abp second-section">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-3 col-sm-3">
                            <div class="abp-list-box">
                                <h3>About Flank</h3>
                                <ul class="abp-list-box-link">
                                    <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                    <li><nuxt-link to="/guidlines">Content Guidelines</nuxt-link></li>
                                    <li><nuxt-link to="/tos">Terms of Service</nuxt-link></li>
                                    <li><nuxt-link to="/policy">Privacy Policy</nuxt-link></li>
                                    <li class="active"><nuxt-link to="/legal">Legal Inquiries</nuxt-link></li>
                                    <li><nuxt-link to="/account_closure">Close Your Account</nuxt-link></li>
                                </ul>
                                <!-- <div class="about-blog-list">
                                    <h3>The Flank Blog</h3>
                                    <strong>Latest Post:</strong>
                                    <p><a href="">Chicago Gets The Elite Treatment Fr...</a></p>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-9">
                            <h2 class="fl-abs">Legal inquiries</h2>
                            <div class="legal-alert-box">
                                <div class="legal-alert-box-inner" v-if="errorData.email==''||errorData.type==''||errorData.question==''||errorData.descriptions==''">
                                    <p>Please correct the following errors and retry.</p>
                                    <ul>
                                        <li><span>Some of the data you entered is invalid.</span></li>
                                        <li v-if="errorData.email==''"><span>An unknown error occured: You entered the wrong word verification code. Please try the new code shown below.</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p style="font-size: 15px;">If you have any legal concerns about content or activity on Flank, please let us know using the form below. Our Support team will review your inquiry and follow up if more information is needed.</p>
                            <!-- <hr> -->
                            <div class="about-content mt-10">
                                <!-- <form> -->
                                    <div class="legal-form-main">
                                        <div class="legal-form-item">
                                            <label>Which of these best describes you?</label>
                                            <div class="legal-layer">
                                                <select v-model="formData.type" name="" id="" >
                                                    <option value="User/Reviewer">User/Reviewer</option>
                                                    <option value="Business Owner/Representative">Business Owner/Representative</option>
                                                    <option value="Lawyer">Lawyer</option>
                                                    <option value="Law Enforcement">Law Enforcement</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="legal-form-item">
                                            <label>Flank URL of content in question</label>
                                            <div class="legal-layer">
                                                <input type="text" v-model="formData.question" >
                                            </div>
                                        </div>
                                        <div class="legal-form-item legal-form-item-danger">
                                            <label>Describe your concerns</label>
                                            <div class="legal-layer">
                                                <textarea v-model="formData.descriptions" name="" id=""  rows="5" placeholder="Please provide any additional information that will help our support team to investigate your inquiry — the more detail, the better."></textarea>
                                            </div>
                                        </div>
                                        <div class="legal-form-item">
                                            <label>Your Email Address</label>
                                            <div class="legal-layer">
                                                <input  type="text" v-model="formData.email">
                                                <span class="legal-alert"><i class="fas fa-exclamation-circle"></i></span>
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
            formData:{
                type:'',
                question:'',
                descriptions:'',
                email:'',
            },
            errorData:{
                type:' ',
                question:' ',
                descriptions:' ',
                email:' ',
            },
            someError:'Some of the data you entered is invalid.',
            unError:'An unknown error occured: You entered the wrong word verification code. Please try the new code shown below.',
            reg: /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
        }
    },
    methods:{
        async sendData(){
            console.log(this.formData)
          
            if (!this.formData.type || this.formData.type.trim()=='') {
                this.errorData.type =''
                return 
             }
            if (!this.formData.question || this.formData.question.trim()=='') {
                this.errorData.question =''
                return 
             }
            if (!this.formData.descriptions || this.formData.descriptions.trim()=='') {
                this.errorData.descriptions =''
                return 
             }
            if (!this.formData.email || this.formData.email=='' || this.formData.email.trim()=='') {
                this.errorData.email =''
                return 
             }
            // if (!this.reg.test(this.formData.email)) {
            //     this.errorData.email =''
            //     return 
            //  }
             this.isLoading = true
             const res = await this.callApi('post', '/app/sendlegalData', this.formData)
             if(res.status==200 || res.status==204){
                 this.s("your request has been sent we will contact you soon!!")
                 this.formData = {}
                 this.errorData.type =' '
                 this.errorData.question =' '
                 this.errorData.question =' '
                 this.errorData.email =' '
                  this.isLoading = false
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