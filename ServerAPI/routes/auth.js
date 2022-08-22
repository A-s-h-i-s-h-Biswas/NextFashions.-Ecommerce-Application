const router=require("express").Router();
const User=require("../models/User");
const cryptojs=require("crypto-js");
const jsonwebtoken=require("jsonwebtoken");

// Register:
router.post("/register", async (req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:cryptojs.AES.encrypt(req.body.password,process.env.PASS_SECRET).toString(),
    })
    try{
        const saveUser= await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(error){
        res.status(500).json(error);
    }
});


//Login:
router.post("/login",async (req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong Creadintials !");
        const hashPass=cryptojs.AES.decrypt(user.password,process.env.PASS_SECRET);
        const Orgpassword=hashPass.toString(cryptojs.enc.Utf8);
        Orgpassword !==req.body.password && res.status(401).json("Wrong Creadintials !");

        // const accessToken=jsonwebtoken.sign({
        //     id:user._id, isAdmin:user.isAdmin,
        // },
        // process.env.JWT_SEC,
        // {expiresIn:"3days"}
        // )

        const{password, ...others}=user._doc;
        res.status(200).json({...others});
         
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports=router;