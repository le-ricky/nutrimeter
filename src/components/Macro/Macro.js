import React from 'react';
import { connect } from 'react-redux';


const Macro = (props) => {
    console.log(props.macro)
    return (
        <div>
        <div className='ui segment'>Daily Caloric Intake: <span>{props.macro.dailyCalories} kcal</span></div>
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <span>Protein: </span>
                    <span>{props.macro.protein.valueGram}g</span>
                </div>
                <div className="ui segment">
                    <span>Carbs: </span>
                    <span>{props.macro.carbs.valueGram}g</span>
                </div>
                <div className="ui segment">
                    <span>Fats: </span>
                    <span>{props.macro.fats.valueGram}g</span>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        macro: state.calorieData
    }
}

export default connect(mapStateToProps)(Macro);