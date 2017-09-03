import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // DO NOT state.push !!! we don't manipulate state like this
            // return state.concat([action.payload.data]); is one way, as concat returns NEW array, the newer is:
            return [ action.payload.data, ...state ]; // gives [city, city, city], not eg [city, [city, city]]
    }
    return state;
}