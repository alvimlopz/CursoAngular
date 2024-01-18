import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "joaquim"
  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin'
  }
  idade = 68
  title = 'curso-angularYT';
}
