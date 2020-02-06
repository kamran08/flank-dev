<template>
  <div class="pt-120">
    <!-- Header-->

    <!-- <header>
            <div class="header-second">
                <div class="container">
                    <div class="img-center">
                        <a href="index.html" class="navbar-brand"><img class="img-responsive" src="assets/image/default.png" alt=""></a>
                    </div>
                </div>
            </div>
    </header>-->

    <section class="second-section">
      <div class="container">
        <div class="section-content sign-up-content padd_tb40" >
          
          <div class="row  flex-row" style="align-items: center;">
            
            <div class="col-md-4 col-md-offset-2">
              <div class="alert alert-success" role="alert" v-if="success_msg">
                Reset password link has been sent to your email. Please check your email!
              </div>
              <div class="signcont-left">
                <h3 class="create-account">Reset Password</h3>
                <p style="font-family: CeraPro;line-height: 17px;margin-bottom: 12px;">Enter your new password</p>
                <form v-on:submit.prevent>
                  <div class="group-item">
                    <input type="password" class="form-control" v-model="formData.password" placeholder="New Password" required />
                  </div>
                  <div class="group-item">
                    <input type="password" class="form-control" v-model="formData.confirm_password" placeholder="Confirm Password" required />
                  </div>
                
                  <div class="group-item">
                    <div class="submit forget-submit">
                      <button type="submit" @click="onSubmit">Reset Password</button>
                      <span style="text-align: right;margin-top: 5px;font-family: CeraPro;">
                        <nuxt-link to="/login">Back to Login</nuxt-link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-5">
              <div class="signcont-right">
                <div class="signcont-img">
                  <img src="/images/flank-1.png" alt />
                  <img src="/images/sign-up1.png" alt />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="text-center">
                <form v-on:submit.prevent="onSubmit">
                  <h2 style="color: #000; font-weight: 800;font-size: 20px;">Forget Password</h2>
                  <p>Please enter your email address and we will send you an email about how to reset your password.</p>
                  <div class="input">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div class="submit forget-submit">
                    <button type="submit">Reset Password</button>
                    <span>
                      <nuxt-link to="/login">Back to Login</nuxt-link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="signup-illustration">
                <img src="/image/signup_illustration.png" alt />
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        id: "",
        password:'',
        confirm_password:'',
      },
      success_msg:false,
    };
  },
  methods: {
    async onSubmit() {
        if(this.formData.password == '') this.i("Password is empty!")
        if(this.formData.password.trim() == "") this.i("Password is empty!")
        if(this.formData.password != this.formData.confirm_password) this.i("password doesn't match!")
      const res = await this.callApi("post", "/password/reset", this.formData);
      if (res.status === 200) {
        this.success_msg = true
        this.formData.email = ''
         this.s("Your password reset successfully! Please login")
        this.$router.push("/login")
        //this.$router.push("/login");
      } else if(res.status == 422){
        this.i(res.status.message)
      } else {
        this.swr();
      }
    },
     async passwordTokenVarification(passwordToken){
        const res = await this.callApi('post','matchPasswordLink',{passwordToken:passwordToken})
        if(res.status===200){
            this.status = true;
            console.log(res.data.data.email)
            this.formData.id = res.data.data.id
           

        }
        else if (res.status ===401){
            this.e(res.data.message);
            this.$router.push("/authentication/resetpassword")
        }
        else{
            this.swr();
            this.$router.push("/authentication/resetpassword")
        }
    }
  },
  created(){
    let passwordToken = this.$route.query.passwordToken
    this.passwordTokenVarification(passwordToken);
  }
};
</script>

<style>
</style>
