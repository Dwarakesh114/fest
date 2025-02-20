import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalEvents from './components/TechnicalEvents';
import Events from './components/Events';
import Artists from './components/Artists';
import About from './components/About';
import Tickets from './components/Tickets';
import RegistrationForm from './components/Register';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <TechnicalEvents />
      <Events />
      <Artists />
      <RegistrationForm id="register"/>
      <Tickets />
    </div>
  );
}

export default App;