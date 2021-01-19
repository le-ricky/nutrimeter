import { createSelector } from 'reselect';


const selectMacros = state => state.foodMacros;

export const selectKcal = createSelector(
    [selectMacros],
    foodMacros => foodMacros.reduce((consumedKcal, foodItem) => consumedKcal + foodItem.calories, 0)
);

export const selectFat = createSelector(
    [selectMacros],
    foodMacros => foodMacros.reduce((consumedFat, foodItem) => consumedFat + Math.floor(foodItem.totalNutrients.FAT.quantity), 0)
);

export const selectProt = createSelector(
    [selectMacros],
    foodMacros => foodMacros.reduce((totalProt, foodItem) => totalProt + Math.floor(foodItem.totalNutrients.PROCNT.quantity), 0)
);

export const selectCarb = createSelector(
    [selectMacros],
    foodMacros => foodMacros.reduce((totalCarb, foodItem) => totalCarb + Math.floor(foodItem.totalNutrients.CHOCDF.quantity), 0)
);