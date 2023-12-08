<template>
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div>
            <div class="brand-logo d-flex align-items-center justify-content-between">
                <a href="/user" class="text-nowrap logo-img">
                    <img src="https://iishanto.com/wp-content/uploads/2019/11/cropped-c053156b-176f-4acd-a8d3-f9ac5b3b7185_200x200-e1574854755188.png" width="180" alt="" />
                </a>
                <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                    <i class="ti ti-x fs-8"></i>
                </div>
            </div>
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                <ul id="sidebarnav">
                    <sidebar-title>Home</sidebar-title>
                    <sidebar-item class="dashboard" :href="{name:'dashboard'}" iconClass="gauge" hoverIcon="gauge-high">Dashboard</sidebar-item>
                    <sidebar-title> Course Management</sidebar-title>
                    <sidebar-item class="courses" :href="{name:'courses'}" iconClass="book" hoverIcon="book-open">All Courses</sidebar-item>
                    <sidebar-item class="whiteboard" :href="{name:'whiteboard'}" iconClass="chalkboard" hoverIcon="chalkboard-user">Whiteboard</sidebar-item>
                    <sidebar-title>Account Management</sidebar-title>
                    <sidebar-item class="user-profile" :href="{name:'profile'}" iconClass="user" hoverIcon="user">Profile</sidebar-item>
                    <sidebar-item class="user-profile" :href="'/user/logout'" iconClass="right-from-bracket" hoverIcon="door-open" :anchor="true">Logout</sidebar-item>
                </ul>
                <div class="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded hidden">
                    <div class="d-flex">
                        <div class="unlimited-access-title me-3">
                            <h6 class="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
                            <a href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" class="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</a>
                        </div>
                        <div class="unlimited-access-img">
                            <img src="/assets/images/backgrounds/rocket.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
</template>
<script setup>
import SidebarTitle from "@/Components/Sidebar/SidebarTitle.vue";
import SidebarItem from "@/Components/Sidebar/SidebarItem.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>
<style>
#sidebarnav .dashboard:hover .sidebar-icon{
    color: blue !important;
}
#sidebarnav .courses:hover .sidebar-icon{
    color: orange !important;
}
</style>
