const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const connectDB = require('./config/DB')

// Load env vars
dotenv.config({ 'path': './config/config.env' })

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps')

const app = express();

// Logger middleware
app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Handle unhandaled promise rejections
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`);
})
