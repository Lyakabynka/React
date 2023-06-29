import React, { useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'

//reserved word - children
export default function ThemeProvider({children}){

    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
