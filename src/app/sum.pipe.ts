import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: number[], initialValue: number = 0): number {
    let result = 0;
    if (initialValue !== 0) {
      result = initialValue;
    }
    value.forEach((item) => {
      result += item;
    });
    return result;
  }

}
