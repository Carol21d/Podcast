<script setup>
import { defineProps } from "vue";

const props = defineProps({
  podcast: Object,
});
</script>

<template>
  <div class="wrapper">
    <img class="wrapper__img" :src="podcast['im:image'][0].label" />
    <p class="wrapper__name">{{ podcast["im:name"].label }}</p>
    <p class="wrapper__author">Author: {{ podcast["im:artist"].label }}</p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1px solid;
  margin: 0 auto;
  margin-bottom: 5em;
  width: 18em;
  height: 10em;
  padding: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .wrapper__img {
    position: relative;
    border-radius: 100%;
    width: 35%;
    height: 68%;
    bottom: 35px;
  }

  .wrapper__name {
    position: relative;
    font-size: 1em;
    font-weight: bold;
    bottom: 25px;
  }

  .wrapper__author {
    position: relative;
    font-size: 16px;
    color: dimgray;
    bottom: 45px;
  }
}
</style>
