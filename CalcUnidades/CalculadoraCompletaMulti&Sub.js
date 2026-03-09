const prefixos = {
    G: 10 ** 9,
    M: 10 ** 6,
    k: 10 ** 3,
    base: 10 ** 0,
    mili: 10 ** -3,
    micro: 10 ** -6,
    nano: 10 ** -9,
};

let unidade = prompt(`Digite qual unidade voce deseja utilizar:
Corrente elétrica → A (Ampère)
Tensão elétrica → V (Volt)
Resistência elétrica → Ω (Ohm)
Potência elétrica → W (Watt)`);

let primeiroPrefixo = prompt(`Prefixo do VALOR DE ENTRADA
    (G) para giga
    (M) para Mega
    (k) para Quilo
    (base) Para um valor sem prefixo
    (mili) Para Mili
    (micro) Para Micro
    (nano) Para nano
    `);
let segundoPrefixo = prompt(`Prefixo para o QUAL DESEJA CONVERTER:
    (G) para giga
    (M) para Mega
    (k) para Quilo
    (base) Para um valor sem prefixo
    (mili) Para Mili
    (micro) Para Micro
    (nano) Para nano
    `);

let quantidade1 = parseFloat(prompt("Digite a quantidade que voce quer transformar : "));

let valorNaBase = quantidade1 * prefixos[primeiroPrefixo];
let resultadoFinal = valorNaBase / prefixos[segundoPrefixo];

if (segundoPrefixo == "base") {
    segundoPrefixo = "";
}
if (primeiroPrefixo == "base") {
    primeiroPrefixo = "";
}

alert(quantidade1 + primeiroPrefixo + unidade + ` Equivalem a : ` + resultadoFinal + " " + segundoPrefixo + unidade);
console.log(quantidade1 + primeiroPrefixo + unidade + ` Equivalem a : ` + resultadoFinal + " " + segundoPrefixo + unidade);
