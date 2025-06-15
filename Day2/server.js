const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    console.log(`mongoose Schema sucessfully created`);
})

app.listen(PORT, ()=>{
    console.log();
    
})