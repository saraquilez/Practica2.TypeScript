"use strict";
/* Sara Quílez */
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var lista = [];
var persona1 = new persona_1.Persona('Laura', 'García Salinas', 41, '79617283F', "1982-01-23", 'Rojo', persona_1.Sexo.femenino, new direccion_1.Direccion('Avenida Republica Argentina', 39, 3, 'B', 26002, 'Logroño', 'Logroño'), new mail_1.Mail(mail_1.tipoMail.hotmail, 'laura.garciasalinas@hotmail.com'), new telefono_1.Telefono(telefono_1.tipoTelefono.movil, 618992630), 'Piloto de avión');
lista.push(persona1);
var persona2 = new persona_1.Persona('Marta', 'Guerrero Muñoz', 13, '28363892H', "2011-09-10", 'Negro', persona_1.Sexo.femenino, new direccion_1.Direccion('Calle Provenza', 7, 2, 'A', 50001, 'Zaragoza', 'Zaragoza'), new mail_1.Mail(mail_1.tipoMail.gmail, 'guerreromarta@gmail.com'), new telefono_1.Telefono(telefono_1.tipoTelefono.movil, 613772812), 'Estudiante');
lista.push(persona2);
var persona3 = new persona_1.Persona('Julio', 'Valverde Rivera', 72, '27392878X', "1952-12-25", 'Azul', persona_1.Sexo.masculino, new direccion_1.Direccion('Calle Ramón y Cajal', 12, 1, 'C', 33204, 'Gijón', 'Asturias'), new mail_1.Mail(mail_1.tipoMail.gmail, 'julio1952valverde@gmail.com'), new telefono_1.Telefono(telefono_1.tipoTelefono.fijo, 933458239), 'Jubilado');
lista.push(persona3);
function imprimirListaRegistros(lista) {
    console.log('--------------------------------------');
    console.log('');
    console.log('LISTA DE REGISTROS:');
    console.log('');
    console.log('--------------------------------------');
    lista.forEach(function (persona) {
        console.log(persona.nombre, persona.apellidos);
        console.log("AÑOS: ", persona.edad);
        console.log("DNI: ", persona.dni);
        console.log("CUMPLEAÑOS: ", persona.cumpleanos);
        console.log("COLOR FAVORITO: ", persona.colorFavorito);
        console.log("SEXO: ", persona.sexo);
        persona.direcciones.forEach(function (direccion) {
            console.log('DIRECCIÓN: ', direccion.calle, direccion.numero, ", piso", direccion.piso, direccion.letra, ", de la población de", direccion.poblacion, direccion.codigoPostal, ", provincia de", direccion.provincia, ".");
        });
        persona.mails.forEach(function (mail) {
            console.log('MAIL: ', mail.direccion, " (", mail.tipo, ")");
        });
        persona.telefonos.forEach(function (telefono) {
            console.log('TELEFONO: ', telefono.numero, " (", telefono.tipo, ")");
        });
        console.log('NOTA: ', persona.notas);
        console.log('--------------------------------------');
    });
}
imprimirListaRegistros(lista);
var personaModificacion = lista.find(function (persona) { return persona.dni === '79617283F'; });
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
    personaModificacion.mails[0].tipo = mail_1.tipoMail.outlook;
    personaModificacion.mails[0].direccion = 'laura1982@outlook.com';
    personaModificacion.telefonos[0].tipo = telefono_1.tipoTelefono.fijo;
    personaModificacion.telefonos[0].numero = 931879810;
    console.log('Registro modificado con éxito.');
    console.log('');
}
else {
    console.log('No existe ningún registro con el DNI especificado.');
}
imprimirListaRegistros(lista);
