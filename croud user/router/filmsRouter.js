const express=require("express")
const router=express.Router()
const films=require("../controlleur/filmsControlleur")
router.post("/addFilms",films.addFilms);
router.get("/getFilms",films.getFilms);
//delete films
router.delete("/deleteFilms/:id",films.deleteFilms)
//update Films
router.put("/updateFilms/:id",films.updateFilms)
module.exports=router;