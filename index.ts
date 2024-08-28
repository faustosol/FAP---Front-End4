// Questão 01
// for: Utilizado quando o número de iterações é conhecido previamente. Estrutura típica: for (inicialização; condição; atualização) { ... }.
// while: Utilizado quando o número de iterações não é conhecido e depende de uma condição. Estrutura típica: while (condição) { ... }.

// Questão 02
// for: Ideal para situações em que você sabe exatamente quantas vezes um bloco de código precisa ser executado, como iterar sobre um array ou contar de 1 a 10.
// while: Melhor usado quando a quantidade de iterações não é conhecida e é baseada em uma condição que pode mudar dinamicamente.

// Questão 03
/*let i = 0;
while(i < 10){
    console.log("Testando uma frase!");
    i++;
}*/

// Questão 04
/*let i = 465484133;
while(i < 10){
    console.log(i);
    i /= 35;
}*/

// Questão 05
/*let i = 0;
do {
    console.log(i);
    i++;
}
while(i < 5);*/

// Questão 06
/*let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}*/

// Questão 07
/*let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}*/

// Questão 08
/*let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);*/

// Questão 09
/*let produto = 1;
let i = 1;
while (i <= 5) {
    produto *= i;
    i++;
}
console.log(produto);*/

// Questão 10
/*let i = 1;
while (i <= 10) {
    console.log(`9 x ${i} = ${9 * i}`);
    i++;
}*/

// Questão 11
/*const inputs = [5, 7, 3, 0]; // Simulação de entradas
let index = 0;

let max: number | null = null;
let min: number | null = null;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        if (max !== null && min !== null) {
            console.log(`Maior valor: ${max}`);
            console.log(`Menor valor: ${min}`);
        } else {
            console.log('Nenhum número válido foi digitado.');
        }
        break;
    } else {
        if (max === null || num > max) max = num;
        if (min === null || num < min) min = num;
    }
}*/

// Questão 12
/*const inputs = [10, 20, 30, -1]; // Simulação de entradas
let index = 0;

let sum = 0;
let count = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === -1) {
        if (count > 0) {
            console.log(`Média: ${sum / count}`);
        } else {
            console.log('Nenhum número válido foi digitado.');
        }
        break;
    } else {
        sum += num;
        count++;
    }
}*/

// Questão 13
/*const number = 123; // Número de entrada
let sum = 0;
let temp = number;

while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, 3);
    temp = Math.floor(temp / 10);
}

console.log(`Soma dos dígitos elevados ao cubo: ${sum}`);*/

// Questão 14
/*let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}*/

// Questão 15
/*let i = 3;
while (i <= 50) {
    console.log(i);
    i += 3;
}*/

// Questão 16
/*const grades = [6, 8, 7, 5, 9]; // Simulação de notas
let index = 0;
let approvedCount = 0;

while (index < grades.length) {
    const grade = grades[index++];
    if (grade >= 7) approvedCount++;
}

console.log(`Número de aprovados: ${approvedCount}`);*/

// Questão 17
/*const inputs = [2, 4, 6, 7, 0];
let index = 0;
let count = 0;
let firstOddFound = false;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        console.log(`Quantidade de números pares antes do primeiro ímpar: ${count}`);
        break;
    } else if (!firstOddFound) {
        if (num % 2 === 0) {
            count++;
        } else {
            firstOddFound = true;
        }
    }
}*/

// Questão 18
/*const inputs = [2, 3, 4, 5, 0];
let index = 0;
let evenCount = 0;
let oddCount = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        console.log(`Números pares: ${evenCount}`);
        console.log(`Números ímpares: ${oddCount}`);
        break;
    } else {
        if (num % 2 === 0) evenCount++;
        else oddCount++;
    }
}*/

// Questão 19
/*const inputs = [2, 3, 5, 6, 10, 0];
let index = 0;
let divisibleBy2 = 0;
let divisibleBy3 = 0;
let divisibleBy5 = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        console.log(`Divisíveis por 2: ${divisibleBy2}`);
        console.log(`Divisíveis por 3: ${divisibleBy3}`);
        console.log(`Divisíveis por 5: ${divisibleBy5}`);
        break;
    } else {
        if (num % 2 === 0) divisibleBy2++;
        if (num % 3 === 0) divisibleBy3++;
        if (num % 5 === 0) divisibleBy5++;
    }
}*/

// Questão 20
/*const inputs = [3, 6, 9, 10, 0]
let index = 0;
let sum = 0;
let count = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        if (count > 0) {
            console.log(`Média dos números divisíveis por 3: ${sum / count}`);
        } else {
            console.log('Nenhum número divisível por 3 foi digitado.');
        }
        break;
    } else if (num % 3 === 0) {
        sum += num;
        count++;
    }
}*/

// Questão 21
/*const inputs = [1000, 999, 2000, 0];
let index = 0;
let count = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        console.log(`Quantidade de números com mais de três dígitos: ${count}`);
        break;
    } else if (Math.abs(num) >= 1000) {
        count++;
    }
}*/

// Questão 22
/*const inputs = [45, 55, 75, 95, 0];
let index = 0;
let sum = 0;
let count = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        if (count > 0) {
            console.log(`Média dos números entre 50 e 100: ${sum / count}`);
        } else {
            console.log('Nenhum número válido foi digitado.');
        }
        break;
    } else if (num >= 50 && num <= 100) {
        sum += num;
        count++;
    }
}*/

// Questão 23
/*const inputs = [4, 7, 10, 3, 0];
let index = 0;
let minOdd: number | null = null;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        if (minOdd !== null) {
            console.log(`Menor valor positivo e ímpar: ${minOdd}`);
        } else {
            console.log('Nenhum número ímpar positivo foi digitado.');
        }
        break;
    } else if (num > 0 && num % 2 !== 0) {
        if (minOdd === null || num < minOdd) minOdd = num;
    }
}*/

// Questão 24
/*const inputs = [2, 4, 6, 9, 0];
let index = 0;
let firstNumber: number | null = null;
let lastNumber: number | null = null;
let evenCount = 0;
let oddCount = 0;

while (index < inputs.length) {
    const num = inputs[index++];
    if (num === 0) {
        if (firstNumber !== null && lastNumber !== null) {
            for (let i = firstNumber; i <= lastNumber; i++) {
                if (i % 2 === 0) evenCount++;
                else oddCount++;
            }
            console.log(`Quantidade de números pares: ${evenCount}`);
            console.log(`Quantidade de números ímpares: ${oddCount}`);
        } else {
            console.log('Não foi possível determinar o intervalo.');
        }
        break;
    } else {
        if (firstNumber === null) {
            firstNumber = num;
        }
        lastNumber = num;
    }
}*/