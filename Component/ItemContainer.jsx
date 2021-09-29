import React from 'react';
import { connect } from "react-redux"
function ItemContainer(props) {
    return (
        <React.Fragment>
            <h4>Number oF Items {props.items}</h4>
        </React.Fragment>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        items: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer);