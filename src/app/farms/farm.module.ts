import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { FarmCadastroComponent } from "./cadastro/farm-cadastro.component";
import { FarmComponent } from "./farm.component";
import { FarmListComponent } from "./lista/farm-list.component";

@NgModule({
    declarations: [
        FarmComponent,
        FarmCadastroComponent,
        FarmListComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule
    ]
})
export class FarmModule{

}