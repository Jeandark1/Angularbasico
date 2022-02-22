import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `

     <h1>{{title}}</h1>

    <h2> La base es: <strong>{{base}} </strong> </h2>

    <button (click)=" acumular(+base) "> + </button>

    <span> {{nro}} </span>

    <button (click)="  acumular(-base) "> - </button>   
                    
      `
})

export class ContadorComponent {

    title: string = 'Contador App';
    nro: number = 20;
    base: number = 5;

    acumular(valor: number) {
        this.nro += valor;
    }

}