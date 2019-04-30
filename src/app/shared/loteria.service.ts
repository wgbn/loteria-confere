import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export enum Loteria {
    Quina, MegaSena, LotoMania
}

export enum Tipos {
    Jogo, Concurso
}

export interface Jogo {
    numeros: number[];
    tipo: Tipos;
}

export interface Concurso {
    numero: number;
    data?: string;
    concursos: Jogo[];
    tipo: Tipos;
}

@Injectable({
    providedIn: 'root'
})
export class LoteriaService {

    private jogos: Jogo[] = [];
    private concursos: Concurso[] = [];

    constructor(/*private http: HttpClient*/) {
        let _jogos = localStorage.getItem('jogos');
        let _concursos = localStorage.getItem('concursos');
        this.jogos = _jogos ? JSON.parse(_jogos) : [];
        this.concursos = _concursos ? JSON.parse(_concursos) : [];
    }

    private saveLocal(): void {
        localStorage.setItem('jogos', JSON.stringify(this.jogos));
        localStorage.setItem('concursos', JSON.stringify(this.concursos));
    }

    private itemExists(tipo: Tipos, item: Jogo | Concurso): boolean {
        if (tipo == Tipos.Jogo) {
            for (let _jogo of this.jogos) {
                if (_jogo.numeros.toString() === (<Jogo>item).numeros.toString()) return true;
            }
        } else {
            for (let _concursos of this.concursos) {
                if (_concursos.numero === (<Concurso>item).numero) return true;
            }
        }
        return false;
    }

    getJogos(tipo: Tipos = null): Jogo[] {
        if (tipo !== null) {
            return this.jogos.filter(jogo => jogo.tipo === tipo);
        }
        return this.jogos;
    }

    getConcursos(tipo: Tipos = null): Concurso[] {
        if (tipo !== null) {
            return this.concursos.filter(conc => conc.tipo === tipo);
        }
        return this.concursos;
    }

    addJogo(jogo: Jogo): Jogo[] {
        if (!this.itemExists(Tipos.Jogo, jogo)) {
            this.jogos.push(jogo);
            this.saveLocal();
        }
        return this.jogos;
    }

    addConcurso(conc: Concurso): Concurso[] {
        if (!this.itemExists(Tipos.Concurso, conc)) {
            this.concursos.push(conc);
            this.saveLocal();
        }
        return this.concursos;
    }

    getJogo(index: number): Jogo | null {
        if (this.jogos[index]) return this.jogos[index];
        return null;
    }

    getConcurso(index:number): Concurso | null {
        return this.concursos[index] || null;
    }

    deleteJogo(index: number): Jogo[] {
        if (this.jogos[index]) {
            this.jogos.splice(index, 1);
            this.saveLocal();
        }
        return this.jogos;
    }

    deleteConcursos(index: number): Concurso[] {
        if (this.concursos[index]) {
            this.concursos.splice(index, 1);
            this.saveLocal();
        }
        return this.concursos;
    }

}
