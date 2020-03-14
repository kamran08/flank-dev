    <template>
  <div class="pt-120">


    <section class="abp second-section">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="abp-list-box">
                                <h3>About Flank</h3>
                                <ul class="abp-list-box-link">
                                    <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                    <li class="active"><nuxt-link to="/guidlines">Content Guidelines</nuxt-link></li>
                                    <li><nuxt-link to="/tos">Terms of Service</nuxt-link></li>
                                    <li><nuxt-link to="/policy">Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="/legal">Legal Inquiries</nuxt-link></li>
                                    <li><nuxt-link to="/account_closure">Close Your Account</nuxt-link></li>
                                </ul>
                                <!-- <div class="about-blog-list">
                                    <h3>The Flank Blog</h3>
                                    <strong>Latest Post:</strong>
                                    <p><a href="">Chicago Gets The Elite Treatment Fr...</a></p>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-md-9">
                            <h2 class="fl-abs">Content Guidelines</h2>
                            <hr>
                            <div class="about-content mt-10">
                                <div class="new-about-header">
                                    <h3>General guidelines</h3>
                                    <p>Flank allows users to contribute different kinds of content, including reviews, photos, videos, events, votes, tips, direct messages, and more. Playing nice isn’t rocket science, but just in case, we’ve put together these general guidelines. Please also read the guidelines below for specific types of content that you might contribute to the site.</p>
                                </div>
                                <div class="new-about-content">
                                    <ul>
                                        <li><strong>Inappropriate content:</strong> Colorful language and imagery is fine, but there's no need for threats, harassment, lewdness, hate speech, and other displays of bigotry.</li>
                                        <li><strong>Confilcts of interest:</strong> Your contributions should be unbiased and objective. For example, you shouldn’t write reviews of your own business or employer, your friends’ or relatives’ business, your peers or competitors in your industry, or businesses in your networking group. Business owners <a href="#" style="color: #0036b1 !important;">should not ask customers to write reviews.</a></li>
                                        <li><strong>Promotional content:</strong> Unless you're using your Business Owners Account to add content to your business's profile page, we generally frown upon promotional content. Let's keep the site useful for consumers and not overrun with commercial noise from every user.</li>
                                        <li><strong>Relevance:</strong> Please make sure your contributions are relevant and appropriate to the forum. For example, reviews aren't the place for rants about a business's employment practices, political ideologies, extraordinary circumstances, or other matters that don't address the core of the consumer experience.</li>
                                        <li><strong>Privacy:</strong> Don’t publicize other people’s private information. Please don’t post close-up photos or videos of other patrons without their permission, and please don’t post other people’s full names unless you’re referring to service providers who are commonly identified by or commonly share their own full names.</li>
                                        <li><strong>Intellectual property:</strong> Don’t swipe content from other sites or users. You’re a smart cookie, so write your own reviews and take your own photos and videos, please!</li>
                                        <li><strong>Demanding payment:</strong> Beyond simply asking for a refund to remedy a bad experience, you should not use removing or posting your review as a way to extract payment from a business, regardless of whether you’ve been a customer.</li>
                                    </ul>
                                </div>
                                <div class="new-about-header">
                                    <h3>Additional guidelines</h3>
                                    <p class="expand">
                                        <span  class="show-expand" v-if="item9" @click="expandall(1)">Expand all</span>
                                        <span  class="show-expand" v-else @click="expandall(2)">Collapse all</span>
                                    </p>
                                </div>
                                <div class="new-about-content">
                                    <ul>
                                        <li class="expand-list" :class="(!item1)?'active':''" @click="item1=!item1"><strong>Review Guidelines</strong>
                                            <div :class="(item1)?'expand-list-inner':''">
                                                <p>The best reviews are passionate and personal. They offer a rich narrative, a wealth of detail, and a helpful tip or two for other consumers. Here are some additional thoughts for conscientious reviewers.</p>
                                                <ul>
                                                    <li><strong>Personal experience:</strong> We want to hear about your firsthand consumer experience, not what you heard from your co-worker or significant other. Try to tell your own story without resorting to broad generalizations and conclusory allegations.</li>
                                                    <li><strong>Accuracy:</strong> Make sure your review is factually correct. Feel free to air your opinions, but don't exaggerate or misrepresent your experience. We don't take sides when it comes to factual disputes, so we expect you to stand behind your review.</li>
                                                    <li><strong>Review updates:</strong> Review updates should reflect a new experience or interaction with the business. Don't tell the same old story you've already told. If you'd like to add new insight to an old experience, you can edit your review within 30 days of posting it.</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item2)?'active':''"  @click="item2=!item2"><strong>Photo and Video Guidelines</strong>
                                            <div :class="(item2)?'expand-list-inner':''">
                                                <p>Business photos and videos should be broadly relevant to the business and reflect the typical consumer experience (e.g., what the business looks like, what the business offers, etc.). <br> <br> If you post a photo or video that showcases a more unique personal experience with a business (e.g., your smiling group of friends at the bar, the fly in your soup), we may remove it from the photo gallery for the business, but it still may appear alongside your review if you write one about the business.</p>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item3)?'active':''"   @click="item3=!item3"><strong>Ask the Community</strong>
                                            <div :class="(item3)?'expand-list-inner':''">
                                                <p>We know that being able to ask and answer questions from the community about a business is extremely valuable, but as they say, with great power comes great responsibility. Here are some things to think about when interacting with other users via questions and answers.</p>
                                                <ul>
                                                    <li><strong>Be helpful:</strong>  A lot of people will benefit from your questions and answers, so stick to questions that are also relevant to others, don’t ask loaded questions or make presumptions, and keep the tone civil and non-argumentative. A little humor is fine, but if you really don’t have anything meaningful to add, best not to say anything at all.</li>
                                                    <li><strong>Be specific:</strong> Although broad questions and generic answers may get a large response, they might not provide quality information you’re looking for. By adding more context and details into your questions/answers you’ll get more focused information and meaningful conversation. Also, keep your questions limited to the business at hand. Topics like “what is the best restaurant in town” are best discussed in Talk.</li>
                                                    <li><strong>Be clear:</strong> If your question isn’t easy to understand, it is less likely to receive any answers. Ensure your questions have as much detail as possible to get the best possible answers.</li>
                                                    <li><strong>Avoid:</strong> Answering a question with another question; this detracts from the original question and isn’t very helpful.</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item4)?'active':''"  @click="item4=!item4"><strong>User Profile Guidelines</strong>
                                            <div :class="(item4)?'expand-list-inner':''">
                                                <p>Don't be shy — use your account profile to let people know who you are and what makes you tick. Users want to read reviews from people they know and trust (not those with profiles that are empty or laced with inappropriate content).</p>
                                            </div>
                                        </li>
                                        <li class="expand-list"  :class="(!item5)?'active':''"   @click="item5=!item5"><strong>Talk Guidelines</strong>
                                            <div :class="(item5)?'expand-list-inner':''">
                                                <p>Talk is a place for fun, open, and honest conversations about what's going on in your community. While it's easy to engage and post on Talk, take care with what you post since you can't subsequently delete it. A dash of common sense goes a long way. And since user trust and transparency are important to us, anonymous users who are disruptive to the community will probably be dealt with more sternly than those who stand behind their words.</p>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item6)?'active':''"  @click="item6=!item6"><strong>Messaging Guidelines</strong>
                                            <div :class="(item6)?'expand-list-inner':''">
                                                <p>Flank has a handy messaging feature to keep you connected with your fellow Flankers. First off, please don't use this feature to harass other users or send other inappropriate content. Second, user accounts are for personal, non-commercial use only. Business owners should message reviewers using their free Business Owners Account. In order to do so, we ask that they upload a clear photo of themselves to help personalize their message.</p>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item7)?'active':''"  @click="item7=!item7"><strong>Event Guidelines</strong>
                                            <div :class="(item7)?'expand-list-inner':''">
                                                <p>Heard about a great event in the neighborhood? Great! Post it to the Events tab on Flank. Please don't use Events to post your recurring promotional announcements and sales. We also like to keep the content fresh, so please don't post events more than 6 months in advance.</p>
                                            </div>
                                        </li>
                                        <li class="expand-list" :class="(!item8)?'active':''" @click="item8=!item8"><strong>Business and Account Guidelines</strong>
                                            <div :class="(item8)?'expand-list-inner':''">
                                                <p>Business representatives should be getting in on the act, too. Some words of wisdom:</p>
                                                <ul>
                                                    <li><strong>From the Business:</strong> You can use the "From the business" tab to tell people a little something special about your business. Please keep it relevant: don't use this feature to attack your competitors, reviewers, or Flank, and don't use it to seed keywords or post special offers or promotions — we'll remove them if we see them.</li>
                                                    <li><strong>Public Comments:</strong> Direct messaging is often the best way to resolve a dispute with an unhappy customer, but business representatives can also address issues publicly by posting a public comment. As with direct messaging, we ask that business representatives upload a clear photo of themselves to help personalize their message. Don’t use public comments to launch personal attacks, advertise, or offer an incentive to change a review.</li>
                                                    <li><strong>Video and Photos:</strong> Videos are a great way for advertisers to promote themselves on Flank. Be as creative as you can, but please keep it clean. We're not big fans of imagery showing violence, drug use, nudity, near nudity, or suggestive acts. Also, please don't use your video to disparage other businesses, users, or Flank; request or solicit reviews from users; or respond to user reviews.</li>
                                                    <li><strong>Don’t ask for reviews and don’t offer to pay for them either:</strong> Please don’t ask your customers to review your business on Flank. Over time, solicited reviews create bias on your business page — a bias that savvy consumers can smell from a mile away. <a href="#" style="color: #0036b1 !important;"> Learn why you shouldn’t ask for reviews.</a> You should also never offer compensation (discounts and freebies count too) in exchange for reviews.</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- <ol type="1">
                                    <li>Flank was founded in 2004 to help people find great local businesses like dentists, hair stylists and mechanics.</li>
                                </ol>

                                <small>* Source: “Users” as measured by Google Analytics</small> -->
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
        return {

            item1:true,
            item2:true,
            item3:true,
            item4:true,
            item5:true,
            item6:true,
            item7:true,
            item8:true,
            item9:true,
            // 121Lollol
        }
    },
    methods:{
        expandall(t){
            this.item9 = !this.item9
            if(t==1){
                this.item1=false
                this.item2=false
                this.item3=false
                this.item4=false
                this.item5=false
                this.item6=false
                this.item7=false
                this.item8=false
            }
            else{
                this.item1=true
                this.item2=true
                this.item3=true
                this.item4=true
                this.item5=true
                this.item6=true
                this.item7=true
                this.item8=true
            }

        }
    }
}
</script>