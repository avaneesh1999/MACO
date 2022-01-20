
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { movies } from './Components/getMovies';
import Movies from './Components/Movies';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Movies/>
    </>
  );
}

export default App;
