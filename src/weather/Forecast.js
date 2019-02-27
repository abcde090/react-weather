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
export default class Forecast extends React.Component {

  
  
  render() {
   
    const {unit,data,item,changeNumItem1,changeNumItem2,button1,button2} = this.props;
    const newData = data.slice(0,item);
    const items = []; 
    for (let i=0; i < newData.length; i++) {
      items.push(
        <div className="weather-forecast__row">
        <span className="weather-forecast__day">{newData[i].day}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i> {newData[i].time}
        </span>
        <span className="weather-forecast__high">{newData[i].high[unit]}</span>
        <span className="weather-forecast__low">{newData[i].low[unit]}</span>
      </div>
      )
    }

 
    
    return (
        <section className="weather-forecast">
        <div className="forecast__switch">
          <button className={'forecast__switch_0'+ button1} onClick={changeNumItem2} >5 items</button>
          <button className={'forecast__switch_1'+ button2} onClick={changeNumItem1} >10 items</button>
          
        </div>
        {items}

      </section>
    );
    
  }




}
