import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'register', component: RegisterComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

