import { RECEIVE_ISIN, REQUEST_ISIN } from '../actions/index';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_ISIN:
      return false;

    case REQUEST_ISIN:
      return true;

    default:
      return state;
  }
};

export default isFetching;
