// Packages
require('dotenv').config()
const express = require('express')
const formData = require('express-form-data')
const cors = require('cors');

// MongoDb Initialization
require('./database/mongodb')

// Importing Routes
const usersRoutes = require('./routes/users_routes')

// Port Connection
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))

// Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(formData.parse())
app.use(cors(
    {
        origin: "*"
    }
))

// Route's middleware
app.use('/api', usersRoutes)