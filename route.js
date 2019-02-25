const express=require('express')
const router= express.Router();
const mongoose=require('mongoose')

require('./Movies');
const Movie=mongoose.model('moviesgroup')


// router.get('/',(req,res)=>{
// Movie.find({})
// .then( moviesgroup =>{
// res.render('movies',{
//  moviesgroup: moviesgroup
// })
// });

// });

router.get('/Romance',(req,res)=>{

Movie.find({genre:/Romance/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Drama',(req,res)=>{

Movie.find({genre:/Drama/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});

router.get('/Crime',(req,res)=>{

Movie.find({genre:/Crime/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Thriller',(req,res)=>{

Movie.find({genre:/Thriller/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Horror',(req,res)=>{

Movie.find({genre:/Horror/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Mystery',(req,res)=>{

Movie.find({genre:/Mystery/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Documentary',(req,res)=>{

Movie.find({genre:/Documentary/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Adventure',(req,res)=>{

Movie.find({genre:/Adventure/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Comedy',(req,res)=>{

Movie.find({genre:/Comedy/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Fantasy',(req,res)=>{

Movie.find({genre:/Fantasy/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Children',(req,res)=>{

Movie.find({genre:/Children/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});


router.get('/Action',(req,res)=>{

Movie.find({genre:/Action/})
.then( moviesgroup =>{
res.render('movies',{
 moviesgroup: moviesgroup
})
});

});
                                                                        
        
        



module.exports=router