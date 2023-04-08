let welcome = confirm("Olá, apresente dois números e terá os resultados de soma, subtração, multiplicação, divisão e o resto da divisão.")
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (sum % 2 == 0) {
    alert(`O número ${sum} é par`)
  } else {
    alert(`O número ${sum} é ímpar`)
  }
  
  if (n1 === n2) {
    alert(`Os números são iguais.`)
  } else {
    alert(`Os números são diferentes.`)
  }