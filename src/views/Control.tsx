import { CSSTransition } from 'react-transition-group'
import { infoDate, playSetting } from '../assets/script/data'
import mitt from '../assets/script/mitt'
import { EVENT } from '../assets/script/type'
import Error from '../components/common/Error'
import Loading from '../components/common/Loading'
import styles from './Control.module.scss'
import { useState } from 'react'

const Control = () => {
  const [_overlap, _setOverlap] = useState(false)
  const [_autoRandom, _setAutoRandom] = useState(false)
  const [_loop, _setLoop] = useState(0)
  const [_showInfo, _setShowInfo] = useState(playSetting.showInfo)

  const randomPlay = () => {
    mitt.emit(EVENT.randomPlay)
  }

  const stopPlay = () => {
    mitt.emit(EVENT.stopPlay)
  }

  const overlapChange = () => {
    playSetting.overlap = !playSetting.overlap
    _setOverlap(playSetting.overlap)
  }

  const autoRandomChange = () => {
    playSetting.loop = 0
    _setLoop(playSetting.loop)
    playSetting.autoRandom = !playSetting.autoRandom
    _setAutoRandom(playSetting.autoRandom)
  }

  const loopChange = () => {
    playSetting.autoRandom = false
    _setAutoRandom(playSetting.autoRandom)
    if (playSetting.loop < 3) {
      playSetting.loop += 1
    } else {
      playSetting.loop = 0
    }
    _setLoop(playSetting.loop)
  }

  const changeShowInfo = () => {
    playSetting.showInfo = !playSetting.showInfo
    _setShowInfo(playSetting.showInfo)
    localStorage.setItem('info', playSetting.showInfo.toString())
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    infoDate.title = ''
    infoDate.time = ''
    infoDate.url = ''
  }

  return (
    <CSSTransition in timeout={ 0 } classNames="slide-up" appear>
      <div className={ styles.control }>
        <div className={ styles.playing }>
          <CSSTransition in={ Boolean(playSetting.nowPlay && playSetting.loading) } timeout={ 0 } classNames="fade" unmountOnExit>
            <div className={ styles.tip }>
              <Loading />
            </div>
          </CSSTransition>
          <CSSTransition in={ Boolean(playSetting.nowPlay && playSetting.error) } timeout={ 0 } classNames="fade-delay" unmountOnExit>
            <div className={ styles.tip }>
              <Error />
            </div>
          </CSSTransition>
          <div style={ { 'textDecoration': playSetting.error ? 'line-through' : 'none' } }>
            i18n {
              playSetting.showInfo && infoDate && infoDate.time
                ? `(${infoDate.time})`
                : ""
            }
          </div>
        </div>
        <div className={ styles['btn-wrapper'] }>
          <div
            className={ styles.icon }
            title="i18n"
            onClick={ randomPlay }
          >
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M689.066667 170.666667c-40.533333 0-132.266667 19.2-177.066667 119.466666C467.2 189.866667 377.6 170.666667 334.933333 170.666667 211.2 170.666667 128 266.666667 128 373.333333 128 631.466667 512 853.333333 512 853.333333s384-221.866667 384-480c0-106.666667-83.2-202.666667-206.933333-202.666666z"
              />
            </svg>
          </div>
          <div
            className={ styles.icon }
            title="i18n"
            onClick={ stopPlay }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <path d="M18,18H6V6H18V18Z" />
            </svg>
          </div>
          <div
            className={ `${styles.icon}${_overlap ? ' ' + styles['icon-active'] : ''}` }
            title="i18n"
            onClick={ overlapChange }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <path d="M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z" />
            </svg>
          </div>
          <div
            className={ `${styles.icon}${_autoRandom ? ' ' + styles['icon-active'] : ''}` }
            title="i18n"
            onClick={ autoRandomChange }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z"
              />
            </svg>
          </div>
          <div
            className={ `${styles.icon}${_loop !== 0 ? ' ' + styles['icon-active'] : ''}` }
            title="i18n"
            onClick={ loopChange }
          >
            {
              playSetting.loop === 0 ?
                (
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                    />
                  </svg>
                )
                : playSetting.loop === 1 ?
                  (
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                      />
                      <text
                        fontWeight="bold"
                        transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
                        textAnchor="start"
                        fontFamily="'Trebuchet MS', Gadget, sans-serif"
                        fontSize="24"
                        y="21.67922"
                        x="-1.13436"
                      >1</text>
                    </svg>
                  )
                  : playSetting.loop === 2 ?
                    (
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                        />
                        <text
                          fontWeight="bold"
                          transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
                          textAnchor="start"
                          fontFamily="'Trebuchet MS', Gadget, sans-serif"
                          fontSize="24"
                          y="21.67922"
                          x="-1.13436"
                        >C</text>
                      </svg>)
                    : playSetting.loop === 3 ?
                      (
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                          />
                          <text
                            fontWeight="bold"
                            transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
                            textAnchor="start"
                            fontFamily="'Trebuchet MS', Gadget, sans-serif"
                            fontSize="24"
                            y="21.67922"
                            x="-1.13436"
                          >A</text>
                        </svg>
                      )
                      : null
            }
          </div >
          <div
            className={ `${styles.icon}${_showInfo ? ' ' + styles['icon-active'] : ''}` }
            onClick={ changeShowInfo }
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M694.857143 768v73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143H365.714286q-14.857143 0-25.714286-10.857143t-10.857143-25.714286v-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143h36.571428V512h-36.571428q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V402.285714q0-14.857143 10.857143-25.714285t25.714286-10.857143h219.428571q14.857143 0 25.714286 10.857143t10.857143 25.714285v329.142857h36.571428q14.857143 0 25.714286 10.857143t10.857143 25.714286zM621.714286 109.714286v109.714285q0 14.857143-10.857143 25.714286t-25.714286 10.857143H438.857143q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V109.714286q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div >
      </div >
    </CSSTransition >
  )
}

export default Control
