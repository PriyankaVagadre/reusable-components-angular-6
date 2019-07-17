import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ReadQRCodesComponent } from './read-qr-codes/read-qr-codes.component';
import { ButtonComponent } from './UI-generic/button/button.component';
import { LayoutsComponent } from './UI-generic/layouts/layouts.component';
import { NavbarsComponent } from './UI-generic/navbars/navbars.component';
import { ListComponent } from './UI-generic/list/list.component';
import { LoginComponent } from './UI-generic/login/login.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : "button",
    component : ButtonComponent
  },
  {
    path : "layouts",
    component : LayoutsComponent
  },
  {
    path : "top-navbar",
    component : NavbarsComponent
  },
  {
    path : "list",
    component : ListComponent
  },
  {
    path : "login-layout",
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingList = [
  HomeComponent ,
  QRCodeGeneratorComponent,
  ReadQRCodesComponent ,
  ButtonComponent ,
  LayoutsComponent,
  NavbarsComponent,
  ListComponent,
  LoginComponent
];
