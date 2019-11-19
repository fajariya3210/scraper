const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
// const convertText = fs.createWriteStream('post.csv');
const convertText = fs.createWriteStream('./output/data-scrap.txt');

request('https://www.fafatassouvenir.com/category/dompet/',
    (err, res, html)=>{
        if(!err && res.statusCode == 200){
            const $ = cheerio.load(html);

            const site = $('.wptoko-gambar').find('a').attr('href')
            console.log(site);
            // convertText.write(`${site}`)
            // const harga = $('.wptoko-harga');
            

            // console.log(site.find('h1').text());
            
            // $('.box_img').each((i, el)=>{
            //     const title = $(el).find('<h2>').text()
            //     .replace(/\s\s+/g, ',');

            //     // const harga = $(el).find('.wptoko-harga').text();

            //     console.log(`${title} \n`);
            //     // convertText.write(`${title}, ${harga} \n`)
            // })
        }
    }
)