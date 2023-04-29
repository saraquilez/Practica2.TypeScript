/* Sara Quílez */

export class Mail {
    private _tipo: tipoMail;
    private _direccion: string;
    
    constructor(tipo: tipoMail, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
      }
    
      public get tipo(): tipoMail {
        return this._tipo;
      }
    
      public set tipo(value: tipoMail) {
        this._tipo = value;
      }
    
      public get direccion(): string {
        return this._direccion;
      }
    
      public set direccion(value: string) {
        this._direccion = value;
      }
    }

export enum tipoMail {
  gmail = 'Gmail',
  hotmail = 'Hotmail',
  outlook = 'Outlook',
  otros = 'Otros'
}