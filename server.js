import "@babel/polyfill";
import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URI} from './config';
import routes from './routes/index'

const app = express()

app.use(express.json())
app.use(routes)
app.use('*', (req, res)=>{
    res.send('route not found')
})

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