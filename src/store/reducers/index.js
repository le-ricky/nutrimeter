import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { calorieReducer } from './calorieReducer';
import authReducer from './authReducer';
import selectFoodReducer from './selectFoodReducer';
import addFoodReducer from './addFoodReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['calorieData', 'form', 'selectFood']
}

const rootReducer = combineReducers({
    calorieData: calorieReducer,
    form: formReducer,
    auth: authReducer,
    selectFood: selectFoodReducer,
    addedFoods: addFoodReducer
});

export default persistReducer(persistConfig, rootReducer);