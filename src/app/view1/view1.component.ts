import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  // 부모에서 자식에 보낸 자료와 함수
  @Input() mainData: any;
  @Input() mainFunction: any;
  constructor() { }

  ngOnInit() {
  }

}
