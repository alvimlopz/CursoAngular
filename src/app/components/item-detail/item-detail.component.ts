import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../../Animal';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal    //o ? diz para o type que o animal pode vim ou não


  constructor (private ListService: ListService, private route: ActivatedRoute){
    this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id")) //tratando o dado como um number
    this.ListService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
