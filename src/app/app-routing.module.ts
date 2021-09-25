import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./authentication/login/login.component";
import { AuthGuard } from "./shared/auth.guard";
import { FarmComponent } from "./farms/farm.component";
import { FarmCadastroComponent } from "./farms/cadastro/farm-cadastro.component";
import { FarmListComponent } from "./farms/lista/farm-list.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'farms',
    component: FarmComponent,
    children:[
      { path: 'cadastrar', component: FarmCadastroComponent },
      { path: 'listar', component: FarmListComponent }
    ],
    canActivate: [AuthGuard] },
  {
    path: '',
    component: AuthenticationComponent,
    children:[
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }