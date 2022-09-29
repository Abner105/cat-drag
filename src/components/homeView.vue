<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 16:15:22
 * @LastEditTime: 2022-09-29 16:17:36
 * @LastEditors: Jewel
-->
<template>
  <div>
    <draggable
      class="list-group"
      :list="maoArray"
      item-key="index"
      group="mao"
      :sort="false"
    >
      <template #item="{ element }">
        <div
          class="item"
          :style="{
            top: element.x + 'px',
            left: element.y + 'px',
            zIndex: element.pos
          }"
        >
          <img :src="element.path" alt="" />
        </div>
      </template>
    </draggable>

    <draggable
      class="res-group"
      :list="maoArray2"
      group="mao"
      @change="endDrag"
      item-key="id"
      :sort="false"
    >
      <template #item="{ element }">
        <div class="item">
          <img :src="element.path" alt="" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import { maoArray, oneMao } from '@/utils/mao'

export default defineComponent({
  components: {
    draggable
  },
  setup() {
    const state = reactive({
      maoArray,
      maoArray2: []
    })
    const endDrag = () => {
      const len = state.maoArray2.length
      if (len < 3) return
      const last1 = (state.maoArray2[len - 1] as oneMao).id,
        last2 = (state.maoArray2[len - 2] as oneMao).id,
        last3 = (state.maoArray2[len - 3] as oneMao).id
      console.log(state.maoArray2, len, state.maoArray2[len - 1], last1)

      if(last1===last2 && last2===last3){
        state.maoArray2.splice(len-3,3)
      }
    }

    const getImg = (src: string) => {
      return require(src)
    }

    return {
      ...toRefs(state),
      getImg,
      endDrag
    }
  }
})
</script>

<style scoped>
.item img {
  width: 100px;
  height: 100px;
}
.list-group {
  position: relative;
  width: 500px;
  height: 500px;
  border: 5px solid red;
  margin: 20px auto;
  border: 5px solid skyblue;
}
.list-group .item {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 3px green solid;
}
.res-group {
  height: 100px;
  border: 5px solid greenyellow;
  display: flex;
}
</style>
