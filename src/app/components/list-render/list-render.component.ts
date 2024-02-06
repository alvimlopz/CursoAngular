import { Component } from '@angular/core';

import { Animal } from '../../Animal';

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

  constructor(){

  }

  ngOnInit(): void {}

  showAge(animal: Animal){
this.animalDetaisl = `o pet ${animal.name} tem ${animal.age} anos`
  }

}
