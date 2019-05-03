import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'jogo-item',
    templateUrl: './jogo-item.component.html',
    styleUrls: ['./jogo-item.component.scss'],
})
export class JogoItemComponent implements OnInit {

    nomes: string[] = ['Quina', 'Mega-Sena', 'LotoMania'];

    @Input() jogo: any = null;
    @Input() resultado: number[] = [];
    @Output() acao: EventEmitter<any> = new EventEmitter<any>();

    constructor(private sheet: ActionSheetController) { }

    ngOnInit() { }

    opcoes() {
        this.sheet.create({
            header: 'Opções',
            buttons: [/*{
                text: 'Apostar',
                icon: 'share',
                handler: () => {
                    this.acao.emit({apostar: true});
                }
            },*/ {
                text: 'Excluir',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.acao.emit({excluir: true});
                }
            }, {
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        }).then(sh => {
            sh.present();
        });
    }

}
