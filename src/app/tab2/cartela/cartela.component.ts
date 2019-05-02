import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { tiposLoteria } from 'src/app/shared/loteria.service';

@Component({
  selector: 'cartela',
  templateUrl: './cartela.component.html',
  styleUrls: ['./cartela.component.scss'],
})
export class CartelaComponent implements OnChanges {

  @Input() loteria: any = null;
  @Input() random: number[] = [];
  @Output() result: EventEmitter<any> = new EventEmitter<any>();

  cartela: any[] = [];
  totalEscolhido: number = 0;

  private evt: any = null;

  constructor() { }

  ngOnChanges() {
    if (this.loteria.tipo !== null) {
      this.geraCartela();
    }

    if (this.random.length) {
      this.marcaCartela();
    }
  }

  private geraCartela() {
    this.cartela = [];
    for (let i = 1; i < (tiposLoteria[this.loteria.nome].cartela + 1); i++) {
      this.cartela.push({active: false, numero: i});
    }
  }

  private marcaCartela() {
    for (let num of this.cartela) {
      for (let i of this.random) {
        if (num.numero == i) num.active = true;
      }
    }
    this.totalEscolhido = this.cartela.filter(num => num.active).length;
    setTimeout(() => this.result.emit(this.cartela.filter(num => num.active).map(num => num.numero)), 150);
  }

  numClick(num) {
    if (this.totalEscolhido < tiposLoteria[this.loteria.nome].jogo[tiposLoteria[this.loteria.nome].jogo.length-1]) {
      num.active = !num.active;
      this.totalEscolhido = this.cartela.filter(num => num.active).length;
      this.result.emit(this.cartela.filter(num => num.active).map(num => num.numero));
    } else {
      alert(`Você atingio o número máximo de escolhas para uma aposta: ${tiposLoteria[this.loteria.nome].jogo[tiposLoteria[this.loteria.nome].jogo.length-1]}`)
    }
  }

}