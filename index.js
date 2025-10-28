const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = '127.0.0.1' //localhost

//-------------Middleware------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//------------------------------------------------------
app.get('/', (req,res)=>{
    res.status(200).json({message: 'aplicação rolando'})
})

//------------------------------------------------------
app.listen(PORT, hostname, ()=> {
    console.log("servidor esta rodando")
})