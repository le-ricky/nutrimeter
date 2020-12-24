import * as actionType from './actionTypes';


export const storeUserInput = (payload) => {
    return {
        type: actionType.UPDATE_CALORIE,
        payload: payload
    };
};

export const storeMacroInput = (payload) => {
    console.log(payload)
    return {
        type: actionType.UPDATE_CALORIE_BREAKOUT,
        payload: payload
    };
};

export const signIn = (id) => {
    return {
        type: actionType.SIGN_IN,
        payload: id
    }
}

export const signOut = () => {
    return {
        type: actionType.SIGN_OUT,
    }
}

export const selectFood = (payload) => {
    //console.log(payload)
    return {
        type: actionType.SELECT_FOOD,
        payload: payload
    }
}

export const foodMacros = (payload) => {
    console.log(payload)
    return {
        type: actionType.FOOD_MACROS,
        payload: payload
    }
}

export const addFood = (payload) => {
    //console.log(payload)
    return {
        type: actionType.ADD_FOOD,
        payload: payload
    }
}