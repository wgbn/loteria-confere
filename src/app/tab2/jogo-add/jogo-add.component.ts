import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from "@ionic/angular";
import {Loteria} from "../../shared/loteria.service";

@Component({
    selector: 'app-jogo-add',
    templateUrl: './jogo-add.component.html',
    styleUrls: ['./jogo-add.component.scss'],
})
export class JogoAddComponent implements OnInit {

    loteria: any = {nome: 'Loteria', tipo: null};

    constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    fechar() {
        this.modalCtrl.dismiss({ok: false});
    }

    escolheLoteria(ev: any) {
        this.popoverCtrl.create({
            component: LoteriaPopoverComponent,
            event: ev,
            translucent: true
        }).then(pop => {
            pop.onDidDismiss().then((data: any) => this.loteria = {...data.data.lote});
            pop.present();
        });
    }

}

@Component({
    selector: 'app-popover-loteria',
    templateUrl: './loteria-popover.component.html',
    styleUrls: ['./jogo-add.component.scss'],
})
export class LoteriaPopoverComponent implements OnInit {

    loteriasList: any[] = [
        {nome: 'Quina', tipo: Loteria.Quina},
        {nome: 'Mega-Sena', tipo: Loteria.MegaSena},
        {nome: 'Lotomania', tipo: Loteria.LotoMania},
    ];

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    fechar(item: any) {
        this.popoverCtrl.dismiss({lote: item});
    }

}
