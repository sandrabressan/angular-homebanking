import { Component } from '@angular/core';
import { ContaService } from '../conta.service';
import { Movimento } from './Movimento';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent {
  private subscribe: any;
  clientName : any;
  movimentos : Movimento[] = [];
  revMovimentos: Movimento[] = [];
  novoValor : number;
  saldo: number

  constructor(private service: ContaService, private route: ActivatedRoute, public authService: AuthService, private logger: LogService) {}

  ngOnInit() {
    this.subscribe= this.route.params.subscribe(params => {
      this.clientName = params['clientName'];
    });
    this.movimentos = this.service.getConta(this.clientName);
    this.revMovimentos = this.movimentos.slice().reverse();
    this.calcSaldo()
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }

  saveMovimento(operacao='credito'){ //método que salva novas entradas na lista de movimentos
    if(this.novoValor){
      let movimento = new Movimento();
      movimento.index = Object.keys (this.movimentos).length + 1
      movimento.data = this.getDate();
      movimento.hora = this.getTime();
      movimento.operacao = operacao;
      if (operacao == 'debito') {
        movimento.valor = - this.novoValor
      } else {
        movimento.valor = this.novoValor
      }
      movimento.isCompleted = true
      this.movimentos.push(movimento);
      this.novoValor = 0;
      this.revMovimentos = this.movimentos.slice().reverse()
      this.logger.info(`Transação realizada com sucesso por ${this.clientName}`)
    }else{
      alert("Por favor insira um valor");
    }
  }

  getDate() { // retorna a data local
    return new Date().toLocaleDateString();
  }

  getTime(){ // retorna o formato de hora nos países que o português é o idioma oficial
    return new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute:"numeric"}); 
  }

  calcSaldo(){// calcular o saldo da lista de movimentos
    let valores: number[] = []
    Object.entries(this.movimentos).forEach(
      ([key, value]) => {
        let movimento = value
        valores.push(movimento.valor)
      }
    );
    this.saldo = valores.reduce((partialSum, a) => partialSum + a, 0)
  }

  logout() {
    this.authService.logout();
  }

}
