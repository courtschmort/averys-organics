import React from "react";
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';
import './Body.css';

function Body(){
  return (
    <div>
      <MarketSchedule />
      <AvailableProduce />
    </div>
  );
}

export default Body;
