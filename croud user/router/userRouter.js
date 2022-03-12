const express=require("express")
const router=express.Router()
const user=require("../controlleur/useControlleur")
router.post("/addUser",user.addUser);
//
router.get("/getUser",user.getUser);
//delete user
router.delete("/deleteUser/:id",user.deleteUser)
//update user
router.put("/updateUser/:id",user.updateUser)
module.exports=router;