import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Nav from './Nav';

import {fetchCurrent, fetchForecast} from '../api/weather';


export default class WeatherChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: {
                city: '',
                humidity: '',
                windSpeed: '',
                windDirection: '',
                temp: {C:'', F:''}
              },
              forecast:
              [{
                day:'', time:'', high:{C:'', F:''}, low:{C:'', F:''}
              }, 
              {
                day:'', time:'', high:{C:'', F:''}, low:{C:'', F:''}
              },
              {
                day:'', time:'', high:{C:'', F:''}, low:{C:'', F:''}
              }
            ],
            unit:'C',
            curCity:"Enter city name"
        };

    }

    
   
    switchTemp () {

        if (this.state.unit === 'C') {
            this.setState({unit:'F'});
        } else {
            this.setState({unit:'C'});
        }
    }

    changeCity(event) {

        this.setState({curCity: event.target.value});
    }

    search() {
        fetchCurrent(this.state.curCity).then(data => {
            this.setState({condition: data});
        })
        fetchForecast(this.state.curCity).then(data => {
            this.setState({forecast: data});
        })  
}
// here change all states 
    render() { 
        const {condition, forecast, unit, curCity} = this.state;
        return (
            <React.Fragment>
            <Nav curCity = {curCity} 
            changeCity = {
            event => this.changeCity(event)} 
            unit = {unit} 
            switchTemp = {() => {this.switchTemp()}} 
            search = {() => this.search()} />
            <main>
            <CityCondition data={condition} unit = {unit} />
            <Forecast data={forecast} unit = {unit} />
            </main>
            </React.Fragment>
        )

    }    

}

