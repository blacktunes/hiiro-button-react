import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/transition.scss'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import Footer from './views/Footer'
import Header from './views/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
