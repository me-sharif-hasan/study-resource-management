<template>
    <div class="h-[250px] w-full bg-white shadow rounded relative">
        <div v-if="fileType==='youtube'" class="w-full h-[100px] flex justify-center items-center text-3xl text-white bg-gradient-to-bl from-orange-600 to-yellow-500 relative rounded">
            <div class="overflow-hidden h-full rounded">
                <img :src="data.thumb">
            </div>
            <div class="absolute right-1 bottom-2 text-sm bg-white text-black px-2 rounded shadow" v-if="data.type.split('/')[1]==='playlist'">Playlist</div>
        </div>
        <div v-else class="w-full h-[60px] flex justify-center items-center text-3xl text-white bg-gradient-to-bl from-orange-600 to-yellow-500 relative rounded">
            <font-awesome-icon v-if="fileType!=='file-database'" :icon="'file'+fileType"/>
        </div>
        <div class="w-full pl-2 overflow-hidden relative">
            <table class="mt-2 w-full table-fixed">
                <tr class="border-bottom">
                    <td class="align-top w-[25px]"><font-awesome-icon icon="leaf" class="text-blue-500"/></td>
                    <td class="align-top px-2 overflow-hidden text-nowrap" :title="data.title"><div class="w-full !overflow-hidden">{{data.title}}</div></td>
                </tr>
                <tr class="border-bottom">
                    <td class="align-top w-[25px]"><font-awesome-icon icon="calendar" class="text-yellow-300"/></td>
                    <td class="align-top px-2 overflow-hidden text-nowrap" :title="data.created_at">{{new Date(Date.parse(data.date)).toDateString()}}</td>
                </tr>
                <tr class="border-bottom hidden">
                    <td class="align-top w-[25px]"><font-awesome-icon icon="user-group" class="text-pink-500"/></td>
                    <td class="align-top px-2 overflow-hidden text-nowrap">
                        <select>
                            <option value="0">Private</option>
                            <option value="1">Public</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="align-top w-[25px]"><font-awesome-icon icon="pen" class="text-gray-500"/></td>
                    <td class="align-top px-2 overflow-hidden text-nowrap h-[100px] relative">
                        <font-awesome-icon :icon="editNoteId===-1?'pencil':'check'" class="absolute right-1 top-1 shadow text-sky-600 rounded cursor-pointer" @click="editNoteId===data.id?saveNote():editNoteId=data.id"/>
                        <textarea v-model="note" placeholder="keep some note here" class="w-full h-full bg-white border-blue-600 focus:border-l-2 focus:pl-1" :disabled="editNoteId===-1"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <router-link :to="{name:'show-material',params:{material_id:data.id,material_title:data.title}}" class="right-1 absolute bottom-0 text-blue-500 text-3xl" @mouseover="bookOpenAnim=true" @mouseleave="bookOpenAnim=false">
            <font-awesome-icon v-if="!bookOpenAnim" icon="book"/>
            <font-awesome-icon v-if="bookOpenAnim" icon="book-open" shake/>
        </router-link>
    </div>
    <alert v-if="show_alert" @close="closeAlert" :type="alert_type">{{alert_message}}</alert>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {onMounted, ref} from "vue";
import getUrlExtension from "@/Utility/getUrlExtension.js";
import Alert from "@/Components/Modals/Alert.vue";

let bookOpenAnim=ref(false);
let show_alert=ref(false);
let alert_type=ref('success');
let alert_message=ref('No message');
const prop=defineProps({
    data:Object
});
let fileType=ref('');
onMounted(()=>{
   let type=prop.data.type.split("/");
    console.log(type,prop.data.title)
    if(type[0]==='image'){
        fileType.value='-image';
    }else if(type[0]==='application'){
         let url=prop.data.url;
         switch (getUrlExtension(url)){
             case 'pdf':
                 fileType.value='-pdf';
                 break;
             case 'pptx':
                 fileType.value='-powerpoint';
                 break;
             case 'ppt':
                 fileType.value='-powerpoint';
                 break;
             case 'docx':
                 fileType.value='-word';
                 break;
             case 'doc':
                 fileType.value='-word';
                 break;
             case 'xlsx':
                 fileType.value='-excel';
                 break;
         }
    }else if(type[0]==='text'){
        switch (type[1]){
            case 'csv':
                fileType.value='-csv';
                break;
            case 'plain':
                let ext=getUrlExtension(prop.data.url);
                if(ext==='txt'){
                    fileType.value='text';
                }
                break;
        }
    }else if(type[0]==='youtube'){
        fileType.value='youtube'
    }

});

let note=ref(prop.data.note);
let editNoteId=ref(-1);
let saveNote=()=>{
    let noteid=editNoteId.value;
    if(editNoteId.value===-1) return false;
    editNoteId.value=-1;
    axios.post('/user/api/materials/update',{
        'id':noteid,
        'note':note.value
    }).then((res)=>{
        if(res.data.status==='error') editNoteId.value=noteid;
        jsonResponseShowAlert(res.data);
    }).catch((err)=>{
        editNoteId.value=noteid;
        showAlert('error',"something wrong happened!");
    });
}


let jsonResponseShowAlert=(data)=>{
    if(data.status==='ok'){
        showAlert('success',data.message);
    }else{
        showAlert('error',data.message);
    }
}
let showAlert=(type,msg,t=5)=>{
    alert_message.value=msg;
    alert_type.value=type;
    show_alert.value=true;
}
let closeAlert=()=>{
    show_alert.value=false;
}
</script>
