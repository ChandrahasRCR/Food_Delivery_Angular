import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"user",component:UserComponent},
  {path:"addUser",component:AdduserComponent},
  {path:"addFood",component:AdduserComponent},
  {path:"addFC",component:AdduserComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
