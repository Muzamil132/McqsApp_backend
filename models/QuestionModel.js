import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
        type: String,
        required: true,
      },
    createdBy: {
      type: String,
      required: true,
      default: "admin",
    },

  },
  {
    timestamps: true,
  }
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }



const Question = mongoose.model('Question', QuestionSchema)
export default Question
