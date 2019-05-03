import {Component, OnInit} from '@angular/core';
import {Concurso, LoteriaService} from "../shared/loteria.service";
import {ModalController} from "@ionic/angular";
import {ConcursoAddComponent} from "./concurso-add/concurso-add.component";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    showCard: boolean = true;
    concursos: Concurso[] = [];

    constructor(private srv: LoteriaService, private modalCtrl: ModalController) { }

    ngOnInit(): void {
        // this.loadConcursos();
        this.isShowCard();
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter', new Date().getTime());
        this.loadConcursos();
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit', new Date().getTime());
    }

    private isShowCard() {
        let local = localStorage.getItem('show-card') || 'true';
        this.showCard = local && local != 'false';
    }

    loadConcursos() {
        this.concursos = this.srv.getConcursos().filter(c => !c.hasOwnProperty('resultado') || !c.resultado.length);
    }

    addConcurso() {
        this.modalCtrl.create({
            component: ConcursoAddComponent
        }).then(add => {
            add.onDidDismiss().then(
                (result: any) => {
                    if (result.data && result.data.hasOwnProperty('concurso')) {
                        this.srv.addConcurso(result.data['concurso']);
                        this.loadConcursos();
                        //console.log(result.data['concurso']);
                    }
                }
            );
            add.present();
        });
    }

    fechaCard() {
        this;this.showCard = false;
        localStorage.setItem('show-card', 'false');
    }

    onAcao(ev, index) {
        if (ev.excluir) {
            this.concursos = this.srv.deleteConcursos(index);
        }
    }
}
