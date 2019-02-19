import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Nav from './Nav';
import { connect } from "react-redux";
import Toolbar from './Toolbar';


class WeatherChannelRedux extends React.Component {


    // here change all states 
    render() {
        const {condition, forecast, unit} = this.props;
        return (
            <React.Fragment>
            <Toolbar />
            <main>
            <CityCondition data={condition} unit = {unit} />
            <Forecast data={forecast} unit = {unit} />
            </main>
            </React.Fragment>
        );
    }
}
    
const mapStateToProps = (state) => {
        return {
          condition: state.weatherData.condition,
          forecast: state.weatherData.forecast,
          curCity:  state.options.curCity,
          unit: state.options.tempUnit
    };
};



export default connect(mapStateToProps, null)(WeatherChannelRedux);



