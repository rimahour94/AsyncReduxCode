import React from 'react';
import { buyIceCream } from '../Redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h4>Number Of Ice Creams {props.numOfIceCream}</h4>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    );
}

const mapPropsToState = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(IceCreamContainer);