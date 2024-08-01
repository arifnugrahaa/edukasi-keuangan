document
  .getElementById("kalkulator")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let years = parseFloat(document.getElementById("years").value);
    let hasil = principal * Math.pow(1 + rate, years);

    let formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    });

    document.getElementById("hasil").textContent = "Hasil: " + formatter.format(hasil);
  });