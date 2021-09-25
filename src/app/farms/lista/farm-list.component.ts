import { Component, OnInit } from "@angular/core";
import { Farm } from "../farm";
import { FarmService } from "../farm.service";

@Component({
    templateUrl: './farm-list.component.html'
})
export class FarmListComponent implements OnInit{

    farm: Farm;

    farmFilter: Farm[] = [];

    _farm: Farm[] = [];
    _filterBy: string;

    constructor(private farmService: FarmService){}

    ngOnInit(): void {

        this.obtain();
        
    }

    obtain(): void{
        this.farmService.obtain().subscribe({
            next:farms=>{
                this._farm = farms;
                this.farmFilter = this._farm;
            },
            error: err => console.log('Error', err)
        });
    }

    save(): void{
        console.log("Aqui")
    }

    set filtro(value: string){
        this._filterBy = value;

        this.farmFilter = this._farm.filter((farm: Farm)=> farm.name.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1);    
    }

    get filtro(){
        return this._filterBy;
    }
}