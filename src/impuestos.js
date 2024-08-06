// exportar clase
export default class Impuestos {
    // constructor
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    // getters
    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // setters
    set monto_bruto_anual(nuevo_monto) {
        this._monto_bruto_anual = nuevo_monto;
    }

    set deducciones(nuevas_deducciones) {
        this._deducciones = nuevas_deducciones;
    }
}