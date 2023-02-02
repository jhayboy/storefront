const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
// const { default: App } = require('./src/App')
require('dotenv').config()


const app = express()
app.use(cors())

app.get('/', (req,res)=> {
    res.json('hit')
})

app.get('/paystack', (req,res)=> {
    res.json("pk_test_3d0512a0e2294a19429257c354e7829b15633cf8")
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))