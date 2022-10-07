<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 16:15:22
 * @LastEditTime: 2022-09-30 16:43:19
 * @LastEditors: Jewel
-->
<template>

  <div class="mask">
    <!-- 只有2关，写死了 -->
    <div v-if="level<2">过关了!!!</div>
    <div v-else>恭喜通关了!!!</div>
    <button @click="$emit('next')" v-if="level<2">下一关</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  props:{
    level:{
      type:Number,
      default:1
    },
  },
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
