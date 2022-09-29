<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 15:56:45
 * @LastEditTime: 2022-09-28 16:52:56
 * @LastEditors: Jewel
-->
<template>
  <div>
    <homeView/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homeView from './components/homeView.vue';

export default defineComponent({
    name: "App",
    components: { homeView }
})
</script>

<style>
#app {
}
</style>
