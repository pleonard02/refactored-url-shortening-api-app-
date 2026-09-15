import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics'

function App() {


  return (
    <>
      <Header />

      <main>
        <Hero />
        <UrlShortener />
        <Statistics />
      </main>
    </>
  );
}

export default App
