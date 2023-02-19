import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const CategorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
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
