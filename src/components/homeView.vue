<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 16:15:22
 * @LastEditTime: 2022-09-30 16:43:19
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
      filter=".cover"
    >
      <template #item="{ element }">
        <div
          class="item"
          :style="{
            top: element.x + 'px',
            left: element.y + 'px',
            zIndex: element.pos
          }"
          :class="{ cover: element.isCover }"
        >
          <div class="iscover" v-if="element.isCover"></div>
          <img :src="element.path" alt="" />
        </div>
      </template>
    </draggable>

    <draggable
      class="res-group"
      :list="maoArray2"
      group="mao"
      @change="endDrag"
      item-key="index"
      :sort="false"
    >
      <template #item="{ element }">
        <div class="item">
          <img :src="element.path" alt="" />
        </div>
      </template>
    </draggable>
    <div class="mask" v-if="over">
      <div>GAME OVER!!!</div>
    </div>
    <div class="mask" v-if="complete">
      <div>通关了!!!</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import draggable from 'vuedraggable'
import { catList, oneCat ,checkCover,mergeCat} from '@/utils/mao'

export default defineComponent({
  components: {
    draggable
  },
  setup() {
    
    checkCover(catList)
    const state = reactive({
      maoArray: catList,
      maoArray2: [],
      over: false,
      complete:false
    })
    const endDrag = () => {
      checkCover(state.maoArray)
      console.log(state.maoArray)

      const len = state.maoArray2.length
      if (len < 3) return
      
      mergeCat(state.maoArray2)
      // 游戏结束
      if (state.maoArray2.length >= 7) {
        state.over = true
      }
      // 通关了
      if (state.maoArray.length === 0) {
        state.complete = true
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
  width: 50px;
  height: 50px;
}
.item .iscover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
.list-group {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 40px auto;
}
.list-group .item {
  position: absolute;
  width: 50px;
  height: 50px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.res-group {
  width: 350px;
  margin: 80px auto 0;
  height: 50px;
  border: 5px solid #666;
  border-radius: 4px;
  display: flex;
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
  line-height: 100vh;
}
</style>
