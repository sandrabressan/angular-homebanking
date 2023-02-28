import { Injectable } from '@angular/core';
import contas from '../assets/contas.json'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  getConta(clientName: string) {
    let conta = contas[clientName]
    if (conta) {
      return conta.slice().reverse()
    } else {
      return []
    }
  }
}
