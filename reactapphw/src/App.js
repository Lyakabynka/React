import './App.css';
import FilmList from './components/film/FilmList';
import FilmSearch from './components/film/FilmSearch';
import React, { useState } from 'react';
import filmsSource from './components/film/Films';
import FilmAdd from './components/film/FilmAdd';

function App() {

  const [films, setFilms] = useState(filmsSource);

  return (
    <>
      <FilmAdd films={films} setFilms={setFilms}/>
      <FilmSearch setFilms={setFilms} />
      <FilmList films={films} />
    </>
  );
}

export default App;
