import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Concurso} from "../../loteria.service";

@Component({
    selector: 'concurso-item',
    templateUrl: './concurso-item.component.html',
    styleUrls: ['./concurso-item.component.scss'],
})
export class ConcursoItemComponent implements OnInit {

    @Input() concurso: Concurso = null;
    @Output() acao: EventEmitter<any> = new EventEmitter<any>();

    nomes: string[] = ['Quina', 'Mega-Sena', 'LotoMania'];

    constructor() { }

    ngOnInit() { }

}
