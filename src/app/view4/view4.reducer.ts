import { Action } from '@ngrx/store';
import { ActionTypes } from './view4.actions';
import { View4Model } from './view4.model';
//
//export const initialState = 0;

//
export function counterReducer(state: View4Model[] = [], action) {
    switch (action.type) {
        case "ADD_COIN":

            console.log([...state, action.payload]);

            return [...state, action.payload];
        case ActionTypes.Decrement:
            return state;
        case ActionTypes.Reset:
            return 0;
        default:
            return state;
    }
}
//
export function add(state) {
    console.log("state : %o", state);
    return (state);
}
