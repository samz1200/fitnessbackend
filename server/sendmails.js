import express from 'express';
import nodemailer from 'nodemailer';


const sendMailRoute = express.Router();

sendMailRoute.post('/mailsend', (request, response) => {
    var mailArray = request.body;
    // console.log(mailArray);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rizwanullah1200300@gmail.com',
            pass: 'Pakistan@.123'
        }
    });

    mailArray.map(mailItem => {
        var mailOptions = {
            from: 'rizwanullah1200300@gmail.com',
            to: mailItem,
            subject: 'Von elaja Gym',
            text: `this is official mail from von elaja gym center.Thank you for joining.`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    })

});

export default sendMailRoute;