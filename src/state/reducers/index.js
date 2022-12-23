// This will combine all the reducers

import {combineReducers} from "redux";
import blogreducer from "./blogreducer";

const reducer = combineReducers({
    blog : blogreducer

})

export default reducer;