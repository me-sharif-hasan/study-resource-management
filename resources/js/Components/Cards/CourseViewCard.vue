<template>
    <div class="card mx-2">
        <div class="card-img-top font-extrabold text-center w-full py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-yellow-500 transition-all duration-150 ease-in-out">
            <h5 class="card-title text-white">{{ data.title }}</h5>
        </div>
        <div class="card-body">
            <p class="card-text"><font-awesome-icon :icon="['fas', 'chalkboard-teacher']" class="mr-3 text-yellow-300"/> {{ data.course_teacher?data.course_teacher.trim():'Not provided' }} </p>
            <p class="card-text mt-1"><font-awesome-icon :icon="['fas', 'calendar']" class="mr-3 text-yellow-400"/>
                {{ data.starting_date?data.starting_date:'Not provided' }} </p>
            <p class="card-text mt-1"><font-awesome-icon :icon="['fas', 'clock']" class="mr-3 text-yellow-500"/>
                {{ parseTimeFromMins(data.study_time_in_minutes) }} </p>
            <router-link :to="{name:'show-course',params:{'course_id':data.id,'course_title':data.title}}" class="btn btn-primary mt-2"><font-awesome-icon icon="book-open" beat class="mr-3"/> Open</router-link>
        </div>
    </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import parseTimeFromMins from "../../Utility/parseTimeFromMins.js";
defineProps({
    data: Object
})
</script>
