
<template>
    <div>
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
                                <li>
                                    <a href="#">
                                        <i class="fas fa-envelope"></i> In Your Email Contacts
                                    </a> 
                                </li>
                                <li class="step3_social_list_active">
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
                         <div class="step5_right"> 
                            <h3 class="red-alert step3-title mar_b20">Send Flank Invites To These Email Addresses:  </h3>
                            <form action="#">
                                <div class="group-item">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="e.g.tom@email.com">
                                </div>
                                <div class="group-item">      
                                    <input type="email">
                                </div>
                                <div class="group-item">      
                                    <input type="email">
                                </div>
                                <button class="add-acc mar_b20">Add another email address</button>
                                <div class="group-item">
                                    <input class="block-btn" type="submit" value="Send Email Invites">
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>