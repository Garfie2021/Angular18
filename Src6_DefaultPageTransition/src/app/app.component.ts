import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadermenuComponent } from "./headermenu/headermenu.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadermenuComponent, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
