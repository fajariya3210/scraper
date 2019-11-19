const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const convertFile = fs.createWriteStream('./output/data-scrap.csv');
axios.get('https://www.fafatassouvenir.com/category/dompet/')
    .then((response) =>{
        if(response.status == 200){
            const html = response.data;
            const $ = cheerio.load(html);
            console.log('sukses')
            // const items = []
            
            // // const title = $('.wptoko-title').text();
            // // .find('a').attr('title')
            // const link = $('.wptoko-gambar')
            // // .find('a').attr('href')


            // console.log(title);
            // console.log(link);
            let temp = [];

            $('.wptoko-thumb').each((i, el)=>{
                
                const judul = $(el).find('.wptoko-title').text().trim();
                const harga = $(el).find('.wptoko-harga').text().trim();
                const situs = $(el).find('a').attr('href');

                temp.push(judul + "|" + situs + "|" + harga)
                console.log(`${judul} || ${harga} || ${situs} \n`)
                convertFile.write(`${judul} , ${harga} , ${situs} \n`)
            })

        



            console.log(temp)
        }
    }), (error) => console.log(err)