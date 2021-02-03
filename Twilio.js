

const twilio = require('Twilio');
import * as apiKeys from './apiKeys';



class Twilio{
    client;

    constructor(){
        this.client = twilio(apiKeys.tokenSid,
            apiKeys.tokenSecret, {accountSid: apiKeys.accountSid,
            });
    }
    getTwilio(){
        return this.client;
    }

    async sendVerifyAsync(to, channel){
        const  data = await this.client.verify.services(apiKeys.verify).verifications.create({to, channel});
        
        console.log('verifying', data);
        return data;
    }

    verifyCodeAsync(to, code){
        const data = this.client.services(apiKeys.verify).verification.create({to, code,});

        console.log('verify', data);
        return 
    }

}
const instance = new Twilio();
Object.freeze(instance)

module.exports =  instance
    
    