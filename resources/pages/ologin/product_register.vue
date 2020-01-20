<template>
        <div>
        
        <!-- Header-->
        
        <!-- <header>
            <div class="header-second">
                <div class="container">
                    <div class="img-center">
                        <a href="index.html" class="navbar-brand"><img class="img-responsive" src="assets/image/default.png" alt=""></a>
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
                                <form  v-on:submit.prevent="onSubmit">
                                    <h2>Product Registration</h2>
                                    <strong>Connect with great local businesses</strong><br>
                                    <br>
                                    <small>By logging in, you agree to Yelp’s <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small><br>
                                    <br>
                                    <div class="input">
                                        <!-- <div class="form-group">
                                            <input type="text" class="form-control ffl" placeholder="First Name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control ffl" placeholder="Last Name">
                                        </div> -->
                                        <div class="form-group">
                                            <Input v-model="productData.name" placeholder="Enter Name..."  />
                                        </div>
                                        <div class="form-group">
                                            <Select v-model="productData.category" placeholder="Select Category..."  >
                                                <Option value="Food" >Food</Option>
                                                <Option value="Food" >Cloth</Option>
                                                <Option value="Food" >Service</Option>
                                            </Select>
                                        </div>
                                        <div class="form-group">
                                             <InputNumber 
                                                style="width: 100%"
                                                placeholder="Enter Price..." 
                                                :min="1" v-model="productData.price">
                                            </InputNumber>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <Input v-model="productData.description" type="textarea" :rows="4" placeholder="Enter description..." />
                                        </div>
                                    </div>
                                    <div class="submit">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="signup-illustration">
                                <img src="assets/image/signup_illustration.png" alt="">
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
            productData:{
                name:'',
                category:'',
                price:0,
                description:'',
                

            }
        }
    },
    methods:{
        async onSubmit(){
            const keys = Object.keys(this.productData)
            for(let d of keys ){
                if( this.productData[d] == ''){
                    this.i(d+' is Required!')
                    return
                }
            }
             if(this.isLoggedIn == false){
                this.i('Please login first !')
                this.$router.push('/login');
                return
            } 
           const res = await this.callApi('post', 'products', this.productData)
           if(res.status === 200){
               this.s('Product Created Successfully!')
               this.$router.push('/product/')
           }
           else{
               this.swr()
           }
           
            console.log("passed!")
        }
    }
}
</script>

<style>

</style>
