import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankNavigationComponent } from './bank-navigation.component';

describe('BankNavigationComponent', () => {
  let component: BankNavigationComponent;
  let fixture: ComponentFixture<BankNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
