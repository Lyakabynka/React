import './App.css';
import FilmList from './components/film/FilmList';
import FilmSearch from './components/film/FilmSearch';
import React, { useState } from 'react';
import films from './components/film/Films';


function App() {

  const [filteredFilms, setFilteredFilms] = useState(films);

  return (
    <>
      <FilmSearch setFilms={setFilteredFilms} />
      <FilmList films={filteredFilms} />
    </>
  );
}

export default App;
