const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = process.env.PORT || 8878;

app.get('/',(req,res)=>{
    res.json({msg:'OK'})
})

app.get('/contato',(req, res)=>{
    res.redirect('https://api.whatsapp.com/send?phone=5519997970327&text=Ol%c3%a1%2c+gostaria+de+conhecer+mais+sobre+a+Ordem+Demolay!');
})

app.listen(PORT,()=>{
    console.log('Escutando'+ PORT);
})

