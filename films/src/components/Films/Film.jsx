import React from 'react'

export default function Film({film}) {

  return (
    <div className='film'>
        <img src={film.Poster}></img>
        <p>{film.Title}</p>
        <p>{film.Released}</p>
        <p>{film.Plot}</p>
    </div>
  )
}
