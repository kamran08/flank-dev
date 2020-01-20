<template>
  <div class="pt-120">
    <div class="container">
      <div class="new-auth-pagination" style="padding-top: 40px;">
        <div class="new-auth-pagi-details">
          <div class="new-auth-pagi-item">
            <div class="pagi-item-box" :class="(step>0)?'pagi-item-current' : ''">
              <span class="pagi-ok" v-if="step>1">
                <i class="fas fa-check"></i>
              </span>
              <span class="pagi-num" v-else>1</span>
            </div>
            <div class="pagi-item-text">
              <p
                :class="(step>0)?'pagi-text-current pagi-text' : 'pagi-text'"
              >Local Instructor agreement</p>
            </div>
          </div>
          <div class="new-auth-pagi-item">
            <div class="pagi-item-box" :class="(step>1)?'pagi-item-current' : ''">
              <span class="pagi-ok" v-if="step>2">
                <i class="fas fa-check"></i>
              </span>
              <span class="pagi-num" v-else>2</span>
            </div>
            <div class="pagi-item-text">
              <p
                :class="(step>1)?'pagi-text-current pagi-text' : 'pagi-text'"
              >Local Instructor information</p>
            </div>
          </div>
          <div class="new-auth-pagi-item">
            <div class="pagi-item-box" :class="(step>2)?'pagi-item-current' : ''">
              <span class="pagi-ok" v-if="step>3">
                <i class="fas fa-check"></i>
              </span>
              <span class="pagi-num" v-else>3</span>
            </div>
            <div class="pagi-item-text">
              <p :class="(step>2)?'pagi-text-current pagi-text' : 'pagi-text'">Billing</p>
            </div>
          </div>
          <div class="new-auth-pagi-item">
            <div class="pagi-item-box" :class="(step>3)?'pagi-item-current' : ''">
              <span class="pagi-num">4</span>
            </div>
            <div class="pagi-item-text">
              <p :class="(step>3)?'pagi-text-current pagi-text' : 'pagi-text'">Final Step</p>
            </div>
          </div>
        </div>
      </div>

      <div class="new-authentication-box">
        <div class="new-authentication-item" v-if="step == 1">
          <div class="new-authentication-title">
            <h3>Register your account</h3>
          </div>
          <form v-on:submit.prevent>
            <div class="new-authentication-card">
              <div class="authentication-input">
                <label for>Email</label>
                <input type="email" placeholder="Email address" v-model="step1.email" />
              </div>
              <div class="authentication-input">
                <label for>Password</label>
                <input type="password" placeholder="*****" v-model="step1.password" />
              </div>
              <div class="authentication-input">
                <label for>Confirm Password</label>
                <input type="password" placeholder="*****" v-model="step1.password_confirmation" />
              </div>
            </div>
            <div class="term-det">
              <h4>Read terms & condition</h4>
              <p
                class="term-det-para"
              >Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>

              <div class="terms-input">
                <input type="checkbox" v-model="terms" />
                <p>I agree with this terms & condition</p>
              </div>
            </div>
            <div class="authentication-button">
              <ul>
                <li>
                  <button type="submit" @click="step1Submit">Next</button>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div class="new-authentication-item" v-else-if="step == 2">
          <div class="new-authentication-title">
            <h3>Tell us yourself.</h3>
          </div>
          <form v-on:submit.prevent>
            <div class="new-authentication-card">
              <div class="authentication-input">
                <label for>Name</label>
                <div class="authentication-flex-input">
                  <div class="authentication-flex-input-inner">
                    <input type="text" placeholder="First Name" v-model="step2.firstName" />
                  </div>
                  <div class="authentication-flex-input-inner">
                    <input type="text" placeholder="Last Name" v-model="step2.lastName" />
                  </div>
                </div>
              </div>
              <div class="authentication-input">
                <label for>Address</label>
                <div class="authentication-flex-input">
                  <div class="authentication-flex-input-inner">
                    <input type="text" placeholder="City" v-model="step2.city" />
                  </div>
                  <div class="authentication-flex-input-inner">
                    <input type="text" placeholder="State" v-model="step2.state" />
                  </div>
                </div>
              </div>

              <div class="authentication-input">
                <label for>Sport Type</label>
                <div class="authentication-flex-input">
                    <div class="authentication-flex-input-inner">
                        <input type="text" disabled placeholder="State" v-model="step2.division" />
                        <!-- <select name="" id="" placeholder="Division" v-model="step2.division">
                                                <option value="" disabled selected>Division</option>
                                                <option value="Schools">Local</option>
                                                <option value="United">High school coaches</option>
                                                <option value="United">College coaches</option>
                                                <option value="United">Professional sports</option>
                                                <option value="United">Travel team coaches</option>
                        </select>-->
                    </div>
                    <div class="authentication-flex-input-inner">
                        <select name id placeholder="Sport" v-model="step2.sport">
                            <option value disabled selected>Sport</option>
                            <option value="Baseball">Baseball</option>
                            <option value="Men's Basketball">Basketball</option>
                            <option value="Women's Volleyball">Volleyball</option>
                            <option value="Club/Travel">Club/Travel</option>
                            <option value="Men's Soccer">Soccer</option>
                            <option value="Men's Lacrosse">Lacrosse</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
            <!-- <div class="authentication-inner-div">
                            <div class="authentication-input">
                                <label for="">Choose your unique business display name</label>
                                <small><a href="">What is a business display name?</a><span><i class="fas fa-caret-right"></i></span></small>
                                <input type="text" class="empty">
                                <p class="input-alert"><span><i class="fas fa-exclamation"></i></span>Store name empty</p>
                            </div>
                        </div>
                        <div class="authentication-inner-div authen-half">
                            <div class="authentication-input">
                                <label for="">If you sell your products online, enter your website URL (optional)</label>
                                <small><a href="">Why do we ask for this?</a><span><i class="fas fa-caret-right"></i></span></small>
                                <input type="text" class="empty">
                            </div>
                        </div>
                        <div class="verification-text">
                            <p><span><i class="fas fa-check"></i></span>Verification Successfully Complete</p>
            </div>-->
            <div class="authentication-button">
              <ul>
                <!-- <li class="auth-back-btn"><button type="submit">Back</button></li> -->
                <li>
                  <button type="submit" @click="step2Submit">Next</button>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div class="new-authentication-item" v-else-if="step == 3">
          <div class="new-authentication-title">
            <h3>Set up your billing method</h3>
          </div>
          <form v-on:submit.prevent>
            <div class="new-authentication-card">
              <div class="authentication-bill-box">
                <div class="authentication-bill">
                  <div class="authen-bill-left">
                    <h4>Your selling plan:</h4>
                    <p>Professional selling plan</p>
                  </div>
                  <div class="authen-bill-right">
                    <p>View plan details</p>
                  </div>
                </div>
                <div class="authen-bill-action-inner">
                  <div class="authen-bill-action"></div>
                  <p>Total monthly subscription fee : $39.99 + additional selling fees. You will only be charged once you complete setting up your account.</p>
                  <div class="authen-fullfill">
                    <div class="fullfill-check">
                      <span>
                        <i class="far fa-check-square"></i>
                      </span>
                    </div>
                    <div class="fullfill-para">
                      <h4>Fullfillment by Flank</h4>
                      <p>Gain access to Flank's world-class fulfillment resources and expertise, acclaimed customer services and PRIME and FREE shipping options. Pay per use</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="authentication-bill-box mt-25">
                <div class="authentication-bill">
                  <div class="authen-bill-left">
                    <h4>Your credit card information</h4>
                    <p>Your first monthly subscription fee ($39.99) will be charged upon account creation. You’ll be able to list products after we perform payment validation, which typically takes an hour (but could take up to 24 hours).</p>
                  </div>
                </div>
              </div>
              <div class="authentication-card">
                <div class="authentication-card-input">
                  <label for>Card number</label>
                  <input type="text" v-model="step3.card_number" />
                </div>
                <!-- <div class="authentication-card-input">
                                <label for="">Valid through</label>
                                <div class="authentication-card-select">
                                    <div class="item-select">
                                        <select name="" id="">
                                            <option value="one">1</option>
                                            <option value="one">2</option>
                                        </select>
                                    </div>
                                    <div class="item-select-div"><img src="/images/ccline.png" alt=""></div>
                                    <div class="item-select">
                                        <select name="" id="">
                                            <option value="one">1</option>
                                            <option value="one">2</option>
                                        </select>
                                    </div>
                                </div>
                </div>-->
              </div>
              <div class="authentication-input input-full">
                <label for>Cardholder's Name</label>
                <input type="text" v-model="step3.carholder_name" />
              </div>
              <!-- <div class="authentication-address">
                            <div class="address-bar-details">
                                <div class="address-bar">
                                    <input type="radio" checked>
                                    <p> baghbari, Sylhet, Sylhet, 3100, BD</p>
                                </div>
                                <div class="saved-add">
                                    <p><a href="">View all saved addresses</a></p>
                                </div>
                            </div>
                            <div class="address-bar-new">
                                <div class="address-bar-new-input">
                                    <input type="radio" id="new-ad">
                                    <label for="new-ad">Add a new address</label>
                                </div>

                                <div class="authentication-input">
                                    <div class="authentication-flex-input">
                                        <div class="authentication-flex-input-inner">
                                            <input type="text" placeholder="Address Line 1">
                                        </div>
                                        <div class="authentication-flex-input-inner">
                                            <input type="text" placeholder="Address Line 2">
                                        </div>
                                        <div class="authentication-flex-input-inner">
                                            <input type="text" placeholder="City / Town">
                                        </div>
                                        <div class="authentication-flex-input-inner">
                                            <input type="text" placeholder="State / Region / Province">
                                        </div>
                                        <div class="authentication-flex-input-inner">
                                            <select name="" id="">
                                                <option value="one">United States</option>
                                                <option value="one">United Kingdom</option>
                                            </select>
                                        </div>
                                        <div class="authentication-flex-input-inner">
                                            <input type="text" placeholder="ZIP / Postal code">
                                        </div>
                                    </div>
                                </div>
                            </div>
              </div>-->
            </div>
            <div class="authentication-button">
              <ul>
                <!-- <li class="auth-back-btn"><button type="submit">Back</button></li> -->
                <li>
                  <button type="submit" @click="step3Submit">Next</button>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="new-authentication-item" v-else-if="step == 4">
          <div class="authentication-button dashboard-redirect-btn">
            <button type="submit">
              <a style="color: #fff;" href="http://dashboard.goflank.com/">Go to dashboard</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      step1: {
        email: "",
        password: "",
        password_confirmation: ""
      },
      step3: {
        card_number: "",
        carholder_name: "",
        user_id: "",
        id: ""
      },
      step2: {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        sport: "",
        division: "Local instructor",
        user_id: "",
        id: ""
      },
      terms: false
    };
  },
  methods: {
    async step1Submit() {
      if (this.step1.email == "") return this.i("Email can't be empty!");
      if (this.step1.password == "") return this.i("Password can't be empty!");
      if (this.terms == "")
        return this.i("Please agree with our terms in order to Register!");
      if (this.step1.password != this.step1.password_confirmation)
        return this.i("Password doesn't match!");
      this.step1.packType = 2;
      const res = await this.callApi(
        "post",
        "/app/registration/step1Submit",
        this.step1
      );
      if (res.status == 200) {
        this.s("Step 1 Complete");
        this.step = 2;
        this.i("Please complete  Step 2");
        this.step2.id = res.data.legend.id;
        this.step2.user_id = res.data.legend.user_id;
      } else {
        this.swr();
      }
    },
    async step2Submit() {
      if (this.step2.firstName == "")
        return this.i("firstName can't be empty!");
      if (this.step2.lastName == "") return this.i("lastName can't be empty!");
      if (this.step2.city == "") return this.i("city can't be empty!");
      if (this.step2.state == "") return this.i("state can't be empty!");
      if (this.step2.sport == "") return this.i("sport can't be empty!");
      if (this.step2.division == "") return this.i("division can't be empty!");

      const res = await this.callApi(
        "post",
        "/app/registration/step2Submit",
        this.step2
      );
      if (res.status == 200) {
        this.s("Step 2 Complete");
        this.step = 3;
        this.i("Please complete  Step 3");
      } else {
        this.swr();
      }
    },
    async step3Submit() {
      if (this.step3.carholder_name == "")
        return this.i("Cardholder's Name can't be empty!");
      if (this.step3.card_number == "")
        return this.i("Card Number can't be empty!");
      this.step3.id = this.step2.id;
      this.step3.user_id = this.step2.user_id;
      const res = await this.callApi(
        "post",
        "/app/registration/step3Submit",
        this.step3
      );
      if (res.status == 200) {
        this.s("Step 3 Complete");
        this.step = 4;
      } else {
        this.swr();
      }
    }
  }
};
</script>