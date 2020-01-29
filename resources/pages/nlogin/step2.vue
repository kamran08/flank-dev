<template>
    <div v-if="isLoggedIn" >
       <!-- ========== Topbar Start ============= -->
       <div class="sign-up-topbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <div class="sign-up-logo">
                            <img src="/images/logo-new.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                        <ul class="sign-up-search">
                            <li>
                                <select name="All">
                                    <option>All</option>
                                    <option>Demo</option>
                                </select>
                            </li>
                            <li>
                                <input type="text">
                            </li>
                            <li>
                                Near
                            </li>
                            <li>
                                <input type="text">
                            </li>
                            <li>
                                <div class="search-icon">
                                    <i class="fas fa-search"></i>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Topbar End ============= -->
        <!-- ========== Header Start ============= -->
        <div class="sign-up-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <div class="sign-up-menu">
                            <ul class="sign-up-list">
                                <li>
                                    <span class="header-icon">
                                        <img src="/images/header_icon1.png" alt="">
                                    </span>
                                    <select name="HS Coaches">
                                        <option>HS Coaches</option>
                                        <option>Demo</option>
                                    </select>
                                </li>
                                <li>
                                    <span class="header-icon"> 
                                        <img src="/images/header_icon2.png" alt="">
                                    </span>
                                    <select name="Cc Coaches">
                                        <option>Cc Coaches</option>
                                        <option>Demo</option>
                                    </select>
                                </li>
                                <li>
                                    <span class="header-icon"> 
                                        <img src="/images/header_icon3.png" alt="">
                                    </span>
                                    <select name="Local Coaches">
                                        <option>Local Coaches</option>
                                        <option>Demo</option>
                                    </select>
                                </li>
                                <li>
                                    <select name="More">
                                        <option>More</option>
                                        <option>Demo</option>
                                    </select>
                                </li>
                            </ul>
                            
                            <ul class="sign-up-reviw">
                                <li>
                                    <a href="#" class="header-icon">
                                        <img src="/images/header_icon4.png" alt=""> Write a Review
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Header End ============= -->

        <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-12">
                        <div class="signcont-left">
                            <div class="step2-left-top mar_b20">
                                <h3 class="create-account red-alert">Welcome to Flank, {{authInfo.firstName}}!</h3>
                                <p>Compare your profile so other can find you.</p> 
                            </div>                                
                            <form v-on:submit.prevent>
                                <div class="step2_form_left">
                                    <div class="row">
                                        <div class="col-sm-4 p_r0">
                                            <div class="step2-img mar_b20">
                                                <img :src="(formData.img == '')? '/images/step1_user.jpg' : formData.img" alt="">
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="group-item">
                                                <div class="upload-btn sign-social-facebook" @click="fbImage" >
                                                    <span class="upload-img"><i class="fab fa-facebook-square"></i> Use Facebook Photo</span>
                                                    
                                                </div>
                                            </div>
                                            <p class="new-flank">
                                                <span class="new-flank-cont">
                                                    Or
                                                </span>               
                                            </p>
                                            <div class="group-item">
                                                <div>
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
                                        <div class="col-md-12">
                                            <div class="group-item-gender mar_b20">
                                                <label>Gender</label>
                                                <input type="radio" name="gender" value="Male" v-model="formData.gender"  > Male<br>
                                                <input type="radio" name="gender" v-model="formData.gender"  value="Female"> Female<br>
                                                <input type="radio" name="gender" v-model="formData.gender"  value="Other"> Other<br>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="group-item">
                                                <input class="block-btn" @click="onSubmit" type="submit" value="Save and Contineu">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                               <nuxt-link   :to="`/flnaker/${authInfo.id}`" >Skip</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-4 col-xs-12">
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
                this.$router.push(`/nlogin/step3`)
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
           if(this.authInfo.token == null) return this.i("Your facebook profile not connected")
           else this.formData.img = this.link+this.authInfo.token
        //    const res = await this.callApi('get','/login/facebook/image')
        //    if(res.status == 200){
        //        // this.formData.img = res.data.
        //        console.log(res.data)
        //    }
           
        },
    },
    created(){
        if(this.isLoggedIn == false) return this.$router.push('/')
        this.formData.img = this.authInfo.img
    }
}
</script>