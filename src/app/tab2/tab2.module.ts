import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Tab2Page} from './tab2.page';
import {SharedModule} from "../shared/shared.module";
import {JogoAddComponent, LoteriaPopoverComponent} from "./jogo-add/jogo-add.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [
        Tab2Page,
        JogoAddComponent,
        LoteriaPopoverComponent
    ],
    entryComponents: [
        JogoAddComponent,
        LoteriaPopoverComponent
    ]
})
export class Tab2PageModule { }
