import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 2, nome: 'Ágata', telefone: '38 128451235' },
    { id: 3, nome: 'Bruno', telefone: '95 695521583' },
    { id: 4, nome: 'Beatriz', telefone: '25 854986459' },
    { id: 5, nome: 'Carlos', telefone: '94 543197849' },
    { id: 7, nome: 'Daniel', telefone: '56 613692441' },
  ];

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
