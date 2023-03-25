<script setup>
import { defineProps } from "vue";

const props = defineProps({
  podcast: Object,
});
</script>

<template>
  <div class="wrapper">
    <img :src="podcast['im:image'][0].label" />
    <h2>{{ podcast["im:name"].label }}</h2>
    <p>Author: {{ podcast["im:artist"].label }}</p>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1px solid;
  margin: 0 auto;
  margin-bottom: 5em;
  width: 15em;
  padding: .5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    position: relative;
    border-radius: 45vh;
    width: 45%;
    height: 60%;
    bottom: 50px;
  }

  h2 {
    position: relative;
    font-size: 1.2em;
    bottom: 40px;
  }

  p {
    position: relative;
    font-size: 20px;
    color: dimgray;
    bottom: 34px;
  }
}
</style>
