    <template>
  <div class="pt-120">


    <section class="abp second-section">
            <div class="container">
                <div class="section-content">
                    <div class="row">
                        <!-- <div class="col-md-3">
                            <div class="abp-list-box">
                                <h3>About Flank</h3>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li class="active"><a href="guidelines.html">Current Guidelines</a></li>
                                    <li><a href="terms.html">Terms of Services</a></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                </ul>
                                <div class="about-blog-list">
                                    <h3>The Flank Blog</h3>
                                    <strong>Latest Post:</strong>
                                    <p><a href="">Chicago Gets The Elite Treatment Fr...</a></p>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-md-12">
                            <h2 class="fl-abs">Read our Review Guidelines</h2>
                            <hr>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       reviewData: {
//         reviewFor: "",
//         school_id: "",
//         content: "",
//         is_active: 0,
//         rating: ""
//       },
//       rating: 0,
//       defaultList: [
//         {
//           name: "a42bdcc1178e62b4694c830f028db5c0",
//           url:
//             "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"
//         },
//         {
//           name: "bc7521e033abdd1e92222d733590f104",
//           url:
//             "https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"
//         }
//       ],
//       imgName: "",
//       visible: false,
//       uploadList: [],
//       reviews: [],
//       drating: {
//         class: "",
//         text: "Select your rating",
//         index: 0
//       },
//       oldrating: {
//         class: "",
//         text: "",
//         index: 0
//       },
//       onHover: false,
//       loginModal: false,
//       formData: {
//         email: "",
//         password: "",
//         remember: false
//       }
//     };
//   },
//   async asyncData({ app, store, redirect, params }) {
//     try {
//       let { data } = await app.$axios.get(`/legends/${params.id}`);

//       if (data.legend == null) {
//         return redirect("/");
//       }
//       return {
//         coachData: data.legend,
//         AttributeInfo: data.AttributeInfo
//       };
//     } catch (error) {
//       return redirect("/");
//     }
//   },
//   methods: {
//     async onSubmit() {
//       if (this.formData.email == "") return this.i("email is empty");
//       if (this.formData.password == "") return this.i("Password is empty");
//       const res = await this.callApi(
//         "post",
//         "authentication/login",
//         this.formData
//       );
//       if (res.status === 200) {
//         this.s("Login Successfully !");
//         this.$store.dispatch("setAuthInfo", res.data);

//         this.loginModal = false;
//       } else if (res.status == 401) {
//         this.e(res.data.message);
//       } else {
//         this.swr();
//       }
//     },
//      async logout() {
//                 try {
//                     let { data } = await this.$axios.get("/logout");
//                     this.$store.commit("updateAuthUser", false);
//                     window.location = '/'
//                 } catch (error) {
//                     console.log(error);
//                 }
//             },
//     changeDataHover(index) {
//       this.drating.index = index;
//       this.onHover = true;
//       if (index == 1) {
//         this.drating.class = "review-star-1";
//         this.drating.text = "Eek! Methinks not.";
//       } else if (index == 2) {
//         this.drating.class = "review-star-2";
//         this.drating.text = "Meh. I've experienced better.";
//       } else if (index == 3) {
//         this.drating.class = "review-star-3";
//         this.drating.text = "A-OK.";
//       } else if (index == 4) {
//         this.drating.class = "review-star-4";
//         this.drating.text = "Yay! I'm a fan";
//       } else if (index == 5) {
//         this.drating.class = "review-star-5";
//         this.drating.text = "Woohoo! As good as it gets!";
//       }
//     },

//     changeDataHoverLeave() {
//       this.onHover = false;
//     },
//     changeOldRating(index) {
//       this.oldrating.index = index;
//       if (index == 1) {
//         this.oldrating.class = "review-star-1";
//         this.oldrating.text = "Eek! Methinks not.";
//       } else if (index == 2) {
//         this.oldrating.class = "review-star-2";
//         this.oldrating.text = "Meh. I've experienced better.";
//       } else if (index == 3) {
//         this.oldrating.class = "review-star-3";
//         this.oldrating.text = "A-OK.";
//       } else if (index == 4) {
//         this.oldrating.class = "review-star-4";
//         this.oldrating.text = "Yay! I'm a fan";
//       } else if (index == 5) {
//         this.oldrating.class = "review-star-5";
//         this.oldrating.text = "Woohoo! As good as it gets!";
//       }
//     },
//     async postReview() {
//       if (this.isLoggedIn == false) {
//         this.i("Please login first !");
//         this.loginModal = true;
//         return;
//       }
//       if (this.reviewData.content == "") {
//         this.i("You must write something in the review box!");
//         return;
//       }
//       if (this.reviewData.content == "") {
//         this.i("You must write something in the review box!");
//         return;
//       }
//       if (this.drating.index == 0) {
//         this.i("Please rate this coach !");
//         return;
//       }
//       this.reviewData.rating = this.oldrating.index;
//       this.reviewData.review_type = "legend";
//       // this.reviewData.uploadList = this.uploadList
//       //  this.reviewData.AttributeInfo = this.AttributeInfo

//       const res = await this.callApi(
//         "post",
//         "/app/storeSchoolCoachReview",
//         this.reviewData
//       );
//       if (res.status === 200) {
//         this.s("Review posted successfully!");
//         // this.$router.push('/profile/'+this.legendData.id)
//         this.$router.push("/scoach_review/step1/" + res.data.id);
//       } else {
//         this.swr();
//       }
//     },
//     handleView(item) {
//       this.imgName = item;
//       this.visible = true;
//     },
//     handleRemove(index) {
//       this.uploadList.splice(index, 1);
//     },
//     handleSuccess(res, file) {
//       console.log(res);
//       this.uploadList.push(res.file);
//       // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
//       // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
//     },
//     handleFormatError(file) {
//       this.$Notice.warning({
//         title: "The file format is incorrect",
//         desc:
//           "File format of " +
//           file.name +
//           " is incorrect, please select jpg or png."
//       });
//     },
//     handleMaxSize(file) {
//       this.$Notice.warning({
//         title: "Exceeding file size limit",
//         desc: "File  " + file.name + " is too large, no more than 2M."
//       });
//     },
//     handleBeforeUpload() {
//       const check = this.uploadList.length < 3;
//       if (!check) {
//         this.$Notice.warning({
//           title: "Up to 3 pictures can be uploaded."
//         });
//       }
//       return check;
//     }
//   },
//   async created() {
//     if (this.$route.query.star) {
//       this.rating = parseInt(this.$route.query.star);
//       this.reviewData.rating = parseInt(this.$route.query.star);
//       this.changeDataHover(parseInt(this.$route.query.star));
//     }
//     this.reviewData.reviewFor = this.coachData.id;
//     this.reviewData.school_id = this.coachData.school_id;
//     const [res1] = await Promise.all([
//       this.callApi("get", `reviews/${this.$route.params.id}`)
//     ]);
//     if (res1.status === 200) {
//       this.reviews = res1.data.data;
//     } else {
//       this.swr();
//     }
//   }
// };
</script>