import { Mark, PlaySetting, VoicesCategory, VoicesItem, VoicesOrigin } from './type'
import { CategoryList, VoicesList } from './voices'

export const playSetting: PlaySetting = {
  loading: true,
  error: false,
  nowPlay: null,
  overlap: false,
  autoRandom: false,
  loop: 0,
  showInfo: false
}

const info = localStorage.getItem('info')
if (info) playSetting.showInfo = JSON.parse(info)

export const infoDate: Mark = {
  title: '',
  time: '',
  url: ''
}

const categoryList: VoicesCategory[] = []
CategoryList.forEach(category => {
  const temp: VoicesCategory = { ...category, voiceList: [] }
  VoicesList.forEach(voice => {
    if (voice.category === category.name) {
      temp.voiceList.push(voice)
    }
  })
  categoryList.push(temp)
})

// 获取来源排序列表
const temp1: {
  [name: string]: {
    url?: string;
    list: VoicesItem[];
  };
} = {}
const temp2: {
  title: string;
  voiceList: VoicesItem[];
} = {
  title: 'unknown',
  voiceList: []
}
const originList: VoicesOrigin[] = []
VoicesList.forEach(voice => {
  if (voice.mark && voice.mark.title) {
    if (temp1[voice.mark.title]) {
      temp1[voice.mark.title].list.push(voice)
    } else {
      temp1[voice.mark.title] = {
        url: voice.mark.url,
        list: [voice]
      }
    }
  } else {
    temp2.voiceList.push(voice)
  }
})
for (const i in temp1) {
  originList.unshift({
    title: i,
    url: temp1[i].url,
    voiceList: temp1[i].list
  })
}
originList.push(temp2)

export const voices = {
  categoryList,
  originList
}
