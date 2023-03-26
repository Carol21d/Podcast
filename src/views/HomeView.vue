<script setup>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import ApiPodcast from "../services/ApiCall";
import { ref, onBeforeMount, computed } from "vue";
import Filter from "../components/Filter.vue";

const apiPodcast = new ApiPodcast();
const podcasts = ref([]);
const filterSearch = ref("");

onBeforeMount(async () => {
  await apiPodcast.fetchAllPodcast();
  podcasts.value = apiPodcast.getPodcast();
});

// const filteredPodcast = ref(filterbar.value);
//  const findPodcast = (filtered) =>{
//   filteredPodcast.value =filtered;
//  }

const filteredPodcast = computed(() => {
  if (!filterSearch.value) return podcasts.value;
  return podcasts.value.filter(podcast=>
    podcast["im:name"].label
      .toLowerCase()
      .includes(filterSearch.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <Header />
    <Filter v-model="filterSearch" />

    <div class="card">
      <Card v-for="podcast in filteredPodcast" :podcast="podcast" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;

  .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.1rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
