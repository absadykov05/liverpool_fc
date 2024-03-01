import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className = 'body'>
      <div className = 'header'>
        <NavLink className = 'link' to = {'/matches'}>Matches</NavLink>
        <NavLink className = 'link' to = {'/news'}>News</NavLink>
        <NavLink className = 'link' to = {'/team'}>Team</NavLink>
        <NavLink className = 'link' to = {'/shop'}>Shop</NavLink>
      </div>
      <div className='main_body'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
