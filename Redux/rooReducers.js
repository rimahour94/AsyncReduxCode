import { combineReducers } from "redux";
import reducer from "./Cake/cakeReducer"

import iceCreamReducers from "./IceCream/iceCreamReducers";
import userReducer from "./User/userReducers";

const rootReducer = combineReducers({
    cake: reducer,
    iceCream: iceCreamReducers,
    users: userReducer
})

export default rootReducer