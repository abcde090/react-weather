import React from 'react';

export default function Nav(props) {
  const {unit, switchTemp, curCity, changeCity, search} = props;
    return (
        <nav>
        <div style={{flex:1}}>
        <input className="search-input" value={curCity} onChange={changeCity}/>
          <button className="search-btn" onClick={search}><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={switchTemp}>
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