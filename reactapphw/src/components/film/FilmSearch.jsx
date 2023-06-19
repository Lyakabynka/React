import React from 'react'
import filmsSource from './Films';

export default function FilmSearch({ setFilms }) {

    const filter = (e) => {
        const filteredFilms = filmsSource.filter(film =>
            film.name.toLowerCase().includes(e.target.value.toLowerCase()));
        
        setFilms(filteredFilms);
    }

    return (
        <input type='text' onChange={filter} />
    )
}