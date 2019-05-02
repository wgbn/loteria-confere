import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Tab1Page} from './tab1.page';
import {SharedModule} from "../shared/shared.module";
import {ConcursoAddComponent} from "./concurso-add/concurso-add.component";
import {ConcursoComponent} from "./concurso/concurso.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: Tab1Page},
            {path: ':index', component: ConcursoComponent},
        ])
    ],
    declarations: [
        Tab1Page,
        ConcursoComponent,
        ConcursoAddComponent
    ],
    entryComponents: [
        ConcursoAddComponent
    ]
})
export class Tab1PageModule { }
