import express from "express"
import { CreateCategory, getAllCategory } from "../controller/Category.js"
import { CreateSubCategory, getAllSubCategoriesofOneCategory } from "../controller/SubCategory.js"


const router = express.Router()

router.post("/add",CreateCategory)
router.get("/all",getAllCategory)
router.post("/add/:id",CreateSubCategory)
router.get("/all/:id",getAllSubCategoriesofOneCategory)
export default router