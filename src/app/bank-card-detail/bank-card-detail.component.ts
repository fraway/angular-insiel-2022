import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-card-detail',
  templateUrl: './bank-card-detail.component.html',
  styleUrls: ['./bank-card-detail.component.css']
})
export class BankCardDetailComponent implements OnInit {
  id = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
    });

    // this.id = this.route.snapshot.paramMap.get('id')!;
  }

}
