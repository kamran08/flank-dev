<template>
     <div class="pt-120">
        <!-- ========== Topbar Start ============= -->
      <div class="coach-attribute-body">
         <div class="sign-up-topbar attribute-topbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <div class="sign-up-logo attribute-logo">
                            <a href="#"><img src="/images/attribute_logo.png" alt=""></a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <!-- ========== Topbar End ============= -->

        <div class="coach-attribute-area">
          <div class="container">
            <div class="row">
              <!-- <div class="col-md-12">
                <h3 class="coach-attribute-title">Español</h3>
              </div> -->
              </div>
              <div class="row">
              <div class="col-md-12">
                <div class="coach-title-area">
                  <h2 class="coach-title">Welcome to the Flank’s Coach Attribute Selection Survey. </h2>
                  <p class="coach-sub">We value your candid feedback and appreciate you taking the time to complete our survey. </p>
                </div>
              </div>
              </div>
              <div class="row att-flex">
                <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="coach-left">
                  <h1 class="attribute-title">Healthy Attributes</h1>
                  <span class="attribute-sub">(Select all that apply)</span>
                  <table class="attribute-table">
                    <tr>
                      <td :class="(attributeInfo[0].isSelected)? 'active_td' : ''" @click="changeSelected(0)" > <span class="td_lg" >{{attributeInfo[0].content}}</span></td>
                      <td :class="(attributeInfo[1].isSelected)? 'active_td' : ''" @click="changeSelected(1)"  ><span class="td_lg" >{{attributeInfo[1].content}}</span></td>
                      <td :class="(attributeInfo[2].isSelected)? 'active_td' : ''" @click="changeSelected(2)" > <span class="td_lg" >{{attributeInfo[2].content}}</span></td>
                    </tr>
                    <tr>
                      <td :class="(attributeInfo[3].isSelected)? 'active_td' : ''" @click="changeSelected(3)"  ><span class="td_lg" >{{attributeInfo[3].content}} </span></td>
                      <td :class="(attributeInfo[4].isSelected)? 'active_td' : ''" @click="changeSelected(4)"  ><span class="td_lg" >{{attributeInfo[4].content}}</span></td>
                      <td :class="(attributeInfo[5].isSelected)? 'active_td' : ''" @click="changeSelected(5)"  ><span class="td_lg" >{{attributeInfo[5].content}}</span></td>
                    </tr>
                    <tr>
                      <td :class="(attributeInfo[6].isSelected)? 'active_td' : ''" @click="changeSelected(6)"  ><span class="td_lg" >{{attributeInfo[6].content}}</span></td>
                      <td :class="(attributeInfo[7].isSelected)? 'active_td' : ''" @click="changeSelected(7)"  ><span class="td_lg" >{{attributeInfo[7].content}}</span></td>
                      <td :class="(attributeInfo[8].isSelected)? 'active_td' : ''" @click="changeSelected(8)"  ><span class="td_lg" >{{attributeInfo[8].content}}</span></td>
                    </tr>
                    <tr>
                      <td :class="(attributeInfo[9].isSelected)? 'active_td' : ''" @click="changeSelected(9)"  ><span class="td_lg" >{{attributeInfo[9].content}}</span></td>
                      <td :class="(attributeInfo[10].isSelected)? 'active_td' : ''"@click="changeSelected(10)" ><span class="td_lg" >{{attributeInfo[10].content}}</span></td>
                      <td :class="(attributeInfo[11].isSelected)? 'active_td' : ''"@click="changeSelected(11)" ><span class="td_lg" >{{attributeInfo[11].content}}</span></td>
                    </tr>
                    <tr>
                      <td :class="(attributeInfo[12].isSelected)? 'active_td' : ''"@click="changeSelected(12)" ><span class="td_lg" >{{attributeInfo[12].content}}</span></td>
                      <td :class="(attributeInfo[13].isSelected)? 'active_td' : ''"@click="changeSelected(13)" ><span class="td_lg" >{{attributeInfo[13].content}}</span></td>
                      <td :class="(attributeInfo[14].isSelected)? 'active_td' : ''"@click="changeSelected(14)" ><span class="td_lg" >{{attributeInfo[14].content}}</span></td>
                    </tr>
                  </table>
                  <h3 class="coach-table-bottom">Step 1 of 2</h3>
                  <button class="submit-btn" @click="onSubmit" >Submit</button> <a @click="$router.push(`/scoach_review/step2/${review_id}`)" class="skip">(Skip)</a>
                </div>
              </div>
               <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="coach-right">
                   <img src="/images/Coach_three_rows.png" alt=""> 
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
      review_id:0,
    }
  },
  methods:{
    async onSubmit(){
      let ob = {
        data: this.attributeInfo,
        review_id:this.review_id
      }
      const res = await this.callApi('post','/app/attributes',ob)
      if(res.status == 200){
        this.s("Attributes Stored!!")
        this.$router.push(`/scoach_review/step2/${this.review_id}`)
      }
    },
    changeSelected(index){
      console.log(index)
      if(this.attributeInfo[index].isSelected){
        this.attributeInfo[index].isSelected = false
      }
      else{
        this.attributeInfo[index].isSelected = true
      }
      return
    }
  },
  async asyncData({app, store,redirect, params}){
    try {
        const [res1, res2] = await Promise.all([
            app.$axios.get(`/app/attributes?atIndex=Healthy`),   
            app.$axios.get(`/app/getReviewInfo/${params.id}`),
        ])
        
      
       
        return{
            attributeInfo : res1.data,
            reviewInfo : res2.data,
        }
		}catch (error) {
            
           return redirect('/')
		}
    },
  async created(){
    if(this.isLoggedIn == false){
      return this.$router.push(`/`)
    }
   this.review_id = this.$route.params.id
  }
}
</script>