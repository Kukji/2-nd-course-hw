function GameMonth(params) {

    let Motnh = Number(prompt('Введите порядковый номер месяца'))

    if (Motnh >= 1 && Motnh <= 2 || Motnh === 12) {
        alert('Зима')
    }
    if (Motnh >= 3 && Motnh <= 5) {
        alert('Весна')
    }
    if (Motnh >= 6 && Motnh <= 8) {
        alert('Лето')
    }
    if (Motnh >= 9 && Motnh <= 11) {
        alert('Осень')
    }
    else {
        alert('Досвидания!')
    }
}

//1 Задание

function BigNumbers(a, b) {
    if (a > b) {
        return b
    }
    else {
        return a
    }
}

console.log(BigNumbers(6, 1))

//2 

function paprity(n) {

    if (n % 2 == 0) {
        alert('Число чётное')
    } else {
        alert('Число нечётное')
    }
}

paprity()

//3.1

function sqrt() {
    let NumFi = Number(prompt('Введите число'))
    return NumFi ** 2
}

console.log(NumFi);


//3.2
function sqrt() {
    let Num = Number(prompt('Введите число'))
    return Num ** 2
}

alert(sqrt())

//4
"use strict";
let age = prompt("Сколько Вам лет?");

let printMessage;
if (age < 0) {
    printMessage = function () {
        console.log('Вы ввели неправильное значение');;
    }
}
if (age < 12 && age > 0) {

    printMessage = function () {
        console.log("Привет, друг!");
    }

} else if (age >= 13) {

    printMessage = function () {
        console.log("Добро пожаловать!");
    }

}

printMessage();

//5

function checkNumber(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return alert(a * b);
    } else {
        console.log("Одно или оба значения не являются числом");
    }
}

checkNumber()

//6

function UserSqrt() {
    let n = Number(prompt('Введите число'))

    if (n) {
        let cube = n ** 3
        return console.log(`${n} в кубе равняется ${cube}`);
    } else {
        return console.log('Переданный параметр не является числом');
    }

}
UserSqrt()