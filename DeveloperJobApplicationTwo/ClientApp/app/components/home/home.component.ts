import { Component } from '@angular/core';
import { IGreeter, Greeter } from '../../services/Greeter';




@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [Greeter]
   
})
export class HomeComponent {

    private _greeter: IGreeter;
    public message: string;

    constructor() {

        
    }


    

}
