import { Component } from "@angular/core";
import { Farm } from "../farm";
import { FarmService } from "../farm.service";

@Component({
    templateUrl: './farm-cadastro.component.html'
})
export class FarmCadastroComponent{

    public fazenda: String;
    public cpf: Number;
    public owner: String;

    farm: Farm;

    constructor(private farmService: FarmService){
        this.farm = new Farm;
    }

    save(): void{
        console.log("Aqui")
    }

}