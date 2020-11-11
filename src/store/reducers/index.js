import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { calorieReducer } from './calorieReducer';
import authReducer from './authReducer';
import selectFoodReducer from './selectFoodReducer';

export default combineReducers({
    calorieData: calorieReducer,
    form: formReducer,
    auth: authReducer,
    selectFood: selectFoodReducer
});