import React, { useState } from 'react'
import FavoriteFilmsContext from '../components/contexts/FavoriteFilmsContext'

export default function FavoriteFilmsProvider({children}) {
    
    const [favoriteFilms, setFavoriteFilms] = useState([]);

    return (
        <FavoriteFilmsContext.Provider value={{favoriteFilms, setFavoriteFilms}}>
            {children}
        </FavoriteFilmsContext.Provider>
    )
}
