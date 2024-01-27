const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || 8000


dbConnect()

//routes
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.send("Hello..")
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
