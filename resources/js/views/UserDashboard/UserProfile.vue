<script setup>
import {onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Modal from "@/Components/Modals/Modal.vue";

let profile=ref();
onMounted(()=>{
    getUserInfo();
})

let updateUser=()=>{
    axios.post('/user/api/update',profile.value).then((res)=>{
        console.log(res);
        editing.value=false;
    });
}
let getUserInfo=()=>{
    axios.get('/user/api/profile').then((res)=>{
        profile.value=res.data;
        profile.value.password='';
    }).catch(()=>{
    });
}

let editing=ref(false);
</script>

<template>
  <div class="flex w-full justify-center items-center relative" v-if="profile">
      <font-awesome-icon @click='editing=true' icon="pencil" class="absolute right-10 top-[100px] z-[1000] w-[20px] h-[20px] cursor-pointer hover:text-blue-500"/>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4 flex justify-center">
                        <img alt="..." :src="profile.avatar" class="shadow-xl rounded-full align-middle border-none -m-16 -ml-20 lg:-ml-16 !w-[112px] !h-[112px]">
                    </div>
                    <div class="w-full px-4 text-center mt-20">
                        <div class="flex justify-center py-4 lg:pt-4 pt-8">
                            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {{profile.course_count}}
              </span>
                                <span class="text-sm text-blueGray-400">Courses</span>
                            </div>
                            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {{profile.class_count}}
              </span>
                                <span class="text-sm text-blueGray-400">Classes</span>
                            </div>
                            <div class="lg:mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {{profile.material_count}}
              </span>
                                <span class="text-sm text-blueGray-400">Materials</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-12">
                    <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {{ profile.first_name }} {{profile.last_name}}
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        {{ profile.address }}
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
                        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        {{profile.work}}
                    </div>
                    <div class="mb-2 text-blueGray-600">
                        <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        {{profile.institute}}
                    </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-9/12 px-4">
                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                {{
                                    profile.bio
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<modal :visibility="editing" @close="editing=false" v-if="profile">
    <div class="form">
        <table class="w-11/12">
            <tr>
                <td>
                    <div class="px-2">
                        First Name
                    </div>
                </td>
                <td><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.first_name"></td>
                <td>
                    <div class="px-2">
                        Last Name
                    </div>
                </td>
                <td><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.last_name"></td>
            </tr>

            <tr>
                <td>
                    <div class="px-2">
                        Email
                    </div>
                </td>
                <td><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.email"></td>
                <td>
                    <div class="px-2">
                        Password
                    </div>
                </td>
                <td><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.password"></td>
            </tr>

            <tr>
                <td>
                    <div class="px-2">
                        Work
                    </div>
                </td>
                <td colspan="3"><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.work"></td>
            </tr>

            <tr>
                <td>
                    <div class="px-2">
                        Institute
                    </div>
                </td>
                <td colspan="3"><input type="text" class="border-b rounded py-1 px-2 ml-4 w-full" v-model="profile.institute"></td>
            </tr>

            <tr>
                <td>
                    <div class="px-2">
                        Address
                    </div>
                </td>
                <td colspan="3"><textarea type="text" class="border-b rounded py-1 px-2 ml-4 w-full h-[100px]" v-model="profile.address"></textarea></td>
            </tr>
            <tr>
                <td>
                    <div class="px-2">
                        Bio
                    </div>
                </td>
                <td colspan="3"><textarea type="text" class="border-b rounded py-1 px-2 ml-4 w-full h-[100px]" v-model="profile.bio"></textarea></td>
            </tr>
        </table>

        <input type="button" class="bg-primary px-3 py-2 rounded text-white" value="Save" @click="updateUser">
    </div>
</modal>
</template>

<style scoped>

</style>
