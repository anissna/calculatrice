function calculateTotal() {
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);
  if (isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
    document.getElementById("errors").innerHTML = "Veuillez entrer des nombres valides et positifs.";
    document.getElementById("result").innerHTML = "";
  } else {
    const total = hours * rate;
    const tpsRate = 0.05;
    const tps = total * tpsRate;
    const tvqRate = 0.09975;
    const tvq = total * tvqRate;
    const finalTotal = total + tps + tvq;
    document.getElementById("errors").innerHTML = "";
    document.getElementById("result").innerHTML = `
      <p>Taux horaire: $${rate.toLocaleString('fr-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
      <p>Nombre d'heures travaillées: ${hours.toLocaleString('fr-CA')}h</p>
      <h2>Total: $${total.toLocaleString('fr-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2>
      <p>TPS (5%): $${tps.toLocaleString('fr-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
      <p>TVQ (9,975%): $${tvq.toLocaleString('fr-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
      <h2>Grand total: $${finalTotal.toLocaleString('fr-CA', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2>
    `;
  }
}



function clearForm() {
  document.getElementById("hours").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("errors").innerHTML = "";
}

