import React from 'react'
import { useState } from 'react';
import Film from './Film';
import './Styles/Film.css'
import FilmSearch from './FilmSearch';
import FilmFilter from './FilmFilter';

export default function Films() {
    
    const [films, setFilms] = useState([]);

    const [sortBy, setSortBy] = useState(() => {});
    
    return (
        <>
            <FilmSearch setFilms={setFilms}/>
            <FilmFilter setSortBy={setSortBy}/>
            <div>
                {films?.sort(sortBy).map(film => <Film key={film.imdbID} film={film}/>)}
            </div>
            
        </>
    )
}
