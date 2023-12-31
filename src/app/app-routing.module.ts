import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddfoodcategoryComponent } from './addfoodcategory/addfoodcategory.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { SearchComponent } from './search/search.component';
import { UsercartComponent } from './usercart/usercart.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"user",component:UserComponent},
  {path:"addUser",component:AdduserComponent},
  {path:"addFood",component:AddfoodComponent},
  {path:"addFC",component:AddfoodcategoryComponent},
  {path:"search",component:SearchComponent},
  {path:"register",component:RegisterComponent},
  {path:"usercart",component:UsercartComponent},
  {path:"menu",component:MenuComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
