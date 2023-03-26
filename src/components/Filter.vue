<script setup>

import { ref, defineProps, defineEmits, watch } from "vue";

// const searchPodcasts = ref('');
const props = defineProps({
    filterbar: String,
  
  
});

const emit = defineEmits(["update:filterbar"]);
const search = ref(props.filterbar);

watch(search , findPodcast => {
  emit("update:filterbar",findPodcast);
});




// const emitFilter = () => {
//   const filtered = filteredPodcast.value;
//   emit('filter',filtered);
// }
</script>
<template>
  <div class="filter">
    <span>100</span>

    <input
      type="search"
      name="search"
      id="search"
      placeholder="Filter podcasts..."
      v-model="search"
    />
    
  </div>
</template>
<style lang="scss">
.filter {
  display: flex;
  justify-content: space-around;
  align-self: end;
  margin-right: 1em;
  margin-bottom: 3.5em;

  span {
    font-weight: bold;
    background-color: rgb(15, 117, 180);
    width: 30px;
    align-self: center;
    border-radius: 6px;
    padding: 0.1em 0.1em;
    color: white;
    font-size: 20px;
    margin-left: 8px;
    margin-right: 1rem;
  }

  input {
    color: grey;
    border-radius: 0.2px solid rgb(167, 164, 164);
    width: 22em;
  }
}
</style>
