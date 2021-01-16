import React from 'react';
import { connect } from 'react-redux';

const AddedFoods = (props) => {
    console.log(props)

    return (
        <div className="segment ui">
            Title: {props.fooditem.ingredients[0].parsed[0].food}
            Kcal: {props.fooditem.calories}
            Amount: {props.fooditem.totalWeight}{props.fooditem.ingredients[0].parsed[0].measure}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        foodDiary: state.foodMacros
    }
}

export default connect(mapStateToProps)(AddedFoods);