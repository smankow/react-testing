// import logo from './logo.svg';
// import './App.css';
import './style.css'
import './boostrap/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About'
import Summary from './components/Summary';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main/>
      <About/>
      <Summary/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
