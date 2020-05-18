function getArrayOfRandomNumbers(pocetCisel = 10, maximumCisla = 10) {
  var poleCisel = new Array(pocetCisel), min = 1;
  // document.writeln(": " + poleCisel.length + " <br>");
  for (let i = 0; i < pocetCisel; i++) {
    poleCisel[i] = Math.floor(Math.random() * (maximumCisla - min + 1) + min);
  }
  return poleCisel;
}

function sectiSudaFor() {
  var cisla = getArrayOfRandomNumbers(), soucet = 0;
  for (let i = 0; i < cisla.length; i++) {
    if (cisla[i] % 2 === 0) soucet += cisla[i];
    document.writeln(cisla[i] + " <br>");
  }
  document.writeln(`součet sudých: ${soucet} <br>`);
}

function sectiSuda() {
  var numArray = getArrayOfRandomNumbers();
  var sumOfEvenNumbers = numArray.filter(function (num) {    // filter: bere pole a vytvoří nové vyhovující parametrům
    return num % 2 === 0;
  }).reduce(function (numPrev, numNext) {   // reduce: sečte prvky pole a vloží je do nového
    return numPrev + numNext;
  });
  document.writeln(numArray);    // vypíše všechny prvky
  document.write(" ; součet sudých: " + sumOfEvenNumbers);    // a součet sudých
}

function prevodUkolu() {
  var resitelDavid = "David", resitelJirka = "Jirka", resitelPavel = "Pavel", resitelKarel = "Karel";
  var ukoly = [
    { text: "napsat", resitel: "Jirka" },
    { text: "postavit", resitel: "Pavel" },
    { text: "složit", resitel: "Jirka" },
    { text: "vyřídit", resitel: "Pavel" },
    { text: "sundat", resitel: "Karel" },
    { text: "položit", resitel: "Pavel" },
    { text: "uvařit", resitel: "Karel" },
    { text: "ustlat", resitel: "Pavel" },
    { text: "sníst", resitel: "Karel" },
  ];

  console.log(ukoly.slice());
  console.log(resitelDavid + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelDavid; }).length);
  console.log(resitelKarel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelKarel; }).length);
  console.log(resitelPavel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelPavel; }).length);
  console.log(resitelJirka + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelJirka; }).length);

  ukoly.forEach(element => { document.write(element.text + " - " + element.resitel + " <br>"); });
  document.writeln(resitelDavid + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelDavid; }).length + " <br>");
  document.writeln(resitelKarel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelKarel; }).length + " <br>");
  document.writeln(resitelPavel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelPavel; }).length + " <br>");
  document.writeln(resitelJirka + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelJirka; }).length + " <br><br>");

  var noveUkoly = ukoly.filter(function (person) {
    return person.resitel === "Pavel" || person.resitel === "Jirka";   // filtruj Pavly a Jirky
  }).map(function (u) { u.resitel = resitelDavid; return u; });   // do všech jeho vlastností 'resitel' vlož Davida
  
  console.log(noveUkoly);
  console.log(resitelDavid + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelDavid; }).length);
  console.log(resitelKarel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelKarel; }).length);
  console.log(resitelJirka + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelJirka; }).length);
  console.log(resitelPavel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelPavel; }).length);

  noveUkoly.forEach(element => { document.write(element.text + " - " + element.resitel + " <br>"); });
  document.writeln(resitelDavid + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelDavid; }).length + " <br>");
  document.writeln(resitelKarel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelKarel; }).length + " <br>");
  document.writeln(resitelJirka + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelJirka; }).length + " <br>");
  document.writeln(resitelPavel + ": " + ukoly.filter(function (fn) { return fn.resitel == resitelPavel; }).length + " <br>");

  console.log();
}
