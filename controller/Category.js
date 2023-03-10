import Category from "../models/Category.js";

export const CreateCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const existCategory = await Category.findOne({ title });
    if (existCategory) {
      res.status(400).json({ message: "Category exist Already" });
    } else {
      const newCategory = await Category.create({ title });
      if (newCategory) {
        res.status(200).json({ success: true, category: newCategory });
      }
    }
  } catch (error) {
    res.status(503).json({ message: "Some thing went wrong" });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories) {
      res.status(200).json({ success: true, categories });
    }
  } catch (error) {
    res.status(503).json({ message: "Some thing went wrong" });
  }
};

export const deleteCategory = async(req, res) => {
    const {id} = req.params

  try {
    const category = await Category.findOneAndDelete({ _id: id.toString() });
    if (category) {
      res.status(200).json({ success: true });
    } else {
      res.status(403).json({ success: false });
    }
  }catch(error) {

    res.status(503).json({ success: false, message: error.toString()});
    
  }
};
