<?php
namespace App\Http\Controllers\Courses;
use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Courses;
use http\Env\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ClassController extends Controller{
    public function updateClass(){
        try {
            $data = \request()->json()->all();
            $id = $data['id'];
            $class = Classes::find($id);
            $owner = $class->course->user->id;
            if($owner!=Auth::user()->id) return [
                'status'=>'error',
                'message'=>'You have been logged out or you don\'t own the class'
            ];
            $existing=$class->title;
            $class->title=$data['title'];
            $class->date=$data['date'];
            $class->save();
            return [
                'status'=>'ok',
                'message'=>'Class '.$existing.' has been renamed to '.$data['title']
            ];
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something wrong happened in our side. Are you logged in?'
            ];
        }
    }

    public function createClass(){
        try{
            $course_id=\request()->json()->all()['course_id'];
            $uid=Auth::user()->id;
            $course=Courses::find($course_id);
            if($uid==$course->user->id){
                $class=new Classes();
                $class->title="Class of date: ".date('d/M/y');
                $class->course_id=$course_id;
                $class->date=today();
                $class->save();
                return [
                    'status'=>'ok',
                    'message'=>'Class created successfully'
                ];
            }else{
                return throw new \Exception('User id does not match');
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>$e->getMessage()
            ];
        }
    }

    public function getClasses(){
        $data=\request()->json()->all();
        try{
            $limit=$data['limit'];
            $offset=$limit*($data['page']-1);
            $limit=min($limit,50);
            $course_id=$data['course_id'];
            $owner_id=Courses::find($course_id)->user->id;
            if($owner_id==Auth::user()->id){
                $classes=Classes::query()->select("*")->where('course_id','=',$course_id)->with('materials')->limit($limit)->offset($offset)->orderByDesc('date')->orderByDesc('id')->get();
                return [
                    'status'=>'ok',
                    'message'=>$classes
                ];
            }else{
                throw new \Exception("You do not own this course");
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something wrong happened in the server'
            ];
        }
    }

    public function deleteClass(){
        try {
            $data = \request()->json()->all();
            $id = $data['id'];
            $class = Classes::find($id);
            $uid = $class->course->user->id;
            if ($uid != Auth::user()->id) {
                return [
                    'status'=>'error',
                    'message'=>'You have no access to this class!'
                ];
            }else{
                $class->delete();
                return [
                    'status'=>'ok',
                    'message'=>'Class deleted successfully'
                ];
            }
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'Something is not right. error code: 0x01'
            ];
        }
    }

    public function addReadingTIme($id){
        try{
            $class=Classes::find($id);
            if($class->course->user->id!=Auth::user()->id){
                return [
                    'status'=>'error',
                    'message'=>''
                ];
            }
            $class->study_time_in_minutes+=1;
            $class->save();
        }catch (\Throwable $e){
            return [
                'status'=>'error',
                'message'=>'error'
            ];
        }
    }
}
