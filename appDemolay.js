const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = process.env.PORT || 8878;

app.listen(PORT,()=>{
    console.log('Escutandoi'+ PORT);
})

