<!--
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-28 16:15:22
 * @LastEditTime: 2022-09-30 16:43:19
 * @LastEditors: Jewel
-->
<template>
  <div>
    <div class="title">第{{level}}关</div>
    <draggable
      class="list-group"
      :list="maoArray"
      item-key="icon"
      group="mao"
      :sort="false"
      filter=".cover"
    >
      <template #item="{ element }">
        <div
          class="item"
          :style="{
            top: element.y + 'px',
            left: element.x + 'px',
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
      item-key="icon"
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
import { getCatList ,checkCover,mergeCat} from '@/utils/mao'

export default defineComponent({
  components: {
    draggable
  },
  props:{
    level:{
      type:Number,
      default:1
    },
  },
  setup(props,context) {
    const catList = getCatList(props.level)
    checkCover(catList)
    const state = reactive({
      maoArray: catList,
      maoArray2: [],

    })
    const endDrag = () => {
      checkCover(state.maoArray)
      console.log(state.maoArray)

      const len = state.maoArray2.length
      if (len < 3) return
      
      mergeCat(state.maoArray2)
      // 游戏结束
      if (state.maoArray2.length >= 7) {
        context.emit('gameOver')
      }
      // 通关了
      if (state.maoArray.length === 0) {
        context.emit('complete')
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
  background-color: rgba(0, 0, 0, 0.3);
}
.list-group {
  position: relative;
  width: 250px;
  height: 250px;
  margin:0 auto;
}
.list-group .item {
  position: absolute;
  width: 50px;
  height: 50px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.res-group {
  width: 350px;
  margin: 160px auto 0;
  height: 50px;
  border: 3.5px solid #ebe151;
  border-radius: 4px;
  display: flex;
}
.title{
  color: rgb(20, 83, 4);
  margin: 40px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
}
</style>
