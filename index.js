const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const charityRoutes = require('./routes/charityRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const cors = require('cors')

const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect()

//routes
app.use('/api/user', authRoutes)
app.use('/api/charity', charityRoutes)
app.use('/api/payment', paymentRoutes)


app.get('/', (req, res) => {
    res.send("Hello..")
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
