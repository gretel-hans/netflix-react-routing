import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNavbar from './components/MyNavbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Gallerie from './components/Gallerie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import TvShows from './components/TvShows';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <MyNavbar />
        

        <main>
          <Routes>
            <Route path='/movieDetails/:idFilm' element={<MovieDetails />} />
            <Route path='/' element={<>
              <Hero/>
              <Gallerie nomeSerie='Fast&Furious' titoloRiga='Trending Now' />
              <Gallerie nomeSerie='Lucifer' titoloRiga='Watch It Again' />
              <Gallerie nomeSerie='Lupin' titoloRiga='New Releases' />
            </>} />
            <Route path='/tvShows' element={<TvShows />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
