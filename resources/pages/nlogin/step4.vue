<template>
    <div>
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
        <div class="step3_area">
            <div class="container">
                <div class="row step3_border">
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="step3_left">
                            <h3 class="step3_left_head">Find Friends</h3>
                            <ul class="step3_social_list">
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-square"></i> On Facebook
                                    </a> 
                                </li>
                                <li class="step3_social_list_active">
                                    <a href="#">
                                        <i class="fas fa-envelope"></i> In Your Email Contacts
                                    </a> 
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fas fa-user-friends"></i> Invite Friends to Yelp
                                    </a> 
                                </li>
                            </ul>
                            <form action="#" class="step3-search">
                                <label  class="red-alert">Search Friends on Flank</label>
                                <input type="text" placeholder="e.g Tom shaw">
                                <div class="search-icon">
                                    <i class="fas fa-search"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-8 col-xs-12">
                         <div class="step4_right"> 
                            <h3 class="red-alert step3-title mar_b20">Choose your email account from the following providers </h3>
                            <div class="step4_right_social mar_b20">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div class="step4_social_single">
                                                <img src="assets/images/step4_gmail.jpg" alt="">
                                                <p>Yahoo</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="step4_social_single">
                                                <img src="assets/images/step4_yahoo.jpg" alt="">
                                                <p>Yahoo</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="step4_social_single">
                                                <img src="assets/images/step4_outlook.jpg" alt="">
                                                <p>Yahoo</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="step4_social_single">
                                                <img src="assets/images/step4_aol.jpg" alt="">
                                                <p>Yahoo</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p class="step3-sub">Don’t see your email provider here? Don’t worry, you can still </p>
                            <h3 class="red-alert safe-item"><i class="fas fa-lock"></i> Your information is safe. </h3>
                            <p class="step3-sub">We don’t store your email password. Your address book is used t</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>