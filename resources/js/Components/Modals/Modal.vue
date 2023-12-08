<template>
<div v-if="visibility" class="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-[100]" id="modal">
    <div class="bg-blend-overlay w-screen h-screen bg-black opacity-50 absolute" @click="emit('close')"></div>
    <div class="bg-white z-[1000] w-50 h-auto rounded p-2 shadow-lg overflow-y-auto relative">
        <slot/>
    </div>
</div>
</template>
<script setup>
defineProps({
    visibility:Boolean
})
const emit=defineEmits(['close']);
</script>
