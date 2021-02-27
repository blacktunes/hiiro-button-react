import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { playSetting, voices } from "../assets/script/data"
import mitt from '../assets/script/mitt'
import { EVENT, VoicesItem } from '../assets/script/type'
import Btn from './common/Btn'
import Card from './common/Card'
import styles from './Voice.module.scss'

const Voice = () => {
  const { t } = useTranslation()
  const [_showInfo, _setShowInfo] = useState(playSetting.showInfo)

  mitt.on(EVENT.changeShowInfo, e => {
    _setShowInfo(e)
  })

  const creatBtn = (list: VoicesItem[]) => {
    return (list.map(voice => (
      <div style={ { margin: '2px 5px' } } key={ voice.name }>
        <Btn name={ t(`voice.${voice.name}`) } />
      </div>
    )))
  }

  return (
    <div>
      {
        !_showInfo ?
          voices.categoryList.map(item => {
            const header = <div className={ styles.category }>{ t(`voicecategory.${item.name}`) }</div>
            return (
              <Card header={ header } key={ item.name }>
                <div className={ styles.content }>
                  { creatBtn(item.voiceList) }
                </div>
              </Card>
            )
          }) :
          voices.originList.map(item => {
            const header = (
              <div className={ styles.category }>
                <a href={ item.url } target="_blank" rel="noreferrer">
                  { item.title === "unknown" ? t("unknown") : item.title }
                </a>
              </div>
            )
            return (
              <Card header={ header } key={ item.title }>
                <div className={ styles.content }>
                  { creatBtn(item.voiceList) }
                </div>
              </Card>
            )
          })
      }
    </div>
  )
}

export default Voice
