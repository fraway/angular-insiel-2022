import { Component, OnInit } from '@angular/core';
import { AuthNgrxService } from 'src/app/services/auth-ngrx.service';
import { AuthRxService } from 'src/app/services/auth-rx.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthNgrxService) { }

  ngOnInit(): void {
  }

  login() {
    this._auth.login();
  }

}
