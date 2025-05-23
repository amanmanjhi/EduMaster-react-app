import {clerkClient} from '@clerk/express'
import Course from '../models/course.model.js'
import {v2 as cloudinary} from 'cloudinary'

export const updateRoleToEducator = async (req,res)=>{
    try{
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId , {
            publicMetadata :{
                role :'educator'
            }
        })
        res.json({
            success:true,
            message:"You can publish a course now"
        })

    }catch(error){
        res.json({success:false, message:error.message})
    }
}


export const addCourse  = async (req, res) =>{
    try {
        const {courseData} = req.body;
        const imageFile = req.file;
        const educatorId = req.auth.userId

        if( !imageFile ){
            res.json({
                success: false,
                message: "Thumbnail Not Attached"  
            })
        }

        const parseCourseData = await JSON.parse(courseData)
        parseCourseData.educator = educatorId;

       const newCourse = await Course.create(parseCourseData);
       const imageUpload = await cloudinary.uploader.upload(imageFile.path);
       newCourse.courseThumbnail = imageUpload.secure_url;
       await newCourse.save()

    } catch (error) {
        
    }
    
}