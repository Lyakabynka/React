import React from 'react'

export default function Film({ id, name, year, image, director, description }) {
    return (
        <div>
            <img alt=':(' src={image}></img> <br />
            <p>{name}</p> <br />
            <p>{year}</p> <br />
        </div>
    )
}
