import { Mark, PlaySetting } from './type'

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
