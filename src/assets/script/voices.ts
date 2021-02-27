import { CategoryItem, VoicesItem } from './type'

const jsonList = require.context('../../setting/translate', false, /.json$/).keys().map((item: string) => {
  return item.substring(2)
})

let Locales: { [lang: string]: any }
let CategoryList: CategoryItem[]
let VoicesList: VoicesItem[] = []
jsonList.forEach((name: string) => {
  if (name === 'locales.json') {
    Locales = require(`../..//setting/translate/${name}`)
  } else if (name === 'category.json') {
    CategoryList = require(`../../setting/translate/${name}`)
  } else {
    const voice = require(`../../setting/translate/${name}`)
    VoicesList = [...VoicesList, ...voice]
  }
})

export {
  Locales,
  CategoryList,
  VoicesList
}
