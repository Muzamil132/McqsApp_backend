import SubCategory from "../models/SubCategory.js"


export const CreateSubCategory =async(req,res)=>{

    const {title} = req.body 
    const {id} = req.params
    try{
       const  existCategory = await SubCategory.findOne({title})
       if(existCategory){
          res.status(400).json({message:"Category exist Already"})
       }

        const newCategory = await SubCategory.create({title,Category:id})
        if(newCategory){
            res.status(200).json({success:true,subCategory:newCategory})
        }

    }catch(error){
          res.status(503).json({message:"Some thing went wrong"})
    }



}

export const getAllSubCategoriesofOneCategory =async(req,res)=>{
   const {id} =req.params
    try{
        const Subcategories = await SubCategory.find({Category:id})
        if(Subcategories){
            res.status(200).json({success:true,Subcategories})
        }

    }catch(error){
        res.status(503).json({message:"Some thing went wrong"})
    }


}