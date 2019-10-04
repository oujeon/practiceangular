import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './view4.actions';
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
    count$: Observable<number>;
    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.pipe(select('count'));
    }
    increment() {
        this.store.dispatch(new Increment());
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