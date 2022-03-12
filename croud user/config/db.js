const mongoose=require("mongoose")

const connectDB=async()=>{

try{
    await mongoose.connect("mongodb+srv://sondes:azizhanin@cluster0.gnqyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,{
        
        useNewUrlParser: true,
        useUnifiedTopology: true,


    })
    console.log("database.connected...");
}
catch(error){
    console.error("error.message");
}

}
module.exports=connectDB