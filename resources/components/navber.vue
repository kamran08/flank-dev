
<template>
    <div class="pof">
        <div class="new-flank-nav">
            <div class="container">
                <div class="new-flank-nav-con">
                    <div v-if="isMobileSideBar==false" class="flank-coll-bar" @click="isMobileSideBarEvent">
                        <img src="/images/three-bar.png" alt="">
                    </div>
                    <div v-else class="flank-coll-bar" @click="isMobileSideBarEvent">
                        <img src="/images/new-cross.png" alt="">
                    </div>
                    <div class="flank-new-brand">
                        <!-- /flanker'+authInfo.id  -->
                        <a @click="$router.push('/')"><img src="/images/new-l.png" alt=""></a>
                        <!-- <div class="mobile-button" @click="isMobileMenu = true" >
                            <span><i class="fas fa-bars"></i></span>
                        </div> -->
                    </div>

                    <div class="new-up-search-form" v-if="isCoachSearchPage">
                        <div class="flank-new-form fl-flank-new-form">
                            <form v-on:submit.prevent>
                                <div class="flank-new-indi">
                                    <div class="new-flank-selection fl-new-flank-selection new-up-flank-selection" style="flex: none;padding: 5px 15px;">
                                        <p  style="cursor:pointer;" @click="isStringMenu = (isStringMenu)? false : true">{{slectedTitle}} <span><i class="fas fa-caret-down"></i></span></p>
                                        <!-- <p  @click="isStringMenu = (isStringMenu)? false : true" style="cursor:pointer;" > {{(pageOption)? pageOption: 'All'}} <span><i class="fas fa-caret-down"></i></span></p> -->
                                        <div class="new-flank-selection-dropdown new-flank-selection-dropdown-fl" v-if="isStringMenu"  >


                                            <ul>
                                                <li><a @click="pageOptionDropChange('school'),slectedTitle='School Name'">School Name</a></li>
                                                <li><a @click="pageOptionDropChange('coach'),slectedTitle='Coach Name'">Coach Name</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="new-flank-input" style="flex: 1;">
                                        <input type="text" v-model="tStr" @enter="SearchByKey" >
                                    </div>
                                </div>
                                <div class="flank-new-indi" v-if=" pageOption != 'product' "  >
                                    <div class="new-flank-selection">
                                        <p>Near</p>
                                    </div>
                                    <div class="new-flank-input" >
                                        <input type="text" v-model="tPlace" v-on:keyup="searchPlace" @enter="SearchByKey"  > 
                                        <div class="new-flank-indi-dropdown" v-if="allPlaces.length>0 && tPlace != ''" >
                                            <ul class="ssrolable" >
                                                <li v-for="(item,index) in allPlaces" :key="index" >
                                                    <a @click="letChangePlace(item)">{{item.name}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="flank-new-search fl-flank-new-search new-up-flank-search">
                                    <button @click="SearchByKey" ><span><i class="fas fa-search"></i></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="flank-new-autho" v-if="!isLoggedIn" >
                        <div class="autho-in">
                            <button @click="$router.push('/login')">Log in</button>
                        </div>
                        <div class="autho-up">
                            <button @click="$router.push('/signup')">Sign Up</button>
                        </div>
                    </div>
                    <div class="flank-new-autho" v-else>
                        <div class="profile-ico">
                            <button @click="$router.push('/flanker/'+authInfo.id)"><i class="fas fa-user-circle"></i></button>
                        </div>
                        <div class="autho-in">
                            <button @click="logout" >Log Out</button>
                        </div>
                        
                    </div>
                </div>
                <div class="new-flank-nav-form">
                    <div class="flank-new-form fl-flank-new-form">
                        <form v-on:submit.prevent>
                            <div class="flank-new-indi">
                                <div class="new-flank-selection fl-new-flank-selection">
                                    <p  @click="isStringMenu = (isStringMenu)? false : true" style="cursor:pointer;" > {{(pageOption)? pageOption: 'All'}} <span><i class="fas fa-caret-down"></i></span></p>
                                    <div class="new-flank-selection-dropdown new-flank-selection-dropdown-fl" v-if="isStringMenu"  >
                                        <ul>
                                            <li><a @click="pageOptionDropChange('school')">School</a></li>
                                            <li><a @click="pageOptionDropChange('coach')">Coach</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="new-flank-input">
                                    <input type="text" v-model="tStr" @enter="SearchByKey" >
                                </div>
                            </div>
                            <div class="flank-new-indi" v-if=" pageOption != 'product' "  >
                                <div class="new-flank-selection">
                                    <p>City</p>
                                </div>
                                <div class="new-flank-input" >
                                    <input type="text" v-model="tPlace" v-on:keyup="searchPlace" @enter="SearchByKey"  > 
                                    <div class="new-flank-indi-dropdown" v-if="allPlaces.length>0 && tPlace != ''" >
                                        <ul class="ssrolable" >
                                            <li v-for="(item,index) in allPlaces" :key="index" >
                                                <a @click="letChangePlace(item)">{{item.name}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flank-new-search fl-flank-new-search">
                                <button @click="SearchByKey" ><span><i class="fas fa-search"></i></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="new-navbar-link">
                    <ul>
                        <li><a @click="SearchByKeyV2('coach','High School')">HS Coaches</a></li> 
                        <li><a @click="SearchByKeyV2('coach','Junior College')">CC Coaches</a></li>
                        <li><a @click="SearchByKeyV2('coach','','averageHealthy')"><img src="/images/hos.png" alt="">Coaches</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class="new-flank-header-nav" :class="(isMobileMenu)? 'active' : ''">
            <div class="container">
                <div class="header-nav-indi"  :class="(isMobileMenu)? 'active' : ''">
                    <div class="header-nav-close" @click="isMobileMenu = false" >
                        <span><i class="fas fa-times"></i></span>
                    </div>
                    <ul class="header-nav-indi-left">
                        <li :class="(div == 'High School')? 'active' : ''" ><a @click="SearchByKeyV2('coach','High School')">HS Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                        <li :class="(div == 'Junior College')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Junior College')">CC Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                        <li :class="(div == 'Club/Travel')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Club/Travel')">Local Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                        <!-- <li :class="(div == '')? 'active' : ''" ><a @click="SearchByKeyV2('coach')">More<span><i class="fas fa-chevron-down"></i></span></a></li> -->
                    </ul>
                    <ul class="header-nav-indi-right">
                        <li><a @click="$router.push('/write_review')"><img src="/images/like.png" alt="">Write a Review</a></li>
                        <li><a @click="$router.push('/bussniess-promotion')" ><img src="/images/bag.png" alt="">For Business</a></li>
                    </ul>
                </div>
            </div>
        </nav> 

        <!-- ========== Topbar Start ============= -->
        <!-- <div class="pof">
            <div class="new-flank-nav">
                <div class="new-flank-nav-con">
                <div class="flank-new-brand new-flank-br">
                    <a @click="$router.push('/')">
                    <img src="/images/logo-new.png" alt />
                    </a>
                    <div class="mobile-button">
                            <span>
                            <i class="fas fa-bars"></i>
                            </span>
                    </div>
                </div>
                <div class="flank-new-form new-flank-fr">
                    <div class="nav-review-title">
                    <h2>Write a Review</h2>
                    </div>
                </div>
                <div class="flank-new-autho" v-if="!isLoggedIn">
                    <div class="autho-in">
                    <button @click="$router.push('/login')">Log in</button>
                    </div>
                    <div class="autho-up">
                    <button @click="$router.push('/signup')">Sign Up</button>
                    </div>
                </div>
                <div class="flank-new-autho" v-else>
                            <div class="autho-in">
                                <button @click="logout" >Logout</button>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div> -->
        <!-- ========== Topbar End ============= -->   
    </div>
</template>

<script>
    export default { 
        data(){
            return{
                slectedTitle:'All',
                isStringMenu:false,
                isMobileMenu:false,
                tStr:'',
                tPlace:'',
                allPlaces:[],
                isCoachSearchPage:false,
                packType:0,
                legend_id:0,
                reviewModal:false,
                rData:{
                    for:0,
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
               
                sort:'',
                
                isMenuOpen:false,
                
            }
        },
        methods:{
            menuChange(){
              
            },
            isMobileSideBarEvent(){
                let data = (this.isMobileSideBar==true)? false : true
                this.$store.commit('setIsMobileSideBar', data )
            },
            letChangePlace(item){
                this.tPlace = item.name
                this.$store.commit('setPlace', item.name )
                this.allPlaces = []
                this.SearchByKey();
            },
            async searchPlace(){
                this.$store.commit('setPlace', this.tPlace )
                const res = await this.callApi('get', `/app/searchPlace?place=${this.place}`)
                if(res.status === 200){
                this.allPlaces = res.data
                }
                else{
                    this.swr();
                    this.isLoading = false
                }
            },
             pageOptionDropChange(item){
                this.$store.commit('setPageOption', item )
                this.isStringMenu = false
                // this.SearchByKey()
            
            }, 
            async SearchByKey(){
                // if(this.pageOption != 'product'){
                //     if(this.tStr == '' ) return this.i("Please Write a name")
                //     if(this.place == '') return this.i("Please Write a City")
                //     this.$router.push('/coach_search')
                // }

                const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.tStr}&pageOption=${this.pageOption}`)
                if(res.status === 200){
                     if(this.pageOption == 'school') this.schoolAssignRateTExt(res.data.mainData.data)
                    else this.coachAssignRateText(res.data.mainData.data)
                    this.coachAssignRateText(res.data.similarData)
                    this.$store.commit('setSearchData', res.data.mainData.data)
                    delete res.data.mainData.data
                    this.$store.commit('setPagination', res.data.mainData )
                    this.$store.commit('setSimilar', res.data.similarData )
                    this.$store.commit('setStr', this.tStr )
                    this.$router.push(`/coach_search?place=${this.place}&str=${this.tStr}&pageOption=${this.pageOption}`)
                    
                }
                else{
                    this.swr();
                   
                }
            }, 
            async SearchByKeyV2(page = 'coach',div = '',attribute=''){
               
                
                const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.tStr}&pageOption=${page}&div=${div}&attribute=${attribute}`)
                if(res.status === 200){
                     if(this.pageOption == 'school') this.schoolAssignRateTExt(res.data.mainData.data)
                    else this.coachAssignRateText(res.data.mainData.data)
                    this.coachAssignRateText(res.data.similarData)
                    this.$store.commit('setSearchData', res.data.mainData.data)
                    delete res.data.mainData.data


                    this.$store.commit('setPageOption', page )
                    this.$store.commit('setDiv', div )
                    this.$store.commit('setPagination', res.data.mainData )
                    this.$store.commit('setSimilar', res.data.similarData )
                    this.$store.commit('setStr', this.tStr )
                    this.$router.push(`/coach_search?place=${this.place}&str=${this.tStr}&pageOption=${page}&div=${div}&attribute=${attribute}`)
                    
                }
                else{
                    this.swr();
                   
                }
            },
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
                    window.location = '/'
                } catch (error) {
                    console.log(error);
                }
            },
        },
        async created(){
            if(window.location.pathname=='/coach_search' || window.location.pathname=='/'){
                this.isCoachSearchPage = true
            }
            // let d = new Date('2019-08-11');
            // d.setDate(d.getDate() + 60);
            // let monthNumber = d.getMonth()+1
            // monthNumber = ("0" + monthNumber).slice(-2);
            // let dayNumber = d.getDate()
            // dayNumber = ("0" + dayNumber).slice(-2);
            // let today = `${d.getFullYear()}-${monthNumber}-${dayNumber}`
            // console.log(today)

            //  if(this.isLoggedIn){
            //      this.packType = this.authInfo.packType
            //      const res = await this.callApi('get',`/app/getLegendId/${this.authInfo.id}`)
            //      if(res.status===200){
            //          this.legend_id = res.data.id
            //      }
            //  } 
        },
    watch: { 
      '$route.name': function(newVal, oldVal) { 
          console.log(newVal)
        // watch it
        this.$store.commit('setIsMobileSideBar', false )
        if(newVal == 'coach_search' || newVal == 'index'){
          this.isCoachSearchPage = true
        }
        else{
          this.isCoachSearchPage = false
        }

      }
    },
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
.yxz_ll{
    margin-left: 5px;
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
</style>

