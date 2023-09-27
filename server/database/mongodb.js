const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_STRING_CONNECTION)
.then( () => console.log ("Mongo Database Is Connected ") )
.catch( ( err ) => console.log("MongoDb Error: " + err) )