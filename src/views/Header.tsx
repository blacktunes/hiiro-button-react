import React from 'react'
import Setting from '../setting/setting.json'
import styles from './Header.module.scss'
import IconBtn from '../components/common/IconBtn'

const HEADER: {
  icon?: string;
  youtube?: string;
  twitter?: string;
  bilibili?: string;
} = Setting['header'] || {}

const Header = () => {
  const logo: any = React.createRef()

  const logoClick = () => {
    console.log(1)
  }

  return (
    <div className={ styles.header }>
      <div className={ styles.logo } onClick={ logoClick } ref={ logo }>{ HEADER.icon }</div>
      <div className={ styles.title }>语音按钮</div>
      { HEADER.youtube ? <IconBtn type="youtube" url={ HEADER.youtube } /> : null }
      { HEADER.twitter ? <IconBtn type="twitter" url={ HEADER.twitter } /> : null }
      { HEADER.bilibili ? <IconBtn type="bilibili" url={ HEADER.bilibili } /> : null }
    </div>
  )
}

export default Header
