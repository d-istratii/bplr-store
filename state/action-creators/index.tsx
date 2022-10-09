import { ActionType } from "state/action-types";
import { Dispatch } from "redux";
import { Action } from "state/actions";

export const itemAddition = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_ITEM,
            payload: amount,
        });
    };
};

export const itemDeduction = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_ITEM,
            payload: amount,
        });
    };
};

export const cartInitialization = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET_CART,
        });
    };
};
