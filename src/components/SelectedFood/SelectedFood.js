import React from 'react';

const SelectedFood = (props) => {
    // const { label, data} = props.item;
    console.log(props.item)
    let food = "No Food Items Selected"
    if(props.item) {
        food = (
            <div className="ui segment">
                {props.item.label}
                Total Kcal:{props.item.data.calories}
                Protein: {Math.round(props.item.data.totalNutrients.PROCNT.quantity)} {props.item.data.totalNutrients.PROCNT.unit}
                Carbs: {Math.round(props.item.data.totalNutrients.CHOCDF.quantity)} {props.item.data.totalNutrients.CHOCDF.unit}
                Fat: {Math.round(props.item.data.totalNutrients.FAT.quantity)} {props.item.data.totalNutrients.FAT.unit}
                <span>
                    <button className="ui primary button">Add Food</button>
                </span>
            </div>
        )
    }
    return (
        <div className="ui segment">
            {food}
        </div>
        
    ); 
}

export default SelectedFood;