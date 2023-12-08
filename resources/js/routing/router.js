import Dashboard from "@/views/UserDashboard/Dashboard.vue";
import Courses from "@/views/CourseRelated/Courses.vue";
import Index from "@/Index.vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import ViewCourse from "@/views/CourseRelated/ViewCourse.vue";
import OpenMaterial from "@/views/CourseRelated/OpenMaterial.vue";
import Whiteboard from "@/views/Whiteboard/Whiteboard.vue";
import UserProfile from "@/views/UserDashboard/UserProfile.vue";
const routes = [
    {
        path: "/",
        redirect: "dashboard",
        children:[
            {
                path : "/dashboard",
                component: Dashboard,
                name: 'dashboard'
            },
            {
                path: "/courses",
                component: Courses,
                name: 'courses'
            },
            {
                path: '/open-course/:course_id/:course_title',
                component: ViewCourse,
                name: 'show-course'
            },
            {
                path: '/open-material/:material_id/:material_title',
                name: 'show-material',
                component: OpenMaterial
            },
            {
                path: '/white-board/',
                name: 'whiteboard',
                component: Whiteboard
            },
            {
                path: '/profile',
                name: 'profile',
                component: UserProfile
            }
        ]
    }
]

const router=createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
