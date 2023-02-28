import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ContaComponent } from './conta/conta.component'
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'conta/:clientName', component: ContaComponent, canActivate: [authGuard]}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }