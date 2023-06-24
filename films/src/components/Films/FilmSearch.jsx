import React, { useState } from 'react'
import './Styles/Film.css'
import { filmService } from '../../services/filmService';
import { useSearchParams } from 'react-router-dom';

const options = [
    {
        label: "Movie",
        value: "movie"
    },
    {
        label: "Series",
        value: "series"
    },
    {
        label: "Episode",
        value: "episode"
    }
]

export default function FilmSearch({ setFilms }) {


    const [search, setSearch] = useSearchParams();
    const [title,setTitle] = useState(search.get('title' ?? ''));
    const [type,setType] = useState(search.get('type') ?? options[0].value);

    const displayUsers = async () => {
        const data =
            await filmService.getFilms(title, type);

        setFilms(data);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearch({title: title, type: type});
        await displayUsers();
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type="text" onInput={(e) => {setTitle(e.target.value)}} 
                defaultValue={search.get('title')} />

            <select onInput={(e) => {setType(e.target.value)}} 
                defaultValue={search.get('type')}>

                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}

            </select>
            <button type="submit">Search</button>
        </form>
    )
}
