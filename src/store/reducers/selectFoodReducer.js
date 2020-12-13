import * as actionType from '../actions';

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

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'SELECT_FOOD':
            return  {
                ...state,
                label: action.payload.label,
                foodId: action.payload.foodId
                // kcal: action.payload.data.calories,
                // protein: {
                //     amount: Math.round(action.payload.data.totalNutrients.PROCNT.quantity),
                //     measure: action.payload.data.totalNutrients.PROCNT.unit
                // },
                // carbs: {
                //     amount: Math.round(action.payload.data.totalNutrients.CHOCDF.quantity),
                //     measure: action.payload.data.totalNutrients.CHOCDF.unit
                // },
                // fats: {
                //     amount: Math.round(action.payload.data.totalNutrients.FAT.quantity),
                //     measure: action.payload.data.totalNutrients.FAT.unit
                // }
            };

        default:
            return state;
    }
}