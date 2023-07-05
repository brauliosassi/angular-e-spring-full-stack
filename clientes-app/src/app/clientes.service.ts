import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente {
    let cliente = new Cliente();
    cliente.nome = 'Fulano';
    cliente.cpf = '01234567890';
    return cliente;
  }
}
