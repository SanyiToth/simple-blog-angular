import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let reverse = '';
    for (let char = value.length - 1; char >= 0; char--) {
      reverse += value[char];
    }
    return reverse;
  }

}
