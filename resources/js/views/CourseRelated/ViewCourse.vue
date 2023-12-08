<template>
    <div class="w-full min-h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded flex items-center justify-center text-white font-extrabold text-3xl">
        {{ route.params.course_title }}
    </div>
    <div class="mt-1" v-for="cls in classes" >
        <div class="w-full h-[40px] bg-orange-300 rounded text-white flex items-center text-xl mb-2 relative">
            <font-awesome-icon icon="leaf" class="mx-3 text-blue-500"/><h3 class="text-center text-white font-sans">
            {{ cls.title }}</h3>
            <div class="absolute right-2 flex flex-row">
                <span class="mr-5"><font-awesome-icon icon="clock" class="mx-1"/> {{parseTimeFromMins(cls.study_time_in_minutes)}} </span>
                <button @click="uploadFileTo={type:'file',id:cls.id}" class="mx-1 text-blue-500 rounded-circle shadow h-[30px] w-[30px] p-1 hover:bg-gray-400 transition"><font-awesome-icon icon="file-upload"/> </button>
                <button @click="singlePopUp.classEditing=cls" class="mx-1 text-gray-600 rounded-circle shadow h-[30px] w-[30px] p-1 hover:bg-gray-400 transition"><font-awesome-icon icon="pencil"/> </button>
                <button @click="singlePopUp.deleteConfirmation=cls" class="mx-1 text-red-500 rounded-circle shadow h-[30px] w-[30px] p-1 hover:bg-gray-400 transition"><font-awesome-icon icon="trash"/> </button>
            </div>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div class="relative" v-for="material in cls.materials">
                <button @click="singlePopUp['currentContextMenu']=singlePopUp['currentContextMenu']===material.id?-1:material.id" :class="'absolute top-0 right-0 h-[40px] w-[40px] hover:bg-gray-400 rounded-circle hover:shadow transition text-3xl text-white z-[2] '+((singlePopUp['currentContextMenu']===material.id)?'bg-gray-400':'')">
                    <font-awesome-icon icon="ellipsis"/>
                </button>
                <div v-if="singlePopUp['currentContextMenu']===material.id" class="bg-white w-60 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg absolute z-[1] right-0">
                    <div class="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer" @click="singlePopUp.editMaterial=material">
                        <div class="w-8 text-gray-900"><font-awesome-icon icon="pencil" class="text-sky-500"/></div>
                        <div>Edit</div>
                    </div>
                    <div class="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer" @click="singlePopUp.deleteMaterial=material">
                        <div class="w-8 text-gray-900"><font-awesome-icon icon="trash" class="text-red-500"/></div>
                        <div>Delete</div>
                    </div>
                    <div class="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer">
                        <div class="w-8 text-gray-900"><font-awesome-icon icon="heart" class="text-pink-500"/></div>
                        <div>Share</div>
                    </div>
                    <hr class="my-3 border-gray-300">
                    <div class="flex hover:bg-gray-100 py-1 px-2 rounded cursor-pointer">
                        <div class="w-8 text-gray-900"><font-awesome-icon icon="suitcase" class="text-blue-500"/></div>
                        <div>Move</div>
                    </div>
                </div>
                <file-info-card :data="material"/>
            </div>
        </div>
    </div>
    <modal :visibility="uploadFileTo!==-1" @close="uploadFileTo=-1">
        <div class="w-full">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <li class="mr-2" role="presentation" @click="uploadFileTo.type='file'">
                        <button :class="['inline-block','px-4 py-3', 'rounded-t-lg',{'bg-gradient-to-br from-pink-600 to-blue-400 text-white':uploadFileTo.type==='file'}]">File</button>
                    </li>
                    <li class="mr-2" role="presentation" @click="uploadFileTo.type='youtube'">
                        <button :class="['inline-block','px-4 py-3', 'rounded-t-lg',{'bg-gradient-to-br from-pink-600 to-blue-400 text-white':uploadFileTo.type==='youtube'}]">Youtube</button>
                    </li>
                    <li class="mr-2" role="presentation" @click="uploadFileTo.type='http'">
                        <button :class="['inline-block','px-4 py-3', 'rounded-t-lg',{'bg-gradient-to-br from-pink-600 to-blue-400 text-white':uploadFileTo.type==='http'}]">Web URL</button>
                    </li>
                    <li class="mr-2" role="presentation" @click="uploadFileTo.type='note'">
                        <button :class="['inline-block','px-4 py-3', 'rounded-t-lg',{'bg-gradient-to-br from-pink-600 to-blue-400 text-white':uploadFileTo.type==='note'}]">Note</button>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="uploadFileTo.type==='file'" class="min-h-[300px]">
            <input type="file" class="hidden" id="uploader" name="files" multiple @change="beginUploadProcess" @click="clearInput"/>
            <div class="min-h-[300px] w-full flex flex-column justify-center items-center overflow-y-auto">
                <label for="uploader">
                    <div class="flex justify-center items-center w-80 border border-dashed p-5 rounded text-orange-500 hover:bg-gray-400 hover:text-white cursor-pointer transition">
                        <font-awesome-icon icon="file-upload" class="text-[50px]" shake/>
                    </div>
                </label>
                <button type="button" class="btn btn-primary bg-blue-500 mt-2" @click="beginUpload(uploadFileTo.id)"><font-awesome-icon icon="arrow-up"/> Upload</button>
                <div class="w-full h-[100px] border-top mt-2 p-2 flex">
                    <div v-for="file in fileToBeUploaded" class="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%w-[150px] h-full border rounded shadow mx-1 overflow-hidden text-nowrap p-1">
                        <div class="w-full" :title="file.name">{{file.name}}</div>
                        <div>{{fileSizeToMBGB(file.size)}}</div>
                    </div>
                </div>
                <div class="absolute bottom-0 h-[8px] background-animate z-[1000] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 left-0" :style="'width:'+(uploadFileTo!==-1)*currentProgress*100+'%'"></div>
            </div>
        </div>
        <div v-else-if="uploadFileTo.type==='youtube'" class="flex justify-center items-center flex-column min-h-[300px]">
            <input class="w-[80%] border-b h-[30px]" placeholder="Enter youtube video or playlist URL" v-model="youtubeUploadHolder.url">
            <button type="button" class="bg-primary px-3 py-2 mt-3 rounded text-white hover:ring-2" @click="uploadYoutube(uploadFileTo.id)"><font-awesome-icon icon="plus"/> Add</button>
        </div>
        <div v-else-if="uploadFileTo.type==='http'" class="flex justify-center items-center flex-column min-h-[300px]">
            <input class="w-[80%] border-b h-[30px]" placeholder="Enter webpage link">
            <button type="button" class="bg-primary px-3 py-2 mt-3 rounded text-white hover:ring-2"><font-awesome-icon icon="plus"/> Add</button>
        </div>
        <div v-else-if="uploadFileTo.type==='note'" class="flex justify-center items-center flex-column min-h-[300px]">
            {{note}}
            <Ckeditor v-model="note" :editor="ClassicEditor"></Ckeditor>
            <button @click="saveClassNote(uploadFileTo.id)" type="button" class="bg-primary px-3 py-2 mt-3 rounded text-white hover:ring-2"><font-awesome-icon icon="save"/> Save</button>
        </div>
    </modal>

    <modal :visibility="singlePopUp.classEditing!==-1" @close="resetPopUp">
        <div class="flex justify-center items-center">
            <h3>Editing class: {{singlePopUp.classEditing.title}}</h3>
        </div>
        <div class="w-full px-2 py-4">
            <input v-model="singlePopUp.classEditing.title" class="w-full border-b shadow-inner h-[30px] hover:ring rounded px-2" type="text">
            <input v-model="singlePopUp.classEditing.date" class="w-full border-b shadow-inner h-[30px] hover:ring rounded px-2 mt-2" type="date">
            <button @click="saveClassUpdate" class="mt-5 border bg-primary px-4 py-2 rounded text-white" type="button"><font-awesome-icon icon="save"/> Save</button>
        </div>
    </modal>

    <modal :visibility="singlePopUp.deleteConfirmation!==-1" @close="resetPopUp">
        <div class="relative">
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p class="font-bold">Warning!</p>
                <p>Are you sure to delete class {{singlePopUp.deleteConfirmation.title}}?</p>
            </div>
            <div class="absolute right-1 bottom-2 flex">
                <button class="text-white bg-green-500 px-3 py-2 rounded hover:ring-2" @click="resetPopUp">No</button>
                <button class="mx-2 text-white bg-red-500 px-3 py-2 rounded hover:ring-2" @click="deleteClass">Yes</button>
            </div>
        </div>
    </modal>

    <modal :visibility="singlePopUp.deleteMaterial!==-1" @close="resetPopUp">
        <div class="relative">
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p class="font-bold">Warning!</p>
                <p>Are you sure to delete resource {{singlePopUp.deleteMaterial.title}}?</p>
            </div>
            <div class="absolute right-1 bottom-2 flex">
                <button class="text-white bg-green-500 px-3 py-2 rounded hover:ring-2" @click="resetPopUp">No</button>
                <button class="mx-2 text-white bg-red-500 px-3 py-2 rounded hover:ring-2" @click="deleteMaterial">Yes</button>
            </div>
        </div>
    </modal>

    <modal :visibility="singlePopUp.editMaterial!==-1" @close="resetPopUp">
        <div class="flex justify-center items-center">
            <h3>Editing resource: {{singlePopUp.editMaterial.title}}</h3>
        </div>
        <div class="w-full px-2 py-4">
            <input v-model="singlePopUp.editMaterial.title" class="w-full border-b shadow-inner h-[30px] hover:ring rounded px-2" type="text">
            <input v-model="singlePopUp.editMaterial.date" class="w-full border-b shadow-inner h-[30px] hover:ring rounded px-2 mt-2" type="date">
            <textarea v-model="singlePopUp.editMaterial.note" class="w-full border-b shadow-inner hover:ring h-[70px] px-2 mt-2" placeholder="Add some note"></textarea>
            <button @click="saveMaterialUpdate" class="mt-5 border bg-primary px-4 py-2 rounded text-white" type="button"><font-awesome-icon icon="save"/> Save</button>
        </div>
    </modal>


    <bottom-corner-round-action-button value="+" @action="createNewClass"/>
    <alert v-if="show_alert" @close="closeAlert" :type="alert_type">{{alert_message}}</alert>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import BottomCornerRoundActionButton from "@/Components/Button/BottomCornerRoundActionButton.vue";
import Alert from "@/Components/Modals/Alert.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Modal from "@/Components/Modals/Modal.vue";
import axios from "axios";
import FileInfoCard from "@/Components/Cards/FileInfoCard.vue";
import parseTimeFromMins from "../../Utility/parseTimeFromMins.js";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

let singlePopUp=ref({
    'currentContextMenu':-1,
    'classEditing':-1,
    'deleteConfirmation':-1,
    'editMaterial':-1,
    'deleteMaterial':-1
});

let youtubeUploadHolder=ref({
    'url':null
});

let uploadYoutube=(class_id)=>{
    if(youtubeUploadHolder.value.url==null) return false;
    youtubeUploadHolder.value.class_id=class_id;
    axios.post('/user/api/upload-youtube',youtubeUploadHolder.value).then((res)=>{
        jsonResponseShowAlert(res.data);
        getAllClasses(currentPage.value);
    }).catch(()=>{
        showAlert('error','Something wrong happened');
    })
}

let note=ref("");
let saveClassNote=(class_id)=>{
    if(note==="") return false;
    axios.post('/user/api/save-note',{note:note.value,class_id}).then((res)=>{
        jsonResponseShowAlert(res.data);
        getAllClasses(currentPage.value);
    }).catch(()=>{
        showAlert('error','Something wrong happened');
    })
}
let resetPopUp=()=>{
    Object.keys(singlePopUp.value).forEach((k)=>{
        singlePopUp.value[k]=-1;
    });
}

const route=useRoute();
let jsonResponseShowAlert=(data)=>{
    if(data.status==='ok'){
        showAlert('success',data.message);
    }else{
        showAlert('error',data.message);
    }
}
let deleteClass=()=>{
    if(singlePopUp.value.deleteConfirmation===-1) return false;
    axios.post('/user/api/classes/delete-class',{
        'id':singlePopUp.value.deleteConfirmation.id
    }).then((res)=>{
        let data=res.data;
        jsonResponseShowAlert(data);
        resetPopUp();
        getAllClasses(currentPage.value);
    }).catch(()=>{
        showAlert('error','Something wrong happened!');
        resetPopUp();
    })
}
let saveClassUpdate=()=>{
    if(singlePopUp.value.classEditing===-1) return false;
    axios.post("/user/api/classes/update-class",singlePopUp.value.classEditing).then((res)=>{
        if(res.data.status!=='error') singlePopUp.value.classEditing=-1;
        jsonResponseShowAlert(res.data);
    }).catch((err)=>{
        showAlert('error',"Failed to update class");
    });
}

let saveMaterialUpdate=()=>{
    if(singlePopUp.value.editMaterial===-1) return false;
    axios.post("/user/api/materials/update",singlePopUp.value.editMaterial).then((res)=>{
        if(res.data.status!=='error') singlePopUp.value.editMaterial=-1;
        jsonResponseShowAlert(res.data);
    }).catch((err)=>{
        showAlert('error',"Failed to update class");
    });
}

    let courseTitle=ref("");
    onMounted(()=>{
        getAllClasses(currentPage.value);
    });

    let uploadFileTo=ref(-1);

    let classes=ref([]);
    let classPerPage=ref(20);
    let currentPage=ref(1);

    let getAllClasses=(page=1)=>{
        let url='/user/api/get-classes';
        fetch(url,{
            method: 'POST',
            body:JSON.stringify({
                course_id: route.params.course_id,
                page: page,
                limit: classPerPage.value
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==='error'){
                showAlert('error',"Error getting class list. "+data.message);
            }else{
                classes.value=data.message;
            }
        }).catch(()=>{
            showAlert('error','Something went wrong');
        });
    }

    let createNewClass=()=>{
        let url='/user/api/create-new-class';
        let data={'course_id':route.params.course_id};
        fetch(url,{
            method:'POST',
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            if(data.status==='error'){
                showAlert('error',data.message);
            }else{
                getAllClasses(currentPage.value);
                showAlert('success',data.message);
            }
        }).catch(()=>{
           showAlert('error',"Something went wrong");
        });
    }


    let alert_message=ref('');
    let alert_type=ref('');
    let show_alert=ref(false);
    let showAlert=(type,msg,t=5)=>{
        alert_message.value=msg;
        alert_type.value=type;
        show_alert.value=true;
    }
    let closeAlert=()=>{
        show_alert.value=false;
    }

    let fileToBeUploaded=ref([]);
    let beginUploadProcess=(e)=>{
        fileToBeUploaded.value=e.target.files;
    }
    let clearInput=(e)=>{
        fileToBeUploaded.value=[];
        e.target.clear();
    }

    let fileSizeToMBGB=(filesize)=>{
        if(filesize<=1024){
            return parseFloat(filesize/1024+"").toFixed(2)+" KB";
        }else{
            filesize/=(1024*1024);//MB
            if(filesize<1024){
                return parseFloat(filesize).toFixed(2)+" MB";
            }else{
                filesize/=1024;
                return parseFloat(filesize).toFixed(2)+" GB";
            }
        }
    }

    let currentProgress=ref(0);
    let beginUpload=(class_id)=>{
        let form=new FormData();
        currentProgress.value=0;
        fileToBeUploaded.value.forEach((file)=>{
            form.append('files[]',file);
        })
        form.append('class_id',class_id);
        console.log(fileToBeUploaded.value)
        let url='/user/api/upload-class-files';
        let progress=(event)=>{
            currentProgress.value=event.progress;
        }
        axios.post(url,form,{
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            'onUploadProgress':progress
        }).then((res)=>{
            if(res.data.status==='ok'){
                showAlert('success',res.data.message);
                uploadFileTo.value=-1;
                getAllClasses(currentPage.value);
            }else{
                showAlert('error',res.data.message);
            }
        }).catch(()=>{
            showAlert('error','Something wrong happened!');
        });
    }

    let deleteMaterial=()=>{
        axios.post("/user/api/materials/delete",{'id':singlePopUp.value.deleteMaterial.id}).then((res)=>{
            jsonResponseShowAlert(res.data);
            getAllClasses(currentPage.value);
            singlePopUp.value.deleteMaterial=-1;
        }).catch(()=>{
           showAlert('error','Error deleted resource');
        });
    }

</script>
<style>
.background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
}


.ck-editor__editable{
    min-height: 200px !important;
}

@keyframes AnimationName {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
</style>
