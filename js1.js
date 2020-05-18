// -- IF

function func_if() {
  //const cislo = window.prompt("Zadej věk:");
  document.writeln("Funkce: IF a SWITCH </br></br>");
  const cislo = 18;
  if (cislo >= 21) {
    document.writeln(cislo + ": Můžeš všecko (i v US)");
  }
  else if (cislo >= 18) {
    document.writeln(cislo + ": Můžeš dělat tamto a chlastat");
  }
  else if (cislo >= 15) {
    document.writeln(cislo + ": Můžeš dělat tamto");
  }
  else {
    document.writeln(cislo + ": Nemůžeš nic");
  }

  // -- SWITCH
  document.write('<br>');

  let kozy = ['1', '2', '3', '4'];
  let kozyChosen = kozy[3];

  switch (kozyChosen) {

    case "1": document.writeln("size " + kozyChosen + ": Třešně"); break;
    case "2": document.writeln("size " + kozyChosen + ": Citrony"); break;
    case "3": document.writeln("size " + kozyChosen + ": Pomeranče"); break;
    case "4": document.writeln("size " + kozyChosen + ": Melouny!!"); break;
    default: document.writeln("size " + kozyChosen + ": nevíš?!"); break;
  }
  document.writeln("<hr>");
}

// -- DO / WHILE
function func_cykly() {
  document.writeln("Cykly </br></br>");
  document.write('do: ');
  let n = 1;
  do {
    document.write("<b>" + n + " </b>");
    n++;
  } while (n <= 5);

  document.write('<br>while: ');
  while (n <= 10) {
    document.write("<i>" + n + " </i>");
    n++;
  }

  // -- FOR

  document.write('<br>for: ');
  for (let i = 10; i <= 15; i++) {
    // document.write("<code>" + i + " </code>");
    document.write(`<code> ${i} </code>`);
  }
  document.writeln("<hr>");
}

// -- pomocí cyklů a polí vygenerovat tabulku dní v týdnu
function tabulka() {
  document.write('vygenerovaná tab: podmínky</br></br>');
  const dny = ['po', 'út', 'st', 'čt', 'pá', 'so', 'ne'];
  var styl;
  document.write();

  document.write('<table>');
  for (let i = 0; i < dny.length; i++) {
    document.writeln(`<tr>`);
    (i < 5) ? styl = "" : styl = 'class="delBg"';
    document.writeln(`<td ${styl}>${i + 1}</td><td ${styl}>${dny[i]}</td>`);
    document.writeln(`</tr>`);
  }
  document.write("</table>");
  document.writeln("<hr>");
}

// -- při sudém B označ celý řádek
function tabulka2() {
  document.write('vygenerovaná tab 2: podmínky - celý řádek, vícenásobné styly (sudá, dělitelná 3, písmeno A):<br><br>');
  const char = ['A', 'B', 'C'];
  var tabulkaHere = document.getElementById('here');
  var trStyle, trStyles, rand, randChar;
  document.write('<table>');
  for (let i = 1; i < 10; i++) {
    rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    randChar = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    trStyle = "";
    if ((rand % 2 == 0)) trStyle += 'sudaRed ';
    if ((rand % 3 == 0)) trStyle += 'delBg ';
    if ((char[randChar] == 'A')) trStyle += 'znakBold ';
    if (trStyle == "") trStyle = 'noHighlight';

    trStyles = `class="${trStyle}"`;
    document.writeln(`<tr ${trStyles}>`);
    document.writeln(`<td>${rand}</td><td>${char[randChar]}</td><td>${trStyles}</td>`);
    document.writeln(`</tr>`);
  }
  document.write("</table>");
  document.writeln("<hr>");
}

// -- TODO: TAB3 při sudém B označ celý řádek, vypsat do DIVu, opakovat button.onClick

function obsah(polomer) {
  return Math.PI * Math.pow(polomer, 2);
}

function obsahFull() {
  var polomer = window.prompt("Zadej poloměr: ");
  document.write(obsah(polomer));
}

function obarvi(barva, text) {
  document.write(`<p><font color="${barva}">${text}</p>`);
};

function skok_seznam() {
  window.open("index.html", "_blank");
}

//  --

function napis() {
  // document.write("aa");
  soucet.tpole2.value = "form onclick() + RND";
  soucet.prvni.value = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  soucet.druhe.value = Math.floor(Math.random() * (10 - 1 + 1) + 1);
}

function secti() {
  soucet.suma.value = parseInt(soucet.prvni.value) + parseInt(soucet.druhe.value);
}

function randoms() {
  frmOperace.prvni.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  frmOperace.druhe.value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

function opPlus() {
  frmOperace.suma.value = parseInt(frmOperace.prvni.value) + parseInt(frmOperace.druhe.value);
}
function opMinus() {
  frmOperace.suma.value = parseInt(frmOperace.prvni.value) - parseInt(frmOperace.druhe.value);
}
function opKrat() {
  frmOperace.suma.value = parseInt(frmOperace.prvni.value) * parseInt(frmOperace.druhe.value);
}
function opDeleno() {
  frmOperace.suma.value = parseInt(frmOperace.prvni.value) / parseInt(frmOperace.druhe.value);
}