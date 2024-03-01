const mongoose = require("mongoose")
const express = require("express")
const app = express()
const router = express.Router()
require("dotenv").config()
app.use(express.json())
const { getAllUser,getOneUser,addUserData} = require('../Controller/UserController')

async function connect(){
    await mongoose.connect(process.env.mongoUrl)
}


connect()
.then(() => {
    console.log("Connected to Database!!!")
}).catch((err) => {
    console.log("Error Connecting to Database!!!")
})

router.get('/userdata',getAllUser)
router.get('userdata/:id',getOneUser)
router.post('/posting', addUserData)


module.exports = {router}
