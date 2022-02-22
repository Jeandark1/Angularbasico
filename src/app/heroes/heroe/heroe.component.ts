import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.Component.html'
})

export class HeroeComponent {

    nombre: string = 'Irorman';
    edad: number = 25;

    get nombreCapitalizado(): String {
        return this.nombre.toUpperCase();
    }

    ontenernombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarnombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiaredad(): void {

        console.log('hey..');
        this.edad = 20;
    }

}