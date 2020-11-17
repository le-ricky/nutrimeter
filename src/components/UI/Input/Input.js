import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


import { storeUserInput } from '../../../store/actions';

const required = value => value ? undefined : 'Required'
const validate = value => value && isNaN(Number(value)) ? 'Must be a Number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
  const minValue1000 = minValue(1000)
// const validate = formValues => {
//     const errors = {};

//     if (formValues && isNaN(Number(formValues))) {
//         errors.calorieIntake = 'Must Enter a Number'
//     }
//     return errors
// }

class Input extends React.Component {
    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderCalorieInput= ({ input, label, meta }) => {
        
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={label} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.calorie(formValues.calorieIntake);
        console.log(`Formvalue ${formValues.calorieIntake}`);
        console.log(formValues.calorieIntake);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field 
                    name="calorieIntake" 
                    type="number" 
                    label="Daily Caloric Intake"
                    component={this.renderCalorieInput}
                    validate={[validate, minValue1000]} 
                    />
                <button className="ui button primary" disabled={ pristine }>Submit</button>
            </form>
        );
    }

    /*return(
        <div className="ui segment">
            <form className="ui form">

                 <div className="field">
                    <label>Daily Caloric Intake (DCI)</label>
                    <input placeholder="Daily Caloric Intake" />
                    <button>Enter</button>
                </div>
                <div className="equal width fields">
                    <div className="field">
                        <label for ="form-input-fat-intake" >Percentage of DCI from Fat</label>
                        <div className="ui input">
                            <input type="text" placeholder="% from Fat" id="form-input-fat-intake" />
                        </div>
                    </div>
                    <div className="field">
                        <label for ="form-input-carb-intake" >Percentage of DCI from Carbohydrate</label>
                        <div className="ui input">
                            <input type="text" placeholder="% from Fat" id="form-input-carb-intake" />
                        </div>
                    </div>
                    <div className="field">
                        <label for ="form-input-protein-intake" >Percentage of DCI from Protein</label>
                        <div className="ui input">
                            <input type="text" placeholder="% from Fat" id="form-input-Protein-intake" />
                        </div>
                    </div>
                </div> 
            </form>
        </div>
    );*/
}

// const validate = formValues => {
//     const error = {}
//     console.log(formValues)
//     if (!formValues) {
//         error.calorieIntake = 'Must Enter a Number'
//     }
//     return error;
// }

const warn = formValues => {
    
    const warnings = {}
    if (formValues < 1000) {
        warnings.calorieIntake = 'Very Low Daily Caloric Intake'
    }
    return warnings;
}

// const validate = formValues => {
//     const error = {};

//     if(isNaN(formValues)) {
//         error.calorieIntake = 'You must enter a number'
//     }

//     console.log(error)
//     return error;
// }


const mapDispatchToProps = dispatch => ({
    calorie: input => dispatch(storeUserInput(input))
})

Input = connect(null, mapDispatchToProps)(Input)

export default reduxForm({
    form: 'calorieIntake'
})(Input);