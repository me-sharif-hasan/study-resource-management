<template>
    <div class="w-full h-screen">
        <youtube-video-player :src="materialInfo.url" v-if="materialInfo&&materialInfo.type.split('/')[0]==='youtube'" class="w-full min-h-screen">
            this is a youtube video
        </youtube-video-player>
        <pdp-reader v-else-if="materialInfo&&materialInfo.type==='application/pdf'" :url="materialInfo.url" class="w-full min-h-screen"></pdp-reader>
        <img v-else-if="materialInfo&&materialInfo.type.split('/')[0]==='image'" :src="materialInfo.url" class="w-full min-h-screen">
        <div v-else-if="materialInfo&&materialInfo.type.split('/')[1]==='plain'" v-html="materialInfo.text_content">
        </div>
    </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import axios from "axios";
import PdpReader from "@/Components/Basic/PdpReader.vue";
import YoutubeVideoPlayer from "@/Components/Cards/YoutubeVideoPlayer.vue";
import globalObject from "@/Utility/globalObject.js";
let router=useRoute();
let material=ref({});
let materialInfo=ref(false);

let userHome=true;
onMounted(()=>{
    document.title="Opening material...";
    let mid=router.params.material_id;
    axios.get('/user/api/read-material/'+mid+"?metadata=true").then((data)=>{
        materialInfo.value=data.data;
        document.title=materialInfo.value.title;
    });
});
onUnmounted(()=>{
   userHome=false;
});
if(!globalObject.readingTimerSet) globalObject.readingTimerSet=false;
if(!globalObject.readingTimerSet){
    globalObject.readingTimerSet=1;
    let i=setInterval(()=>{
        if(document.visibilityState==='hidden') return;
        if(!userHome) return;
        let classId=materialInfo.value.class_id;
        axios.get('/user/api/classes/addReadingTime/'+classId);
    },60*1000);
}
</script>
