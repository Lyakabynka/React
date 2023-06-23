import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/films'>Films</NavLink>
        </header>
    )
}
