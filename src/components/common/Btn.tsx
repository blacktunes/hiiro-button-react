import styles from './Btn.module.scss'

interface Props {
  name: string
  url: string
  color?: string
  background?: string
}

const Btn = (props: Props) => {
  return (
    <div className={ styles.btn } style={ { background: props.background } }>
      <a href={ props.url } target="_blank" rel="noreferrer" style={ { color: props.color } }>{ props.name }</a>
    </div>
  )
}

export default Btn
