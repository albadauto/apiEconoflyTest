import React from 'react'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Router  } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './pages/Login/Index'
import Main from './pages/Main/Index'


export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
    </BrowserRouter>
  )
}
