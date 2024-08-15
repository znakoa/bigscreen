import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter} from 'react-router-dom'
//BrowserRouter,
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
