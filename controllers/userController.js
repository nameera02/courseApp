import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async(req,res,next)=>{
const {name,email,password}=req.body;
if(!name || !email || !password) 
    return next(new ErrorHandler("Please enter all fields"))
let user =await User.findOne({email});
if(user) return next(new ErrorHandler("User already exist",409));


user = await User.create({
    name,email,password,avatar:{public_id:"tempid",url:"tempurl"},
})
sendToken(res,user,"Registered Successfully",201)
});

export const login = catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password) 
        return next(new ErrorHandler("Please enter all fields"))
    let user =await User.findOne({email});
    if(user) return next(new ErrorHandler("User already exist",409));
    
    
    user = await User.create({
        name,email,password,avatar:{public_id:"tempid",url:"tempurl"},
    })
    sendToken(res,user,"Registered Successfully",201)
    });