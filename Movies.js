//Require Mongoose
const mongoose=require('mongoose')

//Define a schema
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    genre: {
        type: String,
        required:true
    },
    language: {
        type: String,
        required:true
    }
},);


var Movies = mongoose.model('moviesgroup', MoviesSchema );