const express = require('express')
const dotenv=require("dotenv").config();
const ImageRoute=require("./Routes/OpenaiRoutes.js")
const port=process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/openai",ImageRoute)

app.get('/', (req, res) => res.send('hello'))

app.listen(port, () => {console.log(`server started on port ${port}`)})