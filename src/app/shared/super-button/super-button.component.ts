import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-super-button',
  templateUrl: './super-button.component.html',
  styleUrls: ['./super-button.component.css']
})
export class SuperButtonComponent implements OnInit {

  @Input() label = '';
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
