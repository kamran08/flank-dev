'use strict'

const EmailSubscription = use('App/Models/EmailSubscription')
class HomeController {

    // Flank Daily Email Subscription

    async storeEmailSubscription({request}){
        let data = request.all();
        return EmailSubscription.create(data)
    }

}

module.exports = HomeController
