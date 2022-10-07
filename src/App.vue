<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 15:56:45
 * @LastEditTime: 2022-09-28 16:52:56
 * @LastEditors: Jewel
-->
<template>
  <div>
    <homeView @gameOver="over=true" @complete="complete=true" v-if="!over && !complete" :level="level" />
    <successView v-if="complete" @next="nextLevel" :level="level" />
    <failView v-if="over" @rePlay="over=false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import homeView from './components/homeView.vue'
import successView from './components/successView.vue'
import failView from './components/failView.vue'

export default defineComponent({
  name: "App",
  components: { homeView, successView, failView },
  setup() {
    let over = ref<boolean>(false)
    let complete = ref<boolean>(false)
    let level = ref<number>(1)
    const nextLevel = () => {
      level.value++
      complete.value = false
    }
    return {
      over,
      complete,
      level,
      nextLevel
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  padding: 20px 0 0;
  width: 100vw;
  height: 100vh;
  background: url('./assets/img/bg.png') no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(63, 63, 63, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  font-size: 32px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
