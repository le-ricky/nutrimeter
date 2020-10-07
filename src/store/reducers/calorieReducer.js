// const initialState = {
//     dailyCalories: null,
//     fat: null,
//     carbs: null,
//     protein: null
// }

export const calorieReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CALORIE':
            return {
                ...state,
                calorieData: 6000
            }
        case 'UPDATE_CALORIE_BREAKOUT':
            return {
                ...state
            }
    }   
    
    return state;
};