import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {JogoItemComponent} from "./components/jogo-item/jogo-item.component";
import {VazioComponent} from "./components/vazio/vazio.component";
import {LoteriaPopoverComponent} from "./components/loteria-popover/loteria-popover.component";
import {ConcursoItemComponent} from "./components/concurso-item/concurso-item.component";

@NgModule({
    declarations: [
        JogoItemComponent,
        ConcursoItemComponent,
        VazioComponent,
        LoteriaPopoverComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,

        // components
        JogoItemComponent,
        ConcursoItemComponent,
        VazioComponent,
        LoteriaPopoverComponent
    ],
    entryComponents: [
        LoteriaPopoverComponent
    ]
})
export class SharedModule { }
