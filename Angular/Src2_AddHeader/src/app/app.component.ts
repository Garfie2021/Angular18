import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadermenuComponent } from "./headermenu/headermenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadermenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTest';
}
