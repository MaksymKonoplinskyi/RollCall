require('dotenv').config()

const express = require('express')
const seqelize = require('./db')
const models =require ('./models/models')
const PORT = process.env.PORT || 5001

 
const app = express()

const start = async () => {
    try {
        await seqelize.authenticate()
        await seqelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start()
////