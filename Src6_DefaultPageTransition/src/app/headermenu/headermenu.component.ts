import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-headermenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './headermenu.component.html',
  styleUrl: './headermenu.component.scss'
})
export class HeadermenuComponent {

}
