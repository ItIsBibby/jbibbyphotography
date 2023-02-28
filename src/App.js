import logo from './img/logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Footer/>
    </div>
  );
}

export default App;
