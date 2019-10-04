import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './view4.actions';

import { View4Model } from './view4.model';

export interface View4AppState {
    readonly view4model: View4Model[];
}

@Component({
    selector: 'app-view4',
    templateUrl: './view4.component.html',
    styleUrls: ['./view4.component.css'],
})
export class View4Component implements OnInit {
    // 부모에서 자식에 보낸 자료와 함수
    @Input() mainData: any;
    @Input() mainFunction: any;
    ngOnInit() {
    }
    count: Observable<View4Model[]>;
    constructor(private store: Store<View4AppState>) {

        this.count = this.store.select(state => state.view4model);

    }
    // constructor(private store: Store<AppState>) { }

    // addCoin(name, price) {
    //   this.store.dispatch({
    //     type: 'ADD_COIN',
    //     payload: <Blockchain> {
    //       name: name,
    //       price: price
    //     }
    //   });
    // }


    //
    increment() {
        this.store.dispatch({
            type: 'ADD_COIN',
            payload: <View4Model>{
                counter: 1
            }
        });
    }
    decrement() {
        this.store.dispatch(new Decrement());
    }
    reset() {
        this.store.dispatch(new Reset());
    }
}
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/