import express from "express"
import { addQuestion, getAllQuestionBYCategory } from "../controller/questionController.js"


const router = express.Router()

router.post("/add",addQuestion)
router.get("/all",getAllQuestionBYCategory)
export default router