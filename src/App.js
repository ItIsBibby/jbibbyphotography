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
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
