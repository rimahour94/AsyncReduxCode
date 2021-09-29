import { BUY_ICECREAM } from "./iceCreamTypes";

const initialStateIceCream = {
    numOfIceCream: 40
}

const iceCreamReducers = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }



        default:
            return state
    }
}

export default iceCreamReducers