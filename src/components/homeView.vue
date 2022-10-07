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
    <draggable class="list-group" :list="iconArray" item-key="id" group="icon" :sort="false" filter=".cover">
      <template #item="{ element }">
        <div class="item" :style="{
          top: element.y + 'px',
          left: element.x + 'px',
          zIndex: element.pos
        }" :class="{ cover: element.isCover }">
          <div class="iscover" v-if="element.isCover"></div>
          <img :src="element.path" alt="" />
        </div>
      </template>
    </draggable>

    <draggable class="res-group" :list="iconArray2" group="icon" @change="endDrag" item-key="id" :sort="false">
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
import { getList, checkCover, mergeIcon } from '@/utils/iconDeal'

export default defineComponent({
  components: {
    draggable
  },
  props: {
    level: {
      type: Number,
      default: 1
    },
  },
  setup(props, context) {
    // 初始化数据
    const iconList = getList(props.level)
    // 检查覆盖效果
    checkCover(iconList)

    const state = reactive({
      iconArray: iconList,
      iconArray2: [],
    })
    // 槽内数据发生变化时的回调
    const endDrag = () => {
      // 重新计算元素是否覆盖
      checkCover(state.iconArray)
      // 槽内元素小于3，不进行消除
      const len = state.iconArray2.length
      if (len < 3) return
      // 消除
      mergeIcon(state.iconArray2)
      // 游戏结束
      if (state.iconArray2.length >= 7) {
        context.emit('gameOver')
      }
      // 过关了
      if (state.iconArray.length === 0) {
        context.emit('complete')
      }
    }

    return {
      ...toRefs(state),
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
  margin: 0 auto;
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

.title {
  color: rgb(20, 83, 4);
  margin: 40px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
}
</style>
