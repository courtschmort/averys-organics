import React from "react";
import PropTypes from 'prop-types';
import './Event.css';

function Event(props){
  return (
    <tr>
    <td>{props.day}</td>
    <td>{props.location}</td>
    <td>{props.hours}</td>
    <td>{props.booth}</td>
    </tr>
  );
}

Event.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Event;
