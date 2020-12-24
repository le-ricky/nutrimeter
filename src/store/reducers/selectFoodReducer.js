import * as actionType from '../actions/actionTypes';

const INITIAL_STATE = {
    label: null,
    foodId: null,
    measurement: 'g',
    kcal: null,
    protein: {
        amount: null,
        measure: null
    },
    carbs: {
        amount: null,
        measure: null
    },
    fats: {
        amount: null,
        measure: null
    }
}

export const selectFoodReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionType.SELECT_FOOD:
            return  {
                ...state,
                label: action.payload.label,
                foodId: action.payload.foodId
            };

        default:
            return state;
    }
}

export const foodMacrosReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionType.FOOD_MACROS:
            return {
                ...state,
                kcal: Math.round(action.payload.calories),
                protein: {
                    amount: Math.round(action.payload.totalNutrients.PROCNT.quantity),
                    measure: action.payload.totalNutrients.PROCNT.unit
                },
                carbs: {
                    amount: Math.round(action.payload.totalNutrients.CHOCDF.quantity),
                    measure: action.payload.totalNutrients.CHOCDF.unit
                },
                fats: {
                    amount: Math.round(action.payload.totalNutrients.FAT.quantity),
                    measure: action.payload.totalNutrients.FAT.unit
                }
            };
        default:
            return state;
    }
}