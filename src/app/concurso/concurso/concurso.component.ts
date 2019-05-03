import {Component, OnInit} from '@angular/core';
import {Concurso, LoteriaService, tiposLoteria} from "../../shared/loteria.service";
import {ActivatedRoute} from "@angular/router";
import {formatCurrency} from "@angular/common";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-concurso',
    templateUrl: './concurso.component.html',
    styleUrls: ['./concurso.component.scss'],
})
export class ConcursoComponent implements OnInit {

    concurso: Concurso = null;
    index: number = null;
    showLoad: boolean = false;

    format: Function = formatCurrency;

    private nomesLoteria = ['Quina','MegaSena','LotoMania'];

    constructor(private srv: LoteriaService, private route: ActivatedRoute, private nav: NavController) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.hasOwnProperty('tipo') && params.hasOwnProperty('numero')) {
                let {index, concurso} = this.srv.getConcursoPorTipoNumero(+params['tipo'], +params['numero']);
                this.index = index;
                this.concurso = concurso;
            }
        });
    }

    onAcao(ev, index) {
        if (ev.excluir) {
            this.concurso.jogos.splice(index, 1);
            this.srv.updateConcurso(this.concurso, index);
        }
    }

    verificarResultado() {
        this.showLoad = true;
        this.srv.getResultado(this.concurso).subscribe(
            resultado => {
                this.showLoad = false;
                this.concurso.resultado = resultado.sorteio.sort((a,b) => a == b ? 0 : a < b ? -1 : 1);
                this.concurso.ganhadores = [];
                let premios = tiposLoteria[this.nomesLoteria[this.concurso.tipo]].premio.reverse();

                for (let index in resultado.ganhadores) {
                    this.concurso.ganhadores.push({
                        acertos: premios[index],
                        qtde: resultado.ganhadores[index],
                        valor: resultado.rateio[index]
                    });
                }

                this.srv.updateConcurso(this.concurso, this.index);

                console.log(this.concurso);
            }, err => {
                this.showLoad = false;
            }
        );
    }

    voltar() {
        this.nav.back();
    }

}
