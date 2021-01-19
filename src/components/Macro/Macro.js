import React from 'react';
import { connect } from 'react-redux';
import { selectKcal, selectFat, selectProt, selectCarb } from '../../store/selectors/macros.selector';


const Macro = (props) => {
    console.log(props.macro)
    return (
        <div>
        <div className='ui segment'>
            <h3>Daily Caloric Intake</h3> 
            <p>Goal: {props.macro.dailyCalories} Kcal</p>
            <p>Remaining: {props.macro.dailyCalories - props.totalKcal } Kcal</p>
        </div>
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <h3>Protein </h3>
                    <p>Target: {props.macro.protein.valueGram}g</p>
                    <p>Remaining: {props.macro.protein.valueGram - props.totalProt}g</p>
                </div>
                <div className="ui segment">
                    <h3>Carbs </h3>
                    <p>Target: {props.macro.carbs.valueGram}g</p>
                    <p>Remaining: {props.macro.carbs.valueGram - props.totalCarb}g</p>
                </div>
                <div className="ui segment">
                    <h3>Fats </h3>
                    <p>Target: {props.macro.fats.valueGram}g</p>
                    <p>Remaining: {props.macro.fats.valueGram - props.totalFat}g</p>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        macro: state.calorieData,
        totalKcal: selectKcal(state),
        totalFat: selectFat(state),
        totalProt: selectProt(state),
        totalCarb: selectCarb(state)
    }
}

export default connect(mapStateToProps)(Macro);