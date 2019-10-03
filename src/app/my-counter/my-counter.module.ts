import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store"; ///////
// import { counterReducer } from "./counter.reducer"; ////
import { MyCounterComponent } from "./my-counter.component";///

import { Action } from '@ngrx/store';

//import { ActionTypes } from './counter.actions';
// state
const initialState = 1;
// state business
function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "Increment":
      return add(state);
    case "[Counter Component] Decrement":
      return state - 1;
    case "[Counter Component] Reset":
      return 0;
    default:
      return state;
  }
}
function add(state) {
  return state + 1;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  bootstrap: []
})
export class MyCounterModule { }
