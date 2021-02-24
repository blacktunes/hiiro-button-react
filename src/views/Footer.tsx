import styles from './Footer.module.scss'
import Setting from '../setting/setting.json'
import IconBtn from '../components/common/IconBtn'

const FOOTER: {
  author?: {
    name: string;
    url?: string;
  }[];
  info?: string[];
  githubUrl?: string;
} = Setting['footer']

const author = FOOTER && FOOTER.author ? FOOTER.author : []
const info = FOOTER && FOOTER.info ? FOOTER.info : []
const githubUrl = FOOTER && FOOTER.githubUrl ? FOOTER.githubUrl : undefined

const Footer = () => {
  return (
    <div className={ styles.footer }>
      <div>
        <div className={ styles.author }>
          <div>©2021</div>
          {
            author.map((item, index) => {
              return (
                <div key={ index }>
                  {
                    index > 0 ? <span style={ { marginLeft: '5px' } }>&</span> : null
                  }
                  <a style={ { marginLeft: '5px' } } href={ item.url } target='_blank' rel='noreferrer'>{ item.name }</a>
                </div>
              )
            })
          }
        </div>
        <div className={ styles.info }>
          {
            info.map((item, index) => {
              return <div key={ index } dangerouslySetInnerHTML={ { __html: item } }></div>
            })
          }
        </div>
      </div>
      <div className={ styles['text-right'] }>
        <div className={ styles.git }>
          <div className={ styles.btn }>
            <IconBtn type='github' url={ githubUrl } />
          </div>
          <div>i18n</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
