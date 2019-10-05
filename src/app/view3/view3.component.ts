import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  name = 'Angular 5';
  userList = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  onHttpclient() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {
        this.userList = data;

        console.log(data);

      });
  }
}

