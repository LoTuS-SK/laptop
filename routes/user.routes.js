const Router = require("express");
const router = new Router();
const useConroller = require("../controlers/user.controlers")
const filemidle = require("../controlers/multer")

router.post("/user",useConroller.createUser)
router.get("/user",useConroller.getUsers)
router.get("/user/:id",useConroller.getOneUser)
router.put("/user",useConroller.updateUser)
router.delete("user/:id",useConroller.deleteUser)
router.get("/imglist",useConroller.imglist)
router.post("/setfile",filemidle.single("file"),(req,res)=>{
    console.log(req.file)
})



module.exports = router;