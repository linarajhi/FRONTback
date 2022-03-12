const mongoose=require("mongoose")
const schema=mongoose.Schema;
const filmsSchema=new schema({

titre :{
type:String,
require:true,

},
description:{
    type:String,
    require:true,
    
    },
annee:{
    type:String,
    require:false,
},
classification:{
    type :String,
    require:true,

},
});
module.exports=films=mongoose.model("films",filmsSchema);
