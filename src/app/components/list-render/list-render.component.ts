import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {name: 'turca', type: 'Dog'},
    {name: 'Tom', type: 'Cat'},
    {name: 'Frida', type: 'Dog'},
    {name: 'Bob', type: 'Horse'},
  ];

  constructor(){

  }

  ngOnInit(): void {}

}
