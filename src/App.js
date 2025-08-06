// src/App.js

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import DsaJournal from './components/DsaJournal';
import SystemDesign from './components/SystemDesign';
import Blogs from './components/Blogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WhatHappensURL from './component/Blogs/WhatHappensURL';
import ScrollToTop from './components/ScrollToTop';
// import ButtonClickBlog from './components/Blogs/ButtonClickBlog';

function App() {
  const routerBasename = process.env.NODE_ENV === 'production' && process.env.PUBLIC_URL
                         ? process.env.PUBLIC_URL
                         : '';
  return (
    <div className="App">
      <Router basename={routerBasename}> 
      {/* <Router>  */}
        <ScrollToTop /> 
        <NavBar/> 
        <main className="main-content-area"> 
          <Routes>
            <Route path="/" element={
              <>
                <Banner/>
                <Skills/>
                <Projects/>
                <DsaJournal/>
                <SystemDesign/>
                <Blogs/>
              </>
            } />
            
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<Blogs/>} />

      


          </Routes>
        </main>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;