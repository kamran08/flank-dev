<template>
    <div class="profile-edit-full pt-120">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3">
                    <div class="profile-edit-left">
                        <div class="profile-thumb-box new-profile-thumb-box">
                            <div class="profile-thumb-change">

                                  <div class="flanker-photo-soc new-flanker-photo-soc">
                                       
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
                                                    <span><i class="fas fa-camera"></i></span>
                                                </div>
                                            </Upload>
                                        </div>
                                    </div>
                                

                            </div>
                            <figure v-if="formData.img">
                                <img :src="formData.img" alt="">
                            </figure>
                            <div class="profile-per-name">
                                <h3>{{formData.firstName+ ' '+ formData.lastName}}</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-sm-9">
                    <div class="profile-edit-right">
                        <div class="profile-edit-item">
                            <h3>Change personal information</h3>
                            <div class="profile-edit-input-box">
                                <div class="profile-edit-input-field">
                                    <label for="">First name <sup>*</sup></label>
                                    <input v-model="formData.firstName" type="text" value="John" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Last name <sup>*</sup></label>
                                    <input v-model="formData.lastName" type="text" value="Doe" class="f-input">
                                </div>
                                <!-- <div class="profile-edit-input-field">
                                    <label for="">Company name <sup>*</sup></label>
                                    <input type="text"  class="f-input">
                                </div> -->
                                  <div class="profile-edit-input-field">
                                    <label>Birthday <span>(Optional)</span></label>
                                    <div class="new-group-form">
                                        <div class="new-group-item" style="margin-bottom: 0;">
                                            <select name="" id="" v-model="birthday.month">
                                                <option value="" disabled selected>Month</option>
                                                <option v-for="item in 12" :value="item" :key="item">{{item}}</option>
                                            </select>
                                        </div>
                                        <div class="new-group-item" style="margin-bottom: 0;"> 
                                            <select name="" id="" v-model="birthday.day">
                                                <option value="" disabled selected>Day</option>
                                                <option v-for="item in 31" :value="item" :key="item">{{item}}</option>
                                            </select>
                                        </div>
                                        <div class="new-group-item" style="margin-bottom: 0;">
                                            <select name="" id="" v-model="birthday.year">
                                                <option value="" disabled selected>Year</option>
                                                <option v-for="item in 120" :value="item+1900" :key="item">{{item+1900}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Email address <sup>*</sup></label>
                                    <input disabled v-model="formData.email" type="text" value="xyz@example.com" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Zip <sup>*</sup></label>
                                    <input v-model="formData.zip" type="tel" value="+8801781610033" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Gender <sup>*</sup></label>
                                    <select v-model="formData.gender" name="" id="" class="f-input">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Location <sup>*</sup></label>
                                    <input v-model="formData.address" type="text" value="" placeholder="Street address" class="f-input">
                                </div>
                            </div>
                            <div class="profile-edit-button">
                                <button class="_1btn" v-if="!isload" @click="updateUser">Save changes</button>
                                <button class="_1btn" v-else disabled> loading...</button>
                            </div>
                        </div>
                        <div class="profile-edit-item">
                            <h3>Change password</h3>
                            <div class="profile-edit-input-box flex-col">
                                <div class="profile-edit-input-field">
                                    <label for="">Current password <sup>*</sup></label>
                                    <input v-model="passData.oldpassword" type="password" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">New password <sup>*</sup></label>
                                    <input v-model="passData.password" type="password" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">New password again <sup>*</sup></label>
                                    <input v-model="passData.confirmPassword" type="password" class="f-input">
                                </div>
                            </div>
                            <div class="profile-edit-button">
                                <button class="_1btn" @click="updateUserPassword" v-if="!isload2">Save password</button>
                                <button class="_1btn" v-else disabled>Loading...</button>
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
    // middleware: 'authenticated',
    data(){
        return{
            formData:{
                id:'',
                firstName:'',
                lastName:'',
                email:'',
                birthday:'',
                zip:'',
                address:'',
                img:'',
                gender:'',
            },
             birthday:{
                month:'',
                day:'',
                year:''
            },
            passData:{
                id:'',
                oldpassword:'',
                password:'',
                confirmPassword:'',
            },
            isload:false,
            isload2:false,

        }
    },
    methods:{
       async updateUser(){
            this.formData.birthday= `${this.birthday.year}-${this.birthday.month}-${this.birthday.day}`
             if(this.formData.firstName == '') return this.i("Frist name is empty!")
            if(this.formData.lastName == '') return this.i("Last name is empty!")
            if(this.formData.zip == '') return this.i("Zip  is empty!")
            if(!this.formData.img || this.formData.img == '') return this.i("Image is empty!")
            this.isload = true
            const res = await this.callApi('post', `/app/updateUserInformation`, this.formData)
            if(res.status==200){
                this.s("Your Profile has been updated!!")
                  this.isload = false
            }
            else{
                this.e("please check your network!!")
                this.isload = false
            }
        },
        async updateUserPassword(){
            this.passData.id = this.authInfo.id
            this.isload2 = true
            const res = await this.callApi('post', `/app/updateUserPassword`, this.passData)
            if(res.status==200){
                this.s("Your Password Update Successfully!!")
                this.passData={
                    id:'',
                    oldpassword:'',
                    password:'',
                    confirmPassword:'',
                },
                this.isload2 = false
            }
            else if(res.status==422){
                this.isload2 = false
                return this.e(res.data.message)
            }
            else if(res.status==401){
                this.isload2 = false
                return this.e(res.data.message)
            }
            else{
                this.isload2 = false
                return this.e("please check your network!!")
            }
            this.isload2 = false
        },
         handleSuccess (res, file) {
            this.formData.img = res.file 
        },
        

    },
    created(){
        if(!this.authInfo){
            window.location = '/'
        }
        this.formData.id = this.authInfo.id
        this.formData.firstName = this.authInfo.firstName
        this.formData.lastName = this.authInfo.lastName
        this.formData.birthday = this.authInfo.birthday
        this.formData.email = this.authInfo.email
        this.formData.zip = this.authInfo.zip
        this.formData.img = this.authInfo.img
        this.formData.genders = this.authInfo.genders
        this.formData.address = this.authInfo.address
        this.birthday.year =new Date(this.authInfo.birthday).getFullYear()
        this.birthday.month =new Date(this.authInfo.birthday).getMonth()
        this.birthday.day =new Date(this.authInfo.birthday).getDate()
        console.log(this.birthday)
    }

}
</script>

<style>

</style>
