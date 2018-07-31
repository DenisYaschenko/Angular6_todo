import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todoList: any, filter?: any): any {
    switch (filter) {
      case ('All'):
        return todoList;
      case ('Active'):
        return todoList.filter(item => item.done === false);
      case ('Notactive'):
        return todoList.filter(item => item.done === true);
    }
  }

}
