<template>
    <iframe id="iframe" :src="'/web/pdfjs/viewer.html?file='+urlwp"/>
</template>
<script setup>
import {onMounted, ref,watch, onUnmounted} from "vue";
import Index from "@/App.vue";
import md5 from 'md5'

const prop=defineProps({url:String});
let intervalid=-1;
let hash=md5(prop.url);
let urlwp=ref('');

onMounted(()=>{
    if(localStorage.getItem(hash)!==undefined){
        urlwp.value=prop.url+"#page="+localStorage.getItem(hash);
    }else {
        urlwp.value=prop.url;
    }
});

watch(urlwp,()=>{
    let iframe=document.getElementById('iframe');
    iframe.onload=()=>{
        let doc=iframe.contentWindow.document;
        let page=doc.getElementById('pageNumber');
        if(intervalid===-1) {
            intervalid = setInterval(() => {
                let currentPage=page.value;
                localStorage.setItem(hash,currentPage);
                console.log('page update set ',currentPage)
            },1000);
        }
        console.log(doc.getElementById('pageNumber'))
    }
});

onUnmounted(()=>{
    if(intervalid!==-1){
        clearInterval(intervalid);
        intervalid=-1;
    }
})
</script>
