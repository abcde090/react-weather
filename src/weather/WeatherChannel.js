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
            unit:'C',
            curCity:"Melbourne"
        };

    }

    componentDidMount() {
        fetchCurrent(this.state.curCity).then(data => {
            this.setState({condition: data});
        })

       /*  fetchForecast(this.state.curCity).then(data => {
            this.setState({forecast: data});
        }) */
    }

    switchTemp () {
        console.log(this.state);
        if (this.state.unit === 'C') {
            this.setState({unit:'F'});
        } else {
            this.setState({unit:'C'});
        }
    }

    changeCity(event) {
        console.log(event.target.value);
        this.setState({curCity: event.target.value});
    }

    search() {
        fetchCurrent(this.state.curCity).then(data => {
            this.setState({condition: data});
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

