import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { AuthenticationComponent } from "./authentication.component";
import { CreateComponent } from "./create-user/create.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent,
        CreateComponent,
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule
    ]
})
export class LoginModule{
    
}