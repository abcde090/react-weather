import React from 'react';

export default function Toolbox(props) {
  const {unit, switchTemp} = props;
    return (
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={
            () => unit === 'C'?switchTemp('F') : switchTemp('C')}>
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddindRight:"5px"}}>
              </i>
            <sup>&deg;</sup>{unit}
          </button>
        </div>
      </nav>
    );
}