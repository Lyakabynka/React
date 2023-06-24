import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Films from './components/Films/Films';
import ThemeProvider from './providers/ThemeProvider';
import FavoriteFilmsProvider from './providers/FavoriteFilmsProvider';
import FavoriteFilms from './components/Films/FavoriteFilms';

function App() {
  return (
    <>
      <ThemeProvider>
        <FavoriteFilmsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/films" element={<Films />}>
              {/* todo */}
            </Route>
          </Routes>
          <FavoriteFilms/>
        </FavoriteFilmsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
