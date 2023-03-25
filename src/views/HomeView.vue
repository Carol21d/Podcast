<script setup>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import ApiPodcast from '../services/ApiCall';
import {ref ,onBeforeMount} from 'vue';

const apiPodcast = new ApiPodcast();
const podcasts = ref([]);

onBeforeMount(async () =>{
  await apiPodcast.fetchAllPodcast();
  podcasts.value = apiPodcast.getPodcast();
})



</script>

<template>
  <main>
    <Header/>

    <div class="card">

   <Card v-for="podcast in podcasts" :podcast="podcast" />
    </div>
   
  </main>
</template>
