import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import rootReducer from "./rootReducer"
import HomeIndex from './components/home'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path='/' component={HomeIndex}/>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

