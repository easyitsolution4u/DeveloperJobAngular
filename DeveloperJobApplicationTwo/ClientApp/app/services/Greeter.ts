
export interface IGreeter {
    greet(name:string): string;
}
export class Greeter implements IGreeter {

   
    constructor() {
        
    }

    greet(name : string): string {
        return "Hello" + name;
    }
}