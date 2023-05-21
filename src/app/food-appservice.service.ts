import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodAppserviceService {

user:any;
getuser(){
  return this.user;
}
setuser(email:string){
  this.getallUserData(email).subscribe((u:any)=>{
    this.user=u;
    console.log(this.user);
    
  })
}

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
   getallUserData(email:String){
return this.httpClient.get(`/FoodApp/rcr1/users/custums4/${email}`);
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
   getIdByEmail(email:any){
    return this.httpClient.get("/FoodApp/rcr1/users/custums2"+ `/${email}`);
   }
   getIdByPassword(password:any){
    return this.httpClient.get("/FoodApp/rcr1/users/custums3"+ `/${password}`);
   }

   // cruds on food

   getAllFood() {
    return this.httpClient.get('/FoodApp/rcr1/users/foods');
  }
  getFoodImage(id:number){
    return this.httpClient.get("/FoodApp/rcr1/users/foodsimage"+ `/${id}`)
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
    return this.httpClient.get('/FoodApp/rcr1/users/foods'+ `/${id}`);
}
getFoodBYNAME(name:any){
  return this.httpClient.get('/FoodApp/rcr1/users/foods1'+ `/${name}`);
}
getFoodByCategory(name:any) {
  return this.httpClient.get('/FoodApp/rcr1/users/foods1/category'+ `/${name}`);
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
getCartByID(id:any){
return this.httpClient.get('/FoodApp/rcr1/users/cartss' + `/${id}`);
}
createCart(cart: any){
  return this.httpClient.post('/FoodApp/rcr1/users/cartss', cart);
}

updateCart(id: any){
  return this.httpClient.put('/FoodApp/rcr1/users/cartss', id);
}

deleteCart(id: any){
  return this.httpClient.delete('/FoodApp/rcr1/users/cartss' + `/${id}`);
  }
// deleteCartbyfoodid(id:any){
//   return this.httpClient.delete('/FoodApp/rcr1/users/carts/byfood' + `/${id}`);
// }


  


}
