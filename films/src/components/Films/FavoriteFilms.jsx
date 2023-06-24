import React, { useContext } from 'react'
import FavoriteFilmsContext from '../contexts/FavoriteFilmsContext'

export default function FavoriteFilms() {

    const { favoriteFilms } = useContext(FavoriteFilmsContext);

    return (
        <div>
            {favoriteFilms.map(film=> <div>{film.Title}</div>)}
        </div>
    )
}
