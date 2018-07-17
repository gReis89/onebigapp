import React from 'react'
import { Link } from "react-router-dom"
import './MenuButton.css'

export const MenuButton = ({path, name, match}) => (
  <div className={'menu-button' + (match.path === path ? ' active' : '')}>
    <Link to={path}>{name}</Link>
  </div>
)

export default MenuButton
