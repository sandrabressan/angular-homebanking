import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientName: any;
  @ViewChild('agencia') el1: ElementRef //Referencia elementos DOM dentro do componente
  @ViewChild('conta') el2: ElementRef
  @ViewChild('senha') el3: ElementRef

  constructor(public authService: AuthService, public router: Router) {
  }

  authenticate() {
    const agencia = this.el1.nativeElement.value //pega os valores dos campos dos respectivos elementos
    const conta = this.el2.nativeElement.value
    const senha = this.el3.nativeElement.value
    this.clientName = this.authService.authenticate(agencia, conta, senha)
    if (this.authService.isLoggedIn) {
      const redirectUrl = `/conta/${this.clientName}`;
      this.router.navigate([redirectUrl]);
    }
  } 

}

