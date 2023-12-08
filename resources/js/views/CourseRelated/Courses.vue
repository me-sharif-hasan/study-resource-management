<template>
    <input type="text" placeholder="Filter" class="border-b mb-2 w-full h-[30px]" @keypress="filter" v-model="filterText">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="course in (filterText!==''?filtered:courses)" class="relative">
            <button class="absolute right-10 top-3 z-[100] text-blue-500" @click="editCourse=course"> <font-awesome-icon icon="pencil"/> </button>
            <button class="absolute right-3 top-3 z-[100] text-blue-500" @click="deleteCourse(course.id)"> <font-awesome-icon icon="trash"/> </button>
            <course-view-card :data="course"/>
        </div>
    </div>
    <bottom-corner-round-action-button value="+" @action="popup"/>
    <modal :visibility="visibility" @close="()=>{visibility=false;}">
        <add-new-course-form buttonValue="Add course" @submit="addCourse"/>
    </modal>
    <modal :visibility="editCourse!==undefined" @close="editCourse=undefined">
        <add-new-course-form :existingData="editCourse" buttonValue="Update" @submit="updateCourse"/>
    </modal>
    <alert v-if="alertVisible" @close="closeAlert" :type="alertType">{{ message }}</alert>
</template>
<script setup>
import DashboardContainer from "@/Components/Basic/DashboardContainer.vue";
import BottomCornerRoundActionButton from "@/Components/Button/BottomCornerRoundActionButton.vue";
import Modal from "@/Components/Modals/Modal.vue";
import {ref} from 'vue';
import AddNewCourseForm from "@/Components/Form/AddNewCourseForm.vue";
import CourseViewCard from "@/Components/Cards/CourseViewCard.vue";
import {onMounted} from 'vue'
import Alert from "@/Components/Modals/Alert.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
let visibility=ref(false);
let courses=ref([]);
let message=ref('');
let alertType=ref('');
let alertVisible=ref(false);
let editCourse=ref(undefined);
onMounted(()=>{
    document.title="Your all courses";
    getAllCourses();
});

let filterText=ref('');
let filtered=ref([]);
let filter=()=>{
    filtered.value=[];
    for(let course in courses.value){
        if(courses.value[course].title.toUpperCase().includes(filterText.value.toUpperCase())){
            filtered.value.push(courses.value[course]);
        }
    }
    console.log(filtered.value)
}
function popup(){
    visibility.value=!visibility.value;
}

function deleteCourse(course_id){
    if(!confirm("Are you sure want to delete this course?")){
        return;
    }
    axios.post('/user/api/delete/deleteCourse',{'course_id':course_id}).then((res)=>{
        message.value=res.data.message;
        alertVisible.value=true;
        getAllCourses(0);
    }).catch(()=>{
        message.value="Course deletion error";
        alertVisible.value=true;
    });
}

let getAllCourses=(page=0)=>{
    let url="/user/api/get-courses/"+page;
    fetch(url,{
        method: 'POST',

    }).then((res)=>res.json()).then((data)=>{
        if(data.status==='ok'){
            courses.value=data.message;
        }else if(data.status==='error'){
            showAlert('error',data.message);
        }
    }).catch(()=>{
        showAlert('error','Something went wrong');
    });
}

let addCourse=(data)=>{
    let url="/user/api/add-new-course";
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then((res)=>res.json()).then((data)=>{
        if(data.status==='ok'){
            getAllCourses(0);
            showAlert('success',data.message);
        }else if(data.status==='error'){
            showAlert('error',data.message);
        }
        visibility.value=false;
    }).catch(()=>{
        showAlert('error','Something went wrong');
    });
}

let updateCourse=(data)=>{
    console.log(data)
    axios.post('/user/api/course/update',data).then((res)=>{
        editCourse.value=undefined;
        getAllCourses();
    });
}
let showAlert=(type,msg,t=5)=>{
    alertVisible.value=true;
    message.value=msg;
}
let closeAlert=()=>{
    alertVisible.value=false;
}
</script>
