import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: String[] = ['Spiderman', 'Irorman', 'Hulk', 'Thor', 'Black_Panter', 'Ant-Man'];
  heroeborrados: String = '';


  borrarheroe() {
    console.log('borrando...')
    this.heroeborrados = this.heroes.shift() || '';

  }


}
