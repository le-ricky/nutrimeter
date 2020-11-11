import * as actionType from './actionTypes';


export const storeUserInput = (payload) => {
    return {
        type: actionType.UPDATE_CALORIE,
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

export const addFood = () => {
    return {
        type: actionType.ADD_FOOD,
        payload: payload
    }
}