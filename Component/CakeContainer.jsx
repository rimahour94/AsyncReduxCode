import React from 'react';
import { buyCake } from '../Redux/';
import { connect } from 'react-redux';
function cakeContainer(props) {



    return (
        <div>
            <h3>Number Of Cakes-{props.numOfCakes}</h3>
            <h3>Number Of IceCream-{props.numOfIceCream}</h3>

            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}


const mapStateToProps = (props) => {

    return {
        numOfCakes: props.cake.numOfCakes,
        numOfIceCream: props.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);