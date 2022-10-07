<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 16:15:22
 * @LastEditTime: 2022-09-30 16:43:19
 * @LastEditors: Jewel
-->
<template>
  <div class="mask">
    <div>GAME OVER!!!</div>
    <button @click="$emit('rePlay')">再来一次</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  // setup() {

  // }
})
</script>

<style scoped>
  button{
    width: 100px;
    height: 50px;
    flex:0;
    margin-top: 20px;
    font-size: 14px;
  }
</style>
