import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from "@ionic/angular";
import {LoteriaPopoverComponent} from "../../shared/components/loteria-popover/loteria-popover.component";
import {Concurso, Jogo, LoteriaService, tiposLoteria} from "../../shared/loteria.service";

@Component({
    selector: 'app-concurso-add',
    templateUrl: './concurso-add.component.html',
    styleUrls: ['./concurso-add.component.scss'],
})
export class ConcursoAddComponent implements OnInit {

    loteria: any = { nome: 'Loteria', tipo: null };
    podeSalvar: boolean = false;
    jogos: any[] = [];
    concurso: Concurso =  {
        data: null,
        jogos: [],
        numero: null,
        resultado: [],
        tipo: null
    };

    constructor(private popoverCtrl: PopoverController, private modalCtrl: ModalController, private srv: LoteriaService) { }

    ngOnInit() { }

    fechar() {
        this.modalCtrl.dismiss({ ok: false });
    }

    salvar() {
        let loteria = tiposLoteria[this.loteria.nome];
        if (this.concurso.jogos.length && this.concurso.numero) {
            this.modalCtrl.dismiss({
                ok: true,
                concurso: this.concurso
            });
        }
    }

    escolheLoteria(ev: any) {
        this.popoverCtrl.create({
            component: LoteriaPopoverComponent,
            event: ev,
            translucent: true
        }).then(pop => {
            pop.onDidDismiss().then((result: any) => {
                if (result.data && result.data.lote) {
                    this.loteria = { ...result.data.lote };
                    this.concurso.tipo = result.data.lote.tipo;
                    this.jogos = this.srv.getJogos(result.data.lote.tipo).map(jogo => ({active: false, jogo: jogo}));
                }
            });
            pop.present();
        });
    }

    checkJogos() {
        setTimeout(() => {
            this.concurso.jogos = [...this.jogos.filter(item => item.active).map(item => item.jogo)];
            this.podeSalvar = this.concurso.jogos.length > 0 && this.concurso.numero !== null && this.concurso.data !== null;
        }, 250);
    }

}
