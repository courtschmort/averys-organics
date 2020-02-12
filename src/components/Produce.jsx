import React from "react";
import PropTypes from 'prop-types';
import './Produce.css';

function Produce(props){
  var produceStyles = {
    padding: "0 16px 16px 16px",
    margin: "16px",
    width: "200px",
    height: "200px",
    overflow: "auto",
    backgroundColor: "#3E363F",
    color: "#FFFCE8"
  }
  return (
    <div>
      <h4>{props.month}</h4>
      <div style={produceStyles} className="produce-month">
        {props.selection.map(item => <p>{item}</p>)}
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
}

export default Produce;
