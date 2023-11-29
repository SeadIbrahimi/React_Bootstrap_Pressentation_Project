import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Movies from './pages/Movies'
import Login from './pages/auth/Login'
import FavoriteMovies from "./pages/FavoriteMovies";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/favorites" element={<FavoriteMovies/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
