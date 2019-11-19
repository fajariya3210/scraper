const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"fajarcare@gmail.com",
        pass:"icikiwir123dicoba"
    }
})

var mailOptions = {
    from:"fajarcare@gmail.com",
    to:"angkasarayanet@gmail.com",
    subject:"testing"
}

app.get('/',(req, res)=>{
    transporter.sendMail(mailOptions,(err, info)=>{
        if(err){
            console.log(err)
        }else{
            res.send("your mail send")
        }
    })
})

app.listen(3000);



// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     //host: 'tls://smtp.gmail.com',
//     //port: 587,
//     //secure: false,
//     //requireTLS: true,
//     //SMTPAuth:'true',
//     //SMTPSecure:'tls',
//     auth: {
//         user: 'fajarcare@gmail.com',
//         pass: 'icikiwir123dicoba'
//     }
// });

// let mailOptions = {
//     from: 'ajarcare@gmail.com',
//     to: 'itgriptha@gmail.com',
//     subject: 'Test',
//     text: 'Hello World!'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error.message);
//     }
//     console.log('success');
// });

// var nodemailer = require('nodemailer');

// var transport = {
//     service: 'Gmail',
//     auth:{
//         user: 'fajarcare@gmail.com',
//         pass: 'Fajar_karwo32'
//     }
// }

// var transporter = nodemailer.createTransport(transport);



// var mailOptions = {
//     from: 'fajarcare@gmail.com',
//     to: 'angkasarayanet@gmail.com',
//     subject: 'test',
//     text: "test email"
// };


// transporter.sendMail(mailOptions, (err, info) =>{
//     if(err) throw err;
//     console.log('email berhasil di kirim' + info.response)
// });