import {Component, OnInit} from '@angular/core';
import {Jogo, LoteriaService} from "../shared/loteria.service";
import {ModalController} from "@ionic/angular";
import {JogoAddComponent} from "./jogo-add/jogo-add.component";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    jogos: Jogo[] = [];

    constructor(private srv: LoteriaService, private modalCtrl: ModalController) { }

    ngOnInit(): void {
        this.jogos = this.srv.getJogos();
    }

    addJogo() {
        this.modalCtrl.create({
            component: JogoAddComponent
        }).then(add => {
            add.onDidDismiss().then(
                (data: Object) => {
                    if (data && data.hasOwnProperty('jogo')) {
                        this.jogos = this.srv.addJogo(data['jogo']);
                    }
                }
            );
            add.present();
        });
    }

}
