import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardDetailComponent } from './bank-card-detail.component';

describe('BankCardDetailComponent', () => {
  let component: BankCardDetailComponent;
  let fixture: ComponentFixture<BankCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
