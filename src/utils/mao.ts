interface oneIcon {
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
export const getList = (level: number) => {
  const list: Array<oneIcon> = []
  const iconList: string[] = ['fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5', 'fruit6', 'fruit7', 'fruit8', 'fruit9', 'fruit10']
  let i = level === 1 ? 3 : 6 // 需要是3的倍数才能消除，第一关不重复
  while (i--) {
    iconList.slice(0, 3 ** (level ** 2)).forEach(icon => {
      list.push({
        id: Math.random(), // 随机一个id
        icon,// icon名字，后续用于消除对比
        path: getIconPath(icon),// 图片的src
        // 以下数据可根据实际情况设置，我的每个icon大小是50x50，容器大小是250x250
        x: getNumber(0, 4 * 50),    // left，x轴上打乱些，可以增加难度
        y: getNumber(0, 4 * 2) * 25, // top，让y轴上排列整齐些，结果均是：0，25，50，75...
        pos: getNumber(0, 4), // z-index
        isCover: false // 是否被覆盖了，默认都没有被覆盖
      })
    })
  }
  return list
}

// 检测是否覆盖
export const checkCover = (list: Array<oneIcon>): void => {
  const len = list.length
  // 先将所有的icon设置为不覆盖
  list.forEach(item => {
    item.isCover = false
  })
  // 双层循环，两两对比
  for (let i = 0; i < len - 1; i++) {
    const curcat = list[i]
    for (let j = i + 1; j < len; j++) {
      const otherCat = list[j]
      // 50是icon的大小
      if (!(curcat.x >= otherCat.x + 50 || otherCat.x >= curcat.x + 50 || curcat.y >= otherCat.y + 50 || otherCat.y >= curcat.y + 50)) {
        // 有重叠
        if (curcat.pos > otherCat.pos) {
          // 判断z-index，较小的被覆盖
          otherCat.isCover = true
        } else {
          // curcat的index小于otherCat的index，所以curcat被覆盖
          curcat.isCover = true
        }
      }
    }
  }
}

export const mergeIcon = (list: Array<oneIcon>): void => {
  let i = 0
  while (i < list.length - 2) {
    if (list[i].icon === list[i + 1].icon && list[i + 1].icon === list[i + 2].icon) {
      list.splice(i, 3)
    } else {
      i++
    }
  }
}