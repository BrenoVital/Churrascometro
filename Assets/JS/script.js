// Regras do Algoritmo
// Carne - 400gr por pessoa -- acima de 06 horas 650gr
// Cerveja - 1200ml por pessoa -- acima de 06 horas 2000ml
// Refrigerante/agua - 1000ml por pessoa -- acima de 06 horas 1500ml
// Criança equivalente a 0,5 adulto

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  // let carne = carnePP(duracao)

  let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qntTotalCerveja = cervejaPP(duracao) * adultos;
  let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${qntTotalCarne/1000}kg de Carne</p>`
  resultado.innerHTML += `<p>${qntTotalCerveja}ml de Cervejas</p>`
  resultado.innerHTML += `<p>${qntTotalBebidas}ml de Bebidas</p>`
}

function carnePP(duracao){
  if(duracao >= 6){
    return 650;
  }
  else{
    return 400;
  }
}

function cervejaPP(duracao){
  if(duracao >= 6){
    return 2000;
  }
  else{
    return 1200;
  }
}

function bebidasPP(duracao){
  if(duracao >= 6){
    return 1500;
  }
  else{
    return 2000;
  }
}







