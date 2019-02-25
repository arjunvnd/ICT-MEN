const express=require('express')
const fs=require('fs')
const mongodb=require('mongodb')
// const mongoose=require('mongoose')
const path=require('path')
const bodyParser = require('body-parser')
const exphbs=require('express-handlebars')

const app = express();


const movierou=require('./route')



// For handlebars and images

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');


//body parser
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



//Using mongoose to connect with the database 

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/projectgroup';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//models
 require('./Movies');
 const Movie=mongoose.model('moviesgroup')




//Index Route
app.get('/',(req,res)=>{
    res.render('index')
  });

  app.get('/add',(req,res)=>{
    res.render('add')
  });


  app.post('/add',(req,res)=>{
    console.log(req.body)
    var movieadd={name:req.body.name,genre:req.body.genre,language:req.body.language}
    new Movie(movieadd)
    .save(moviesgroup=>{
      res.redirect('/add')
    })

   
  });

 app.get('/browse',(req,res)=>{
   Movie.find({})
   .then(moviesgroup =>{
     res.render('movies',{
       moviesgroup:moviesgroup
    })
   });

   });
    


  app.use('/movies',movierou)  
   app.get('/browse/:genre',(req,res)=>{
    
    Movie.find({genre:req.params.genre})
     .then(moviesgroup =>{
       res.render('movies',{
         moviesgroup:moviesgroup
       })
      });

       });




app.listen(3000)
console.log('Listening on port 3000')
