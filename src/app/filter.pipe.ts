import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Fooditem: any[], filter: string): any {
    if (!filter) {
      return Fooditem;
    }

    // Apply the filter logic to the items array
    // Fooditem.filter(function(food){
      // return food.Foods.includes(filter);
      // return food.Fooditem.toLowerCase().includes(filter.toLowerCase());
    // return Foods.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return Fooditem.filter(Fooditem => Fooditem.name.toLowerCase().includes(filter.toLowerCase()));
  }
    
}

