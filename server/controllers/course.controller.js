import Course from "../models/course.model.js";

// ! Get All Courses

export const  getAllCourses = async(req, res)=>{
    try {
        const courses =  Course.find({isPublished: true}).select(['-courseContent', '-enrolledStudents']).populate({path: 'educator'});

        res.json({success:true, courses})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}


// ! get Course By ID

export const getCourseId = async (req, res)=>{
    const {id} = req.params;

    try {
        const courseData = await Course.findById(id).populate({path:'educator'})
        //todo: Remove lectureUrl if isPreviewFree is false
        courseData.courseContent.forEach(chapter =>{
            chapter.chapterContent.forEach(lecture =>{
            if(!lecture.isPreviewFree){
                lecture.lectureUrl = '';
            }
        })
        })
        res.json({success:true , courseData})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}