import {RECEIVE_ISIN} from "../actions/index";

const data = (state = [], action) => {

    switch (action.type) {

        case RECEIVE_ISIN:
            return action.data;

        default:
            return state;
    }

};

export default data;