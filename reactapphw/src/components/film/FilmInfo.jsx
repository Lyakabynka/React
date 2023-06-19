import React from 'react'

export default function FilmInfo({director, description}) {

    return (
      <div>
          <p>{director}</p>
          <p>{description}</p>
      </div>
    )
}
