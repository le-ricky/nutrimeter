import React from 'react';
import { connect } from 'react-redux';

const AddedFoods = (props) => {
    console.log(props)
    return (
        <div className="segment ui">
            Title: {}
            Kcal: {props.fooditem.calories}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        foodDiary: state.foodMacros
    }
}

export default connect(mapStateToProps)(AddedFoods);