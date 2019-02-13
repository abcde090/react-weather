import React from 'react';
import umbrella from '../images/icon-umberella.png';
import wind from '../images/icon-wind.png';
import compass from '../images/icon-compass.png';

const Style = {
    textAlign: "center",
    fontSize: "14px"
}

/**
 * 
 * @param {*} props 
 * data = {
 * city: 'Brisbane, Au',
 * humidity: 62,
 * windSpeed: '9',
 * windDirection: 'NS',
 * temp: {C:26, F:72}
 * }
 */
export default function CityCondition(props) {
    const {data,unit} = props;
    return (
        <section className="weather-condition">
        <div className="weather-condition__location">{data.city}</div>
        <div style={{ textAlign: "center",fontSize: "14px"}}>Clear</div>
        <div className="weather-condition__temp">{`${data.temp[unit]} ${unit}`}</div>
        <div className="weather-condition__desc">
          <div>
            <img src={umbrella} />
            <span className="citem">{data.humidity} %</span>
          </div>
          <div>
            <img src={wind} /> <span className="citem">{data.windSpeed} km/h</span>
          </div>
          <div>
            <img src={compass} /> <span className="citem">{data.windDirection}</span>
          </div>
        </div>
      </section>
    );
}