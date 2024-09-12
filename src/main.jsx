import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Pages from './pages'
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <Pages />
</HashRouter>
  // <React.StrictMode>
  //   <Pages />
  // </React.StrictMode>
)
