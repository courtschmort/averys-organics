import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
