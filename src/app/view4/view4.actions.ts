import { Action } from '@ngrx/store';
//
export enum ActionTypes {
    Increment = 'Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset',
}
// Increment
export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}
// Decrement
export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}
// Reset
export class Reset implements Action {
    readonly type = ActionTypes.Reset;
} 