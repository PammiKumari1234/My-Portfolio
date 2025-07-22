import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import DsaJournal from './components/DsaJournal';
import SystemDesign from './components/SystemDesign';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <DsaJournal/>
      <SystemDesign/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
