import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'trucate'
})
export class TrucatePipe implements PipeTransform {

  transform(value: string, length: number = 100): unknown {
    return `${value.slice(0, length - 1)}...`;
  }

}
