
const User=require("../models/userModels")
module.exports={
    addUser: async (req, res)=>{
        const{nom,prenom,password,tel}=req.body
    
      try{
        const Users=new User({
            nom,
            prenom,
            password,
            tel,

        });
        await Users.save();
        res.json(Users);
    }
        catch(error){
        console.error(error.message)
         }
},
getUser:async(req,res)=>{
    try{
        const user=await User.find()
        res.json(user)
    }
    catch(error){
        console.error(error.message)
    }
},
//req .ray bech tjik haja (params)dinamique tfasa5ha  n3aytoulha bel id
deleteUser:async(req,res)=>{
    try{
        user=await User.findByIdAndDelete(req.params.id)
        res.json("user deleted")

    }
    catch(error){
        console.error(error.message)

    }
},

    //updatUser bech nbadel haja men base de donnee nbadlou f body  new valeur ejdida true:bech ya9balha
    updateUser:async(req,res)=>{
        try{
            const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json(user)
            

        }
        catch(error){
            console.error(error.message)
        }
    
}
}