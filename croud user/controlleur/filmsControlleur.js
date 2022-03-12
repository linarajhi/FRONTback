
const Films=require("../models/filmsModels")
module.exports={
    addFilms: async (req, res)=>{
        const{titre,description,annee,classification}=req.body
    
      try{
        const Filmss=new Films({
            titre,
            description,
            annee,
            classification,

        });
        await Filmss.save();
        res.json(Filmss);
    }
        catch(error){
        console.error(error.message)
        res.status(500).send("server error");
         }
},
    getFilms:async(req,res)=>{
    try{
        const films=await Films.find()
        res.json(films)
    }
    catch(error){
        console.error(error.message)
    }
    
},
//deleteFilm
deleteFilms:async(req,res)=>{
    try{
        films=await Films.findByIdAndDelete(req.params.id)
        res.json("films deleted")

    }
    catch(error){
        console.error(error.message)

    }
},

//updatFilms bech nbadel haja men base de donnee nbadlou f body  new valeur ejdida true:bech ya9balha

updateFilms:async(req,res)=>{
    try{
        const films=await Films.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(films)
        

    }
    catch(error){
        console.error(error.message)
    }

}
}