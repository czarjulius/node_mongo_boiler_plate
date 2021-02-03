const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');
const postRoute = require('./routes/api/posts') 

const app = express()

app.use(express.json())

app.use('/api/posts', postRoute)


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log('MongoDb connected!'))
.catch(err => console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})