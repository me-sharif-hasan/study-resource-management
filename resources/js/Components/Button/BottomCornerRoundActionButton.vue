<template>
    <div class="fixed flex justify-center items-center bottom-2 right-2 w-[45px] h-[45px] bg-red-500 rounded-circle text-white font-bold text-3xl text-center shadow-lg hover:drop-shadow-xl cursor-pointer" @click="$emit('action')">{{value}}</div>
</template>
<script setup>
defineProps(['value'])
defineEmits(['action'])
</script>
