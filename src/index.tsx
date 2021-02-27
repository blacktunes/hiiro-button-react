import React from 'react'
import ReactDOM from 'react-dom'
import './assets/script/i18n'
import './assets/styles/transition.scss'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import Control from './views/Control'
import Footer from './views/Footer'
import Header from './views/Header'
import Home from './views/Home'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div style={ { minHeight: 'calc(100vh - 48px - 78px)' } }>
      <Home />
    </div>
    <Control />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
