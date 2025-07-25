// src/App.js

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'; // Still commented out, just noting
import { Footer } from './components/Footer';
import DsaJournal from './components/DsaJournal';
import SystemDesign from './components/SystemDesign';
import Blogs from './components/Blogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatHappensURL from './components/Blogs/WhatHappensURL';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router> 
        <ScrollToTop /> {/* Good to keep this at the top inside Router */}

        {/* Place NavBar *outside* Routes so it's always present */}
        <NavBar/> 
        
        {/* This `main` wrapper is for content that changes with routes */}
        <main className="main-content-area"> 
          <Routes>
            {/* The home route content */}
            <Route path="/" element={
              <>
                <Banner/>
                <Skills/>
                <Projects/>
                <DsaJournal/>
                <SystemDesign/>
                <Blogs/>
                {/* <Contact/> */}
              </>
            } />
            
            {/* The main blogs listing page */}
            <Route path="/blogs" element={<Blogs />} />
            
            {/* A specific blog post page */}
            <Route path="/blogs/:slug" element={<WhatHappensURL />} />
          </Routes>
        </main>
        
        {/* Place Footer *outside* Routes so it's always present */}
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;