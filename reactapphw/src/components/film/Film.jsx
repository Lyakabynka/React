import React, { useState } from 'react'
import FilmInfo from './FilmInfo'

export default function Film({ id, name, year, image, director, description }) {
    const [showFilmInfo, setShowFilmInfo] = useState(false);

    return (
        <div>
            <img alt=':(' src={image}></img>
            <p>{name}</p>
            <p>{year}</p>
            <button value={'Show Film Info'} onClick={()=>{
                setShowFilmInfo(!showFilmInfo);
            }}>Show</button>
            {showFilmInfo && <FilmInfo director={director} description={description}
                showFilmInfo={showFilmInfo}/>}
        </div>
    )
}
