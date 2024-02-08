import { Component } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] =  [
    {name: 'turca', type: 'Dog', age: 4},
    {name: 'Tom', type: 'Cat', age: 14},
    {name: 'Frida', type: 'Dog', age: 15},
    {name: 'Bob', type: 'Horse', age: 20},
  ];

  animalDetaisl = '';

  constructor(private listService: ListService){

  }

  ngOnInit(): void {}

  showAge(animal: Animal){
    this.animalDetaisl = `o pet ${animal.name} tem ${animal.age} anos`
  }

  removerAnimal(animal: Animal){
    console.log("Removendo animal...")
   this.animals = this.listService.remove(this.animals, animal);
  }

}
