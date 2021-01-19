import React from 'react';
import { connect } from 'react-redux';
import styles from './AddedFoods.module.css';

const AddedFoods = (props) => {
    console.log(props)

    return (
        <div className='segment ui'>

            <h3>{props.fooditem.ingredients[0].parsed[0].food}</h3>
            <p>
                <span>Kcal: {props.fooditem.calories} </span>
                <span>Amount: {props.fooditem.totalWeight}{props.fooditem.ingredients[0].parsed[0].measure}</span>
            </p>
            <p>
                <span>Protein: {Math.floor(props.fooditem.totalNutrients.PROCNT.quantity)}{props.fooditem.totalNutrients.PROCNT.unit} </span>
                <span>Carbs: {Math.floor(props.fooditem.totalNutrients.CHOCDF.quantity)}{props.fooditem.totalNutrients.CHOCDF.unit} </span>
                <span>Fat: {Math.floor(props.fooditem.totalNutrients.FAT.quantity)}{props.fooditem.totalNutrients.FAT.unit} </span>
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        foodDiary: state.foodMacros
    }
}

export default connect(mapStateToProps)(AddedFoods);