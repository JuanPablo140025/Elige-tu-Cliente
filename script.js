function calcularSubtotal(horas, tarifa) {
  return horas * tarifa;
}

function aplicarUrgencia(subtotal, urgencia) {
  if (urgencia === "urgente") return subtotal * 1.2;
  if (urgencia === "express") return subtotal * 1.4;
  return subtotal;
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
  let urgencia = document.getElementById("urgencia").value;
  let error = document.getElementById("error");

  error.textContent = "";

  // VALIDACIONES
  if (horas <= 0 || tarifa <= 0) {
    error.textContent = "Ingrese valores válidos mayores a cero.";
    return;
  }

  if (urgencia === "") {
    error.textContent = "Seleccione el nivel de urgencia.";
    return;
  }

  let subtotal = calcularSubtotal(horas, tarifa);
  subtotal = aplicarUrgencia(subtotal, urgencia);

  let iva = calcularIVA(subtotal);
  let total = subtotal + iva;

  document.getElementById("urgenciaResultado").textContent =
    "Urgencia: " + urgencia.toUpperCase();

  document.getElementById("subtotal").textContent =
    "Subtotal: " + formatear(subtotal);

  document.getElementById("iva").textContent =
    "IVA: " + formatear(iva);

  document.getElementById("total").textContent =
    "Total: " + formatear(total);
}
