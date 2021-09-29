import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from '../Redux';




function HooksCakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <div>
                <h4>Number of Cakes {numOfCakes}</h4>
                <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
            </div>
        </React.Fragment>
    );
}

export default HooksCakeContainer;