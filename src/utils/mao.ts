
export interface oneCat {
  id: number
  icon: string
  path: string
  x: number
  y: number
  pos: number
  isCover: boolean
}

// 获取icon图片
const getIconPath = (icon: string): string => {
  return require(`@/assets/img/${icon}.png`)
}

// 获取随机数字
const getNumber = function (min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min)
}



// 获取数据
export const getCatList = (level: number) => {
  const catList: Array<oneCat> = []
  const iconList: string[] = ['fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5', 'fruit6', 'fruit7', 'fruit8', 'fruit9', 'fruit10']
  const minCol = 0, maxCol = 4,minRow = 0, maxRow = level*2 >4?4:level*2, rowMin = 1, rowMax = 5
  let i = level*3
  while (i--) {
    iconList.slice(0, 3**(level**2)).forEach(icon => {
      catList.push({
        id: Math.random(),
        icon,
        path: getIconPath(icon),
        x: getNumber(minCol, maxCol*50),
        y: getNumber(minRow, maxRow*2) * 25,
        pos: getNumber(rowMin, rowMax),
        isCover: false
      })
    })
  }
  return catList
}


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
      list.splice(i, 3)
    } else {
      i++
    }
  }
}