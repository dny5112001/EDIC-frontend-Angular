import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent

export const routes: Routes = [
  { path: 'signup', component: SignupComponent }, // Signup route
  { path: 'login', component: LoginComponent }, // Signup route
];
