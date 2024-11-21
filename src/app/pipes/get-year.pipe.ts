import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getYear',
  standalone: true
})
export class GetYearPipe implements PipeTransform {

  transform(value: Date): number {
    if(value instanceof Date){
      return value.getFullYear();
    }
    return -1;
  }

}
