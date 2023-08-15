import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIDToDate'
})
export class NationalIDToDatePipe implements PipeTransform {

  transform(value: string): string {
    let firstNumber = +value.slice(0, 1)
    if (firstNumber == 2) {
      return `${value.slice(3, 5)}-${value.slice(5, 7)}-${1900 + (+value.slice(1, 3))}`;
    }
    else if (firstNumber == 3) {
      return `${value.slice(3, 5)}-${value.slice(5, 7)}-${2000 + (+value.slice(1, 3))}`;
    }
    else
      return ' '
  }

}
