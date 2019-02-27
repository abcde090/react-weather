 const initialState = {
  condition: {
    city: 'Brisbane, Au',
    humidity: 62,
    windSpeed: '9',
    windDirection: 'NS',
    temp: {C:26, F:72}
  },
  forecast:[
  {
    day:'Fri', time:'13:00', high:{C:26, F:72}, low:{C:20, F:61}
  }, 
  {
    day:'Fri', time:'16:00', high:{C:36, F:82}, low:{C:24, F:71}
  },
  {
    day:'Fri', time:'19:00', high:{C:46, F:92}, low:{C:28, F:81}
  }]
 };


const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        // case FETCH_WEATHER_SUCCESS:
        // return new state
        default:
        return state;
    }
};

export default weatherReducer;