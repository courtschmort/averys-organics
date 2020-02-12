import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';
import MarketSchedule from './components/MarketSchedule';
import AvailableProduce from './components/AvailableProduce';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/marketschedule' component={MarketSchedule} />
        <Route path='/availableproduce' component={AvailableProduce} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
