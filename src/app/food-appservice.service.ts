import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodAppserviceService {
  userLoggedin:boolean;
  countries:any;
  constructor(private httpClient: HttpClient) {
    this.userLoggedin=false;
   }
   getallCountries(){
    return this.httpClient.get("https://restcountries.com/v2/all");
   }
   setuserLoggedin() {
    this.userLoggedin=true;
   }
   getuserLoggedin(){
    return this.userLoggedin;
   }
 

   //cruds on user
   getAllUsers(){
    return this.httpClient.get("/FoodApp/rcr1/users/custums");
   }
   createNewUser(formData:any){
    return this.httpClient.post("/FoodApp/rcr1/users/custums",formData);
   }
   updateUser(formData:any){
    return this.httpClient.put("/FoodApp/rcr1/users/custums",formData);
   }
   deleteUser(id:any){
    return this.httpClient.delete("/FoodApp/rcr1/users/custums"+ `/${id}`);
   }
   getUserById(id:any){
    return this.httpClient.get("/FoodApp/rcr1/users/custums1"+ `/${id}`);
   }

   // cruds on food

   getAllFood() {
    return this.httpClient.get('/FoodApp/rcr1/users/foods');
  }
   createFood(food: any){
    return this.httpClient.post('/FoodApp/rcr1/users/foods', food);
  }
  updateFood(food: any){
    return this.httpClient.put('/FoodApp/rcr1/users/foods', food);
  }
  deleteFood(id: any){
    return this.httpClient.delete('/FoodApp/rcr1/users/foods'+ `/${id}`);
    }
   getFoodByID(id: any){
    return this.httpClient.get('/FoodApp/rcr1/users/foods1'+ `/${id}`);
}

//curds on food-Category

getAllFoodCategory() {
  return this.httpClient.get('/FoodApp/rcr1/users/fcs');
}

createFoodCategory(foodcategory: any) {
  return this.httpClient.post('/FoodApp/rcr1/users/fcs', foodcategory);
}

getFoodCategoryId(id: any){
  return this.httpClient.get('/FoodApp/rcr1/users/fcs1' + `/${id}`);
}

updateFoodCategory(foodcategory: any){
  return this.httpClient.put('/FoodApp/rcr1/users/fcs', foodcategory);
}

deleteFoodCategory(id: any){
  return this.httpClient.delete('/FoodApp/rcr1/users/fcs' + `/${id}`);
}

//cruds on cart

getAllCart() {
  return this.httpClient.get('/FoodApp/rcr1/users/cartss');
}

createCart(cart: any){
  return this.httpClient.post('/FoodApp/rcr1/users/cartss', cart);
}

updateCart(id: any, cart: any){
  return this.httpClient.put('/FoodApp/rcr1/users/cartss', cart);
}

deleteCart(id: any){
  return this.httpClient.delete('/FoodApp/rcr1/users/cartss' + `/${id}`);
  }



  


}
