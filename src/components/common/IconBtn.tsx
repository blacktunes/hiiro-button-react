import { Component } from 'react'
import styles from './IconBtn.module.scss'
import youtube from '../../assets/image/youtube-fill.png'
import twitter from '../../assets/image/twitter-fill.png'
import bilibili from '../../assets/image/bilibili-fill.png'
import github from '../../assets/image/github-fill.png'

interface Props {
  url?: string
  type: 'youtube' | 'twitter' | 'bilibili' | 'github'
}

class IconBtn extends Component<Props> {
  list = {
    youtube,
    twitter,
    bilibili,
    github
  }
  render() {
    return (
      <a href={ this.props.url } className={ styles.icon } target="_blank" rel="noreferrer">
        <img draggable="false" src={ this.list[this.props.type] } alt="" />
      </a>
    )
  }
}

export default IconBtn
