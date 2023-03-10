import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const CategorySchema = mongoose.Schema(
  {
    title: {
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



const Category = mongoose.model('Category', CategorySchema)
export default Category
