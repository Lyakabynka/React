import React, { useState } from 'react'
import Film from './Film'

export default function FilmList({films}) {

    return (
        <div>
            {films.map(film =>
                <Film key={film.id} name={film.name} year={film.year} image={film.image} 
                    director={film.director} description={film.description}/>)}
        </div>
    )
}
