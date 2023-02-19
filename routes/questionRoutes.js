import express from "express"
import { addQuestion,   deleteQuestion,   enableQuestion,   getAlldisabledQuestions, getAllQuestionBYCategory, loadMyQuestions, updateQuestion } from "../controller/questionController.js"
import { protect } from "../middlewares/authmiddleware.js"


const router = express.Router()

router.post("/add",addQuestion)
router.get("/all",getAllQuestionBYCategory)
router.get("/admin/:id",enableQuestion)
router.delete("/admin/:id",deleteQuestion)
router.get("/admin",getAlldisabledQuestions)
router.get("/me/:id",loadMyQuestions)
router.post("/edit/:id",updateQuestion)
export default router