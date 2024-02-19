import { Component } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] =  [];

  animalDetaisl = '';

  constructor(private listService: ListService){
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal){
    this.animalDetaisl = `o pet ${animal.name} tem ${animal.age} anos`
  }

  removerAnimal(animal: Animal){
    console.log("Removendo animal...")
   this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = this.animals));
  }

}
