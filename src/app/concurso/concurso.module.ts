import {NgModule} from '@angular/core';

import {ConcursoRoutingModule} from './concurso-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ConcursoComponent} from "./concurso/concurso.component";

@NgModule({
    declarations: [
        ConcursoComponent
    ],
    imports: [
        SharedModule,
        ConcursoRoutingModule
    ]
})
export class ConcursoModule { }
