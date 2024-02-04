const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const charityRoutes = require('./routes/charityRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const questionRoutes = require('./routes/questionRoutes')
const replyRoutes = require('./routes/replyRoutes')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')))

dbConnect()

//routes
app.use('/api/user', authRoutes)
app.use('/api/charity', charityRoutes)
app.use('/api/payment', paymentRoutes)
app.use('/api/question', questionRoutes)
app.use('/api/reply', replyRoutes)

//rest API
app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


app.get('/', (req, res) => {
    res.send("Hello..")
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
