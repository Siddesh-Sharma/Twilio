const express = require('express');

const twilio = require('./Twilio');

const app = express();

const PORT = '3001'; 



app.get('/test', (req, res) => {
    res.send('welcome to twilio');
});

app.get('/login', async (req, res) => {
    console.log('loging in');
    
    const data = await twilio.sendVerifyAsync(process.env.MOBILE, 'sms');
    res.send(data);
});

app.get('/verify', async (req, res) => {
    console.log('verifying code');
    const data = await twilio.verifyCodeAsync(process.env.MOBILE, req.query.code);
    return data;
})



app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});