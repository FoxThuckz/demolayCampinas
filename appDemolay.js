const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/contato',(req, res)=>{
    res.redirect('https://contate.me/CampinasDemolay');
})

app.listen(PORT,()=>{console.log('Escutando porta: '+ PORT);
 })