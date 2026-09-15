import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';

function App() {


  return (
    <>
      <Header />

      <main>
        <Hero />
        <UrlShortener />
      </main>
    </>
  );
}

export default App
