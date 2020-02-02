'use strict'

const EmailSubscription = use('App/Models/EmailSubscription')
const TopHeadline = use('App/Models/TopHeadline')
const Video = use('App/Models/Video')
class HomeController {

    // Flank Daily Email Subscription

    async storeEmailSubscription({request}){
        let data = request.all();
        return EmailSubscription.create(data)
    }
    async showTopHeadline({request}){
        return await TopHeadline.all()
    }
    async showVideos({request}){
        return await Video.all()
    }

}

module.exports = HomeController
