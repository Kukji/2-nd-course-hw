//1(2Домашка)
let password = 'пароль'

let checkpassword = prompt('Введите пароль')

if (password === checkpassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

//2(2Домашка)
let c = Number(2)

if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//3(2Домашка)
let d = Number(10)
let e = Number(11)

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//4(2Домашка)
let a = Number(2)
let b = Number(3)
console.log(a + b)
//5(2Домашка)
let monthNumber = String(prompt('Введите число месяца'))

switch (monthNumber) {
    case '1':
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
    case '10':
        console.log('Октябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;
    default:
        console.log('Таких месяцев не существует');
        break;
}