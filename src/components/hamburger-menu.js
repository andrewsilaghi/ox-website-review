import React from "react"
import { slide as Menu } from 'react-burger-menu'

export default () => ( 
    <Menu right>
    <a id="home" className="menu-item" href="/">Home</a>
    <a className="menu-item--small" href="/lululemon">Lululemon</a>
    <a className="menu-item--small" href="/core">CORE</a>
    <a className="menu-item--small" href="/tyndale">Tyndale</a>
    <a id="about" className="menu-item" href="/about-us">About</a>

    
  </Menu>  
  )