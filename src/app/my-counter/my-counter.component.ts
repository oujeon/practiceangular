import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { Increment, Decrement, Reset } from './counter.actions';

import { Action } from '@ngrx/store';
// action type
// export enum ActionTypes {
//     Increment = 'Increment',
//     Decrement = '[Counter Component] Decrement',
//     Reset = '[Counter Component] Reset',
// }
// action
// export class Increment implements Action {
//     readonly type = 'Increment';
//     constructor() {
//         console.log("Increment ");
//     }
// }
// export class Decrement implements Action {
//     readonly type = '[Counter Component] Decrement';
//     constructor() {
//         console.log("Decrement ");
//     }
// }
// export class Reset implements Action {
//     readonly type = '[Counter Component] Reset';
//     constructor() {
//         console.log("Reset ");
//     }
// }
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {
    // 부모에서 자식에 보낸 자료와 함수
    @Input() mainData: any;
    @Input() mainFunction: any;
    ngOnInit() {
    }
    count$: Observable<number>;
    constructor(private store: Store<{ count: number }>) {

        console.log("store : %o", store);

        this.count$ = store.pipe(select('count'));
    }
    increment() {
        this.store.dispatch({ type: 'Increment' });
    }
    decrement() {
        this.store.dispatch({ type: '[Counter Component] Decrement' });
    }
    reset() {
        this.store.dispatch({ type: '[Counter Component] Reset' });
    }



}
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/