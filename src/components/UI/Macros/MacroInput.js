import React from 'react';
import { Field, reduxForm } from 'redux-form'

class Macros extends React.Component {
    renderError = ({ error }) => {
        if( error ) {
            return <div>{error}</div>
        }
    }

    renderInput = ({input, label, meta}) => {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <select {...input}>
                        <option></option>
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                        <option value="30">30%</option>
                        <option value="35">35%</option>
                        <option value="40">40%</option>
                        <option value="45">45%</option>
                        <option value="50">50%</option>
                        <option value="55">55%</option>
                        <option value="60">60%</option>
                        <option value="65">65%</option>
                        <option value="70">70%</option>
                        <option value="75">75%</option>
                        <option value="80">80%</option>
                        <option value="85">85%</option>
                        <option value="90">90%</option>
                        <option value="95">95%</option>
                        <option value="100">100%</option>
                    </select>
                </div>
                {this.renderError(meta)}
            </div>
        )
    }


    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        //console.log(this.props)
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="ui form">
                    <div>
                        <Field name="protien" component={this.renderInput} label="Protein" />
                        <Field name="carb" component={this.renderInput} label="Carbohydrates" />
                        <Field name="fat" component={this.renderInput} label="Fats" />
                    </div>
                    <button className="ui button primary" type="submit" disabled={ pristine }>Submit</button>
                </div>
            </form>
        );
    }
}


const validate = (formValues) => {
    const error = {}
    //let sum = parseInt(formValues.fat) + parseInt(formValues.carb) + parseInt(formValues.protein)

    let sum = 0;
    for(let el in formValues) {
        if( formValues.hasOwnProperty( el ) ) {
            sum += parseFloat( formValues[el] );
        }
    }


    if( sum !== 100) {
        error.fat = "Total must equal 100%"
    } 
    console.log(sum)
    return error
}

export default reduxForm({
    form: 'Macros',
    validate
})(Macros);
