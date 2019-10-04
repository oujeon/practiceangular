import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './view4.reducer';
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ count: counterReducer })
  ]
})
export class View4Module { }
