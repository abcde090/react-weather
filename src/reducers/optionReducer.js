import {
    CHANGE_CITY,
    CHANGE_TEMP_UNIT
} from "./action";

const initialState = {
    curCity: "Brisbane",
    tempUnit: "F"
};

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {
                ...state,
                curCity: action.curCity
            };
        case CHANGE_TEMP_UNIT:
            return {
                ...state,
                tempUnit: action.tempUnit
            };
        default:
            return state
    }
};


export default optionsReducer;