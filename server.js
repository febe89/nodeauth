const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
// Load environment variables
const cors=require('cors')
dotenv.config()

const app = express()

// Connect to MongoDB
connectDB()

// Middleware to parse JSON
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
