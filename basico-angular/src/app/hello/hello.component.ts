import { Component } from "@angular/core";

@Component({
  selector: 'hello',
  templateUrl:`./hello.component.html`
})
 export class HelloComponent {

  nome: string;
  clientes: Cliente[];

    constructor () {
      this.nome = 'Braulio';

      let fulano = new Cliente('Fulano', 30);
      let cicrrano = new Cliente('cicrano', 25);
      this.clientes = [fulano, cicrrano];
  }
}
class Cliente {
    constructor(
      public nome: string,
      public idade: number,
    ) {}
}

