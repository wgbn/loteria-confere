import {Component, OnInit} from "@angular/core";
import {Loteria} from "../../loteria.service";
import {PopoverController} from "@ionic/angular";

@Component({
    selector: 'app-popover-loteria',
    templateUrl: './loteria-popover.component.html',
    styleUrls: [],
})
export class LoteriaPopoverComponent implements OnInit {

    loteriasList: any[] = [
        { nome: 'Quina', tipo: Loteria.Quina },
        { nome: 'MegaSena', tipo: Loteria.MegaSena },
        { nome: 'LotoMania', tipo: Loteria.LotoMania },
    ];

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    fechar(item: any) {
        this.popoverCtrl.dismiss({ lote: item });
    }

}
