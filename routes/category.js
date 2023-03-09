import express from "express"
import { CreateCategory, deleteCategory, getAllCategory } from "../controller/Category.js"
import { CreateSubCategory, deleteSubCategory, getAllSubCategoriesofOneCategory } from "../controller/SubCategory.js"


const router = express.Router()

router.post("/add",CreateCategory)
router.get("/all",getAllCategory)
router.post("/add/:id",CreateSubCategory)
router.get("/all/:id",getAllSubCategoriesofOneCategory)
router.delete("/:id",deleteCategory)
router.delete("/subcategory/:id",deleteSubCategory)
export default router