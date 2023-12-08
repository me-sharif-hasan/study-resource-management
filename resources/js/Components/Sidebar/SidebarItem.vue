<template>
    <li class="sidebar-item" @mouseover="hoverOn=true" @mouseleave="hoverOn=false">
        <router-link v-if="!anchor" class="sidebar-link" :to="href" aria-expanded="false">
                <span class="w-[22px]">
                  <font-awesome-icon :icon="hoverOn?(hoverIcon?hoverIcon:iconClass):iconClass" :class="'transition sidebar-icon fa-'+animation" class="icon"/>
                </span>
            <span class="hide-menu"><slot/></span>
        </router-link>
        <a v-if="anchor" class="sidebar-link" :href="href" aria-expanded="false">
                <span class="w-[22px]">
                  <font-awesome-icon :icon="hoverOn?(hoverIcon?hoverIcon:iconClass):iconClass" :class="'transition sidebar-icon fa-'+animation" class="icon"/>
                </span>
            <span class="hide-menu"><slot/></span>
        </a>
    </li>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";
let hoverOn=ref(false);
defineProps({
    'href':[Object,String],
    'iconClass':String,
    'animation': String,
    'hoverIcon':String,
    'anchor':Boolean
});
</script>
<style scoped>
.icon{
    color: #424242;
}
</style>
