import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcursoComponent} from "./concurso/concurso.component";

const routes: Routes = [
  {path: ':tipo/:numero', component: ConcursoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcursoRoutingModule { }
