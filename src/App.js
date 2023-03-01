import logo from './img/logo.svg';
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
