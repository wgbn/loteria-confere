import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Tab2Page} from './tab2.page';
import {SharedModule} from "../shared/shared.module";
import {JogoAddComponent, LoteriaPopoverComponent, RandomPopoverComponent} from "./jogo-add/jogo-add.component";
import { CartelaComponent } from './cartela/cartela.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [
        Tab2Page,
        JogoAddComponent,
        CartelaComponent,
        LoteriaPopoverComponent,
        RandomPopoverComponent
    ],
    entryComponents: [
        JogoAddComponent,
        LoteriaPopoverComponent,
        RandomPopoverComponent
    ]
})
export class Tab2PageModule { }
