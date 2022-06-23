import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { nationalityControl, useAllowedValuesValidator } from '../form-controls';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reactive-user-form',
  templateUrl: './reactive-user-form.component.html',
  styleUrls: ['./reactive-user-form.component.css']
})
export class ReactiveUserFormComponent implements OnInit {

  private maxAddressLength = 2;

  userForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    age: new UntypedFormControl(18, [
      Validators.required,
      Validators.min(18)
    ]),
    nationality: nationalityControl(),
    currentCountry: new UntypedFormControl('', [
      useAllowedValuesValidator(['it', 'fr'])
    ]),
    yearsOfExperience: new UntypedFormControl(0, [
      useAllowedValuesValidator([1, 2, 3, 4, 5, 6])
    ]),

    addresses: new UntypedFormArray([], [
      Validators.maxLength(this.maxAddressLength)
    ]),
  });

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    if (this._auth.isLoggedIn) {
      this.userForm.patchValue({
        name: 'pippo',
      })
    }
  }

  addAddress() {
    const addresses = this.addressesControl;
    addresses.push(new UntypedFormGroup({
      street: new UntypedFormControl(''),
      zipCode: new UntypedFormControl(0),
      city: new UntypedFormControl('')
    }));
  }

  createUser() {
    const value = this.userForm.value;
    const isFormValid = this.userForm.valid;

    console.log(value);
    console.log(isFormValid);

    // const nameValue = this.userForm.get('name')?.value;
  }

  removeAddress(c: UntypedFormGroup) {
    const index = this.addressFormGroups.indexOf(c);
    this.addressesControl.removeAt(index);
  }

  canAddAddress() {
    return this.addressFormGroups.length >= this.maxAddressLength;
  }

  get nameControl() {
    return this.userForm.get('name');
  }

  get addressesControl(): UntypedFormArray {
    return this.userForm.get('addresses') as UntypedFormArray;
  }

  get addressFormGroups(): UntypedFormGroup[] {
    return this.addressesControl.controls.map((c) => c as UntypedFormGroup);
  }

}