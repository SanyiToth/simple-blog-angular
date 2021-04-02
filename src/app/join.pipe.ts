import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string[]): string {
    let result = '';
    value.forEach((item, index) => {
      index < value.length - 1 ? result += `${item}, ` : result += item;
    });
    return result;
  }

}
