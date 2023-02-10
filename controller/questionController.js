// import Question from "../models/QuestionModel.js"
import Question from "../models/QuestionModel.js"
import { questionCategory } from "../utils/questionCategories.js"



export const addQuestion=async(req,res)=>{
    console.log(req.body)
 try{
    //   await Question.deleteMany()
   
    const {question,options,answer,category} = req.body
   
    
    const  quest = await Question.create({question,category,options,answer

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
        const questions = await Question.find({category:category1}).limit(pageSize).skip(pageSize*(pageNumber - 1))
        const countofQuestions= await Question.countDocuments({category:category1})
        console.log(questions)
        if(!questions){
            res.status(400).json({message:"Error Happemd"})
        }
        res.status(200).json({questions,count: Math.ceil(countofQuestions/pageSize) })

    }catch(error){
        console.log(error.toString())
        res.status(503).json({message:"Error Happemd"})

    }

}

