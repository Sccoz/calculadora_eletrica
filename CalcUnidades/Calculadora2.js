const prefixo = "G" = 10**9 ; "M" = 10**6 ; "k"


let unidade = prompt(`Digite qual unidade voce deseja utilizar:
Corrente elétrica → A (Ampère)
Tensão elétrica → V (Volt)
Resistência elétrica → Ω (Ohm)
Potência elétrica → W (Watt)`)

let escolhaConversao = parseInt(prompt(`Qual o prefixo do 1 valor (Digite igal o que aparece em parenteses)
    (G) para giga`))



let quantidade = parseFloat(prompt(`Digite o valor da grandeza na unidade base para transformalo em mini :`))
let conversao = quantidade * 1000
alert(quantidade + ` ` + unidade + ` representam : ` + conversao + ` m` + unidade )
console.log(quantidade + ` ` + unidade + ` representam : ` + conversao + ` m` + unidade );