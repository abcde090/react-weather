import React from 'react';
/**
 * 
 * @param {*} props 
 * const forecastData = [{
  day:'Fri', time:'13:00', high:{C:26, F:72}, low:{C:20, F:61}
}, 
{
  day:'Fri', time:'16:00', high:{C:26, F:72}, low:{C:20, F:61}
},
{
  day:'Fri', time:'19:00', high:{C:26, F:72}, low:{C:20, F:61}
}];
 */
export default function Forecast(props) {
    const {unit,data} = props;
    return (
        <section className="weather-forecast">
        <div className="forecast__switch">
          <button className="forecast__switch_0 switch-active">5 items</button>
          <button className="forecast__switch_1">10 items</button>
        </div>

        <div className="weather-forecast__row">
          <span className="weather-forecast__day">{data[0].day}</span>
          <span className="weather-forecast__icon">
            <i className="fa fa-clock-o"></i> {data[0].time}
          </span>
          <span className="weather-forecast__high">{data[0].high[unit]}</span>
          <span className="weather-forecast__low">{data[0].low[unit]}</span>
        </div>
        <div className="weather-forecast__row">
          <span className="weather-forecast__day">{data[1].day}</span>
          <span className="weather-forecast__icon">
            <i className="fa fa-clock-o"></i> {data[1].time}
          </span>
          <span className="weather-forecast__high">{data[1].high[unit]}</span>
          <span className="weather-forecast__low">{data[1].low[unit]}</span>
        </div>

        <div className="weather-forecast__row">
          <span className="weather-forecast__day">{data[2].day}</span>
          <span className="weather-forecast__icon">
            <i className="fa fa-clock-o"></i> {data[2].time}
          </span>
          <span className="weather-forecast__high">{data[2].high[unit]}</span>
          <span className="weather-forecast__low">{data[2].low[unit]}</span>
        </div> 
      </section>
    );
}