/*
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-29 14:20:20
 * @LastEditTime: 2022-09-30 16:38:31
 * @LastEditors: Jewel
 */



export interface oneCat {
  id: number
  icon: string
  path: string
  x: number
  y: number
  pos: number
  isCover: boolean
}
const getIconPath = (icon: string): string => {
  return require(`@/assets/img/${icon}.jpeg`)
}

const getNumber = function (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

const iconList: string[] = ['mao1', 'mao2', 'mao3', 'mao4', 'mao5', 'mao6','mao7','mao8','mao9','mao10','mao11']

const min = 0, max = 300, rowMin = 1, rowMax = 5

const getCatList = () => {
  const catList: Array<oneCat> = []
  let i = 3
  while (i--) {
    iconList.forEach(icon => {
      catList.push({
        id: Math.random(),
        icon,
        path: getIconPath(icon),
        x: getNumber(min, max),
        y: getNumber(min, max),
        pos: getNumber(rowMin, rowMax),
        isCover: false
      })
    })
  }
  return catList
}

export const catList = getCatList()

export const checkCover = (list: Array<oneCat>): void => {
  const len = list.length
  list.forEach(item => {
    item.isCover = false
  })
  for (let i = 0; i < len - 1; i++) {
    const curcat = list[i]
    for (let j = i + 1; j < len; j++) {
      const otherCat = list[j]
      if (!(curcat.x >= otherCat.x + 50 || otherCat.x >= curcat.x + 50 || curcat.y >= otherCat.y + 50 || otherCat.y >= curcat.y + 50)) {
        if (curcat.pos > otherCat.pos) {
          otherCat.isCover = true
        } else {
          curcat.isCover = true
        }
      }
    }
  }
}

export const mergeCat = (list: Array<oneCat>): void => {
  let i = 0
  while (i < list.length - 2) {
    if (list[i].icon === list[i + 1].icon && list[i + 1].icon === list[i + 2].icon) {
      list.splice(i,3)
    }else{
      i++
    }
  }
}