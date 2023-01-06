const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
app.use(cors())
const port = process.env.PORT
const {userRoutes} = require("./Routes/routes")
const initConnection = require(`./DB/models/config`)
app.use(express.json())
app.use(userRoutes)

initConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))