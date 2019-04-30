import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'jogo-item',
    templateUrl: './jogo-item.component.html',
    styleUrls: ['./jogo-item.component.scss'],
})
export class JogoItemComponent implements OnInit {

    @Input() jogo: any = null;

    constructor() { }

    ngOnInit() { }

}
