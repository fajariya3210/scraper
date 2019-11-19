const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const convertTxt = fs.createWriteStream('./output/data-scrap.txt');
const convertCsv = fs.createWriteStream('./output/data-scrap.csv');

request('https://www.fafatassouvenir.com/category/dompet/',
    (err, res, body)=>{
        if(!err && res.statusCode == 200){
            const $ = cheerio.load(body);
            var temp = [];
            $('.wptoko-thumb').each((i, el)=>{
                const judul = $(el).find('.wptoko-title').text().trim();
                const harga = $(el).find('.wptoko-harga').text().trim();
                const situs = $(el).find('a').attr('href');
                temp.push(judul + " , " + situs + " , " + harga + "<br>")
                console.log(`${judul} || ${harga} || ${situs} \n`)
                convertTxt.write(`${judul} , ${harga} , ${situs} \n`)
                convertCsv.write(`${judul} , ${harga} , ${situs} \n`)
            });
                const  sgMail = require('@sendgrid/mail');
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                
                const msg ={
                    to: 'itgriptha@gmail.com',
                    from:'fajarcare@gmail.com',
                    subject:'sending email with sendgrid',
                    text:'test email',
                    html: `${temp}`
                };
                
                if(sgMail.send(msg) ){
                    console.log('EMAIL BERHASIL DI KIRIM')
                }else{
                    console.log('EMAIL GAGAL TERKIRIM')
                }
        }
    }
)






