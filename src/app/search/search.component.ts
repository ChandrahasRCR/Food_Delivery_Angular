import { Component } from '@angular/core';
import { FoodAppserviceService } from '../food-appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent   {
 
  Foods:any;
  food:any;
  searchText:any;
 
  constructor(private stuServ:FoodAppserviceService,private route:Router){
    
  }
ngOnInit(): void {
  
  
}

Search(){
   this.stuServ.getFoodBYNAME(this.searchText).subscribe((ur:any)=>{
   this.searchText=ur;
    console.log(this.searchText);
  })

}
}