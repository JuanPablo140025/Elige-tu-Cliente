function calcularSubtotal(horas, tarifa) {
  return horas * tarifa;
}

function aplicarDescuento(subtotal, descuento) {
  return subtotal - (subtotal * descuento / 100);
}

function calcularIVA(monto) {
  return monto * 0.19;
}

function formatear(valor) {
  return "$" + valor.toFixed(2);
}

function cotizar() {
  let horas = Number(document.getElementById("horas").value);
  let tarifa = Number(document.getElementById("tarifa").value);
  let descuento = Number(document.getElementById("descuento").value);

  let subtotal = calcularSubtotal(horas, tarifa);
  subtotal = aplicarDescuento(subtotal, descuento);

  let iva = calcularIVA(subtotal);
  let total = subtotal + iva;

  document.getElementById("subtotal").textContent = "Subtotal: " + formatear(subtotal);
  document.getElementById("iva").textContent = "IVA: " + formatear(iva);
  document.getElementById("total").textContent = "Total: " + formatear(total);
}