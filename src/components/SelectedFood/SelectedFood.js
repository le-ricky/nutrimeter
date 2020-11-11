import React from 'react';

import { connect } from 'react-redux';
import { addFood } from '../../store/actions';

const SelectedFood = (props) => {
    let food = "No Food Items Selected"
    if(props.selectFood.label) {
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
                    <button className="ui primary button">Add Food</button>
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

export default connect(mapStateToProps)(SelectedFood);