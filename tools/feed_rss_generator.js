const express = require('express')
const app = express()
const RSS = require('rss');


const SiteSetting = async function (){
    let settings =  await getDocumentByUID ('settings', 'burocraziafacile');
    console.log(settings);
}


app.get('/', (req, res) => {
    SiteSetting ();
    res.json({ it: 'works!' })
})

module.exports = {
   path: '/feed',
   handler: app
}
