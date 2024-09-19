import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  resString: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getString().subscribe(res => {
      this.resString = res;
    });
  }
}
