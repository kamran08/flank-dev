<template>
    <div>
        <div class="container">
            <div class="section-content" style="margin-bottom: 250px;"> 
                <div class="wr-re-content">
                    <h1>Start review</h1>
                </div>
                <div class="wr-re-details">
                    <h2>Write a review for <span>Coaches</span></h2>
                    <div class="wr-review-form">
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <div class="wr-review-item">
                                    <div class="wr-review-item-main">
                                        <button class="inner-button-main "  @click="rData.for=1" :class="(rData.for == 1)? 'active_btn': ''" >School</button>
                                        <div class="inner-dropdown" v-if="rData.for == 1" >
                                            <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type" >
                                                <AutoComplete
                                                    style="width: 100%;margin-top: 15px;"
                                                    v-model="rData.school"
                                                    icon="ios-search"
                                                    @on-change="SearchByKeySchool"
                                                    placeholder="Enter School Name ..."
                                                    >
                                                    <div class="demo-auto-complete-item"  v-for="(item,index) in schoolList" :key="index" @click="manageSchoolData(item)"  >
                                                            <p class="ivu-select-item">{{item.name}} | {{item.sport}} </p>
                                                    </div>
                                                </AutoComplete>
                                                 <template v-if="sData.school_id !=0" >
                                                    <AutoComplete
                                                        style="width: 100%;margin-top: 15px;"
                                                        v-model="rData.key"
                                                        icon="ios-search"
                                                        @on-change="SearchByKeySchoolCoach"
                                                        placeholder="Enter School Coach Name ..."
                                                        >
                                                        <div class="demo-auto-complete-item"  v-for="(item,index) in schoolCoachList" :key="index" @click="selectCoachWall(item)"  >
                                                                <p class="ivu-select-item">{{item.name}}</p>
                                                        </div>
                                                    </AutoComplete>
                                                    <div class="review-confirm-button">
                                                         <Button v-if="schoolCoachList.length==0 &&  rData.key !='' && !schoolButton" @click="CreateNewCoach" style="margin-top: 10px;" >Create a Coach</Button>
                                                    </div>
                                                    <div class="text-center m-2">
                                                     </div>
                                                </template>
                                                <!-- <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i>  
                                                <input autocomplete="off" v-model="rData.school"  v-on:keyup="SearchByKeySchool" spellcheck="false" type="text" placeholder="Enter School Name ..." class="ivu-input ivu-input-default">  -->
                                                
                                                 <!-- <div class="inner-dropdown-content">
                                                    <ul>
                                                        <li class="demo_hover" v-for="(item,index) in schoolList" :key="index" >
                                                            <span  @click="manageSchoolData(item)">{{item.name}} | {{item.sport}} </span>
                                                           
                                                        </li>
                                                    </ul>
                                                </div> -->
                                            </div>

                                           
                                            <div class="review-confirm-button">
                                                <button class="inner-full-confirm"  v-if="schoolButton && schoolCoachList.length==0"  @click="goToCoachWall">Continue</button>
                                                <Button class="disable_btn" v-else type="dashed" disabled>Continue</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4"   >
                                <div class="wr-review-item">
                                    <div class="wr-review-item-main">
                                        <button class="inner-button-main"   @click="rData.for=2"  :class="(rData.for == 2)? 'active_btn': ''"  >Local legend</button>
                                        <div class="inner-dropdown" v-if="rData.for == 2"  >
                                            <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type" >
                                                 <AutoComplete
                                                    style="width: 100%;margin-top: 15px;"
                                                    v-model="lData.key"
                                                    icon="ios-search"
                                                    @on-change="SearchByKeyCoach"
                                                    placeholder="Enter Coach Name ..."
                                                    >
                                                    <div class="demo-auto-complete-item"  v-for="(item,index) in coachList" :key="index" @click="selectLegendWall(item)"  >
                                                            <p class="ivu-select-item">{{ item.name }}</p>
                                                    </div>
                                                </AutoComplete>
                                                <!-- <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i> 
                                                <input autocomplete="off" spellcheck="false" type="text" placeholder="Enter School Name ..." class="ivu-input ivu-input-default">  -->
                                            </div>
                                            <div class="review-confirm-button">
                                                 <button  class="inner-full-confirm" v-if="legendButton && coachList.length==0" type="info" @click="goToLegendWall">Continue</button>
                                                <Button  class="disable_btn" v-else type="info" disabled>Continue</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4" >
                                <div class="wr-review-item">
                                    <div class="wr-review-item-main">
                                        <button class="inner-button-main"  @click="rData.for=3" :class="(rData.for == 3)? 'active_btn': ''"  >Product</button>
                                        <div class="inner-dropdown"  v-if="rData.for == 3"  >
                                            <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"  >
                                                <AutoComplete
                                                    style="width: 100%;margin-top: 15px;"
                                                    v-model="pData.key"
                                                    icon="ios-search"
                                                    @on-change="SearchByKeyProduct"
                                                    placeholder="Enter Product Name ..."
                                                    >
                                                    <div class="demo-auto-complete-item"  v-for="(item,index) in productList" :key="index" @click="selectProductWall(item)"  >
                                                            <p class="ivu-select-item">{{ item.name }}</p>
                                                    </div>
                                                </AutoComplete>
                                                 <!-- <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i> 
                                                <input autocomplete="off" spellcheck="false" type="text" placeholder="Enter School Name ..." class="ivu-input ivu-input-default">  -->
                                            </div>
                                            <div class="review-confirm-button">
                                                  <button  class="inner-full-confirm" v-if="productButton && productList.length==0" type="dashed" @click="goToProductWall">Continue</button>
                                                <Button class="disable_btn" v-else type="dashed" disabled>Continue</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                packType:0,
                legend_id:0,
                reviewModal:false,
                rData:{
                    for:1,
                    key:'',
                    school:'',
                },
                pData:{
                    key:'',
                },
                lData:{
                    key:'',
                },
                schoolButton:false,
                schoolButton_id:0,
                legendButton:false,
                legendButton_id:0,
                productButton:false,
                productButton_id:0,
                coachList:[],
                schoolList:[],
                schoolCoachList:[],
                productList:[],
                sData:{
                    school_id:0,
                    
                },
                legend:{
                    id:'',
                },
                iamIndex:false,
                searchTxt:'',
                addressTxt:'',
                pageOption:'',
                sort:''
                
            }
        },
        // async asyncData({app, store,redirect, params}){
        //     try {
        //         let {data} = await app.$axios.get(`/legends/${params.id}`)
            
        //         return{
        //             legendData : data.legend,
        //             userData : data.user,
        //             averageRating : data.averageRating,
        //             healthPulse : data.healthPulse,
        //             AttributeInfo : data.AttributeInfo,
        //             totalReview : data.legend.__meta__.totalReview_count
                    
        //         }
        //     }catch (error) {
        //         console.log(error)
        //         return redirect('/')
        //     }
        // },
        methods:{
            closeModal(){
                this.rData.for=0
                this.rData.key=''
                this.rData.school=''
                this.coachList=[]
                this.schoolList=[]
                this.schoolCoachList=[]
                this.productList=[]
                this.sData.school_id = 0

                this.reviewModal = false
            },
            async CreateNewCoach(){
                if(this.sData.school == ''){
                    this.i('Please Write a Coach Name')
                    return
                }
                 if(this.isLoggedIn == false){
                    this.i('Please login first !')
                    this.$router.push('/login');
                    return
                }
                let tempCoach = {
                    school_id: this.sData.school_id,
                    name:this.rData.key
                }
                const res = await this.callApi('post','/app/storeSchoolCoache',tempCoach)
                if(res.status == 200){
                    this.SearchByKeySchoolCoach()
                    this.s('Coach created successfully!')
                   
                }
                else{
                    this.swr()
                }
            },
            manageSchoolData(item){
                this.rData.school = item.name+" | "+item.sport
                this.sData.school_id = item.id
                this.schoolList = []

            },
            async SearchByKeySchoolCoach(){
                console.log('This is ok')
               const res = await this.callApi('get',`/app/SearchByKeySchoolCoach?key=${this.rData.key}&school_id=${this.sData.school_id}`) 
               if(res.status=== 200){
                   this.schoolCoachList = res.data
               }
               else{
                   this.swr()
               }
            },
            async SearchByKeyCoach(){
               const res = await this.callApi('get',`/app/SearchByKeyCoach?key=${this.lData.key}`)
               if(res.status=== 200){
                   this.coachList = res.data
               }
               else{
                   this.swr()
               }
            },
            async SearchByKeyProduct(){
               const res = await this.callApi('get',`/app/SearchByKeyProduct?key=${this.pData.key}`)
               if(res.status=== 200){
                   this.productList = res.data
               }
               else{
                   this.swr()
               }
            },
            async SearchByKeySchool(){ 
                console.log("this is good")
               const res = await this.callApi('get',`/app/SearchByKeySchool?key=${this.rData.school}`)
               if(res.status=== 200){
                   this.schoolList = res.data
               }
               else{
                   this.swr()
               }
            },
            async selectLegendWall(item){
                this.legendButton = true
                this.legendButton_id = item.id
                this.lData.key = item.name
                this.coachList = []
            },
            async goToLegendWall(){
               this.closeModal()
                this.$router.push(`/addreview/${this.legendButton_id}`)
            },
            async goToProductWall(){
                 this.closeModal()
                this.$router.push(`/product_review/${this.productButton_id}`)
               
            },
            async selectProductWall(item){
                this.productButton = true
                this.productButton_id = item.id
                this.pData.key = item.name
                this.productList = []
            },
            async goToCoachWall(item){
                 this.closeModal()
                this.$router.push(`/scoach_review/${this.schoolButton_id}`)
               
            },
            async selectCoachWall(item){
                 this.schoolButton = true
                this.schoolButton_id = item.id
                this.rData.key = item.name
                this.schoolCoachList = []
               
            },
            async logout() {
                try {
                    let { data } = await this.$axios.get("/logout");
                    this.$store.commit("updateAuthUser", false);
                    window.location = '/login'
                } catch (error) {
                    console.log(error);
                }
            },
        },

        async created(){
            // let d = new Date('2019-08-11');
            // d.setDate(d.getDate() + 60);
            // let monthNumber = d.getMonth()+1
            // monthNumber = ("0" + monthNumber).slice(-2);
            // let dayNumber = d.getDate()
            // dayNumber = ("0" + dayNumber).slice(-2);
            // let today = `${d.getFullYear()}-${monthNumber}-${dayNumber}`
            // console.log(today)

             if(this.isLoggedIn){
                 this.packType = this.authInfo.packType
                 const res = await this.callApi('get',`/app/getLegendId/${this.authInfo.id}`)
                 if(res.status===200){
                     this.legend_id = res.data.id
                 }
             } 
        }
    }
</script>

<style scoped>
.pointer_like{
    cursor: pointer;
}
.menu_dropDown_on_nav{
     display: none;
        width: 100% !important;
    left: 0 !important;
    top: 45px !important;
    z-index: 1;
    padding: 0;
}
.menu_dropDown_on{
    display: none;
        width: 100% !important;
    left: 0 !important;
    top: 32px !important;
    z-index: 1;
}
.show_logo{
    
}
.pageOption:hover .menu_dropDown_on {display: block;}
.pageOption:hover .menu_dropDown_on_nav {display: block;}

@media only screen and (max-width: 992px) {
    
    .main-nav {
        display: none;
    }

    .main-nav.right-top.pull-right {
        display: none;
    }
}
.active_btn{
    background: #08c;
    color: #ffff;
}
.demo_hover:hover {
     background: #08c;
    color: #ffff;
}
</style>


