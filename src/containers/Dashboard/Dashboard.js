import React from 'react';
import styles from './Dashboard.module.css';
import CalorieCount from '../../components/CalorieCount/CalorieCount';
import Settings from '../Settings/Settings';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import FoodList from '../../components/FoodList/FoodList';
import {v4 as uuidv4} from 'uuid';
import SelectedFood from '../../components/SelectedFood/SelectedFood';
import Macro from '../../components/Macro/Marco';

class Dashboard extends React.Component {
    state = { 
        results: [],
        selected: null
    };
    onSearchSubmit = async (term) => {
        const APP_KEY = 'b9b609424e71e7bcb962fdcadc970ff3'; //EDAMAM
        const APP_ID = '3cc6bdb6';
        const query = term;
        const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        // USDA const APP_KEY = 'hTo2baOjWyjAARC6dKBGYlZNKIRukqVsHeQt1fpJ';
        //const APP_ID = '3cc6bdb6';
        //const dataType = "Survey (FNDDS)"
        //const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${APP_KEY}&query=${term}&dataType=${dataType}&foodPortions`;
        const fdcId = '782108'
        //const url = `https://api.nal.usda.gov/fdc/v1/food/782108?api_key=${APP_KEY}`;
        const response = await axios.get(url). then (res => this.setState({ results: res.data.hints }));
        console.log(this.state)
        
        

        console.log(this.state.results)
        // console.log(this.state.selected)
        
        // console.log(response2)
    }

    onRenderResults = () => {
        const food = this.state.results !== [] ? this.state.results.map(item => 
        <FoodList
            key={uuidv4()}
            item={item}
            clicked={() => this.onSelect(item.food.label, item.food.foodId)}
            />) 
            : null;
        return food; 
    }

    onSelect = async (label, foodId) => {
        const APP_KEY = 'b9b609424e71e7bcb962fdcadc970ff3'; //EDAMAM
        const APP_ID = '3cc6bdb6';
        const response2 = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
            "ingredients": [{
                "quantity": 1,
                "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                "foodId": foodId
            }]
        }).then(res => this.setState({ selected: {data:res.data, label: label }}));
        console.log(this.state.selected.data.calories)
    }
    
    render() {
        return (
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <SelectedFood item={ this.state.selected }/>
                    <div className="food__data">
                        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
                        Found {this.state.results.length} recipes
                        <div className={styles.container}>
                            {this.onRenderResults()}
                        </div>
                        
                    </div>
                </div>
                <div className="ui segment">
                    <div className="profile">
                        <div className="ui segment">
                        <Macro />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;