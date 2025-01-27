const express=require('express')
const router=express.Router()
const { query, validationResult } = require('express-validator');

const brcypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../models/User')
const jwtsecret="MynameisEndtoEndYoutubeChannel$#"

router.post('/createuser',[query('name').notEmpty(), query('email').isEmail(), query('password').isLength({min: 5})] ,async (req,res)=>{

    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.status(400).json({result: result.array()})
    }
    // res.send({ errors: result.array() });
  
    let salt= await brcypt.genSalt(10);
    let hashedPassword=await brcypt.hash(req.body.password,salt);
    try {

        await User.create({

            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            location:req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post('/loginuser',[query('email').isEmail(), query('password').isLength({min: 5})] ,async (req,res)=>{

    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.status(400).json({result: result.array()})
    }
    try {
    let a=req.body.email
    let userdata = await User.findOne({ email: a });
        if(!userdata){
            return res.status(400).json({success:false,msg:"User not found"})
        }
        let hashcompare=await brcypt.compare(req.body.password, userdata.password)
        if(!hashcompare){
            return res.status(400).json({success:false,msg:"Password is incorrect"})
        }
        const data={
            user:{
             id:userdata.id
            }
         }
         const authToken=jwt.sign(data,jwtsecret)
         res.json({success:true,msg:"Login successfull", authToken:authToken})
         

    } catch (error) {
        console.log(error)
        res.json({success:false,msg:"Something went wrong"})
    }

})


module.exports=router