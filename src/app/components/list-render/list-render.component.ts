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
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
    //this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = this.animals));
  }

}
