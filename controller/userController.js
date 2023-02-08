import generateToken from "../config/generateToken.js"
import User from "../models/User.js"

import bcrypt from "bcrypt"
const authUser = async (req, res) => {
    console.log("Controller is called")
    const { email, password } = req.body
    try{
    const user = await User.findOne({ email })
  
   if(user){
    const match = await bcrypt.compare(password.toString(),user?.password?.toString())
    if(match){
      res.status(200).json({
        name:user.name,
        id:user._id,
        email:user.email,
        token:generateToken(user._id)

      })
    }else{
      res.status(400).json({message:"Credients are invalid"})
    }

    
   }else{
    res.status(400).json({message:"Credients are invalid"})
   }


    
   
     }catch(err){
    console.log(err)
    res.json({
        err
    })


}
  }
  
  // @desc    Register a new user
  // @route   POST /api/users
  // @access  Public
  const registerUser = async (req, res) => {
    
    const { name, email, password } = req.body
    try{

    
    const isUser = await User.findOne({email})
    if(!isUser){

      const user = await User.create({
        name,email,password
      })
      console.log(user)
   
      if(user){
       return res.status(200).json({
        name:user.name,
        id:user._id,
        email:user.email,
        token:generateToken(user._id)

       })

      }


    }else{

      return res.status(409).json({
        message: 'Email already exists'
    });

    }

  }catch(err){

    console.log(err);
    res.status(500).json({
        error: err
    });


  }

    
  }
  const getUserProfile = async (req, res) => {
    try{

    
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404).json({message:"User Not Found"})
    
    }
  }catch(error){

res.status(503).json({message:"Server Error Happend"})
  }
  }

  export {authUser ,registerUser,getUserProfile}