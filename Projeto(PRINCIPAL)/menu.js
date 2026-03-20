let opcao = parseInt(
    prompt(`===============================
    MENU DE CALCULADORAS
 ===============================
 
 Escolha uma opção:
 
 1 - Consumo mensal de eletrodoméstico
 2 - Conversor de unidades
 3 - Calculadora da Lei de Ohm
 4 - Lei de Ohm
 ===============================
 (APERTE F12 IMPORTANTE!!!)
 Digite a opção desejada:`)
);

switch (opcao) {
    case 1:
        CalcConsumo();
        break;
    case 2:
        ConversorUnidade();
        break;
    case 3:
        CalcResistendia();
        break;
    case 4:
        LeiOhm();
        break;
    default:
        alert("Voce escolheu uma opcao invalida!!\nTente novamente.");
        break;
}
