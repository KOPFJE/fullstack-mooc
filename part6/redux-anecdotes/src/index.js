import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from './reducers/store'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
