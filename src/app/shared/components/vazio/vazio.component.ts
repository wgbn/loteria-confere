import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-vazio',
    templateUrl: './vazio.component.html',
    styleUrls: ['./vazio.component.scss'],
})
export class VazioComponent implements OnInit {

    @Input() icone: string;
    @Input() texto: string;

    constructor() { }

    ngOnInit() { }

}
