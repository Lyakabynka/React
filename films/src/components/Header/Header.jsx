import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';
import ThemeContext from '../contexts/ThemeContext';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FavoriteFilmsContext from '../contexts/FavoriteFilmsContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Header() {

    const { favoriteFilms } = useContext(FavoriteFilmsContext)
    const { theme, setTheme } = useContext(ThemeContext);



    return (
        <header className={theme}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/films'>Films</NavLink>
            <Box sx={{ minWidth: 120, maxWidth: 150 }} className='theme'>
                <FormControl fullWidth>
                    <InputLabel>Theme</InputLabel>
                    <Select
                        value={theme}
                        label="Theme"
                        onChange={(e)=>{setTheme(e.target.value)}}
                    >
                        <MenuItem value={'dark'}>Dark</MenuItem>
                        <MenuItem value={'light'}>Light</MenuItem>
                        <MenuItem value={'blue'}>Blue</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FavoriteIcon/>{favoriteFilms.length}
        </header>
    )
}
