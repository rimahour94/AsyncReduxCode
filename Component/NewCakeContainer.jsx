import React, { useState } from 'react';
import { buyCake } from '../Redux';
import { connect } from "react-redux"
function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <React.Fragment>
            <h3>Number of Cakes After Buying {props.numOfCakes}</h3>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <button onClick={() => { props.buyCake(number) }}>Buy Ckae {number}</button>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);