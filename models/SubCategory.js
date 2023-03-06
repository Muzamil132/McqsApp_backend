import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const SubCategorySchema = mongoose.Schema(

  {
     Category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category"
    },
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



const SubCategory = mongoose.model('SubCategory', SubCategorySchema)
export default SubCategory
