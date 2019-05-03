import {Component, OnInit} from '@angular/core';
import {Concurso, LoteriaService} from "../shared/loteria.service";

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    concursos: Concurso[] = [];

    constructor(private srv: LoteriaService) { }

    ngOnInit(): void {
        this.loadConcursos();
    }

    loadConcursos() {
        this.concursos = this.srv.getConcursos().filter(c => c.hasOwnProperty('resultado') && c.resultado.length);
    }

    onAcao(ev, index) {
        if (ev.excluir) {
            this.concursos = this.srv.deleteConcursos(index);
        }
    }
}
