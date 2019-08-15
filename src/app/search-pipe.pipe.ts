import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    args = args.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(args);
        });
  }

}
