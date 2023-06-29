import React, { useContext } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      {theme}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/counter'>Counter</NavLink>
      <NavLink to='/users'>Users</NavLink>

      { theme === 'dark' ? <LightModeIcon onClick={changeTheme} /> : <DarkModeIcon  onClick={changeTheme}/> }
    </header>
  )
}
