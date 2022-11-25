import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: any, skip?: number): any {
    let newStr = '';
    skip = skip ? skip : 0;
    for (let i = 0; i < value.length; i++) {
      newStr += (value[i] == ' ' || i >= value.length - skip) ? value[i] : '*';
    }
    return newStr;
  }

}
