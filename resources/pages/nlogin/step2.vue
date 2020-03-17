<template>
    <client-only>
    <div v-if="isLoggedIn" class="pt-120">
         <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="row flex-row">
                    <div class="col-md-4 col-md-offset-2 new-col-md-4">
                        <div class="signcont-left">
                            <div class="step1-left-top mar_b20 new-sign-user">
                                <h3 class="create-account">Welcome to Flank, {{authInfo.firstName}}!</h3>
                                <p>Complete your profile so others can find you.</p>
                            </div>
                            <form action="" class="new-flanker-form" v-on:submit.prevent>
                                <div class="new-flanker-photo">
                                    <div class="flanker-photo-up">
                                        <figure v-if="formData">
                                            <!-- <img src="" alt=""> -->
                                            <img :src="(formData.img == '')? '/images/user_flanker.png' : formData.img" alt="">
                                        </figure>
                                    </div>
                                    <div class="flanker-photo-soc">
                                        <!-- <div class="flanker-photo-soc-box" @click="fbImage">
                                            <button class="flanker-new-btn fb-flanker"><span><i class="fab fa-facebook-square"></i></span> Use facebook photo</button>
                                        </div>
                                        <div class="flanker-divider">
                                            <span>Or</span>
                                        </div> -->
                                        <div class="flanker-photo-soc-box">
                                            <Upload
                                                ref="upload"
                                                type="drag"
                                                :show-upload-list="false"
                                                :with-credentials="true"
                                                :on-success="handleSuccess"
                                                :format="['jpg','jpeg','png']"
                                                :max-size="2048"
                                                action="/app/upload-review-file">
                                                <div class="upload-btn create-btn">
                                                    <span class="upload-img">Upload Photo</span>
                                                </div>
                                            </Upload>
                                        </div>
                                    </div>
                                </div>
                                <div class="flank-gender-sel">
                                    <h4>Gender</h4>
                                    <ul>
                                        <li><input type="radio" id="gen1" name="gender" value="Female" v-model="formData.gender"><label for="gen1">Female</label></li>
                                        <li><input type="radio" id="gen2" name="gender" value="Male" v-model="formData.gender"><label for="gen2">Male</label></li>
                                        <li><input type="radio" id="gen3" name="gender" value="Other" v-model="formData.gender"><label for="gen3">Other Options</label></li>
                                    </ul>
                                </div>
                                <div class="next-btn">
                                    <button @click="onSubmit"> Save & continue</button>
                                    <!-- <p><nuxt-link   :to="`/nlogin/step3`" >Skip</nuxt-link></p> -->
                                    <p><nuxt-link   :to="`/`" >Skip</nuxt-link></p>
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
               
            </div>
        </div>
    </div>
    </client-only>
</template>
<script>
export default {
    data(){
        return{
            formData:{
                gender:'Male',
                img:'',
            },
            link:'https://graph.facebook.com/me/picture?access_token=',
        }
    },
    methods:{
        async onSubmit(){
            
            const res = await this.callApi('put',`/users/${this.authInfo.id}`,this.formData)
            if(res.status===200){
               
                this.s('Profile have been upadated!')
                // this.$router.push(`/nlogin/step3`)
                this.$router.push(`/`)
            }
            else if (res.status===401){
                this.e(res.data.message)
            }
            else{
                this.swr();
            }
        },
        handleSuccess (res, file) {
            this.formData.img = res.file 
        },
        async fbImage () {
            window.location = '/login/facebook'
        //    if(this.authInfo.token == null){ 
        //    } 
        //    else this.formData.img = this.link+this.authInfo.token
        //    const res = await this.callApi('get','/login/facebook/image')
        //    if(res.status == 200){
        //        // this.formData.img = res.data.
        //        console.log(res.data)
        //    }
           
        },
    },
    created(){
        console.log(this.authInfo)
        if(this.isLoggedIn == false) return this.$router.push('/')
        if(this.authInfo && this.authInfo.img){

            this.formData.img = this.authInfo.img.trim()
        }
        // this.authInfo.img
        // this.formData.img = this.authInfo.img
    }
}
</script>