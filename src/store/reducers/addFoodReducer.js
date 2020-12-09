import * as actionType from '../actions/actionTypes';

const INITIAL_STATE = {
    label: null,
    food: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionType.ADD_FOOD:
            return {
                ...state,
                label: action.payload.label,
                food: {
                    ...state.food,
                    measure: action.payload.measurement,
                    calorie: action.payload.kcal,
                    carbs: action.payload.carbs,
                    fats: action.payload.fats,
                    protein: action.payload.protein,
                }
            };
        default:
            return state
    };
};
