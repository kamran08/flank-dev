
<template>
    <div class="pt-120">
        <div class="sign-up-content padd_tb40">
            <div class="container">
                <div class="flanker-find-sec">
                    <div class="flanker-find-selection  flanker-find-pad">
                        <div class="flanker-find-sel-short">
                            <h4>Find friends</h4>
                            <ul class="flanker-flind-short-list">
                                <li  :class="(tab==1)? 'active': ''" @click="tab=1"><a ><img src="/images/fb.png" alt="">In Facebook</a></li>
                                <li  :class="(tab==2)? 'active': ''" @click="tab=2"><a ><img src="/images/envelop.png" alt="">In Your Email Contacts</a></li>
                                <li  :class="(tab==3)? 'active': ''" @click="tab=3"><a ><img src="/images/yelp.png" alt="">Invite Friends to Flank</a></li>
                            </ul>
                        </div>
                        <div class="flanker-find-search">
                            <h4>Search Friends on Flank</h4>
                            <div class="flanker-find-search-bar">
                                <input type="text" placeholder="e.g Tom Shaw, Tom S, toms">
                                <button><span><i class="fas fa-search"></i></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="flanker-find-det flanker-find-pad" >
                        <div class="flanker-find-det-item" v-if="tab==1">
                            <h2>You haven’t connected with your friends on Facebook yet!</h2>
                            <p>You may have signed up with your Facebook account, but Flank still needs your permission to see your friends list. Mind sharing?  Doing so will make it essy  to stay connected to all the awesome things your friends  and teammates are doing on Flank.</p>
                            <div class="find-fb">
                                <button><span><i class="fab fa-facebook-square"></i></span> Find Your Facebook Friends on Flank</button>
                            </div>
                        </div>
                        <div class="flanker-find-det-item" v-if="tab==2">
                            <h2>Choose your email account from the following providers </h2>
                            <div class="flanker-all-soc">
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/gm.png" alt="">
                                            <p>Gmail</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/yahoo.png" alt="">
                                            <p>Yahoo</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/outlook.png" alt="">
                                            <p>Outlook</p>
                                        </a>
                                    </figure>
                                </div>
                                <div class="flanker-soc-item">
                                    <figure>
                                        <a href="#">
                                            <img src="/images/aol.png" alt="">
                                            <p>AOL</p>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div class="email-para">
                                <p>Don’t see your email provider here? Don’t worry, you can still invite your friends to Flank.</p>
                                <p class="lock"><span><i class="fas fa-lock"></i></span> Your information is safe.</p>
                                <p>We don’t store your email password. Your address book is used to find friends on Flank.</p>
                            </div>
                        </div>
                        <div class="flanker-find-det-item" v-if="tab==3">
                            <h2>Send Flank Invites To These Email Addresses: </h2>
                            <div class="flanker-new-form">
                                <form v-on:submit.prevent>
                                    <div class="flanker-new-form-item">
                                        <label for="">Email Address</label>
                                        <input type="text" v-model="sendMail.mail" placeholder="e.g. tom@email.com">
                                    </div>
                                    <div class="flanker-new-form-item">
                                        <input v-model="sendMail.mail2" type="text">
                                    </div>
                                    <div class="flanker-new-form-item">
                                        <input v-model="sendMail.mail2" type="text">
                                    </div>
                                    <div class="flanker-new-form-item" v-if="addAnother">
                                        <input v-model="sendMail.mail4" type="text">
                                    </div>
                                    <div class="add-email" v-if="!addAnother">
                                        <p><a @click="addAnother=true" >Add another email address</a></p>
                                    </div>
                                    <div class="send-btn" @click="mailSend"><button>Send email invites</button></div>
                                </form>
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
            tab:1,
            addAnother:false,
            sendMail:{
                mail:'',
                mail2:'',
                mail3:'',
                mail4:'',
            }
        }
    },
    methods:{
        async mailSend(){
            if(this.sendMail.mail == '') return this.i("Please type atleast 1 email");
            const res = await this.callApi('post','/app/sendInvitation',this.sendMail)
            if(res.status == 200){
                this.s("Invitation send successfully")
            }
            else this.swr();
        }
    },
    created(){

    }
}
</script>