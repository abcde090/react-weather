import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Nav from './Nav';


export default class WeatherChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: {
                city: 'Brisbane, Au',
                humidity: 62,
                windSpeed: '9',
                windDirection: 'NS',
                temp: {C:26, F:72}
              },
              forecast:
              [{
                day:'Fri', time:'13:00', high:{C:26, F:72}, low:{C:20, F:61}
              }, 
              {
                day:'Fri', time:'16:00', high:{C:36, F:82}, low:{C:24, F:71}
              },
              {
                day:'Fri', time:'19:00', high:{C:46, F:92}, low:{C:28, F:81}
              }
            ],
            unit:'F',
            curCity:""
        };

    }

    switchTemp () {
        if (this.state.unit === 'C') {
            this.setState({unit:'F'});
        } else {
            this.setState({unit:'C'});
        }
    }
// here change all states 
    render() {
        const {condition, forecast, unit} = this.state;
        return (
            <React.Fragment>
            <Nav unit = {unit} switchTemp = {() => {this.switchTemp()}} />
            <main>
            <CityCondition data={condition} unit = {unit} />
            <Forecast data={forecast} unit = {unit} />
            </main>
            </React.Fragment>
        )

    }    

}

