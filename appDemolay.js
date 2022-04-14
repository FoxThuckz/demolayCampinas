const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = process.env.PORT || 8878;

app.get('/',(req,res)=>{
    res.json({msg:'OK'})
})

app.get('/contato',(req, res)=>{
    res.redirect('https://contate.me/CampinasDemolay');
})

app.listen(PORT,()=>{
    console.log('Escutando'+ PORT);
})

