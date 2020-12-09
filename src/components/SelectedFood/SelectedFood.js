import React from 'react';

import { connect } from 'react-redux';
import { addFood } from '../../store/actions';

const SelectedFood = (props) => {
    let food = "No Food Items Selected"
    if(props.selectFood.label) {
        console.log(props.selectFood)
        food = (
            <div className="ui segment">
                <div className="ui segment">
                    {props.selectFood.label}
                    Kcal: {props.selectFood.kcal}{props.selectFood.measurement}
                    Protein: {props.selectFood.protein.amount}
                    Carbs: {props.selectFood.carbs.amount}
                    Fats: {props.selectFood.fats.amount}
                </div>
                <span>
                    <button className="ui primary button" onClick={() =>props.addFood(props.selectFood)}>Add Food</button>
                </span>
            </div>
        );
    }
    return (
        <div>
            {food}
        </div>
    ); 
}

const mapStateToProps = state => {
    return {
        selectFood: state.selectFood
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFood: food => dispatch(addFood(food))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFood);