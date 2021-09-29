import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux"
import { fetchUser } from "../Redux/User/userActions"

function UserContainer({ userData, fetchUser }) {

    useEffect(() => {
        fetchUser()

    }, [])

    return userData.loading ? (
        <h2>Loading...</h2>) :
        userData.error ? (
            <h2>{userData.error}</h2>) :
            (
                <div>
                    {
                        userData && userData.users && userData.users.map((user, id) => <> <p key={id}>{user.name}</p>
                            <Button variant="contained" color="primary">Buy Cake</Button></>)
                    }

                </div>
            )


}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userData: state.users
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);