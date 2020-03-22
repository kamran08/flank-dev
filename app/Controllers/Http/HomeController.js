'use strict'

const EmailSubscription = use('App/Models/EmailSubscription')
const TopHeadline = use('App/Models/TopHeadline')
const LandingImage = use('App/Models/LandingImage')
const Video = use('App/Models/Video')
const CoachVideo = use('App/Models/CoachVideo')
const axios = require('axios')
const Mail = use('Mail')
const { validateAll } = use('Validator')
class HomeController {

    // Flank Daily Email Subscription

    async storeEmailSubscription({request}){
        let data = request.all();
            const rules = {
              email: "required|email|unique:users,email",
            };
            const messages = {
              "email.required": "Email is required!",
              "email.email": "Email is invalid!",
              "email.unique": "Email is already in use!"
            }
            const validation = await validateAll(data, rules, messages);
            if (validation.fails()) {
              return this.errorResponse(response, 401, validation.messages())
            }
        await EmailSubscription.create(data)
        if (data.email) {
          await Mail.send('emails.invitation', data, (message) => {
            message
              .to('goflank@yahoo.com')
              .from(data.email, `new mail`)
              .subject('Flank Daily – New Submission')
          })
        } else {
              return response.status(403).json({
                'msg': "given email is invalid"
              })
            }
    }
    async sendSupportMessege({request}){
        let data = request.all();
        if (data.text) {
          await Mail.send('emails.suggestion', data, (message) => {
            message
              .to('goflank@yahoo.com')
              .from(`Support@goflank.com`, `New Mail`)
              .subject('Flank – Improvement Inquiry Submitted')
          })
        } else {
              return response.status(403).json({
                'msg': "given data is invalid"
              })
            }
    }
    async showTopHeadline({request}){
        return await TopHeadline.all()
    }
    async showVideos({request}){
        return await Video.all()
    }
    async bannerImage({request}){
        return await LandingImage.all()
    }
    async allCoachVideo({request}){
        return await CoachVideo.all()
    }

}

module.exports = HomeController
