import { USER_FETCH_FAILURE, USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from "./userTypes";

const userInitialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_FETCH_REQUEST:
            return {
                loading: true
            }

        case USER_FETCH_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case USER_FETCH_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer