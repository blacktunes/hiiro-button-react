
import { useTranslation } from 'react-i18next'
import { FriendlyLink, INFO_I18N } from './assets/script/type'
import Btn from './components/common/Btn'
import Card from './components/common/Card'
import styles from './Home.module.scss'

const Home = () => {
  const { t } = useTranslation()

  // 友链列表
  const friendlyLinkList: FriendlyLink[] = [
    {
      name: '七奈按钮',
      url: 'https://kaguranana.moe/',
      background: '#c4afd0'
    }
  ]

  return (
    <div className={ styles.home }>
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
