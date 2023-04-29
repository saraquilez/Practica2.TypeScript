/* Sara Quílez */

import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: string;
    private _colorFavorito: string;
    private _sexo: Sexo;
    private _direcciones: Direccion[] = [];
    private _mails: Mail[] = [];
    private _telefonos: Telefono[] = [];
    private _notas: string;

    constructor (
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: string,
        colorFavorito: string,
        sexo: Sexo,
        direcciones: Direccion,
        mails: Mail,
        telefonos: Telefono,
        notas: string
      ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones.push(direcciones)
        this._mails.push(mails)
        this._telefonos.push(telefonos)
        this._notas = notas;
      }
    
      public get nombre(): string {
        return this._nombre;
      }
    
      public set nombre(nombre: string) {
        this._nombre = nombre;
      }

      public get apellidos(): string {
        return this._apellidos;
      }
    
      public set apellidos(apellidos: string) {
        this._apellidos = apellidos;
      }

      public get edad(): number {
        return this._edad;
      }
    
      public set edad(edad: number) {
        this._edad = edad;
      }

      public get dni(): string {
        return this._dni;
      }

      public set dni(dni: string) {
        this._dni = dni;
      }

      public get cumpleanos(): string {
        return this._cumpleanos;
      }

      public set cumpleanos(cumpleanos: string) {
        this._cumpleanos = cumpleanos;
      }
        
      public get colorFavorito(): string {
        return this._colorFavorito;
      }
    
      public set colorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
      }

      public get sexo(): Sexo {
        return this._sexo;
      }
    
      public set sexo(sexo: Sexo) {
        this._sexo = sexo;
      }

      public get direcciones(): Direccion[] {
        return this._direcciones;
      }

      public set direcciones(direcciones: Direccion[]) {
        this._direcciones = direcciones;
      }
    
      public get mails(): Mail[] {
        return this._mails;
      }
    
      public set mails(mails: Mail[]) {
        this._mails = mails;
      }

      public get telefonos(): Telefono[] {
        return this._telefonos;
      }

      public set telefonos(telefonos: Telefono[]) {
        this._telefonos = telefonos;
      }
    
      public get notas(): string {
        return this._notas;
      }
    
      public set notas(notas: string) {
        this._notas = notas;
      }
    }

    export enum Sexo {
        femenino = "Femenino",
        masculino = "Masculino",
        intersexual = "Intersexual",
    }