<script setup></script>
<template>
  <div class="filter">
    <span>100</span>

    <input type="search" name="search" id="search" placeholder="" />
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
    margin-right: 8px;
    
  }


  input{
    color: grey;
    border-radius: .2px solid rgb(167, 164, 164);
  }
}
</style>
