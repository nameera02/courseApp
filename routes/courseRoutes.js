import express, { Router } from "express"
import { getAllCourses } from "../controllers/courseController.js";

const router =express.Router();
router.route("/courses").get(getAllCourses)
router.route("/createcourse ").post(getAllCourses)

export default router;