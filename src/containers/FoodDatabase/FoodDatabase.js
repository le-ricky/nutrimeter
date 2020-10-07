import React from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';

class FoodData extends React.Component {
    // onSearchSubmit(term) {
    //     axios.get('https://api.nal.usda.gov/fdc/v1/food'), {
    //         params: { query: term },
    //         headers: { Authorization: 'X-Api-Key: Bvvc1EewOD4vxPmPWvLjsABUeBlaZT8IIGZqiVg1'}
    //     }
    // }
    
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default FoodData;