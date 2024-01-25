//In NodeJS, require() is a built-in function to include external modules that exist in separate files.
//require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.
// require() statement not only allows to add built-in core NodeJS modules but also community-based and local modules.

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./database/connection')

const app = express()

//PORT is not available inside env file it will pick default value 8080
dotenv.config({path:'properties.env'})
const PORT = process.env.PORT || 8080

//log requests in console using morgan module
app.use(morgan('tiny'))

//MongoDB connection
connectDB()

//load routers
app.use('/', require('./routes/user-router'))

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:'+PORT)
})

