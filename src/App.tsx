import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />

      <main>
        <Hero />
        <UrlShortener />
        <Statistics />
      </main>

      <Footer />
    </>
  );
}

export default App;
