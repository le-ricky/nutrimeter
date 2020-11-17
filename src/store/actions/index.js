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
    return {
        type: actionType.SELECT_FOOD,
        payload: payload
    }
}