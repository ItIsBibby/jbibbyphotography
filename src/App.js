import { Routes, Route } from "react-router-dom";
import logo from './img/logo.svg';
import { 
  louvre_paris,
  mwnt_cliffs,
  mwnt_peak,
  new_quay_fishing,
  sacre_coeur_paris,
  sidmouth_cliffs,
  whitby_fishing,
  whitby_harbour
} from './img/index'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Profile from './components/Profile';

const carouselImages = [
  mwnt_cliffs,
  mwnt_peak,
  new_quay_fishing,
  sidmouth_cliffs
];

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Routes>
        <Route exact path="/" element={<Gallery carouselImages={carouselImages}/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
