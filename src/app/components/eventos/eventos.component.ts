import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
 show: boolean = false;

 constructor(){}

 ngOnInit(): void {}

 showMensagem(): void {
  this.show = !this.show; //toggle
 }
}
