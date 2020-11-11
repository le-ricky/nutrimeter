import React from 'react';
import styles from './FoodList.module.css';

const FoodList = (props) => {
    const { label, foodId, image } = props.item.food;
    //console.log(props.item.food.label);

    return (
        <div>
            <div className={styles.segment} onClick={() => props.clicked( label, foodId )}>
                <div className={styles.content}>
                    <div className={styles.content__img}>
                        <img className={styles.image} src={image} alternative={label} />
                    </div>
                    <div className={styles.label}>
                        <h2>{label}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodList;

