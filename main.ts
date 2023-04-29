/* Sara Quílez */

import { Persona, Sexo } from "./persona";
import { Direccion } from './direccion';
import { Telefono, tipoTelefono } from './telefono';
import { Mail, tipoMail } from "./mail";

let lista: Array<Persona> = [];

let persona1 = new Persona (
    'Laura',
    'García Salinas',
    41,
    '79617283F',
    "1982-01-23",
    'Rojo',
    Sexo.femenino,
    new Direccion('Avenida Republica Argentina',39,3,'B',26002,'Logroño','Logroño'),
    new Mail(tipoMail.hotmail,'laura.garciasalinas@hotmail.com'),
    new Telefono(tipoTelefono.movil,618992630),
    'Piloto de avión'
    );
lista.push(persona1);

let persona2 = new Persona (
    'Marta',
    'Guerrero Muñoz',
    13,
    '28363892H',
    "2011-09-10",
    'Negro',
    Sexo.femenino,
    new Direccion('Calle Provenza',7,2,'A',50001,'Zaragoza','Zaragoza'),
    new Mail(tipoMail.gmail,'guerreromarta@gmail.com'),
    new Telefono(tipoTelefono.movil,613772812),
    'Estudiante'
    );
lista.push(persona2);

let persona3 = new Persona (
    'Julio',
    'Valverde Rivera',
    72,
    '27392878X',
    "1952-12-25",
    'Azul',
    Sexo.masculino,
    new Direccion('Calle Ramón y Cajal',12,1,'C',33204,'Gijón','Asturias'),
    new Mail(tipoMail.gmail,'julio1952valverde@gmail.com'),
    new Telefono(tipoTelefono.fijo,933458239),
    'Jubilado'
    );
lista.push(persona3);
    
function imprimirListaRegistros(lista: Array<Persona> ): void {
    console.log('--------------------------------------');
    console.log('');
    console.log('LISTA DE REGISTROS:');
    console.log('');
    console.log('--------------------------------------');
    lista.forEach(persona => {
        console.log(persona.nombre, persona.apellidos)
        console.log("AÑOS: ", persona.edad)
        console.log("DNI: ", persona.dni) 
        console.log("CUMPLEAÑOS: ", persona.cumpleanos) 
        console.log("COLOR FAVORITO: ", persona.colorFavorito) 
        console.log("SEXO: ", persona.sexo);

    persona.direcciones.forEach(direccion => {
        console.log('DIRECCIÓN: ', direccion.calle, direccion.numero, ", piso", direccion.piso, direccion.letra,
        ", de la población de", direccion.poblacion, direccion.codigoPostal, ", provincia de", direccion.provincia,".");
    });

    persona.mails.forEach(mail => {
        console.log('MAIL: ', mail.direccion, " (", mail.tipo,")");
    });

    persona.telefonos.forEach(telefono => {
        console.log('TELEFONO: ', telefono.numero, " (", telefono.tipo,")");
    });

    console.log('NOTA: ', persona.notas);
    console.log('--------------------------------------');
    });
}
imprimirListaRegistros(lista);
let personaModificacion = lista.find(persona => persona.dni === '79617283F');

if (personaModificacion) {
    console.log('');
    console.log('Modificando registro con DNI', personaModificacion.dni); 
    personaModificacion.direcciones[0].calle = 'Calle Buscarons';
    personaModificacion.direcciones[0].numero = 13;
    personaModificacion.direcciones[0].piso = 2;
    personaModificacion.direcciones[0].letra = 'A';
    personaModificacion.direcciones[0].codigoPostal = 33201;
    personaModificacion.direcciones[0].poblacion = 'Gijón';
    personaModificacion.direcciones[0].provincia = 'Asturias';

    personaModificacion.mails[0].tipo = tipoMail.outlook;
    personaModificacion.mails[0].direccion = 'laura1982@outlook.com';

    personaModificacion.telefonos[0].tipo = tipoTelefono.fijo;
    personaModificacion.telefonos[0].numero = 931879810;

    console.log('Registro modificado con éxito.');
    console.log('');
} else {
    console.log('No existe ningún registro con el DNI especificado.');
}
imprimirListaRegistros(lista);
   