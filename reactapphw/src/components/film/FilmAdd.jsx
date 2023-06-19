import React from 'react'
import { v4 as uuidv4 } from "uuid"

export default function FilmAdd({films, setFilms}) {


    const AddFilm = (name, year, image, director, description) => {
        let newFilm = {
            id: uuidv4(),
            name: name,
            year: year,
            image: image,
            director: director,
            description: description
        }

        setFilms([...films, newFilm]);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        AddFilm(e.target[0].value,
                e.target[1].value,
                e.target[2].value,
                e.target[3].value,
                e.target[4].value);
    }

  return (
    <>
        <form onSubmit={submitHandler}>
            <input type='text' defaultValue={'Name'} /> <br />
            <input type='number' defaultValue={0} /> <br />
            <input type='text' defaultValue={'Image'} /> <br />
            <input type='text' defaultValue={'Director'} /> <br />
            <input type='text' defaultValue={'Description'} /> <br />
            <input type='submit' value={'submit'}/>
        </form>
    </>
  )
}
