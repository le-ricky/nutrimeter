import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.edamam.com/api/food-database/v2/parser'
});

