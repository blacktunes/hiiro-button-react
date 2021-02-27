import { constructor, createRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import { INFO_I18N } from '../assets/script/type'
import IconBtn from '../components/common/IconBtn'
import Setting from '../setting/setting.json'
import styles from './Header.module.scss'

const HEADER: {
  icon?: string;
  youtube?: string;
  twitter?: string;
  bilibili?: string;
} = Setting['header'] || {}

const Header = () => {
  const { t, i18n } = useTranslation()

  constructor(() => {
    // 初次加载时获取localStorage的语言设定
    const lang = localStorage.getItem('lang')
    if (lang) i18n.changeLanguage(lang)
    document.title = t(INFO_I18N.title)
  })

  // 点击图标时的放大动画
  const logo = createRef<any>()
  let isRestart = false
  const logoClick = () => {
    if (!logo.current) return
    if (isRestart) {
      logo.current.style.animation = 'logo 1s'
    } else {
      logo.current.style.animation = 'logo-restart 1s'
    }
    isRestart = !isRestart
  }

  const showSearch = () => {
    console.log('切换搜索框')
  }

  const changeLang = () => {
    // TODO 清空搜索结果
    if (i18n.language === 'en-US') {
      i18n.changeLanguage('zh-CN')
      localStorage.setItem('lang', 'zh-CN')
      document.title = t(INFO_I18N.title)
    } else {
      i18n.changeLanguage('en-US')
      localStorage.setItem('lang', 'en-US')
      document.title = t(INFO_I18N.title)
    }
  }

  return (
    <CSSTransition in timeout={ 0 } classNames="slide-down" appear>
      <div className={ styles.header }>
        <div style={ { animation: 'logo 1s', animationDelay: '0.5s' } } className={ styles.logo } onClick={ logoClick } ref={ logo }>{ HEADER.icon }</div>
        <div className={ styles.title }>{ t(INFO_I18N.title) }</div>
        { HEADER.youtube ? <IconBtn type="youtube" url={ HEADER.youtube } /> : null }
        { HEADER.twitter ? <IconBtn type="twitter" url={ HEADER.twitter } /> : null }
        { HEADER.bilibili ? <IconBtn type="bilibili" url={ HEADER.bilibili } /> : null }
        <div className={ styles['search-btn'] } onClick={ showSearch }>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8859"
            width="30"
            height="30"
          >
            <path
              d="M995.209792 859.621209c17.352203 17.350157 28.086685 41.318034 28.086685 67.807339 0 52.928466-42.916439 95.869465-95.869465 95.869465-26.463722 0-50.429553-10.734482-67.781756-28.086685l0 0L578.68426 714.24726c-57.097416 33.703613-123.432217 53.401234-194.509019 53.401234-211.783451 0-383.472741-171.688267-383.472741-383.472741S172.390767 0.703011 384.176264 0.703011s383.472741 171.687244 383.472741 383.471718c0 71.076802-19.696598 137.41058-53.402257 194.483436L995.209792 859.621209 995.209792 859.621209zM384.176264 96.54587c-158.831448 0-287.605324 128.772852-287.605324 287.62886 0 158.832472 128.772852 287.606347 287.605324 287.606347S671.781588 543.007201 671.781588 384.17473C671.779541 225.318722 543.008736 96.54587 384.176264 96.54587z"
              p-id="8860"
            />
          </svg>
        </div>
        <div className={ styles.btn } onClick={ changeLang } title={ t(INFO_I18N.lang) }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
            />
          </svg>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Header
