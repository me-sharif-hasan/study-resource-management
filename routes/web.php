<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    try{
        $uid=\Illuminate\Support\Facades\Auth::user()->id;
        return redirect()->route('user-dashboard');
    }catch (Throwable $e){
        return view('welcome');
    }
})->name('login');

Route::post('registration',"\App\Http\Controllers\User\RegistrationController@register")->name('user-registration');
Route::post('login',"\App\Http\Controllers\User\LoginController@login")->name('user-login');

Route::middleware(\App\Http\Middleware\VerifyLoginMiddleware::class)->prefix('user')->group(function (){
    Route::get('/',[\App\Http\Controllers\User\UserDashboard::class,'index'])->name('user-dashboard');
    Route::post('/api/add-new-course',[\App\Http\Controllers\Courses\CourseController::class,'addCourse'])->name('add-new-course');
    Route::post('/api/course/update',[\App\Http\Controllers\Courses\CourseController::class,'update'])->name('add-new-course');
    Route::post('/api/get-courses/{page}',[\App\Http\Controllers\Courses\CourseController::class,'getCourses'])->where('page','[0-9]+')->name('get-courses');
    Route::post('/api/create-new-class/',[\App\Http\Controllers\Courses\ClassController::class,'createClass'])->name('get-courses');
    Route::post('/api/get-classes/',[\App\Http\Controllers\Courses\ClassController::class,'getClasses'])->name('get-classes');
    Route::post('/api/upload-class-files/',[\App\Http\Controllers\Courses\MaterialController::class,'materialUpload'])->name('upload-materials');
    Route::get('/api/read-material/{material_id}',[\App\Http\Controllers\Courses\MaterialController::class,'readMaterial'])->where('material_id','[0-9]+')->name('read-material');
    Route::post('/api/classes/update-class',[\App\Http\Controllers\Courses\ClassController::class,'updateClass']);
    Route::post('api/classes/delete-class',[\App\Http\Controllers\Courses\ClassController::class,'deleteClass']);
    Route::get('api/classes/addReadingTime/{id}',[\App\Http\Controllers\Courses\ClassController::class,'addReadingTIme']);
    Route::post('/api/delete/deleteCourse/',[\App\Http\Controllers\Courses\CourseController::class,'delete']);

    Route::post('api/upload-youtube',[\App\Http\Controllers\Courses\MaterialController::class,'addYoutubeVideo']);
    Route::post('/api/save-note',[\App\Http\Controllers\Courses\MaterialController::class,'saveNote']);

    Route::post('api/materials/update',[\App\Http\Controllers\Courses\MaterialController::class,'update']);
    Route::post('api/materials/delete',[\App\Http\Controllers\Courses\MaterialController::class,'delete']);
    Route::get('api/analytics',[\App\Http\Controllers\Courses\CourseController::class,'analytics']);

    Route::get('/api/profile/',[\App\Http\Controllers\User\UserController::class,'getProfile']);
    Route::post('/api/update/',[\App\Http\Controllers\User\UserController::class,'updateUser']);
    Route::get('/logout',[\App\Http\Controllers\User\UserController::class,'logout']);


    Route::get('/ct',[\App\Http\Controllers\User\UserController::class,'ct']);
    Route::get('/gt',[\App\Http\Controllers\User\UserController::class,'gt']);


});
