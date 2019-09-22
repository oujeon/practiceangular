import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // 하위에 전달할 자료구조
  mainData: any = {
    menuName: ""
  };
  // 하위에 전달할 함수모음
  mainFunction = {
    //
    onMenu() {
      this.onMenu();
    }
  }
  // constructor
  constructor() {
    // bind
    let me = this.mainFunction;
    me.onMenu = me.onMenu.bind(this);
  }
  //////////////////////////////////////////////////////////////////////////////
  // life cycle function
  //////////////////////////////////////////////////////////////////////////////
  // ngOnInit
  ngOnInit() {
  }
  // ngOnChanges
  ngOnChanges() {
  }
  // ngDoCheck
  ngDoCheck() {
  }
  // ngAfterContentInit
  ngAfterContentInit() {
  }
  // ngAfterContentChecked
  ngAfterContentChecked() {
  }
  // ngAfterViewInit
  ngAfterViewInit() {
  }
  // ngAfterViewChecked
  ngAfterViewChecked() {
  }
  // ngOnDestroy
  ngOnDestroy() {
  }
  //////////////////////////////////////////////////////////////////////////////
  // User defined function
  //////////////////////////////////////////////////////////////////////////////
  // onView1 
  onMenu(menuName) {
    this.mainData.menuName = menuName;
  }
}
