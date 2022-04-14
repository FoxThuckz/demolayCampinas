const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = process.env.PORT || 8878;

 app.get('/contato',(req, res)=>{
     res.redirect('https://contate.me/CampinasDemolay');
})

