import React from 'react';
import Header from './Component/header.js';
import Hero from './Component/Hero.js';
import Updates from './Component/Updates.js';
import Notes from './Component/Notes.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Footer from './Component/Footer.js';
function App() {
  return (
    <> 
    <Header />
    <main className='main' >
      < Hero />
      < Updates />
      < Notes />
      < About />
      < Contact />
    </main>
      < Footer />
    </>
    
  );
}

export default App;
