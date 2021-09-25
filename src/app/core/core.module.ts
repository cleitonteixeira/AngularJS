import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarHomeComponent } from "./components/navbar/navbar-home/navbar-home.component";
import { AlertFormComponent } from "./components/alerts/alert-formulario.component";

@NgModule({
    declarations:[
        NavBarHomeComponent,
        AlertFormComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ],
    exports: [
        NavBarHomeComponent,
        AlertFormComponent
    ]
})
export class CoreModule{

}