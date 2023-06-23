import React, { useState } from 'react'
import './Styles/Film.css'
import { filmService } from '../../services/filmService';
import { useParams, useSearchParams } from 'react-router-dom';

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

    const displayUsers = async () => {
        const data =
            await filmService.getFilms(search.get('title') ?? '', search.get('type') ?? 'movie');

        setFilms(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        displayUsers();
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>

            <input type="text" onInput={(e) => {
                    setSearch({ title: e.target.value, type: search.get('type') ?? 'movie' })}} 
                value={search.get('title')} />

            <select onInput={(e) => {
                    setSearch({ title: search.get('title') ?? '', type: e.target.value })}} 
                value={search.get('type')}>

                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}

            </select>
            <button type="submit">Search</button>
        </form>
    )
}
