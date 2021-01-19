import React from 'react';
import './SelectedFood.module.scss';
import axios from 'axios';

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addFood, foodMacros } from '../../store/actions';



class SelectedFood extends React.Component {

    onSelect = async foodId => {
        const APP_KEY = 'b9b609424e71e7bcb962fdcadc970ff3'; //EDAMAM
        const APP_ID = '3cc6bdb6';
        let value = this.props.form.SelectedFood ? parseInt(this.props.form.SelectedFood.values.amount) : 100;
        console.log(foodId)
        const response = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
            "ingredients": [{
                "quantity": value,
                "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                "foodId": foodId
            }]
        }).then(res => {this.props.foodMacros(res.data)})
    } 
    
    render() {
        //const { label, id } = this.props.selectedItem
        //let food = "No Food Items Selected";

        // console.log(label);
        // console.log(id);


        return (
            <div>
                <div className="ui segment">
                    {/* <div className="ui segment">
                        Kcal: {this.props.foodMacros.kcal}
                        Protein:{this.props.foodMacros.protein.amount}{this.props.foodMacros.protein.measure}
                        Carbs:{this.props.foodMacros.carbs.amount}{this.props.foodMacros.protein.measure}
                        Fats:{this.props.foodMacros.fats.amount}{this.props.foodMacros.protein.measure}
                    </div> */}
                    <div className="ui form">
                        <div className="fields">
                            <div className="three wide field">
                                <label>Amount</label>
                                <Field name="amount" component="input" type="text" placeholder="100"/>
                            </div>
                            <div className="three wide field">
                                <label>Measure Unit</label>
                                <Field name="measure" component="select">
                                    <option value="gram">gram</option>
                                    <option value="oz">oz</option>
                                </Field>
                            </div>
                        </div>
                    </div>
                    <span>
                        <button className="ui primary button" onClick={() => this.onSelect(this.props.selectFood.foodId)}>Add Food</button>
                    </span>
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        selectFood: state.selectFood,
        foodMacros: state.foodMacros,
        form: state.form
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFood: food => dispatch(addFood(food)),
        foodMacros: food =>dispatch(foodMacros(food))
    }
}

const Selected =  connect(mapStateToProps, mapDispatchToProps)(SelectedFood);

export default reduxForm({
    form: 'SelectedFood'
})(Selected);