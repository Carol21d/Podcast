<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    podcast :Object,
});

</script>

<template>
    <div class="wrapper">
        <img  :src="podcast['im:image'][0].label" />
        <h2>{{ podcast["im:name"].label }}</h2>
        <p>Author: {{ podcast["im:artist"].label}}</p>

    </div>


 
</template>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    width: 0 auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 1px solid;
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 

    img{
        position: relative;
        border-radius: 45vh;
        width:24vh;
        bottom: 45vh;
        
    }

    h2{
        position: relative;
        font-size: 1.2em;
        bottom: 3vh;

    }


    p{
        position: relative;
        font-size: 20px;
    }
}





</style>
