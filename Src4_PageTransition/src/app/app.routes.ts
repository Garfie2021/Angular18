import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'enquiry-component', component: EnquiryComponent },
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'profile-component', component: ProfileComponent },
  { path: 'settings-component', component: SettingsComponent }
];
