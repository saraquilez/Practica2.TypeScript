"use strict";
/* Sara Quílez */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoMail = exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
var tipoMail;
(function (tipoMail) {
    tipoMail["gmail"] = "Gmail";
    tipoMail["hotmail"] = "Hotmail";
    tipoMail["outlook"] = "Outlook";
    tipoMail["otros"] = "Otros";
})(tipoMail = exports.tipoMail || (exports.tipoMail = {}));
