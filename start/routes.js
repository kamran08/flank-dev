'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.resource('users', 'UserController').validator(new Map([
  [['users.store'], ['StoreUser']]
  // [['users.update'], ['UpdateUser']]
]))
// Home Routes

Route.post('/app/emailSubscription', 'HomeController.storeEmailSubscription')
Route.post('/app/sendSupportMessege', 'HomeController.sendSupportMessege')


// Authentication route
Route.post('/authentication/login', 'UserController.userLogin').middleware(['guest'])
Route.get('/logout', 'UserController.logout')
Route.post('/password/email', 'UserController.sendResetLinkEmail')
Route.post('/password/reset', 'UserController.resetPassword')
Route.post('/matchPasswordLink', 'UserController.matchPasswordLink')
Route.post('/app/user/updateProfileImage', 'UserController.updateProfileImage')
Route.get('/app/user/updateProductProfileImage/:id', 'ProductController.updateProductProfileImage')
Route.put('/app/updateEmail', 'UserController.updateEmail')
Route.put('/app/updatePassword', 'UserController.updatePassword')
Route.get('/app/userReview/:id', 'UserController.showReview')
Route.post('/app/updateUserInformation', 'UserController.updateUserInformation')
Route.post('/app/updateUserPassword', 'UserController.updateUserPassword')

Route.resource('legends', 'LegendController')
Route.resource('questions', 'QuestionController')
Route.resource('answers', 'AnswerController')
Route.resource('pulses', 'PulseController')
Route.resource('schools', 'SchoolController')
Route.resource('products', 'ProductController')
Route.resource('reviews', 'ReviewController')
Route.resource('coaches', 'CoachController')

// legend Registration steps
Route.post('/app/registration/step1Submit', 'LegendController.step1Submit')
Route.post('/app/registration/step2Submit', 'LegendController.step2Submit')
Route.post('/app/registration/step3Submit', 'LegendController.step3Submit')
// legend controller
Route.post('/uploadLegendPhotos', 'LegendController.uploadLegendPhotos')
Route.delete('/app/deleteImage', 'LegendController.deleteImage')
Route.get('/app/getAdditionlegendInfo/:id', 'LegendController.getAdditionlegendInfo')
Route.get('/app/getLegendId/:id', 'LegendController.getLegendId')

Route.get('/app/getTodayBussinessHour/:id', 'LegendController.getTodayBussinessHour')
Route.post('/app/similarQuestion', 'QuestionController.similar')
Route.post('/app/similar_coach_question', 'QuestionController.similar_coach_question')
Route.post('/app/similar_product_question', 'QuestionController.similar_product_question')
Route.post('/app/storeCoachanswers', 'AnswerController.storeCoachanswers')
Route.post('/app/storeAnswerLike', 'AnswerController.storeAnswerLike')
Route.post('/app/storeProductanswers', 'AnswerController.storeProductanswers')
Route.get('/app/coach_question_answers/:id', 'AnswerController.coach_question_answers')
Route.get('/app/product_question_answers/:id', 'AnswerController.product_question_answers')

// Review Controller
Route.get('/app/atrributeConteptData/:id', 'ReviewController.atrributeConteptData')

Route.post('/app/upload-review-file', 'ReviewController.uploadReviewFile')
Route.post('/stoteReviewImo', 'ReviewController.stoteReviewImo')
Route.post('/stoteProductReviewImo', 'ReviewController.stoteProductReviewImo')
Route.get('/test', 'ReviewController.test')
Route.get('/app/getRecentReview', 'ReviewController.getRecentReview')
Route.get('/app/reviewOfTheDay', 'ReviewController.reviewOfTheDay')
Route.get('/app/getAllReview/:id', 'ReviewController.getAllReview')
Route.get('/app/getUserallReview/:id', 'ReviewController.getUserallReview')
Route.get('/app/getReviewInfo/:id', 'ReviewController.getReviewInfo')

Route.get('/app/attributes', 'ReviewController.getAllAttributes')
Route.post('/app/attributes', 'ReviewController.storeAttributes')

// Search controller

Route.get('/app/SearchData', 'SearchController.SearchData')
Route.get('/app/SearchByKeyCoach', 'SearchController.SearchByKeyCoach')
Route.get('/app/SearchByKeySchoolCoachNew', 'SearchController.SearchByKeySchoolCoachNew')
Route.get('/app/SearchByKeyProduct', 'SearchController.SearchByKeyProduct')
Route.get('/app/SearchByKeyProduct', 'SearchController.SearchByKeyProduct')
Route.get('/app/SearchByKeySchool', 'SearchController.SearchByKeySchool')
Route.get('/app/getAllSportsByKey', 'SearchController.getAllSportsByKey')
Route.get('/app/SearchByKeySchoolCoach', 'SearchController.SearchByKeySchoolCoach')
Route.get('/app/getAllSports', 'SearchController.getAllSports')
Route.get('/app/searchPlace', 'SearchController.searchPlace')
Route.get('/app/searchCoachForReview', 'SearchController.searchCoachForReview')

// School --- Coaches
Route.get('/app/schoolcoach/:id', 'SchoolController.showSchoolCoach')
Route.get('/app/coachatrributeConteptData/:id', 'ReviewController.coachatrributeConteptData')
Route.get('/app/SchoolCoachReview/:id', 'ReviewController.SchoolCoachReviewShow')
Route.get('/app/singleSchoolCoachReview/:id', 'ReviewController.singleSchoolCoachReviewShow')
Route.post('/app/storeSchoolCoachReview', 'SchoolController.storeSchoolCoachReview')
Route.post('/app/storeSchoolCoache', 'SchoolController.storeSchoolCoache')
Route.post('/stoteCoachReviewImo', 'ReviewController.stoteCoachReviewImo')
Route.post('/storequestions', 'QuestionController.storequestions')
Route.get('/app/schoolquestions/:id', 'QuestionController.schoolquestionshow')
Route.post('/storeProductquestions', 'QuestionController.storeProductquestions')
Route.get('/app/CoachShow/:id', 'QuestionController.CoachShow')
Route.get('/app/productShow/:id', 'QuestionController.productShow')
Route.get('/app/getAdditionCoachInfo/:id', 'SchoolController.getAdditionCoachInfo')
Route.get('/app/getCoachTopReviews/:id', 'CoachController.getCoachTopReviews')
Route.get('/app/getSchoolTopReviews/:id', 'SchoolController.getSchoolTopReviews')
Route.get('/app/similar_coaches', 'CoachController.similar_coaches')
Route.get('/app/recentCitys', 'CoachController.recentCitys')
Route.get('/app/getSchoolcoaches', 'SchoolController.getSchoolcoaches')
Route.get('/app/getSimilarCoach/:id/:coach', 'SchoolController.getSimilarCoach')

Route.get('/app/coachesAddView/:id', 'CoachController.coachesAddView')
// new

Route.post('/app/storeSchoolCoachTeampReview', 'SchoolController.storeSchoolCoachTeampReview')


// products
Route.get('/app/ProductReview/:id', 'ReviewController.ProductReview')
Route.get('/app/getAllUserProduct/:id', 'UserController.getAllUserProduct')
Route.get('/app/getAdditionProductInfo/:id', 'ProductController.getAdditionProductInfo')
Route.get('/app/productReviewInfo/:id', 'ProductController.productReviewinfo')
Route.post('/app/storeProductReview', 'ProductController.storeProductReview')
// test
Route.get('/pagenateData/:id', 'LegendController.paginatedata')


// Social Login FaceBook
Route.get('/login/facebook', 'SocialLoginController.redirect')
Route.get('/authenticated/facebook', 'SocialLoginController.callback')

// Social Login FaceBook Get Image
Route.get('/login/facebook/image', 'SocialLoginController.getFBImage')

// Social Login Google
Route.get('/login/google', 'SocialLoginController.googleRedirect')
Route.get('/login/FoulMethods', 'UserController.FoulMethods')
Route.get('/social/test', 'SchoolController.test')
Route.get('/social/test2', 'SocialLoginController.test2')
Route.get('/social/loginTest', 'SocialLoginController.loginTest')
Route.get('/authenticated/google', 'SocialLoginController.googleCallback')

// Legend Contact Schedeule
Route.post('/app/legendschedule','LegendController.storeLegendSchedule')
Route.get('/app/legendbussinessinfo/:id','LegendController.showLegendBussniessInfo')

// Top Headline
Route.get('/app/topHeadline','HomeController.showTopHeadline')
Route.get('/app/videos','HomeController.showVideos')




// kollol
Route.get('/app/getStreak/:id', 'SchoolController.getStreak')

Route.post('/app/createNewFollow', 'UserController.createNewFollow')
Route.post('/app/createNewUnFollow', 'UserController.createNewUnFollow')

// send Email
Route.post('/app/sendInvitation', 'UserController.sendInvitation')
Route.post('/app/sendlegalData', 'UserController.sendlegalData')
Route.post('/app/sendreviewMessage', 'UserController.sendreviewMessage')
Route.post('/app/sendAccountCloseEmail', 'UserController.sendAccountCloseEmail')
Route.get('/app/getAllBlogPosts', 'BlogController.getAllBlogPosts')
Route.get('/app/getBlogPostsById/:id', 'BlogController.getBlogPostsById')
Route.get('/app/getAllBlogPostsFirst', 'BlogController.getAllBlogPostsFirst')
Route.get('/app/getAllBlogPostsTwo', 'BlogController.getAllBlogPostsTwo')


Route.get('/app/getSchoolCoachByhighRated', 'UserController.getSchoolCoachByhighRated')
Route.get('/app/getSchoolCoachByMostRated', 'UserController.getSchoolCoachByMostRated')
Route.get('/app/bannerImage', 'HomeController.bannerImage')
Route.get('/app/allCoachVideo', 'HomeController.allCoachVideo')
Route.get('app/initdata', 'UserController.initdata')
Route.any('/', 'NuxtController.render').as('home')
Route.get('/nlogin/step2', 'NuxtController.render').as('step2')
Route.any('*', 'NuxtController.render')

