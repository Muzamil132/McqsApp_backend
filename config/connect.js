import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    mongoose.set('strictQuery',false)
    const conn = await mongoose.connect(process.env.MONGO_URI)
   

  
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB