import { Component } from 'react'
import styles from './Card.module.scss'

interface Props {
  header?: JSX.Element
}

class Card extends Component<Props> {
  render = () => (
    <div className={ styles['card-wrapper'] }>
      {
        this.props.header ? (
          <div className={ styles['card-header'] }>
            { this.props.header }
          </div>
        ) : null
      }
      <div className={ styles['card-text'] }>
        { this.props.children }
      </div>
    </div>
  )
}

export default Card
