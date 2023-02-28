import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import clientes from '../../assets/clientes.json';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  
  constructor(private logger: LogService) { }

  authenticate(agencia: string, conta: string, senha: string) {
    const cliente = clientes[agencia]
    if (cliente && cliente.conta == conta && cliente.senha == senha) {
      delay(1000)
      this.logger.info('Login bem-sucedido.')
      this.isLoggedIn = true
      return cliente.nome
    } else {
      this.logger.info('Tentativa de login malsucedida.')
      alert('Dados incorretos. Por favor tente novamente.')
      return false
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}