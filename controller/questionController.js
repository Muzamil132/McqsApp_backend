// import Question from "../models/QuestionModel.js"
import Question from "../models/QuestionModel.js"
import { questionCategory } from "../utils/questionCategories.js"



export const addQuestion=async(req,res)=>{

   
   const {question,options,answer,category,isAdmin,userId}=req.body
   console.log(req.body)
   console.log(isAdmin,"what is that")
 try{
     

    const  quest = await Question.create({question,category,options,answer,enabled:isAdmin?true:false,user:userId,
        createdBy:isAdmin?"admin":"user"

    })
    if(quest){
        res.status(200).json({success:true})

    }else{
        res.status(400).json({success:false})
    }



 }catch(error){
    res.status(503).json({success:false})


 }


}


export const getAllQuestionBYCategory=async(req,res)=>{
    console.log("this is called from which of following manues")
    const {cate}= req.query 
    const category1 = questionCategory[cate]
    console.log(cate,category1)
    
   
    try{
        const pageNumber = req.query.page?req.query.page:1
        const pageSize=10
        const questions = await Question.find({category:category1,enabled:true}).limit(pageSize).skip(pageSize*(pageNumber - 1)).sort({createdAt: 'descending'})
        const countofQuestions= await Question.countDocuments({category:category1})
        console.log(questions)
        if(!questions){
            res.status(400).json({message:"Error Happemd"})
        }
        res.status(200).json({questions,count: Math.ceil(countofQuestions/pageSize) })

    }catch(error){
        console.log(error.toString())
        res.status(503).json({message:error.toString()})

    }

}

export const getAlldisabledQuestions=async(req,res)=>{
    console.log("find me")
    try{
        const pageNumber = req.query.page?req.query.page:1
        const pageSize=10
        const questions = await Question.find({enabled:false}).limit(pageSize).skip(pageSize*(pageNumber - 1)).sort({createdAt: 'descending'})
        const countofQuestions= await Question.countDocuments({enabled:false})
        console.log(questions)
        if(!questions){
            res.status(400).json({message:"erro"})
        }
        res.status(200).json({questions,count: Math.ceil(countofQuestions/pageSize) })

    }catch(error){
        console.log(error.toString())
        res.status(503).json({message:"error"})

    }


}

export const enableQuestion=async(req,res)=>{
const {id} = req.params
console.log(id)
try{
    const question = await Question.findOneAndUpdate({_id:id.toString()},{enabled:true})
    if(question){
       
        res.status(200).json({success:true})
    }else{
        res.status(403).json({success:false})
    }

}catch(error){
    res.status(503).json({success:false,message:error.toString()})

}


}


export const updateQuestion=async(req,res)=>{
    const {id} = req.params
    console.log(id,"hello")
     const {question,options,answer}=req.body
    try{
        const question1 = await Question.findOneAndUpdate({_id:id.toString()},{question,options,answer})
        if(question1){
           
            res.status(200).json({success:true})
        }else{
            res.status(403).json({success:false})
        }
    
    }catch(error){
        res.status(503).json({success:false,message:error.toString()})
        console.log(error.toString())
    }
    
    
    }


export const deleteQuestion=async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        const question = await Question.findOneAndDelete({_id:id.toString()})
        if(question){
           
            res.status(200).json({success:true})
        }else{
            res.status(403).json({success:false})
        }
    
    }catch(error){
        res.status(503).json({success:false,message:error.toString()})
    
    }
    
    
}


    export const loadMyQuestions=async(req,res)=>{
        const {id} = req.params
        console.log(id)
        try{
            const questions = await Question.find({user:id.toString()}).sort({createdAt: 'descending'})
            if(questions){
               
                res.status(200).json({success:true,questions})
            }else{
                res.status(403).json({success:false})
            }
        
        }catch(error){
            res.status(503).json({success:false,message:error.toString()})
        
        }
        
        
        }

