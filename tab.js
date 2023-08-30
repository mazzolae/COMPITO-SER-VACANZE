const numero = parseInt(prompt("Inserisci un numero:"));

if (!isNaN(numero)) {
  console.log("Tabellina del", numero);
  for (let i = 0; i <= 10; i++) {
    const risultato = numero * i;
    console.log(risultato);
  }
} else {
  console.log("Inserisci un numero valido.");
}
