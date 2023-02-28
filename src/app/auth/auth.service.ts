import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import clientes from '../../assets/clientes.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;

  authenticate(agencia: string, conta: string, senha: string) {
    const cliente = clientes[agencia]
    if (cliente && cliente.conta == conta && cliente.senha == senha) {
      delay(1000)
      this.isLoggedIn = true
      return cliente.nome
    } else {
      alert('Dados inválidos. Por favor tente novamente.')
      return false
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}