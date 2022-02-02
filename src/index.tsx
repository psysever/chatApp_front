import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <Switch>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Switch>
    </Router>
  </HelmetProvider>,

  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
