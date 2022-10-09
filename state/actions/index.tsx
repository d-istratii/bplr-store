import { ActionType } from "../action-types/index";

interface ItemAddition {
    type: ActionType.ADD_ITEM;
    payload: number;
}

interface ItemDeduction {
    type: ActionType.REMOVE_ITEM;
    payload: number;
}

interface CartInitialization {
    type: ActionType.RESET_CART;
}

export type Action = ItemAddition | ItemDeduction | CartInitialization;
