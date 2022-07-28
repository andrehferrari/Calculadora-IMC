const nome = document.querySelector('[txt-nome]');
const altura = document.querySelector('[txt-altura]');
const peso = document.querySelector('[txt-peso]');
const botao = document.querySelector('[btn-calcular]');
const resultado = document.querySelector('[txt-resultado]')

function calcularIMC(peso, altura) {
    peso = parseFloat(peso)
    altura = parseFloat(altura)
    var valorIMC;
    if(altura == '' || peso == '') return;
    valorIMC = peso / (altura**2);
    return valorIMC;
}

function calcularResultado(imc){
    if (imc <= 18,5) return 'Abaixo do peso';
    else if (imc > 18,5 && imc <= 24,9) return 'Peso normal';
    else if (imc > 25 && imc <= 29,9) return 'Sobrepeso';
    else if (imc > 30 && imc <= 34,9) return 'Obesidade grau 1';
    else if (imc > 35 && imc <= 39,9) return 'Obesidade grau 2';
    else if (imc >= 40) return 'Obesidade grau 2';
}

botao.addEventListener('click', () => {
    resultado.innerText = calcularResultado(calcularIMC(peso, altura));
    console.log(calcularIMC(peso,altura))
})