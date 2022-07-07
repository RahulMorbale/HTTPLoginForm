import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  myname: any;
  msg: any
  constructor() { }
  ngOnInit(): void {
    // console.log(history.state)
    this.myname = history.state.data
  }
}
