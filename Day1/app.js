const  express = require('express')
const app = express()

const PORT  = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send('🚀 Hello from Google Cloud Node.js App!');
})

app.listen(PORT,()=>{
    console.log(`✅ Server running on port ${PORT}`);
})