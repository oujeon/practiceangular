import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { Parent1Component } from './view1/parent1.component';
import { Child1Component } from './view1/child1.component';
import { MenuComponent } from './menu/menu.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    Parent1Component,
    Child1Component,
    MenuComponent,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
