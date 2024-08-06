// exportar clase
export default class Cliente {
    // constructor
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    // getter
    get nombre() {
        return this._nombre;
    }

    // setter
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    // calculadora de impuestos
    calcularImpuesto() {
        return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
    }
}