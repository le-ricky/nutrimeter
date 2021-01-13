import * as actionType from '../actions/actionTypes';

const INITIAL_STATE = []


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
            return [
                ...state,
                action.payload
                // measurement: action.payload.ingredients[0].parsed[0].measure,
                // weight: action.payload.totalWeight,
                // kcal: Math.round(action.payload.calories),
                // protein: {
                //     amount: Math.round(action.payload.totalNutrients.PROCNT.quantity),
                //     measure: action.payload.totalNutrients.PROCNT.unit
                // },
                // carbs: {
                //     amount: Math.round(action.payload.totalNutrients.CHOCDF.quantity),
                //     measure: action.payload.totalNutrients.CHOCDF.unit
                // },
                // fats: {
                //     amount: Math.round(action.payload.totalNutrients.FAT.quantity),
                //     measure: action.payload.totalNutrients.FAT.unit
                // }
            ];
        default:
            return state;
    }
}

export const updateMeasurementReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionType.UPDATE_MEASUREMENT:
            return {
                ...state,
                measurement: action.payload.measurement
            };
        default:
            return state;
    }
}

export const udpateWeightReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionType.UPDATE_WEIGHT:
            return {
                ...state,
                weight: action.payload.weight
            };
        default:
            return state;
    } 
}