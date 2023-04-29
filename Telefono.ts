/* Sara Quílez */

export class Telefono {
    private _tipo: tipoTelefono;
    private _numero: number;
  
    constructor(tipo: tipoTelefono, numero: number) {
      this._tipo = tipo;
      this._numero = numero;
    }
  
    public get tipo(): tipoTelefono {
      return this._tipo;
    }
  
    public set tipo(value: tipoTelefono) {
      this._tipo = value;
    }
  
    public get numero(): number {
      return this._numero;
    }
  
    public set numero(value: number) {
      this._numero = value;
    }
  }

export enum tipoTelefono {
    fijo = 'Fijo',
    movil  = 'Movil'
}