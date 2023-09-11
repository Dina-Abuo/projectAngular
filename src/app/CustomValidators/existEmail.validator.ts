
import { AbstractControl,   ValidationErrors, ValidatorFn } from '@angular/forms';

//  sync validators function

export function existEmailValidtor(existEmails: string[]): ValidatorFn {
  /* it's not recommented to use this implementation
    to send the email list,
    INSTEAD,use async  validator to call API that takes the email value and returns boolean
  */
  return (control: AbstractControl): ValidationErrors | null => {
    let emailValue: string = control.value;
    if (emailValue.length == 0 && control.untouched)
      return null;
    console.log(existEmails)
    let validationError = { 'existEmail': { 'value': emailValue } }
    let foundEmail = existEmails.includes(emailValue);
    return foundEmail ? validationError : null;

    // return (emailValue.includes('@')) ? null : validationError;
  }
}
