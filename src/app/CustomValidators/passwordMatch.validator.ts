import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// cross field custom validators
export function passwordMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let passwordControl = control.get('password');
    let confirmPasswordControl = control.get('confirmPassword');
    if (!passwordControl || !confirmPasswordControl || !passwordControl.value || !confirmPasswordControl.value)
      return null;
    let valdationError = { 'UnmatchedPassword': { 'password': passwordControl.value, 'confirm': confirmPasswordControl?.value } }
    return (passwordControl.value == confirmPasswordControl.value) ? null : valdationError
  }
}
