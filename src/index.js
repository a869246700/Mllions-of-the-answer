import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './view/App'
import Dati from './view/Dati'
import Result from './view/Result'

import './assets/css/global.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/dati" exact component={Dati} />
      <Route path="/result" exact component={Result} />
    </Router>
  </Provider>, 
  document.getElementById('root'))