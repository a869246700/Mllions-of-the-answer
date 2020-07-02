import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './view/App'
import './assets/css/global.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>, 
  document.getElementById('root'))