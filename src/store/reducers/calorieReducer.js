import * as actionType from '../actions/actionTypes';

const INITIAL_STATE = {
    dailyCalories: null,
    protein: {
        valuePercentage: null,
        valueCalorie: null,
        valueGram: null
    },
    carbs:{
        valuePercentage: null,
        valueCalorie: null,
        valueGram: null
    },
    fats:{
        valuePercentage: null,
        valueCalorie: null,
        valueGram: null
    },
}

export const calorieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.UPDATE_CALORIE:
            return {
                ...state,
                dailyCalories: action.payload
            }
        case 'UPDATE_CALORIE_BREAKOUT':
            return {
                ...state,
                protein: {
                    valuePercentage: parseFloat(action.payload.protein)/100,
                    valueCalorie: Math.round(parseFloat(action.payload.protein)/100 * state.dailyCalories),
                    valueGram: Math.round(parseFloat(action.payload.protein)/100 * state.dailyCalories / 4),
                },
                carbs: {
                    valuePercentage: parseFloat(action.payload.carb)/100,
                    valueCalorie: Math.round(parseFloat(action.payload.carb)/100 * state.dailyCalories),
                    valueGram: Math.round(parseFloat(action.payload.carb)/100 * state.dailyCalories /4)
                },
                fats: {
                    valuePercentage: parseFloat(action.payload.fat)/100,
                    valueCalories: Math.round(parseFloat(action.payload.fat)/100 * state.dailyCalories),
                    valueGram: Math.round(parseFloat(action.payload.fat)/100 * state.dailyCalories / 9)
                },
            }
    }   
    
    return state;
};