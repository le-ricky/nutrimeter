import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';

import { connect } from 'react-redux';
import SelectedFood from '../../SelectedFood/SelectedFood';
import { foodMacros, selectFood } from '../../../store/actions';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const ModalExampleSize = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  const onSelect = async foodId => {
    const APP_KEY = 'b9b609424e71e7bcb962fdcadc970ff3'; //EDAMAM
    const APP_ID = '3cc6bdb6';
    const response = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
        "ingredients": [{
            "quantity": 100,
            "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            "foodId": foodId
        }]
    }).then(res => {props.foodMacros(res.data)})}

    const buttonHandler = () => {
      dispatch({ type: 'open', size: 'large' });
      props.selectFood(props.food);
      onSelect(props.food.foodId)
    } 

  return (
    <>
      <Button floated='right' onClick={() => buttonHandler()}>
        Select
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>TITLE</Modal.Header>
        <Modal.Content>
          <SelectedFood />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}


const mapDispatchToProps = dispatch => ({
  selectFood: (item) => dispatch(selectFood(item)),
  foodMacros: (item) => dispatch(foodMacros(item))
})

export default connect(null, mapDispatchToProps)(ModalExampleSize)
