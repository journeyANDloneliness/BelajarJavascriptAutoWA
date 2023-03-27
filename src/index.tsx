import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/styles.scss";
import {koneksiSheet } from "love-utility"
await koneksiSheet("1KfdAwrSaBnJqu78dSdTEMDlzKxELU0oQ2bV0J1McLAY")


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
