
<template>
    <div class="pof">
        <div class="new-flank-nav">
            <div class="new-flank-nav-top new-menu-flank">
                <div class="container">

                    <!-- This is for mobile menu. When click on this bar, sidebar will show and also hide this bar -->
                    <div class="flank-coll-bar" v-if="!isMobileSideBar" @click="isMobileSideBarEvent">
                        <img src="/images/three-bar.png" alt="">
                    </div>

                    <!-- When click bar, the bar will be hide and this cross will show -->
                    <!-- ekane kaj hobe -->
                    <div class="flank-coll-bar" v-if="isMobileSideBar" @click="isMobileSideBarEvent">
                        <img src="/images/new-cross.png" alt="">
                    </div>


                    <div class="flank-brand flank-search-item" >
                        <nuxt-link to="/">

                            <img src="/images/new-brand.png" alt="">
                        </nuxt-link>
                    </div>
                    <div class="flank-search flank-search-item">
                    
                        <div class="flank-search-inner" >
                            <div class="flank-search-label" @click="newMethod">
                                
                                <label >{{slectedTitle}}<span><i class="fas fa-caret-down"></i></span></label>
                                <!-- <label for="">Coach Name<span><i class="fas fa-caret-down"></i></span></label> -->
                                <!-- add class active with flank-search-dropdown class to show dropdown -->
                                <!-- {{isStringMenu[0]}} -->
                                <div class="flank-search-dropdown" :class="(isStringMenu[0])?'active':''">
                                    <ul>
                                        <!-- <li><a @click="SearchByKeyV2('coach')">Coach Name</a></li>
                                        <li><a @click="SearchByKeyV2('school')">School Name</a></li> -->
                                        <li><a @click="pageOptionDropChange('coach')">Coach Name</a></li>
                                        <li><a @click="pageOptionDropChange('school')">School Name</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flank-search-input">
                                <!-- <input type="text" v-model="tStr" @enter="SearchByKey" > -->
                                <input type="text" v-model="tStr" @keyup.enter="SearchByKey">
                            </div>
                            <div class="flank-search-btn">
                                <button @click="SearchByKey" ><span><i class="fas fa-search"></i></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="flank-search-auth  flank-search-item">
                        <div class="flank-search-auth-soc">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <div class="flank-search-auth-ac">
                            <!-- hide this after login -->

                            <!-- show this after login -->
                            <ul class="after-login" v-if="isLoggedIn">
                                <li>
                                    <a @click="$router.push('/flanker/'+authInfo.id)">Hello, <span>{{authInfo.firstName}}</span></a>
                                    
                                </li>
                                <li><a @click="logout">Sign out</a></li>
                            </ul>
                            <ul v-else>
                                <li><a @click="$router.push('/login')">Log in</a></li>
                                <li>/</li>
                                <li><a @click="$router.push('/signup')">Sign up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="new-flank-nav-banner">
                <div class="container">
                    <img src="/images/new-top.png" alt="flank_banner">
                </div>
            </div> -->
            <nav class="new-flank-header-nav" :class="(isMobileMenu)? 'active' : ''">
                <div class="container">
                    <div class="header-nav-indi"  :class="(isMobileMenu)? 'active' : ''">
                        <div class="header-nav-close" @click="isMobileMenu = false" >
                            <span><i class="fas fa-times"></i></span>
                        </div>
                        <ul class="header-nav-indi-left">
                            <li :class="(div == 'High School')? 'active' : ''" ><a @click="SearchByKeyV2('coach','High School')"><img src="/images/n1.png" alt=""> HS Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                            <li :class="(div == 'Junior College')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Junior College')"><img src="/images/n2.png" alt=""> CC Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                            <li :class="(div == 'Club/Travel')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Club/Travel')"><img src="/images/n3.png" alt=""> Local Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                            <!-- <li :class="(div == '')? '' : ''" ><a @click="SearchByKeyV2('coach')">More<span><i class="fas fa-chevron-down"></i></span></a></li> -->
                            <!-- <li :class="(div == '')? 'active' : ''" ><a @click="SearchByKeyV2('coach')">More<span><i class="fas fa-chevron-down"></i></span></a></li> -->
                        </ul>
                        <ul class="header-nav-indi-right">
                            <!-- <li><a @click="$router.push('/write_review')"><img src="/images/like.png" alt="">Write a Review</a></li> -->
                            <li><a @click="$router.push('/write_review')"><img src="/images/n4.png" alt=""> Write a Review</a></li>
                            <!-- <li><a @click="$router.push('/bussniess-promotion')" ><img src="/images/bag.png" alt="">For Business</a></li> -->
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>

        <div :class="(isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action pk-new-sidebar">
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Account</h4>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                    <figure>
                                        <img src="/image/High-School-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption" >
                                        <p>High school coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Junior College`)">
                                    <figure>
                                        <img src="/image/College-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>College coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=High School`)">
                                    <figure>
                                        <img src="/image/Most-Connected.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Healthiest coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/coach_search?pageOption=coach&div=Club/Travel`)">
                                    <figure>
                                        <img src="/image/Travel-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Travel team coaches</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/local_business`)">
                                    <figure>
                                        <img src="/image/Local-Coaches.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Local instructors <span class="red">(Coming soon)</span></p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push(`/bussniess-promotion`)">
                                    <figure>
                                        <img src="/image/ProductsServices.gif" alt="">
                                    </figure>
                                    <div class="quick-link-caption">
                                        <p>Products & services <span class="red">(Coming soon)</span></p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>Help & settings</h4>
                        <ul>
                            <li v-if="isLoggedIn"><nuxt-link :to="`flanker/${authInfo.id}`"><div class="quick-link-caption"><p>Your account</p></div></nuxt-link></li>
                            <li v-if="!isLoggedIn"><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Your account</p></div></nuxt-link></li>
                            <li v-if="!isLoggedIn"><nuxt-link to="/login?message=true"><div class="quick-link-caption"><p>Sign in</p></div></nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="new-sidebar-item">
                    <div class="quick-link-content sidebar-con-list">
                        <h4>About</h4>
                        <ul>
                            <li><nuxt-link to="/about"><div class="quick-link-caption"><p>About flank</p></div></nuxt-link></li>
                            <li><nuxt-link to="/guidlines"><div class="quick-link-caption"><p>Content Guidelines</p></div></nuxt-link></li>
                            <li><nuxt-link to="/tos"><div class="quick-link-caption"><p>Tearms of service</p></div></nuxt-link></li>
                            <li><nuxt-link to="/policy"><div class="quick-link-caption"><p>Privacy policy</p></div></nuxt-link></li>
                        </ul>
                    </div>

                    <div class="mobile-social-icon">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        <!-- <nav class="new-flank-header-nav" :class="(isMobileMenu)? 'active' : ''">
            <div class="container">
                <div class="header-nav-indi"  :class="(isMobileMenu)? 'active' : ''">
                    <div class="header-nav-close" @click="isMobileMenu = false" >
                        <span><i class="fas fa-times"></i></span>
                    </div>
                    <ul class="header-nav-indi-left">
                        <li :class="(div == 'High School')? 'active' : ''" ><a @click="SearchByKeyV2('coach','High School')">HS Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                        <li :class="(div == 'Junior College')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Junior College')">CC Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                        <li :class="(div == 'Club/Travel')? 'active' : ''" ><a @click="SearchByKeyV2('coach','Club/Travel')">Local Coaches<span><i class="fas fa-chevron-down"></i></span></a></li>
                    </ul>
                    <ul class="header-nav-indi-right">
                        <li><a @click="$router.push('/write_review')"><img src="/images/like.png" alt="">Write a Review</a></li>
                        <li><a @click="$router.push('/bussniess-promotion')" ><img src="/images/bag.png" alt="">For Business</a></li>
                    </ul>
                </div>
            </div>
        </nav>  -->

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
                urlcheck:this.getUrl,
                showSideManu:false,
                slectedTitle:'Coach Name',
                isStringMenu:[false],
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
                forPageoption:'coach'
                
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
            newMethod(){
                // this.i("O")
                this.$set(this.isStringMenu,0,!this.isStringMenu[0]);
            },
             pageOptionDropChange(item){
                //  this.newMethod()
                //   this.$set(this.isStringMenu,0,false);
                // console.log(this.isStringMenu[0])
                //  this.i(item)
                //  this.isStringMenu=false
                 
                //  console.log(this.isStringMenu)
                 if(item=='school'){

                     this.slectedTitle='School Name'
                 }
                 else{
                     this.slectedTitle='Coach Name'
                 }
                //  this.i(this.slectedTitle)
                
                // this.SearchByKey()
                this.forPageoption = item
                // this.$store.commit('setPageOption', this.forPageoption)
                
               
                // this.isStringMenu = false
                // this.i(this.isStringMenu)
            
            }, 
            async SearchByKey(){
                this.$store.commit('setPageOption', this.forPageoption)
                this.$store.commit('setUrl', '/')
                this.$store.commit('setStr', this.tStr )
                // this.i('kd')
                // if(this.pageOption != 'product'){
                //     if(this.tStr == '' ) return this.i("Please Write a name")
                //     if(this.place == '') return this.i("Please Write a City")
                //     this.$router.push('/coach_search')
                // }

                const res = await this.callApi('get', `/app/SearchData?place=${this.place}&str=${this.tStr}&pageOption=${this.pageOption}`)
                console.log(res, "testing") 
                // console.log(this.pageOption, "testing") 
              if(res.status === 200){
                    console.log(this.pageOption)
                     if(this.pageOption == 'school') {

                         if(res.data && res.data.mainData && res.data.mainData.data){
                             
                             this.schoolAssignRateTExt(res.data.mainData.data)
                             this.$store.commit('setSearchData', res.data.mainData.data)
                             console.log(res.data.mainData)
                            this.coachAssignRateText(res.data.similarData)
                         }
                         else if(res.data && res.data.data){
                             this.schoolAssignRateTExt(res.data.data)
                             this.$store.commit('setSearchData', res.data)
                             console.log(res.data.data)

                         }
                        
                     }
                    //  if(this.pageOption == 'school') this.schoolAssignRateTExt(res.data.data)
                    else{
                         if(res.data && res.data.mainData && res.data.mainData.data){

                            this.coachAssignRateText(res.data.mainData.data)
                             this.coachAssignRateText(res.data.similarData)
                             this.$store.commit('setSearchData', res.data.mainData.data)
                              delete res.data.mainData.data
                        }
                    } 
                    
                    
                    this.$store.commit('setPagination', res.data.mainData )
                    this.$store.commit('setSimilar', res.data.similarData )
                    this.$store.commit('setStr', this.tStr )
                    this.$router.push(`/coach_search?place=${this.place}&str=${this.tStr}&pageOption=${this.pageOption}`)
                    
                }
                else{
                    this.swr();
                   
                }
                console.log(this.searchData,'maindata')
                
            }, 
            async SearchByKeyV2(page = 'coach',div = '',attribute=''){
                // this.isStringMenu = false
                //  this.$set(this.isStringMenu, false);
               this.tStr = ''
                
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
            
            this.isCoachSearchPage = true
            // if(window.location.pathname=='/coach_search' || window.location.pathname=='/'){
            // this.isCoachSearchPage = true
            // }
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
        //   console.log(newVal)
      
          if(newVal=='coach_search'){
               
          }
          else{
              this.tStr = ''
          }
        
        this.$store.commit('setIsMobileSideBar', false )
         this.isCoachSearchPage = true
        // if(newVal == 'coach_search' || newVal == 'index'){
        //   this.isCoachSearchPage = true
        // }
        // else{
        //   this.isCoachSearchPage = false
        // }

      },
      'str':function(newValue, oldValue) {

          if(newValue==''){
              this.tStr = ''
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

