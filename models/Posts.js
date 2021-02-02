const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title:{
        type: string,
        required:true,
    },
    body:{
        type:string,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('Posts', PostSchema);