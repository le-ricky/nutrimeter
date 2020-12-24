import React from 'react';
import styles from './FoodList.module.css';
import 'semantic-ui-css/semantic.min.css'
import ModalExampleSize from '../../components/UI/Modal/Modal';

import { connect } from 'react-redux';

import { selectFood } from '../../store/actions';

const FoodList = (props) => {
    const { label, foodId, image } = props.item.food;
    console.log(props.item);
    console.log(props.item.food);

    return (
        <div>
            <div className={styles.segment}>
                <div className={styles.content}>
                    {/* <div className={styles.content__img}>
                        <img className={styles.image} src={image} alternative={label} />
                    </div> */}
                    <div className={styles.label}>
                        <h2>{label}</h2>
                        <ModalExampleSize
                            food={props.item.food}
                        />    
                    </div>  
                </div>
                
            </div>
                
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectFood: (item) => dispatch(selectFood(item))
    }
}

export default connect(null, mapDispatchToProps)(FoodList);

