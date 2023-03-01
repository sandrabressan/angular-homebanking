import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContaService } from '../conta.service';
import { Movimento } from './Movimento';
import { AuthService } from '../auth/auth.service';
import { LogService } from '../shared/log.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent {
  private subscribe: any
  clientName: any
  displayedColumns: string[] = [' ', 'data', 'hora', 'valor'];
  movimentos: Movimento[] = []
  dataSource: Movimento[] = []
  novoValor: number
  saldo: number

  constructor(private service: ContaService, private route: ActivatedRoute, 
    public authService: AuthService, private logger: LogService) { }

  ngOnInit() {
    this.subscribe= this.route.params.subscribe(params => {
      this.clientName = params['clientName'];
    });
    this.movimentos = this.service.getConta(this.clientName)
    this.dataSource = this.movimentos.slice().reverse()
    this.calcSaldo()
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }

  saveMovimento(operacao='credito') {
    if(this.novoValor) {
      let movimento = new Movimento()
      movimento.index = Object.keys(this.movimentos).length + 1
      movimento.data = this.getDate()
      movimento.hora = this.getTime()
      movimento.operacao = operacao
      if (operacao == 'debito') {
        movimento.valor = -this.novoValor
      } else {
        movimento.valor = this.novoValor
      }
      movimento.isCompleted = true
      this.movimentos.push(movimento)
      this.novoValor = 0
      this.dataSource = this.movimentos.slice().reverse()
      this.logger.info(`Transação bem-sucedida realizada por ${this.clientName}`)
    } else {
      this.logger.info(`Transação malsucedida realizada por ${this.clientName}`)
      alert('Por favor insira um valor válido.')
    }
  }

  getDate() {
    return new Date().toLocaleDateString()
  }

  getTime() {
    return new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"})
  }

  calcSaldo() {
    let valores: number[] = []
    Object.entries(this.movimentos).forEach(
      ([key, value]) => {
        let movimento = value
        valores.push(movimento.valor)
      }
    )
    this.saldo = valores.reduce((partialSum, a) => partialSum + a, 0)
  }

  logout() {
    this.authService.logout();
  }
}