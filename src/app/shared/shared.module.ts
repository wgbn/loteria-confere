import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {JogoItemComponent} from "./components/jogo-item/jogo-item.component";

@NgModule({
    declarations: [
        JogoItemComponent
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,

        // components
        JogoItemComponent,
    ]
})
export class SharedModule { }
