let opcao = parseInt(
    prompt(`===============================
    MENU DE CALCULADORAS
 ===============================
 
 Escolha uma opção:
 
 1 - Consumo mensal de eletrodoméstico
 2 - Conversor de unidades
 3 - Calculadora da Lei de Ohm
 
 ===============================
 (APERTE F12 IMPORTANTE!!!)
 Digite a opção desejada:`
     )
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
}
