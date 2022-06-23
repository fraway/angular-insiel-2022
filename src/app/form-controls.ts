import { AbstractControl, FormControl, UntypedFormControl, ValidationErrors } from "@angular/forms";

export const nationalityControl = () => new FormControl('', [
  useAllowedValuesValidator(['it', 'en', 'fr', 'de', 'ch'])
]);

export function useAllowedValuesValidator<T>(allowedValues: T[]) {
  return function allowedValuesValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as T;

    if (!allowedValues.includes(value)) {
      return {
        'valueChecker': {
          allowedValues: allowedValues,
          actualValue: value
        }
      };
    }

    return null;
  }
}
