import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from "@ionic/angular";
import { Loteria, tiposLoteria } from "../../shared/loteria.service";

@Component({
    selector: 'app-jogo-add',
    templateUrl: './jogo-add.component.html',
    styleUrls: ['./jogo-add.component.scss'],
})
export class JogoAddComponent implements OnInit {

    loteria: any = { nome: 'Loteria', tipo: null };
    selecao: number[] = [];
    random: number[] = [];
    podeSalvar: boolean = false;

    constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    fechar() {
        this.modalCtrl.dismiss({ ok: false });
    }

    escolheLoteria(ev: any) {
        this.popoverCtrl.create({
            component: LoteriaPopoverComponent,
            event: ev,
            translucent: true
        }).then(pop => {
            pop.onDidDismiss().then((result: any) => {
                if (result.data && result.data.lote) {
                    this.loteria = { ...result.data.lote }
                }
            });
            pop.present();
        });
    }

    onCartelaResult(numeros: number[]) {
        this.selecao = [...numeros];
        this.podeSalvar = numeros.length >= tiposLoteria[this.loteria.nome].jogo[0];
    }

    salvar() {
        let loteria = tiposLoteria[this.loteria.nome];
        if (this.selecao.length >= loteria.jogo[0]) {
            this.modalCtrl.dismiss({
                ok: true,
                jogo: {
                    numeros: this.selecao,
                    tipo: this.loteria.tipo
                }
            });
        }
    }

    rnd() {
        if (tiposLoteria[this.loteria.nome].jogo.length == 1) {
            this.randomize(tiposLoteria[this.loteria.nome].jogo[0]);
        } else {
            this.popoverCtrl.create({
                component: RandomPopoverComponent,
                event: null,
                translucent: true,
                componentProps: {
                    jogos: tiposLoteria[this.loteria.nome].jogo
                }
            }).then(pop => {
                pop.onDidDismiss().then((result: any) => {
                    if (result.data) {
                        this.randomize(result.data);
                    }
                });
                pop.present();
            });
        }
    }

    private randomize(qtde) {
        let _selecao = [];
        while (_selecao.length < qtde) {
            let _random = Math.floor(Math.random() * tiposLoteria[this.loteria.nome].cartela + 1);
            if (_selecao.indexOf(_random) == -1) _selecao.push(_random);
        }
        this.random = [..._selecao.sort()];
        //console.log(this.random);
    }

}

@Component({
    selector: 'app-popover-loteria',
    templateUrl: './loteria-popover.component.html',
    styleUrls: ['./jogo-add.component.scss'],
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

@Component({
    selector: 'app-popover-random',
    templateUrl: './random-popover.component.html',
    styleUrls: ['./jogo-add.component.scss'],
})
export class RandomPopoverComponent implements OnInit {

    @Input() jogos: number[] = [];

    constructor(private popoverCtrl: PopoverController) { }

    ngOnInit() { }

    fechar(rnd: number) {
        this.popoverCtrl.dismiss(rnd);
    }

}