import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCommunicationsComponent } from './bank-communications.component';

describe('BankCommunicationsComponent', () => {
  let component: BankCommunicationsComponent;
  let fixture: ComponentFixture<BankCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCommunicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
