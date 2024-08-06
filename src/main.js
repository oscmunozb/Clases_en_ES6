import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

// cliente1 con impuesto1
let impuesto1 = new Impuestos(100000, 20000);
let cliente1 = new Cliente('Juan J.', impuesto1);
console.log(`El impuesto anual a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`);

// uso setter en cliente1
console.log("Nombre cliente1 incial: " + cliente1.nombre);
cliente1.nombre = "Manuel Z.";
console.log("Nombre cliente1 luego de usar setter: " + cliente1.nombre);

// uso de setters en impuesto1
console.log("impuesto1 => " + "Monto bruto anual: " + impuesto1.monto_bruto_anual + " - Deduciones: " + impuesto1.deducciones);
impuesto1.monto_bruto_anual = 200000;
impuesto1.deducciones = 30000;
console.log("impuesto1 despues de usar setters => " + "Monto bruto anual: " + impuesto1.monto_bruto_anual + " - Deduciones: " + impuesto1.deducciones);
console.log(`El impuesto anual a pagar por ${cliente1.nombre} es ${cliente1.calcularImpuesto()}`);