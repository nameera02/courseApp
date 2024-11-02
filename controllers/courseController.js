import { catchAsyncError } from "../middlewares/catchAsyncErrors.js"
import {Course} from "../models/Course.js"

export const getAllCourses=catchAsyncError(async(req,res,next)=>{
    const courses= await Course.find();
    res.status(200).json({
        success:true,
        courses,
    })
})

export const createCourses=catchAsyncError(async(req,res,next)=>{
    const {title,description,category,createdBy}=req.body;
    const file= req.file;
    
    res.status(200).json({
        success:true,
        courses,
    })
})