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
                humidity: '',
                windSpeed: '',
                windDirection: 'N',
                temp: {C:"N/A", F:"N/A"}
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
              },
              {
                day:'', time:'', high:{C:'', F:''}, low:{C:'', F:''}
              },
              {
                day:'', time:'', high:{C:'', F:''}, low:{C:'', F:''}
              }
            ],
            unit:'C',
            item: 5,
            curCountry:"country code",
            curCity:"city name",
            button1: " switch-active",
            button2: " "
        };

    }
    
    componentDidMount() {
        fetchCurrent(this.state.curCity, this.state.curCountry).then(data => {
            this.setState({condition: data});
        }) 
    }

    switchTemp () {

        if (this.state.unit === 'C') {
            this.setState({unit:'F'});
        } else {
            this.setState({unit:'C'});
        }
    }

    changeNumItem1() {
      this.setState({item:10, button2:" switch-active", button1:" "});
    }
        

    changeNumItem2() {
        this.setState({item:5, button2: " ", button1:" switch-active"});
    }

    changeCity(event) {

        this.setState({curCity: event.target.value});
    }

    changeCurrentCountry(event) {
        this.setState({curCountry: event.target.value});
    }

    search() {

        fetchForecast(this.state.curCity, this.state.curCountry).then(data => {
            this.setState({forecast: data});
        }) 
        fetchCurrent(this.state.curCity, this.state.curCountry).then(data => {
            this.setState({condition: data});
        }) 
    
}
// here change all states 
    render() { 
        const {condition, forecast, unit, item, curCity, curCountry, button1, button2} = this.state;
        return (
            <React.Fragment>
            <Nav curCity = {curCity} curCountry = {curCountry}
            changeCity = {
            event => this.changeCity(event)} 
            changeCountry = {event => this.changeCurrentCountry(event)}
            unit = {unit} 
            switchTemp = {() => {this.switchTemp()}} 
            search = {() => this.search()} />
            <main>
            <CityCondition data={condition} unit = {unit} />
            <Forecast data={forecast} unit = {unit} item = {item} 
            changeNumItem1 = {() => this.changeNumItem1()} 
            changeNumItem2 = {() => this.changeNumItem2()}
            button1 = {button1} button2 = {button2} />
            </main>
            </React.Fragment>
        )

    }    

}

