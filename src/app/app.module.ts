import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from "@syncfusion/ej2-angular-navigations";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { AddfoodcategoryComponent } from './addfoodcategory/addfoodcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    LoginComponent, 
    HeaderComponent,
    HomeComponent,
    UserComponent,
    AdduserComponent,
    AddfoodComponent,
    AddfoodcategoryComponent
  ],
  

  

  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
