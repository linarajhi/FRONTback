const mongoose=require("mongoose")
const schema=mongoose.Schema;
const userSchema=new schema({

nom :{
type:String,
require:true,

},
prenom:{
    type:String,
    require:true,
    
    },
password:{
    type:String,
    require:true,
},
tel:{
    type :Number,
    require:false,

},
});
module.exports=user=mongoose.model("user",userSchema);
