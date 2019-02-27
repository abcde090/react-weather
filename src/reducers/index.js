import {combineReducers} from "redux";
import weatherReducer from "./weatherReducer";
import optionsReducer from "./optionReducer";

export default combineReducers({
    weatherData: weatherReducer,
    options: optionsReducer
});

