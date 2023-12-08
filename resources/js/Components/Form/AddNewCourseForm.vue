<template>
    <form @submit.prevent="$emit('submit',createNewCourseData)">
        <div class="container max-w-screen-lg mx-auto">
        <div>
            <h2 class="font-semibold text-xl text-gray-600">Add new course</h2>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div class="md:col-span-5">
                                <label for="course_name">Course Name:</label>
                                <input v-model="createNewCourseData['courseName']" type="text" name="course_name" id="course_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Course Name">
                            </div>

                            <div class="md:col-span-5">
                                <label for="course_code">Course Code</label>
                                <input v-model="createNewCourseData['courseCode']" type="text" name="course_code" id="course_code" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Course Code">
                            </div>

                            <div class="md:col-span-3">
                                <label for="course_teacher_id">Course Teacher Name</label>
                                <input v-model="createNewCourseData['courseTeacherName']" type="text" name="course_teacher_id" id="course_teacher_id" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Dr. John Doe">
                            </div>

                            <div class="md:col-span-2">
                                <label for="institute">Institute</label>
                                <input v-model="createNewCourseData['institute']" type="text" name="institute" id="institute" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="University of ...">
                            </div>

                            <div class="md:col-span-5">
                                <label for="course_start_date">Course Starting Date</label>
                                <input v-model="createNewCourseData['course_start_date']" type="date" name="course_start_date" id="course_start_date" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                            </div>

                            <div class="md:col-span-5 grid grid-cols-2">
                                <div class="mr-1">
                                    <label for="course_level">Level</label>
                                    <input v-model="createNewCourseData['level']" type="text" name="course_level" id="course_level" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                </div>
                                <div class="ml-1">
                                    <label for="course_semester">Semester</label>
                                    <input v-model="createNewCourseData['semester']" type="text" name="course_semester" id="course_semester" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                </div>
                            </div>

                            <div class="md:col-span-5">
                                <div class="inline-flex items-center">
                                    <input v-model="createNewCourseData['isCourseFinished']" type="checkbox" name="is_end" id="is_end" class="form-checkbox">
                                    <label for="is_end" class="ml-2">Is this course finished?</label>
                                </div>
                            </div>

                            <div class="md:col-span-5 text-right">
                                <div class="inline-flex items-end">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{buttonValue}}</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</template>
<script setup>
import {onMounted, ref} from "vue";
const props=defineProps({
    buttonValue:String,
    existingData: Object
});
onMounted(()=>{
    if(props.existingData!==undefined){
        console.log(props.existingData);
        createNewCourseData.value.courseName=props.existingData.title;
        createNewCourseData.value.courseCode=props.existingData.course_code;
        createNewCourseData.value.courseTeacherName=props.existingData.course_teacher;
        createNewCourseData.value.course_start_date=props.existingData.starting_date;
        createNewCourseData.value.id=props.existingData.id;
    }
});
defineEmits(['submit']);
let createNewCourseData=ref({
    courseName:'',
    courseTeacherName:'',
    courseCode:'',
    level:'',
    semester:'',
    institute:'',
    isCourseFinished:'',
    course_start_date:'',
    id:''
});

</script>
