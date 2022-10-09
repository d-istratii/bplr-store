import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";

const initialState = 0;

const cartReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return state + action.payload;
        case ActionType.REMOVE_ITEM:
            return state - action.payload;
        case ActionType.RESET_CART:
            return initialState;
        default:
            return state;
    }
};

export default cartReducer;
