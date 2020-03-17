<template>
    <div>
         <div :class="(this.isMobileSideBar==true)? 'new-sidebar active':'new-sidebar'" class="new-sidebar new-sidebar-flan new-sidebar-flan-action">
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
                                        <!-- <p>Professional sports</p> -->
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
                                        <!-- <p>Products & service</p> -->
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
                </div>
            </div>
    </div>
</template>