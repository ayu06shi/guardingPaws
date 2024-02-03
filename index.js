const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const charityRoutes = require('./routes/charityRoutes')
const questionRoutes = require('./routes/questionRoutes')
const replyRoutes = require('./routes/replyRoutes')

const cors = require('cors')

const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

dbConnect()

//routes
app.use('/api/user', authRoutes)
app.use('/api/charity', charityRoutes)
app.use('/api/question', questionRoutes)
app.use('/api/reply', replyRoutes)

  
  
//   app.get("/allusers", async (req, res) => {
//     try {
//       const users = await User.find({});
//       return res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ message: "Server Error" });
//     }
//   });

app.get('/', (req, res) => {
    res.send("Hello..")
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
