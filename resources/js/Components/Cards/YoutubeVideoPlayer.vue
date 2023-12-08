<script setup>
import {onMounted, ref} from "vue";
import youtubeParser from "@/Utility/YoutubeParser.js";

const prop=defineProps({
    'src':String
});
let vid=ref(null);
let pid=ref(null);
onMounted(()=>{
    let u=youtubeParser(prop.src);
    if(u.videoId) vid.value=u.videoId;
    if(u.playlistId) pid.value=u.playlistId;
});
</script>

<template>
    <iframe v-if="vid!=null&&pid===null" width="420" height="315" :src="'https://www.youtube.com/embed/'+vid"></iframe>
    <iframe v-else-if="pid!=null" width="420" height="315" :src="'https://www.youtube.com/embed/?listType=playlist&list='+pid"></iframe>
</template>

<style scoped>

</style>
