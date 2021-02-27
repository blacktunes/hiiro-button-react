
import { createRef } from 'react'
import { useTranslation } from 'react-i18next'
import mitt from '../assets/script/mitt'
import { EVENT, FriendlyLink, INFO_I18N } from '../assets/script/type'
import Btn from '../components/common/Btn'
import Card from '../components/common/Card'
import Voice from '../components/Voice'
import styles from './Home.module.scss'

const Home = () => {
  const { t } = useTranslation()

  const voice = createRef<any>()

  // 友链列表
  const friendlyLinkList: FriendlyLink[] = [
    {
      name: '七奈按钮',
      url: 'https://kaguranana.moe/',
      background: '#c4afd0'
    }
  ]

  let isRestart = false
  mitt.on(EVENT.changeShowInfo, e => {
    if (!voice.current) return
    if (isRestart) {
      voice.current.style.animation = 'voice 0.5s'
      isRestart = !isRestart
    } else {
      voice.current.style.animation = 'voice-restart 0.5s'
      isRestart = !isRestart
    }
  })

  return (
    <div className={ styles.home }>
      <div ref={ voice }>
        <Voice />
      </div>
      <Card>
        <div style={ { textAlign: 'center' } }>
          { t(INFO_I18N.voiceTotalTip) }:  { t(INFO_I18N.voiceTotal)
          }{ t('lastDate') ? `(+${t('newVoice')} · ${t('lastDate')})` : '' }
        </div>
      </Card>
      <Card>
        <div className={ styles.content }>
          <div className={ styles.btn }>
            <Btn
              name={ t(INFO_I18N.vtbbtn) }
              url='https://vtbbtn.org/'
              background='rgb(100, 181, 246)'
            />
          </div>
          {
            friendlyLinkList.map(item => (
              <div className={ styles.btn } key={ item.name }>
                <Btn
                  name={ item.name }
                  url={ item.url }
                  color={ item.color }
                  background={ item.background }
                />
              </div>
            ))
          }
        </div>
      </Card>
    </div >
  )
}

export default Home
