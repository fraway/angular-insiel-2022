import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name = "Default User";
  @Input() age = 18;
  @Input() nationality = "it";

  constructor() { }

  ngOnInit(): void {
  }

  isMaggiorenne() {
    return this.age >= 18;
  }

}
