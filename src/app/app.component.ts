import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component'; 
import { LoginComponent } from './components/login/login.component';
import { ContadorComponent } from "./contador/contador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MateriasComponent, LoginComponent, ContadorComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esto es Angular';
}
