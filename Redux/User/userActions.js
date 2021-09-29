import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_FETCH_FAILURE } from "./userTypes"
import axios from "axios"
export const fetchUserRequest = () => {
    return {
        type: USER_FETCH_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: USER_FETCH_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: USER_FETCH_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {

        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // save user
                const users = response.data
                dispatch(fetchUserSuccess(users))

            })
            .catch((error) => {
                //save error
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))

            })

    }
}