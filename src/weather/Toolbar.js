import React from 'react';
import { connect } from "react-redux";
import {CHANGE_TEMP_UNIT} from "../reducers/action";

class Toolbar extends React.Component {

   
    render() {
        const {switchTempUnit, unit} = this.props;
    return (
       
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={
            () => unit === 'C'?switchTempUnit('F') : switchTempUnit('C')}>
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
}

// inject fn to dispatch action to update store state
const mapDispatchToProps = dispatch => ({
    switchTempUnit: (unit) => dispatch({
      type: CHANGE_TEMP_UNIT,
      tempUnit: unit
  }) 
})
  //
export default connect(
  null,
   mapDispatchToProps
  )(Toolbar);