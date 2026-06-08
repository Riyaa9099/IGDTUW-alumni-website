// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/studentsRegistration')
// const db = mongoose.connection
// db.once('open',()=>{
//     console.log("Mongodb connection successful")
// })
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error: ", err));




