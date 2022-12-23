import {applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";


// Creating store for the redux.


export const store = createStore(reducer,{},applyMiddleware(thunk))