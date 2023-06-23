import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Films from './components/Films/Films';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/films" element={<Films/>}>
          {/* todo */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
