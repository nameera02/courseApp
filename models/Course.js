import mongoose from "mongoose";
import validator from "validator";

const schema=new mongoose.Schema({
title:{
    type:String,
    required:[true,"Please enter course title"],
    minLength:[4,"Title  must be at least 4 characters"],
    maxLength:[4,"Title  can't exceed characters"]
},
description:{
    type:String,
    required:[true,"Please enter course description"],
    minLength:[20,"Description  must be at least 20 characters"]
},
lectures:[{
    video:{
        public_id:{type:String,required:true},
        url:{type:String,required:true},
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}],
poster:{
    public_id:{type:String,required:true},
    url:{type:String,required:true},
},
views:{
    type:Number,
    default:0
},
numOfvid:{
    type:Number,
    default:0
},
category:{
    type:String,
    required:true
},
createdBy:{
    type:String,
    required:[true,"Enter course creator Name"]
},
createdAt:{
    type:Date,
    default:Date.now
},

});

export const Course=mongoose.model("Course",schema);