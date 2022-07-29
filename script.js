const nome = document.querySelector('[txt-nome]');
const altura = document.querySelector('[txt-altura]');
const peso = document.querySelector('[txt-peso]');
const botaoCalcular = document.querySelector('[btn-calcular]');
const resultado = document.querySelector('[txt-resultado]')
const botaoLimpar = document.querySelector('[btn-limpar]')

// funcão que verifica os campos preenchidos
function validaCampos(){
    let nomeV = nome.value
    let alturaV = altura.value
    let pesoV = peso.value

    if(nomeV !== '' && alturaV !== '' && pesoV !== '') {
        return true;
    } else {
        return resultado.textContent = 'Preencha os campos !!';
    }
}

// Calculando o valor do IMC
function calcularIMC(peso, altura) {
    peso = parseFloat(peso)
    altura = parseFloat(altura)
    var valorIMC;
    if(altura == '' || peso == '') return;
    valorIMC = peso / (altura**2);
    return valorIMC;
}

// Calculando as categorias do IMC
function calcularResultado(imc){
    if (imc <= 18.5) return 'Abaixo do peso';
    else if (imc > 18.5 && imc <= 24.9) return 'Com peso normal';
    else if (imc > 25 && imc <= 29.9) return 'Com Sobrepeso';
    else if (imc > 30 && imc <= 34.9) return 'Com Obesidade grau 1';
    else if (imc > 35 && imc <= 39.9) return 'Com Obesidade grau 2';
    else if (imc >= 40) return 'Com Obesidade grau 3';
}

// Concatena o IMC e a Categoria, retornando o resultado
function calculoGeral(){

    if (validaCampos() == true){
    let resultadoIMC
    let resultadoGeral

    resultadoIMC = calcularIMC(
        peso.value, altura.value
     ).toFixed(2)
    resultadoGeral = calcularResultado(
        resultadoIMC
    )

    return resultado.innerText =  `${nome.value} seu IMC é ${resultadoIMC} e você está ${resultadoGeral}`
    }
}

botaoCalcular.addEventListener('click', () => {
    calculoGeral();
})

botaoLimpar.addEventListener('click', () => {
    resultado.innerText = ''
    nome.value = ''
    altura.value = ''
    peso.value = ''
})