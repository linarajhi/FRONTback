const express=require("express");
const app=express();
const cors= require('cors')
//connect db
const connectDB=require("./config/db");
connectDB()
app.use(cors())
app.use(express.json());
//routers
const userRouter=require("./router/userRouter");
const filmsRouter=require("./router/filmsRouter")
app.use("/formUser",userRouter);
app.use("/films",filmsRouter);

const PORT=process.env.PORT||"4000"

app.listen(PORT,(err)=>{
    if (err){

        console.log("server is not running");
    }
    else {
        console.log(`serveur is running on port ${PORT}`);
    }

});