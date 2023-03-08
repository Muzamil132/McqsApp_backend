import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from "./User.js"
const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    
    },
    answer: {
      type: String,
      required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
      },
      subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
      },
    createdBy: {
      type: String,
      required: true,
    
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    enabled:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
)




const Question = mongoose.model('Question', QuestionSchema)
export default Question
