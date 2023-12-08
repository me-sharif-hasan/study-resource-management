<template>
    <div class="fixed right-1 bottom-2 flex items-center min-h-[80px] w-[300px] bg-gray-50 p-2 drop-shadow-xl rounded text-md-center z-[10000]">
        <font-awesome-icon :class="[type==='error'?'text-red-500':type==='warning'?'text-yellow-300':'text-blue-600','mx-2','text-xl']" :icon="type==='error'?'circle-xmark':type==='warning'?'triangle-exclamation':'circle-check'" class="mx-1"/>
        <div class="w-full text-center">
            <slot/>
        </div>
        <font-awesome-icon @click="$emit('close')" icon="times" class="absolute top-2 right-1 w-[15px] h-[15px] rounded-circle text-xl hover:bg-gray-400 transition p-1 cursor-pointer"/>
    </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
defineProps({
    type:String
});
defineEmits(['close']);
</script>
