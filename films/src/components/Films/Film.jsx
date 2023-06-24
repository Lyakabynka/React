import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import FavoriteFilmsContext from '../contexts/FavoriteFilmsContext';

export default function Film({ film }) {

  const { favoriteFilms, setFavoriteFilms } = useContext(FavoriteFilmsContext);
  const { theme } = useContext(ThemeContext);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (favorited === true) {
      setFavoriteFilms([...favoriteFilms, film])
    }
    else{
      setFavoriteFilms(favoriteFilms.filter(favFilm=>favFilm.imdbID !== film.imdbID))
    }
  }, [favorited])

  return (
    <div className={`film ${theme}`}>
      <img src={film.Poster}></img>
      <p>{film.Title}</p>
      <p>{film.Year}</p>
      <p>{film.Plot}</p>
      <Button style={{ float: 'right' }} onClick={() => { console.log('TODO'); }}>Extend</Button>
      {favorited === false
        ? <FavoriteBorderIcon onClick={() => { setFavorited(true) }} />
        : <FavoriteIcon onClick={() => { setFavorited(false) }} />}
    </div>
  )
}
