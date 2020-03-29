'use strict'
const User = use('App/Models/User')
const GoogleContacts = require('google-contacts').GoogleContacts;
const {google} = require("googleapis");
const Env = use('Env')
const axios = require('axios')
class SocialLoginController {
  async authCheck({auth,response}){
    console.log("i am authCheck")
    try {
       await auth.getUser()
       console.log('no Error')
       return true;
    } catch (error) {
      console.log('error')
      console.log(error)
      return false;
    }
  }
    async redirect ({ ally }) {
       
        await ally.driver('facebook').redirect()
      }
    async getFBImage ({ ally,auth }) {
      const user = await auth.user;
     // const facebook = await ally.driver('facebook');

      //const allyUser = await facebook.getUserByToken(socialToken)
       await ally.driver('facebook').scope(['email', 'birthday']).getUserByToken(user.token);
      }
    async googleRedirect ({ ally }) {
       
        await ally.driver('google').redirect()
    }
      async callback ({ ally, auth , response }) {
        const fbUser = await ally.driver('facebook').getUser();
        // user details to be saved
        let f = false;
        try {
          await auth.getUser()
          f = true;
        } catch (error) {
          
          console.log("auth false")
          console.log(error)
        }

        if(!f){
          console.log("auth check false")
          const userDetails = {
            firstName: fbUser.getName(),
            img: fbUser.getAvatar(),
            email: fbUser.getEmail(),
            packType: 1,
            token: fbUser.getAccessToken(),
            login_source: 'facebook'
          };
      
          // search for existing user
          const whereClause = {
            email: fbUser.getEmail(),
            
          };
          const user = await User.findOrCreate(whereClause, userDetails);
          await auth.login(user);
          return response.route('step2')

        }
        else {

          console.log("auth check true")
          let img = fbUser.getAvatar()
          let token = fbUser.getAccessToken()
          const user_id = await auth.user.id
          await  User.query().where('id',user_id).update({
            img:img,
            token:token,
          });
          return response.route('step2')
        }

       
       
        
      }
      async googleCallback ({ ally, auth , response }) {
        const googleUser = await ally.driver('google').getUser();
        // user details to be saved
        const userDetails = {
          firstName: googleUser.getName(),
          img: googleUser.getAvatar(),
          email: googleUser.getEmail(),
          packType: 1,
          token: googleUser.getAccessToken(),
          login_source: 'Google'
        };
    
        // search for existing user
        const whereClause = {
          email: googleUser.getEmail(),
        };
        const user = await User.findOrCreate(whereClause, userDetails);
        await auth.login(user);
        //return auth.getUser()
        return response.route('step2')
        
      }
      async loginTest({response,auth}){
        const user = await User.find(1)

        let f = false;
        try {
          await auth.getUser()
          f = true;
        } catch (error) {
          
          console.log("auth false")
          console.log(error)
        }

        if(!f){
          await auth.login(user)
          console.log("I am in if")

        }
        else console.log("I am out  if")

        return response.route('home')
         
      }
      async test({response}){
        const oauth2Client  = new google.auth.OAuth2(

           Env.get('GOOGLE_CLIENT_ID'),
           Env.get('GOOGLE_CLIENT_SECRET'),
           'http://localhost:3002/social/test2'


      );
      const scopes = [
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/calendar'
      ];

      const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
      
        // If you only need one scope you can pass it as a string
        scope: scopes
      });
        
        response.redirect(url);
      }
      async test2({request,response}){
        const code = request.input('code')
        const oauth2Client  = new google.auth.OAuth2(

          Env.get('GOOGLE_CLIENT_ID'),
          Env.get('GOOGLE_CLIENT_SECRET'),
          'http://localhost:3002/social/test2'


     );
        const {tokens} = await oauth2Client.getToken(code)
        console.log('this is TEst2')
       // return tokens.access_token;
          let {data} = await axios({
          method:'get',
          url:`https://www.google.com/m8/feeds/contacts/default/full?&alt=json&max-results=500&oauth_token=${tokens.access_token}`
        });
        console.log(data)
        return data
        //oauth2Client.setCredentials(tokens);      
       
      }

    }
    

module.exports = SocialLoginController
