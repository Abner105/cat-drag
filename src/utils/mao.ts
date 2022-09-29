/*
 * @Description: 
 * @Author: Jewel
 * @Date: 2022-09-29 14:20:20
 * @LastEditTime: 2022-09-29 16:05:44
 * @LastEditors: Jewel
 */
export interface oneMao {
  id: number
  name: string
  path: string
  x: number
  y: number
  pos:number
}

const getNumber = function(min:number,max:number):number{
  return Math.floor(Math.random() * (max - min) + min)
}
const min = 0,max=400

export const maoArray: Array<oneMao> = [
  {
    id: 1,
    name: 'mao1',
    path: require('@/assets/img/mao1.jpeg'),
    x: getNumber(min,max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 2,
    name: 'mao2',
    path: require('@/assets/img/mao2.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 3,
    name: 'mao3',
    path: require('@/assets/img/mao3.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 4,
    name: 'mao4',
    path: require('@/assets/img/mao4.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 5,
    name: 'mao5',
    path: require('@/assets/img/mao5.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 6,
    name: 'mao6',
    path: require('@/assets/img/mao6.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 7,
    name: 'mao7',
    path: require('@/assets/img/mao7.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 8,
    name: 'mao8',
    path: require('@/assets/img/mao8.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 9,
    name: 'mao9',
    path: require('@/assets/img/mao9.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 10,
    name: 'mao10',
    path: require('@/assets/img/mao10.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 11,
    name: 'mao11',
    path: require('@/assets/img/mao11.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 12,
    name: 'mao12',
    path: require('@/assets/img/mao12.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 13,
    name: 'mao13',
    path: require('@/assets/img/mao13.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 14,
    name: 'mao14',
    path: require('@/assets/img/mao14.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 15,
    name: 'mao15',
    path: require('@/assets/img/mao15.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 16,
    name: 'mao16',
    path: require('@/assets/img/mao16.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 17,
    name: 'mao17',
    path: require('@/assets/img/mao17.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 18,
    name: 'mao18',
    path: require('@/assets/img/mao18.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 19,
    name: 'mao19',
    path: require('@/assets/img/mao19.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 20,
    name: 'mao20',
    path: require('@/assets/img/mao20.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 21,
    name: 'mao21',
    path: require('@/assets/img/mao21.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 22,
    name: 'mao22',
    path: require('@/assets/img/mao22.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 23,
    name: 'mao23',
    path: require('@/assets/img/mao23.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 24,
    name: 'mao24',
    path: require('@/assets/img/mao24.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 1,
    name: 'mao1',
    path: require('@/assets/img/mao1.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 2,
    name: 'mao2',
    path: require('@/assets/img/mao2.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 3,
    name: 'mao3',
    path: require('@/assets/img/mao3.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 4,
    name: 'mao4',
    path: require('@/assets/img/mao4.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 5,
    name: 'mao5',
    path: require('@/assets/img/mao5.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 6,
    name: 'mao6',
    path: require('@/assets/img/mao6.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 7,
    name: 'mao7',
    path: require('@/assets/img/mao7.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 8,
    name: 'mao8',
    path: require('@/assets/img/mao8.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 9,
    name: 'mao9',
    path: require('@/assets/img/mao9.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 10,
    name: 'mao10',
    path: require('@/assets/img/mao10.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 11,
    name: 'mao11',
    path: require('@/assets/img/mao11.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 12,
    name: 'mao12',
    path: require('@/assets/img/mao12.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 13,
    name: 'mao13',
    path: require('@/assets/img/mao13.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 14,
    name: 'mao14',
    path: require('@/assets/img/mao14.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 15,
    name: 'mao15',
    path: require('@/assets/img/mao15.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 16,
    name: 'mao16',
    path: require('@/assets/img/mao16.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 17,
    name: 'mao17',
    path: require('@/assets/img/mao17.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 18,
    name: 'mao18',
    path: require('@/assets/img/mao18.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 19,
    name: 'mao19',
    path: require('@/assets/img/mao19.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 20,
    name: 'mao20',
    path: require('@/assets/img/mao20.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 21,
    name: 'mao21',
    path: require('@/assets/img/mao21.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 22,
    name: 'mao22',
    path: require('@/assets/img/mao22.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 23,
    name: 'mao23',
    path: require('@/assets/img/mao23.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 24,
    name: 'mao24',
    path: require('@/assets/img/mao24.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 1,
    name: 'mao1',
    path: require('@/assets/img/mao1.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 2,
    name: 'mao2',
    path: require('@/assets/img/mao2.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 3,
    name: 'mao3',
    path: require('@/assets/img/mao3.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 4,
    name: 'mao4',
    path: require('@/assets/img/mao4.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 5,
    name: 'mao5',
    path: require('@/assets/img/mao5.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 6,
    name: 'mao6',
    path: require('@/assets/img/mao6.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 7,
    name: 'mao7',
    path: require('@/assets/img/mao7.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 8,
    name: 'mao8',
    path: require('@/assets/img/mao8.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 9,
    name: 'mao9',
    path: require('@/assets/img/mao9.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 10,
    name: 'mao10',
    path: require('@/assets/img/mao10.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 11,
    name: 'mao11',
    path: require('@/assets/img/mao11.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 12,
    name: 'mao12',
    path: require('@/assets/img/mao12.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 13,
    name: 'mao13',
    path: require('@/assets/img/mao13.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 14,
    name: 'mao14',
    path: require('@/assets/img/mao14.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 15,
    name: 'mao15',
    path: require('@/assets/img/mao15.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 16,
    name: 'mao16',
    path: require('@/assets/img/mao16.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 17,
    name: 'mao17',
    path: require('@/assets/img/mao17.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 18,
    name: 'mao18',
    path: require('@/assets/img/mao18.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 19,
    name: 'mao19',
    path: require('@/assets/img/mao19.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 20,
    name: 'mao20',
    path: require('@/assets/img/mao20.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 21,
    name: 'mao21',
    path: require('@/assets/img/mao21.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 22,
    name: 'mao22',
    path: require('@/assets/img/mao22.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),

  },
  {
    id: 23,
    name: 'mao23',
    path: require('@/assets/img/mao23.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
  {
    id: 24,
    name: 'mao24',
    path: require('@/assets/img/mao24.jpeg'),
    x: getNumber(min, max),
    y: getNumber(min, max),
    pos: getNumber(min, max),
  },
]