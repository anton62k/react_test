import { RECEIVE_ISIN } from '../actions/index';

const texts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ISIN:
      return action.data.texts;

    default:
      return state;
  }
};

export default texts;
