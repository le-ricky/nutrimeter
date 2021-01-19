import React from 'react';
import styles from './Dashboard.module.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import { connect } from 'react-redux';

import FoodList from '../../components/FoodList/FoodList';
import SelectedFood from '../../components/SelectedFood/SelectedFood';
import Macro from '../../components/Macro/Macro';
import { selectFood } from '../../store/actions';
import CalorieCount from '../../components/CalorieCount/CalorieCount';
import Settings from '../Settings/Settings';
import SearchBar from '../../components/SearchBar/SearchBar';
import AddedFoods from '../../components/AddedFoods/AddedFoods'


class Dashboard extends React.Component {
    state = { 
        results: [],
        selectedFood: {
            Label: null,
            Id: null
        }
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
        //const fdcId = '782108'
        //const url = `https://api.nal.usda.gov/fdc/v1/food/782108?api_key=${APP_KEY}`;
        const response = await axios.get(url). then (res => this.setState({ results: res.data.hints }));
        console.log(this.state)
        console.log(this.state.results)
        // console.log(this.state.selected)
        // console.log(response2)
    }

    onRenderResults = () => {
        const foodResults = this.state.results !== [] ? this.state.results.map(item =>
            <FoodList
                key={uuidv4()}
                item={item}
                //clicked={() => this.props.selectFood(item)}
            />
            ): null;
            return foodResults;
    }

    onRenderAddedFoods = () => {
        let addedFoodList = this.props.foodMarcos.length > 0 ? this.props.foodMarcos.map(food =>
            <AddedFoods
                fooditem={food} />
            )
            : <span>No Food Here</span> ;
        return addedFoodList;
    }

    // onSelect = async (label, foodId) => {
    //     this.setState({
    //         selectedFood: {
    //             label: label,
    //             id: foodId
    //         }
    //     })
    //     console.log(this.state)

    //     // const APP_KEY = 'b9b609424e71e7bcb962fdcadc970ff3'; //EDAMAM
    //     // const APP_ID = '3cc6bdb6';
    //     // const response2 = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
    //     //     "ingredients": [{
    //     //         "quantity": 100,
    //     //         "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
    //     //         "foodId": foodId
    //     //     }]
    //     // }).then(res => {
    //     //     const data = res.data;
    //     //     console.log(data)
    //     //     this.props.selectFood({ data, foodId})
    //     //     })
    //     // // then(res => this.setState({ selected: {data:res.data, label: label }}));
    //     // // console.log(this.state.selected)
    // }
    
    render() {
        return (
            <div className="ui horizontal segments">
                <div className="ui segment">
                    {/* <Modal>
                        <SelectedFood selectedItem={ this.state.selectedFood }/>
                    </Modal> */}
                    
                    <div className="food__data">
                        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
                        Found {this.state.results.length} recipes
                        <div className={styles.container}>
                            {this.onRenderResults()}
                        </div>    
                    </div>
                </div>
                <div className="ui segments">
                    <div className="profile">
                        <div className="ui segment">
                        <Macro
                            consumedKcal={this.state.consumedKcal}
                        />
                        </div>
                    </div>
                    <div className={styles.addedFoods}>
                        <div className="ui raised segments">
                            {this.onRenderAddedFoods()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        foodMarcos: state.foodMacros,
    }
}

export default connect(mapStateToProps, { selectFood })(Dashboard);