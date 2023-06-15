import React from 'react'
import films from './Films';

export default function FilmSearch({ setFilms }) {

    const filter = (e) => {
        const filteredFilms = films.filter(film =>
            film.name.toLowerCase().includes(e.target.value.toLowerCase()));

        setFilms(filteredFilms);
    }

    return (
        <input type='text' onChange={filter} />
    )
}