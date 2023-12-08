<?php
namespace App\Http\Controllers\Courses;
use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Courses;
use App\Models\User;
use http\Env\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller{
    public function addCourse(){
        $data = \request()->json()->all();
        try{
            $validator=Validator::make($data,[
                'courseName'=>'required|string',
            ]);
            if($validator->errors()->all()){
                $errors="";
                foreach ($validator->errors()->all() as $e) $errors.=$e."\n";
                throw new \Exception($errors);
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>$e->getMessage()
            ];
        }
        try {
            $course = new Courses();
            $course->title = $data['courseName'];
            $course->course_teacher = $data['courseTeacherName'];
            if($data['course_start_date']) $course->starting_date = $data['course_start_date'];
            if($data['isCourseFinished']) $course->is_finished = $data['isCourseFinished'];
            $course->user_id = Auth::user()->id;
            $course->save();
            return [
                'status'=>'ok',
                'message'=>'Course '.$course->title.' added successfully'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Failed to add new course '.$e->getMessage()
            ];
        }
    }

    public function getCourses($page){
        try {
            $uid=Auth::user()->id;
            $courses=Courses::query()->where('user_id','=',$uid)->orderByDesc('id')->get();
            foreach ($courses as &$course){
                $total_study_time=0;
                $classes=$course->classes;
                foreach ($classes as &$class){
                    $total_study_time+=$class->study_time_in_minutes;
                }
                $course->study_time_in_minutes=$total_study_time;
            }
            return [
                'status'=>'ok',
                'message'=>$courses
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Failed to get courses.'
            ];
        }
    }

    public function analytics(){
        try{
            $user=User::find(Auth::user()->id);
            foreach ($user->courses as &$course){
                $course->total_reading=0;
                foreach ($course->classes as $class){
                    $course->total_reading+=$class->study_time_in_minutes;
                }
            }
            return [
                'status'=>'success',
                'message'=>$user->courses
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Failed to show analytics'
            ];
        }
    }

    public function delete(){
        $data=\request()->json()->all();
        try{
            $course_id=$data['course_id'];
            $course=Courses::find($course_id);
            $uid=$course->user->id;
            if(Auth::user()->id!=$uid) throw new \Exception('Failed to delete course');
            $course->delete();
            return [
                'status'=>'success',
                'message'=>'Course deleted'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>"Failed to delete course"
            ];
        }
    }

    public function update(){
        $data = \request()->json()->all();
        try{
            $validator=Validator::make($data,[
                'courseName'=>'required|string',
            ]);
            if($validator->errors()->all()){
                $errors="";
                foreach ($validator->errors()->all() as $e) $errors.=$e."\n";
                throw new \Exception($errors);
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>$e->getMessage()
            ];
        }
        try {
            $course = Courses::find($data['id']);
            if($course->user->id!=Auth::user()->id) throw new \Exception('error');
            $course->title = $data['courseName'];
            $course->course_teacher = $data['courseTeacherName'];
            if($data['course_start_date']) $course->starting_date = $data['course_start_date'];
            if($data['isCourseFinished']) $course->is_finished = $data['isCourseFinished'];
            $course->save();
            return [
                'status'=>'ok',
                'message'=>'Course '.$course->title.' added successfully'
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Failed to add new course '.$e->getMessage()
            ];
        }
    }
}
