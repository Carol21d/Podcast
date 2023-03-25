<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    podcast :Object,
});

</script>

<template>
    <div class="wrapper">
        <img  :src="podcast['im:image'][1].label" />
        <h2>{{ podcast["im:name"].label }}</h2>
        <p>Author: {{ podcast["im:artist"].label}}</p>

    </div>


 
</template>
