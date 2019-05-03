import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Tab1Page} from './tab1.page';
import {SharedModule} from "../shared/shared.module";
import {ConcursoAddComponent} from "./concurso-add/concurso-add.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: Tab1Page},
            // {path: ':tipo/:numero', component: ConcursoComponent},
        ])
    ],
    declarations: [
        Tab1Page,
        ConcursoAddComponent
    ],
    entryComponents: [
        ConcursoAddComponent
    ]
})
export class Tab1PageModule { }
