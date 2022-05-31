import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();

  constructor(private client: HttpClient) { }

  ngOnInit(): void {

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((query) => this.client.get(`https://api.myprod.com/v1/autocomplete/${query}`).pipe(
        catchError((e) => {
          return of([])
        }),
        tap()
      )),
      // catchError((e) => of([1, 2, 3]))
    ).subscribe({
      next: (items) => {
      },
      error: (err) => {
        //
      }
    })

    this.client.get('...').subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {

      }
    })

  }

}
