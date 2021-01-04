import produce from 'immer';

const INITIAL_STATE = {
    customer: {},
}

function shop(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CUSTOMER': {
            return produce(state, (draft) => {
                draft.customer = action.customer;
            })
        }
        default:
            return state;
    }
}

export default shop;