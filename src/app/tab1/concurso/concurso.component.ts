import {Component, OnInit} from '@angular/core';
import {Concurso, LoteriaService} from "../../shared/loteria.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-concurso',
    templateUrl: './concurso.component.html',
    styleUrls: ['./concurso.component.scss'],
})
export class ConcursoComponent implements OnInit {

    concurso: Concurso = null;
    index: number = null;

    constructor(private srv: LoteriaService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.hasOwnProperty('index')) {
                this.index = +params['index'];
                this.concurso = this.srv.getConcurso(this.index);
            }
        });
    }

    onAcao(ev, index) {
        if (ev.excluir) {
            this.concurso.jogos.splice(index, 1);
            this.srv.updateConcurso(this.concurso, index);
        }
    }

}
